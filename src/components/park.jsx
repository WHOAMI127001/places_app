import {  Field, ErrorMessage } from "formik"
import React from "react"
    const Park = () => (
    <div> 
              <Field as="select" name="parkType" className="p-2 rounded border">
    <option value="">Select Park Type</option>
    <option value="national">National</option>
    <option value="régional">Regional</option>
    <option value="urbain">Urban</option>
    <option value="forestier">Forest</option>
    <option value="botanique">Botanical</option>
    <option value="zoologique">Zoological</option>
    <option value="aquatique">Aquatic</option>
    <option value="d'attraction">Amusement</option>
    <option value="enfant">Children</option>
  </Field>
  <ErrorMessage name="parkType" component="div" className="text-red-500" />
   <Field as="select" name="publicOrPrivate" className="p-2 rounded border">
    <option value="">Select Public or Private</option>
    <option value="public">Public</option>
    <option value="privé">Private</option>
  </Field>
</div>
 )
 export default Park