import React from "react"
const filterBarAvg = ({ value, onChange }) => (
        <div className="mb-4">
     <label htmlFor="barAveragePrice" className="mr-2">Bar Average Price :</label>
          <select id="barAveragePrice" value={value} onChange={onChange}>
          <option value="1">1</option>
           <option value="2">2</option>
           <option value="3">3</option>
           <option value="4">4</option>
           <option value="5">5</option>
            </select>
            </div>
    )
    export default filterBarAvg
