import {  Field, ErrorMessage } from "formik"
import React from "react"
    const resto = () => (
      <>
      <Field as="select" name="cuisineType" className="p-2 rounded border">
      <option value="">Select Cuisine Type</option>
      <option value="Italian">Italian</option>
      <option value="French">French</option>
     <option value="Indian">Indian</option>
      <option value="Japanese">Japanese</option>
      <option value="Vegetarian">Vegetarian</option>
      <option value="Other">Other</option>
    </Field>
    <ErrorMessage name="starRating" component="div" className="text-red-500" />
    <Field as="select" name="starRating" className="p-2 rounded border">
      <option value="">Select Stars</option>
      <option value="0">0</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    
    </Field>
    <ErrorMessage name="cuisineAveragePrice" component="div" className="text-red-500" />
    <Field as="select" name="cuisineAveragePrice" className="p-2 rounded border">
      <option value="">Select Average Price</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </Field>
    </>
 )


 export default resto
