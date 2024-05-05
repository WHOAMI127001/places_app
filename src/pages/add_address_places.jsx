/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import axios from "axios"
import {useRouter}  from "next/router"
import Resto from "@/components/resto"
import Bar from "@/components/Bar"
import Park from "@/components/park"
import Museum from "@/components/museum"


const placeTypes = {
  Restaurant: "Restaurant",
  Musée: "Musée",
  Bar: "Bar",
  Parc: "Parc",
}
const initialValues = {
  name: "",
    street: "",
    city: "",
    postalCode: "",
    country: ""
}
const validationSchema = Yup.object({
  name: Yup.string().required("Name Required"),
  street: Yup.string().required("Address Required"),
  city: Yup.string().required("City Required"),
  postalCode: Yup.number().required("Postal Code Required"),
  country: Yup.string().required("Country Required"),
})
// eslint-disable-next-line max-lines-per-function
const addAddressPlaces = (props) => {
  const { addresses: initialAddresses } = props
  const [activeType, setActiveType] = useState(null)
  const [addresses, setAddresses] = useState(initialAddresses)
  const router = useRouter()
  const submit = async ({
  name,
  street,
  city,
  country,
  postalCode,
  
    ...otherProps
   
}, { resetForm,}) => {
    const { data: newAddress } = 
    await axios.post("http://localhost:3000/api/addresses",{
      name,
      street,
      city,
      country,
      postalCode,
     type: activeType,
    

      ...otherProps
      })
    setAddresses([newAddress, ...addresses])
    resetForm()
    
    router.push("/")
}
// eslint-disable-next-line max-lines-per-function
const renderDynamicFields = (type) => {
    switch (type) {
      case "Restaurant":
        return <Resto/>
    
        case "Musée":
        return  <Museum/>

   case "Bar":
        return  <Bar/>

      case "Parc":
        return  <Park/>
    
default:
        return null
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
      onClick={() => setActiveType(type)}
      className={`flex-auto px-4 py-2 rounded text-white ${activeType === type ? "bg-indigo-500" : "bg-indigo-300"}`}
      style={{ minWidth: "calc(15% - 8px)" }}
    >
      {placeTypes[type]}
    </button>
  ))}
</div>
<Formik
  validationSchema={validationSchema}
  onSubmit={submit}
  initialValues={initialValues}
>
  {() => (
    <Form className="flex flex-col space-y-4">
      <Field type="text" name="name" placeholder="Establishment Name" className="mt-1 block w-full p-2 rounded border" />
      <ErrorMessage name="name" component="div" className="text-red-500" />

      <Field type="text" name="street" placeholder="Street" className="p-2 rounded border" />
      <ErrorMessage name="street" component="div" className="text-red-500" />

      <Field type="text" name="city" placeholder="City" className="p-2 rounded border" />
      <ErrorMessage name="city" component="div" className="text-red-500" />

      <Field type="text" name="postalCode" placeholder="Postal Code" className="p-2 rounded border" />
      <ErrorMessage name="postalCode" component="div" className="text-red-500" />

      <Field type="text" name="country" placeholder="Country" className="p-2 rounded border" />
      <ErrorMessage name="country" component="div" className="text-red-500" />

      {activeType && renderDynamicFields(activeType)}

      <button type="submit" className="bg-indigo-500 text-white p-2 rounded hover:bg-indigo-600">
        Add {activeType ? placeTypes[activeType] : "Place"}
      </button>
    </Form>
  )}
</Formik>
     
        </div>
      </div>
    </div>
  )
}
export default addAddressPlaces
