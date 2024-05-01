import React from "react"
const FilterParkType= ({ value, onChange }) => (
    <div className="mb-4">
      <label htmlFor="filterParkType" className="mr-2">Park Type :</label>
      <select id="filterParkType" value={value} onChange={onChange}>
      <option value="">All</option>
            <option value="National">National</option>
           <option value="Regional">Regional</option>
          <option value="Urban">Urban</option>
       <option value="Forest">Forest</option>
    <option value="Botanical">Botanical</option>
    <option value="Zoological">Zoological</option>
    <option value="Aquatic">Aquatic</option>
    <option value="Amusement">Amusement</option>
    <option value="Children">Children</option>
          
      </select>
    </div>
  )

  export default FilterParkType