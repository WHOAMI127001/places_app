import React from "react"
const FilterCuisineAveragePrice = ({ value, onChange }) => (
        <div className="mb-4">
     <label htmlFor="CuisineAveragePrice" className="mr-2"> Cuisine Average Price :</label>
          <select id="CuisineAveragePrice" value={value} onChange={onChange}>
            <option value="">All</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            </select>
            </div>
    )

    export default FilterCuisineAveragePrice