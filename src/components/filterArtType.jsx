import React from "react"
const FilterArtType= ({ value, onChange }) => (
    <div className="mb-4">
          <label htmlFor="artType" className="mr-2">Type of Art :</label>
          <select id="artType" value={value} onChange={onChange}>
            <option value="">All</option>
            <option value="">Select Type of Art</option>
              <option value="Painting">Painting</option>
              <option value="Sculpture">Sculpture</option>
              <option value="Photography">Photography</option>
              <option value="Drawing">Drawing</option>
              <option value="Other">Other</option>
           </select>   
           </div>
)
           export default FilterArtType