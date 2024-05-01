import {  Field, ErrorMessage } from "formik"
import React from "react"
    const Park = () => (
      <>
      <Field as="select" name="parcType" className="p-2 rounded border">
<option value="">Select Parc Type</option>
<option value="National">National</option>
<option value="Regional">Regional</option>
<option value="Urban">Urban</option>
<option value="Forest">Forest</option>
<option value="Botanical">Botanical</option>
<option value="Zoological">Zoological</option>
<option value="Aquatic">Aquatic</option>
<option value="Amusement">Amusement</option>
<option value="Children">Children</option>
</Field>
<ErrorMessage name="parcType" component="div" className="text-red-500" />
<Field as="select" name="publicOrPrivate" className="p-2 rounded border">
<option value="">Select Public or Private</option>
<option value="Public">Public</option>
<option value="Private">Private</option>
</Field>
<Field as="select" name="parcPrice" className="p-2 rounded border">
  <option value="">Select Price</option>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
  <option value="5">5</option>
</Field>
</>


 )
 export default Park