import React, { useState } from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import axios from "axios"
import { useRouter } from "next/router"



const placeTypes = {
  restaurant: "Restaurant",
  musee: "Musée",
  bar: "Bar",
  parc: "Parc",
}
const initialValues = {
  name: "",
  address: "",
  city: "",
  postalCode: "",
  country: "",
  cuisineType: "",
  stars: "",
  averagePrice: "",
  artisticMovement: "",
  typeOfArt: "",
  freeOrPaid: "",
  price: "",
  barType: "",
  parkType: "",
  publicOrPrivate: "",
};
const validationSchema = Yup.object({
  name: Yup.string().required("Name Required"),
  address: Yup.string().required("Address Required"),
  city: Yup.string().required("City Required"),
  postalCode: Yup.string().required("Postal Code Required"),
  country: Yup.string().required("Country Required"),
  
})
// eslint-disable-next-line max-lines-per-function
const add_address_places = (props) => {
  const { addresses: initialAddresses } = props
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [activeType, setActiveType] = useState(null)
 const [addresses, setAddresses] = useState(initialAddresses)
 const submit = async ({  name,
    street,
    city,
    postalCode,
    country, ...otherProps }, { resetForm }) => {
    const { data: newAddress } = await axios.post("/api/addresses", {
      name,
      street,
      city,
      postalCode,
      country,
      type: activeType,
      ...otherProps,
    })
    setAddresses([newAddress, ...addresses])
    resetForm()
  }
const renderDynamicFields = (type) => {
    switch (type) {
      case 'restaurant':
        return (<>
         <Field as="select" name="cuisineType" className="p-2 rounded border">
            <option value="">Select Cuisine Type</option>
            <option value="italien">Italian</option>
            <option value="français">French</option>
            <option value="chinois">Chinese</option>
            <option value="indien">Indian</option>
            <option value="japonais">Japanese</option>
            <option value="mexicain">Mexican</option>
            <option value="thai">Thai</option>
            <option value="végétarien">Vegetarian</option>
            <option value="autre">Other</option>
          </Field>
          <ErrorMessage name="stars" component="div" className="text-red-500" />
          <Field as="select" name="stars" className="p-2 rounded border">
            <option value="">Select Stars</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          
          </Field>
          <ErrorMessage name="averagePrice" component="div" className="text-red-500" />
          <Field as="select" name="averagePrice" className="p-2 rounded border">
            <option value="">Select Average Price</option>
            <option value="€">€</option>
            <option value="€€">€€</option>
            <option value="€€€">€€€</option>
</Field>
          </>
          )
      case "musee":
        return (
          <>
         <Field as="select" name="artMovement" className="p-2 rounded border">
              <option value="">Select Artistic Movement</option>
            </Field>
            <ErrorMessage name="artMovement" component="div" className="text-red-500" />
            <Field as="select" name="artType" className="p-2 rounded border">
              <option value="">Select Type of Art</option>
              <option value="peinture">Painting</option>
              <option value="sculpture">Sculpture</option>
              <option value="photographie">Photography</option>
              <option value="dessin">Drawing</option>
              <option value="autre">Other</option>
            </Field>
            <ErrorMessage name="artType" component="div" className="text-red-500" />
            <Field as="select" name="freeOrPaid" className="p-2 rounded border">
              <option value="">Select Free or Paid</option>
              <option value="gratuit">Free</option>
              <option value="payant">Paid</option>
            </Field>
            <ErrorMessage name="freeOrPaid" component="div" className="text-red-500" />
          </>
        )
      case 'bar':
        return (
          <>
       <Field as="select" name="barType" className="p-2 rounded border">
          <ErrorMessage name="barType" component="div" className="text-red-500" />
         <option value="">Select Bar Type</option>
          <option value="pub">Pub</option>
          <option value="bar à vin">Wine Bar</option>
          <option value="bar à cocktail">Cocktail Bar</option>
          <option value="bar à bière">Beer Bar</option>
          <option value="bar à jus">Juice Bar</option>
          <option value="autre">Other</option>
           </Field>
          </>
        )
      case 'parc':
        return (
          <>
          <Field as="select" name="parkType" className="p-2 rounded border">
    <option value="">Select Park Type</option>
    <option value="national">National</option>
    <option value="régional">Regional</option>
    <option value="urbain">Urban</option>
    <option value="forestier">Forest</option>
    <option value="botanique">Botanical</option>
    <option value="zoologique">Zoological</option>
    <option value="aquatique">Aquatic</option>
    <option value="d'attraction">Amusement</option>
    <option value="enfant">Children</option>
  </Field>
  <ErrorMessage name="parkType" component="div" className="text-red-500" />
   <Field as="select" name="publicOrPrivate" className="p-2 rounded border">
    <option value="">Select Public or Private</option>
    <option value="public">Public</option>
    <option value="privé">Private</option>
  </Field>
</>

)
      default:
        return null;
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="bg-white shadow rounded-lg">
        <nav className="flex justify-between p-4 border-b">
          <h1 className="text-xl font-semibold">Add Place</h1>
        </nav>
        <div className="p-8">
          <h1 className="text-xl font-semibold mb-4">Add Places</h1>
          <div className="flex flex-wrap justify-start text-xs md:text-sm lg:text-base gap-4 mb-8">
  {Object.keys(placeTypes).map((type) => (
    <button
      key={type}
      type="button"
      onClick={() => setActiveType(type)}
      className={`flex-auto px-4 py-2 rounded text-white ${activeType === type ? 'bg-indigo-500' : 'bg-indigo-300'}`}
      style={{ minWidth: 'calc(15% - 8px)' }}
    >
      {placeTypes[type]}
    </button>
  ))}
</div>

      <Formik
      initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={submit}
          >
            {() => (
              <Form className="flex flex-col space-y-4">
                 <Field type="text" name="name" placeholder="Establishment Name" className="mt-1 block w-full p-2 rounded border" />
                <ErrorMessage name="name" component="div" className="text-red-500" />
                
                <Field type="text" name="address" placeholder="Address" className="p-2 rounded border" />
                <ErrorMessage name="address" component="div" className="text-red-500" />

                <Field type="text" name="city" placeholder="City" className="p-2 rounded border" />
                <ErrorMessage name="city" component="div" className="text-red-500" />
                
                <Field type="text" name="postalCode" placeholder="Postal Code" className="p-2 rounded border" />
                <ErrorMessage name="postalCode" component="div" className="text-red-500" />

                <Field type="text" name="country" placeholder="Country" className="p-2 rounded border" />
                <ErrorMessage name="country" component="div" className="text-red-500" />
     {activeType && renderDynamicFields(activeType)}
                
                <button type="submit" className="bg-indigo-500 text-white p-2 rounded hover:bg-indigo-600">
                  Add {activeType ? placeTypes[activeType] : 'Place'}
                </button>

            
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  )
}

export default add_address_places
