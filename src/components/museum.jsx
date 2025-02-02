import {  Field, ErrorMessage } from "formik"
import React from "react"
    const museum = () => (
      <>
      <Field as="select" name="artMovement" className="p-2 rounded border">
           <option value="">Select Artistic Movement</option>
           <option value="Renaissance">Renaissance</option>
           <option value="Baroque">Baroque</option>
           <option value="Surréalism">Surréalism</option>
           <option value="Cubism">Cubism</option>
           <option value="Impressionism">Impressionism</option>
           <option value="Romanticism">Romanticism</option>
         </Field>
         <ErrorMessage name="artMovement" component="div" className="text-red-500" />
         <Field as="select" name="artType" className="p-2 rounded border">
           <option value="">Select Type of Art</option>
           <option value="Painting">Painting</option>
           <option value="Sculpture">Sculpture</option>
           <option value="Photography">Photography</option>
           <option value="Drawing">Drawing</option>
           <option value="Other">Other</option>
         </Field>
         <ErrorMessage name="artType" component="div" className="text-red-500" />
         <Field as="select" name="museumFreeOrPaid" className="p-2 rounded border">
           <option value="">Select Free or Paid</option>
           <option value="Free">Free</option>
           <option value="Paid">Paid</option>
         </Field>
        
          <Field as="select" name="Price" className="p-2 rounded border">
            <option value="">Select Price</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            </Field>
            </>

 )
 export default museum
