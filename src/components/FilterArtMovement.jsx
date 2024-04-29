import React from "react"
const FilterArtMovement= ({ value, onChange }) => (
    <div className="mb-4">
      <label htmlFor="filterArtMovement" className="mr-2">Art Movement :</label>
      <select id="filterArtMovement" value={value} onChange={onChange}>
      <option value="">All</option>
      <option value="">Select Artistic Movement</option>
           <option value="Renaissance">Renaissance</option>
           <option value="Baroque">Baroque</option>
           <option value="Surréalism">Surréalism</option>
           <option value="Cubism">Cubism</option>
           <option value="Impressionism">Impressionism</option>
           <option value="Romanticism">Romanticism</option>
           
      </select>
    </div>
  )

  export default FilterArtMovement