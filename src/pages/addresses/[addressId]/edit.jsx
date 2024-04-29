/* eslint-disable max-lines */
import React  from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import axios from "axios"
import { useRouter } from "next/router"
import { Button } from "@/components/Button"
import Resto from "@/components/resto"
import Bar from "@/components/Bar"
import Park from "@/components/park"
import Museum from "@/components/museum"
 
export const getServerSideProps = async ({ params: { addressId } }) => {
    const { data: address } = await axios(
      `http://localhost:3000/api/addresses/${addressId}`,
    )
  
    return {
      props: { address },
    }
  }
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
