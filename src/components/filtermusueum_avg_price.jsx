import React from "react"
const FilterMusueumAvgPrice = ({ value, onChange }) => (
        <div className="mb-4">
     <label htmlFor="museumFreeOrPaid" className="mr-2">Musueum Free or Paid :</label>
          <select id="museumFreeOrPaid" value={value} onChange={onChange}>
          <option value="Free">Free</option>
           <option value="Paid">Paid</option>
            </select>
            </div>
    )
    export default FilterMusueumAvgPrice