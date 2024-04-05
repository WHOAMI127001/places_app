import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const placeTypes = {
  restaurant: 'Restaurant',
  musee: 'Musée',
  bar: 'Bar',
  parc: 'Parc',
};

// Initial Form Values
const initialValues = {
  name: '',
  address: '',
  city: '',
  postalCode: '',
  country: '',
  cuisineType: '',
  stars: '',
  averagePrice: '',
  artisticMovement: '',
  typeOfArt: '',
  freeOrPaid: '',
  price: '',
  barType: '',
  parkType: '',
  publicOrPrivate: '',
};

// Validation Schema
const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  address: Yup.string().required('Required'),
  city: Yup.string().required('Required'),
  postalCode: Yup.string().required('Required'),
  country: Yup.string().required('Required'),
  
});

// Main Component
const add_address_places = () => {
  const [activeType, setActiveType] = useState(null);

  // Submission Handler
  const handleSubmit = (values) => {
    console.log(values);
  };

  // Dynamic Fields Based on Active Type
  const renderDynamicFields = (type) => {
    switch (type) {
      case 'restaurant':
        return (<>
         <Field as="select" name="cuisineType" className="mt-1 block w-full">
            {/* Add your options here */}
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
          <ErrorMessage name="cuisineType" component="div" className="text-red-500" />
          <Field as="select" name="stars" className="mt-1 block w-full">
            <option value="">Select Stars</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Field>
          <ErrorMessage name="stars" component="div" className="text-red-500" />
          <Field as="select" name="averagePrice" className="mt-1 block w-full">
            <option value="">Select Average Price</option>
            <option value="€">€</option>
            <option value="€€">€€</option>
            <option value="€€€">€€€</option>
</Field>
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
       <Field as="select" name="barType" className="mt-1 block w-full">
          <ErrorMessage name="barType" component="div" className="text-red-500" />
         <option value="">Select Bar Type</option>
          <option value="pub">Pub</option>
          <option value="bar à vin">Wine Bar</option>
          <option value="bar à cocktail">Cocktail Bar</option>
          <option value="bar à bière">Beer Bar</option>
          <option value="bar à jus">Juice Bar</option>
          <option value="autre">Other</option>
           </Field>
            {/* Bar Specific Fields */}
          </>
        );
      case 'parc':
        return (
          <>
          <Field as="select" name="parkType" className="mt-1 block w-full">
    <option value="">Select Park Type</option>
    <option value="national">National</option>
    <option value="régional">Regional</option>
    <option value="urbain">Urban</option>
    <option value="forestier">Forest</option>
    <option value="botanique">Botanical</option>
    <option value="zoologique">Zoological</option>
    <option value="aquatique">Aquatic</option>
    <option value="d'attraction">Amusement</option>
    <option value="enfant">Enfant</option>
  </Field>
  <ErrorMessage name="parkType" component="div" className="text-red-500" />
   <Field as="select" name="publicOrPrivate" className="mt-1 block w-full">
    <option value="">Select Public or Private</option>
    <option value="public">Public</option>
    <option value="privé">Private</option>
  </Field>
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
          <h1 className="text-xl font-semibold">Add Place</h1>
        </nav>
        <div className="p-8">
          <h1 className="text-xl font-semibold mb-4">Form</h1>
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
                 <Field type="text" name="name" placeholder="Establishment Name" className="mt-1 block w-full p-2 rounded border" />
            <ErrorMessage name="name" component="div" className="text-red-500" />
                
                <Field type="text" name="Address" placeholder="Address" className="p-2 rounded border" />
                <ErrorMessage name="name" component="div" className="text-red-500" />

                
                <Field type="text" name="postal code" placeholder="Postal Code" className="p-2 rounded border" />
                <ErrorMessage name="name" component="div" className="text-red-500" />
                <Field type="text" name="country" placeholder="Country" className="p-2 rounded border" />
                <ErrorMessage name="name" component="div" className="text-red-500" />
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
  );
};

export default add_address_places;
