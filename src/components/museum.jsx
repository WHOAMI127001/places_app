import {  Field, ErrorMessage } from "formik"
import React from "react"
    const museum = () => (
    <div> 
 <Field as="select" name="artMovement" className="p-2 rounded border">
              <option value="">Select Artistic Movement</option>
            </Field>
            <ErrorMessage name="artMovement" component="div" className="text-red-500" />
            <Field as="select" name="artType" className="p-2 rounded border">
              <option value="">Select Type of Art</option>
              <option value="peinture">Painting</option>
              <option value="sculpture">Sculpture</option>
              <option value="photographie">Photography</option>
              <option value="dessin">Drawing</option>
              <option value="autre">Other</option>
            </Field>
            <ErrorMessage name="artType" component="div" className="text-red-500" />
            <Field as="select" name="freeOrPaid" className="p-2 rounded border">
              <option value="">Select Free or Paid</option>
              <option value="gratuit">Free</option>
              <option value="payant">Paid</option>
            </Field>
            <ErrorMessage name="freeOrPaid" component="div" className="text-red-500" />
</div>
 )
 export default museum
