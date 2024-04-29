import React from "react"
const filterBarType= ({ value, onChange }) => (
    <div className="mb-4">
      <label htmlFor="filterBarType" className="mr-2">Type de Bar :</label>
          <select id="filterBarType" value={value} onChange={onChange}>
            <option value="">All</option>
            <option value="Pub">Pub</option>
          <option value="Wine Bar">Wine Bar</option>
          <option value="Cocktail Bar">Cocktail Bar</option>
          <option value="Beer Bar">Beer Bar</option>
          <option value="Juice Bar">Juice Bar</option>
      </select>
    </div>
  )

  export default filterBarType