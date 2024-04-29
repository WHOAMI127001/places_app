import React from "react"
const FilterCuisine = ({ value, onChange }) => (
        <div className="mb-4">
     <label htmlFor="filterCuisine" className="mr-2">Cuisine :</label>
          <select id="filterCuisine" value={value} onChange={onChange}>
            <option value="">Toutes</option>
            <option value="Italian">Italian</option>
            <option value="French">French</option>
            <option value="Chinese">Chinese</option>
            <option value="Indian">Indian</option>
            <option value="Japanese">Japanese</option>
            <option value="Mexican">Mexican</option>
            <option value="Vegetarian">Vegetarian</option>
            <option value="Other">Other</option>
            </select>
            </div>
    )

    export default FilterCuisine