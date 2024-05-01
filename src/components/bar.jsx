import {  Field, ErrorMessage } from "formik"
import React from "react"

    const bar = () => (
        <>
        <Field as="select" name="barType" className="p-2 rounded border">
          <option value="">Select Bar Type</option>
           <option value="Pub">Pub</option>
           <option value="wine Bar">Wine Bar</option>
           <option value="Cocktail Bar">Cocktail Bar</option>
           <option value="Beer Bar">Beer Bar</option>
           <option value="Juice Bar">Juice Bar</option>
           <option value="Other">Other</option>
            </Field>
            <ErrorMessage name="barType" component="div" className="text-red-500" />
           
    <Field as="select" name=" barAveragePrice" className="p-2 rounded border">
      <option value="">Select Average Price</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </Field>
    <ErrorMessage name=" barAveragePrice" component="div" className="text-red-500" />
           </>
 )
 export default bar
