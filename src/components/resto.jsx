import {  Field, ErrorMessage } from "formik"
    const resto = () => (
    <div> 
  <Field as="select" name="cuisineType" className="p-2 rounded border">
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
          <ErrorMessage name="stars" component="div" className="text-red-500" />
          <Field as="select" name="stars" className="p-2 rounded border">
            <option value="">Select Stars</option>
            <option value="1">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          
          </Field>
          <ErrorMessage name="averagePrice" component="div" className="text-red-500" />
          <Field as="select" name="averagePrice" className="p-2 rounded border">
            <option value="">Select Average Price</option>
            <option value="€">€</option>
            <option value="€€">€€</option>
            <option value="€€€">€€€</option>
</Field>
</div>
 )
 export default resto
