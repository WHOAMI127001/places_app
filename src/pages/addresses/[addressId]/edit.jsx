/* eslint-disable max-lines */

import React  from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
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
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    address: Yup.string().required("Address is required"),
    city: Yup.string().required("City is required"),
    postalCode: Yup.string().required("Postal Code is required"),
    country: Yup.string().required("Country is required"),
  })
  // eslint-disable-next-line max-lines-per-function
  const renderDynamicFields = () => {
    switch (address.type) {
      case "restaurant":
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
           <ErrorMessage name="starRating" component="div" className="text-red-500" />
           <Field as="select" name="stars" className="p-2 rounded border">
             <option value="">Select Stars</option>
             <option value="1">1</option>
             <option value="2">2</option>
             <option value="3">3</option>
           
           </Field>
           <ErrorMessage name="CuisineAveragePrice" component="div" className="text-red-500" />
           <Field as="select" name="CuisineAveragePrice" className="p-2 rounded border">
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
             <Field as="select" name="artisticMovement" className="mt-1 block w-full">
              <option value="">Select Artistic Movement</option>
            </Field>
            <ErrorMessage name="artMovement" component="div" className="text-red-500" />
            <Field as="select" name="artType" className="mt-1 block w-full">
              <option value="">Select Type of Art</option>
              <option value="peinture">Painting</option>
              <option value="sculpture">Sculpture</option>
              <option value="photographie">Photography</option>
              <option value="dessin">Drawing</option>
              <option value="autre">Other</option>
            </Field>
            <ErrorMessage name="ArtType" component="div" className="text-red-500" />
            <Field as="select" name="freeOrPaid" className="mt-1 block w-full">
              <option value="">Select Free or Paid</option>
              <option value="gratuit">Free</option>
              <option value="payant">Paid</option>
            </Field>
            <ErrorMessage name="freeOrPaid" component="div" className="text-red-500" /> 

          </>
        )

      case "bar":
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

      case "parc":
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
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
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

                {/* Champs dynamiques */}
                {renderDynamicFields}

    <Button type="submit" >Edit places 
    
    </Button>

      
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
