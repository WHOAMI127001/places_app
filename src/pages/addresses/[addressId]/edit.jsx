/* eslint-disable max-lines */
import React  from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import axios from "axios"
import { useRouter } from "next/router"
import { Button } from "@/components/Button"
 
export const getServerSideProps = async ({ params: { addressId } }) => {
    const { data: address } = await axios(
      `http://localhost:3000/api/addresses/${addressId}`,
    )
  
    return {
      props: { address },
    }
  }
// eslint-disable-next-line max-lines-per-function
// eslint-disable-next-line max-lines-per-function
const Edit = ({address}) => {
  const router = useRouter()
  const handleSubmit = async (datas) => {
    const {_id, ...otherProps} = datas
    await axios.patch(`/api/addresses/${_id}`, { ...otherProps })
    
    router.push(`/addresses/${_id}`)
  }
     const handledelete = async () => {
    await axios.delete(`/api/addresses/${address._id}`)
    router.push("/")
  }
  // eslint-disable-next-line max-lines-per-function
  const renderDynamicFields = () => {
    switch (address.type) {
      case "Restaurant":
        return (<>
          <Field as="select" name="cuisineType" className="p-2 rounded border">
          <option value="">Select Cuisine Type</option>
            <option value="Italian">Italian</option>
            <option value="French">French</option>
            <option value="Chinese">Chinese</option>
            <option value="Indian">Indian</option>
            <option value="Japanese">Japanese</option>
            <option value="Mexican">Mexican</option>
            <option value="Vegetarian">Vegetarian</option>
            <option value="Other">Other</option>
           </Field>
           <ErrorMessage name="starRating" component="div" className="text-red-500" />
           <Field as="select" name="stars" className="p-2 rounded border">
             <option value="">Select Stars</option>
             <option value="1">1</option>
             <option value="2">2</option>
             <option value="3">3</option>
           
           </Field>
           <ErrorMessage name="cuisineAveragePrice" component="div" className="text-red-500" />
           <Field as="select" name="cuisineAveragePrice" className="p-2 rounded border">
             <option value="">Select Average Price</option>
             <option value="€">€</option>
             <option value="€€">€€</option>
             <option value="€€€">€€€</option>
 </Field>
           </>
           )

      case "Musée":
        return (
          <>
             <Field as="select" name="artisticMovement" className="mt-1 block w-full">
             <option value="">Select Artistic Movement</option>
              <option value="Renaissance">Renaissance</option>
              <option value="Baroque">Baroque</option>
              <option value="Surréalism">Surréalism</option>
              <option value="Cubism">Cubism</option>
              <option value="Impressionism">Impressionism</option>
              <option value="Romanticism">Romanticism</option>
            </Field>
            <ErrorMessage name="artMovement" component="div" className="text-red-500" />
            <Field as="select" name="artType" className="mt-1 block w-full">
              <option value="">Select Type of Art</option>
              <option value="">Select Type of Art</option>
              <option value="Painting">Painting</option>
              <option value="Sculpture">Sculpture</option>
              <option value="Photography">Photography</option>
              <option value="Drawing">Drawing</option>
              <option value="Other">Other</option>
            </Field>
            <ErrorMessage name="ArtType" component="div" className="text-red-500" />
            <Field as="select" name="freeOrPaid" className="mt-1 block w-full">
              <option value="">Select Free or Paid</option>
              <option value="Free">Free</option>
              <option value="Paid">Paid</option>
            </Field>
            <ErrorMessage name="freeOrPaid" component="div" className="text-red-500" /> 

          </>
        )

      case "Bar":
        return (
          <>
          <Field as="select" name="barType" className="p-2 rounded border">
             <ErrorMessage name="barType" component="div" className="text-red-500" />
             <option value="">Select Bar Type</option>
          <option value="Pub">Pub</option>
          <option value="wine Bar">Wine Bar</option>
          <option value="Cocktail Bar">Cocktail Bar</option>
          <option value="Beer Bar">Beer Bar</option>
          <option value="Juice Bar">Juice Bar</option>
          <option value="Other">Other</option>
              </Field>
               
             </>
        )

      case "Parc":
        return (
          <>
          <Field as="select" name="parkType" className="p-2 rounded border">
          <option value="">Select Parc Type</option>
    <option value="National">National</option>
    <option value="Regional">Regional</option>
    <option value="Urban">Urban</option>
    <option value="Forest">Forest</option>
    <option value="Botanical">Botanical</option>
    <option value="Zoological">Zoological</option>
    <option value="Aquatic">Aquatic</option>
    <option value="Amusement">Amusement</option>
    <option value="Children">Children</option>
  </Field>
  <ErrorMessage name="parkType" component="div" className="text-red-500" />
   <Field as="select" name="publicOrPrivate" className="p-2 rounded border">
    <option value="">Select Public or Private</option>
    <option value="Public">Public</option>
    <option value="Private">Private</option>
  </Field>
</>
        )

      default:
 return null
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="bg-white shadow rounded-lg">
        <nav className="flex justify-between p-4 border-b">
          <h1 className="text-xl font-semibold">Modify Place</h1>
        </nav>
        <div className="p-8">
          <h1 className="text-xl font-semibold mb-4">{address.name}</h1>
          <div className="flex gap-4 mb-8">
            
          </div>
   
          <Formik
            initialValues={
              address
              }
            onSubmit={ handleSubmit}

          >
            {() => (
              <Form className="flex flex-col space-y-4">
                <Field type="text" name="name" className="p-2 rounded border" />
                <ErrorMessage name="name" component="div" className="text-red-500" />

                <Field type="text" name="street" className="p-2 rounded border" />
                <ErrorMessage name="street" component="div" className="text-red-500" />

                <Field type="text" name="city" className="p-2 rounded border" />
                <ErrorMessage name="city" component="div" className="text-red-500" />

                <Field type="text" name="postalCode" className="p-2 rounded border" />
                <ErrorMessage name="postalCode" component="div" className="text-red-500" />

                <Field type="text" name="country" className="p-2 rounded border" />
                <ErrorMessage name="country" component="div" className="text-red-500" />

              {renderDynamicFields()}

              <Button  type="submit">Submit</Button>

      <Button  onClick={handledelete} >Delete</Button>
  
       </Form>
            )}
</Formik>
        </div>
      </div>
    </div>
  )
}
export default Edit
