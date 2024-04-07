import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { useRouter } from 'next/router'
 

export const getServerSideProps = async ({ params: { addressId } }) => {
    const { data: address } = await axios(
      `http://localhost:3000/api/addresses/${addressId}`,
    )
  
    return {
      props: { address },
    }
  }

  const initialValues = {
    name: '',
    street: '',
    city: '',
    country: '',
    postalCode: '',
    type: '', // Initialize with an empty string or a default type if applicable
    artMovement: '', // Only relevant for certain types, e.g., "Musée"
    artType: '', // Only relevant for certain types, e.g., "Musée"
    freeOrPaid: '', // Consider if you want a default state such as "Free" or "Paid", or keep it empty for user selection
    price: ''
  };
// Définition des types de lieu
const placeTypes = {
  restaurant: 'Restaurant',
  musee: 'Musée',
  bar: 'Bar',
  parc: 'Parc'
};

const Edit = ({address}) => {
  const router = useRouter()
  const handleSubmit = async (datas) => {
    const { _id, ...otherProps} = datas
    await axios.patch(`/api/addresses/${_id}`, { ...otherProps })
    router.push(`/addresses/${_id}`)
  }
  const [activeType, setActiveType] = useState(null);

 
  const handledelete = async () => {
    await axios.delete(`/api/addresses/${address._id}`)
    router.push('/')
  }

  // Schéma de validation
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    address: Yup.string().required('Address is required'),
    city: Yup.string().required('City is required'),
    postalCode: Yup.string().required('Postal Code is required'),
    country: Yup.string().required('Country is required'),
  });

  // Champs dynamiques en fonction du type actif
  const renderDynamicFields = (type) => {
    switch (type) {
      case 'restaurant':
        return (
          <>
            {/* Champs spécifiques aux restaurants */}
          </>
        );
      case 'musee':
        return (
          <>
             <Field as="select" name="artisticMovement" className="mt-1 block w-full">
              <option value="">Select Artistic Movement</option>
            </Field>
            <ErrorMessage name="artisticMovement" component="div" className="text-red-500" />
            <Field as="select" name="typeOfArt" className="mt-1 block w-full">
              <option value="">Select Type of Art</option>
              <option value="peinture">Painting</option>
              <option value="sculpture">Sculpture</option>
              <option value="photographie">Photography</option>
              <option value="dessin">Drawing</option>
              <option value="autre">Other</option>
            </Field>
            <ErrorMessage name="typeOfArt" component="div" className="text-red-500" />
            <Field as="select" name="freeOrPaid" className="mt-1 block w-full">
              <option value="">Select Free or Paid</option>
              <option value="gratuit">Free</option>
              <option value="payant">Paid</option>
            </Field>
            <ErrorMessage name="freeOrPaid" component="div" className="text-red-500" /> 

          </>
        );
      case 'bar':
        return (
          <>
            {/* Champs spécifiques aux bars */}
          </>
        );
      case 'parc':
        return (
          <>
            {/* Champs spécifiques aux parcs */}
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="bg-white shadow rounded-lg">
        <nav className="flex justify-between p-4 border-b">
          <h1 className="text-xl font-semibold">Modify Place</h1>
        </nav>
        <div className="p-8">
          <h1 className="text-xl font-semibold mb-4">{address.name}</h1>
          <div className="flex gap-4 mb-8">
            {Object.keys(placeTypes).map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setActiveType(type)}
                className={`px-4 py-2 rounded text-white ${activeType === type ? 'bg-indigo-500' : 'bg-indigo-300'}`}
              >
                {placeTypes[type]}
              </button>
            ))}
          </div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {() => (
              <Form className="flex flex-col space-y-4">
                {/* Champs de l'adresse */}
                <Field type="text" name="name" className="p-2 rounded border" />
                <ErrorMessage name="name" component="div" className="text-red-500" />

                <Field type="text" name="address" className="p-2 rounded border" />
                <ErrorMessage name="address" component="div" className="text-red-500" />

                <Field type="text" name="city" className="p-2 rounded border" />
                <ErrorMessage name="city" component="div" className="text-red-500" />

                <Field type="text" name="postalCode" className="p-2 rounded border" />
                <ErrorMessage name="postalCode" component="div" className="text-red-500" />

                <Field type="text" name="country" className="p-2 rounded border" />
                <ErrorMessage name="country" component="div" className="text-red-500" />

                {/* Champs dynamiques */}
                {activeType && renderDynamicFields(activeType)}

              
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Edit;
