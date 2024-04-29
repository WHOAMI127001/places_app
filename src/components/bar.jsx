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
           </>
 )
 export default bar
