/* eslint-disable eol-last */
/* eslint-disable quotes */
import { createRoute } from "@/api/createRoute"
import { AddressModel } from "@/database/models/AddressModel"

const handler = createRoute(async (req, res) => {
  const { addresseId } = req.query
  const address = await AddressModel.findById(addresseId)

  if (!address) {
    res.status(404).send({ error: "not found" })

    return
  }

  // GET /address/[addressId] -> get resource item
  if (req.method === "GET") {
    res.send(address)

    return
  }

  // PATCH /address/[addressId] -> update resource item
  if (req.method === "PATCH") {
    const { name, street, city, postalCode, type, averagePrice, price, freeOrPaid, starRating, cuisineType, artMovement, artType, parcType, publicOrPrivate, barType, isDone } = req.body

    Object.assign(address, {
      name: name || address.name,
      street: street || address.street,
      city: city || address.city,
      postalCode: postalCode || address.postalCode,
      type: type || address.type,
      averagePrice: averagePrice || address.averagePrice,
      price: price || address.price,
      freeOrPaid: freeOrPaid ?? address.freeOrPaid,
      starRating: starRating || address.starRating,
      cuisineType: cuisineType || address.cuisineType,
      artMovement: artMovement || address.artMovement,
      artType: artType || address.artType,
      parcType: parcType || address.parcType,
      publicOrPrivate: publicOrPrivate || address.publicOrPrivate,
      barType: barType || address.barType,
      isDone: isDone ?? address.isDone
    })

    await address.save()

    res.send(address)

    return
  }

  // DELETE /address/[addressId] -> delete resource item
  if (req.method === "DELETE") {
    await address.deleteOne()

    res.send(address)
  }
})

export default handler