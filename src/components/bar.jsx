import {  Field, ErrorMessage } from "formik"
import React from "react"

    const bar = () => (
    <div> 
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
</div>
 )
 export default bar
