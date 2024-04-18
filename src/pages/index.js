/* eslint-disable max-lines-per-function */
import React, { useState, useEffect } from "react"
import axios from "axios"
import Link from "next/link"

const HomePage = () => {
  const [adresses, setAdresses] = useState([])
  const [filteredAdresses, setFilteredAdresses] = useState([])
  const [sortConfig, setSortConfig] = useState({ key: "", direction: "ascending" })
  const [filterType, setFilterType] = useState("")
  const [filterCuisine, setFilterCuisine] = useState("")

  useEffect(() => {
    const fetchAdresses = async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/api/addresses")
        setAdresses(data)
        setFilteredAdresses(data)
      } catch (error) {
        console.error("Erreur lors de la récupération des adresses:", error)
      }
    }

    fetchAdresses()
  }, [])

  useEffect(() => {
    applyFilters()
  }, [filterType, filterCuisine, adresses])

  const sortAdresses = (key) => {
    let direction = "ascending"

    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending"
    }

    const sortedData = [...filteredAdresses].sort((a, b) => {
      if (a[key] < b[key]) {return direction === "ascending" ? -1 : 1}

      if (a[key] > b[key]) {return direction === "ascending" ? 1 : -1}
      
return 0
    })

    setFilteredAdresses(sortedData)
    setSortConfig({ key, direction })
  }
  const applyFilters = () => {
    let filteredData = [...adresses]

    if (filterType) {
      filteredData = filteredData.filter(adresse => adresse.type === filterType)
    }

    if (filterType === "restaurant" && filterCuisine) {
      filteredData = filteredData.filter(adresse => adresse.cuisine === filterCuisine)
    }

    setFilteredAdresses(filteredData)
  }
  const handleFilterTypeChange = (e) => {
    const selectedType = e.target.value
    setFilterType(selectedType)

    if (selectedType !== "restaurant") {
      setFilterCuisine("")
    }
  }

  return (
    <div className="flex justify-center mt-28">
      <div className="mb-4">
        <label htmlFor="filterType" className="mr-2">Type :</label>
        <select id="filterType" value={filterType} onChange={handleFilterTypeChange}>
          <option value="">Tous</option>
          <option value="restaurant">Restaurant</option>
          <option value="bar">Bar</option>
          <option value="musee">Musée</option>
          <option value="parc">Parc</option>
        </select>
      </div>
      {filterType === "restaurant" && (
        <div className="mb-4">
          <label htmlFor="filterCuisine" className="mr-2">Cuisine :</label>
          <select id="filterCuisine" value={filterCuisine} onChange={(e) => setFilterCuisine(e.target.value)}>
            <option value="">Toutes</option>
            <option value="italien">Italien</option>
            <option value="français">Français</option>
            </select>
        </div>
      )}
      <table className="w-3/4 text-left shadow-lg bg-white dark:bg-gray-800 dark:text-white text-xs sm:text-base">
        <thead className="bg-blue-500 text-white">
          <tr>
            <th onClick={() => sortAdresses("street")}>Rue</th>
            <th onClick={() => sortAdresses("name")}>Nom</th>
            <th onClick={() => sortAdresses("city")}>Ville</th>
            <th onClick={() => sortAdresses("country")}>Pays</th>
            <th onClick={() => sortAdresses("postalCode")}>Code Postal</th>
            <th onClick={() => sortAdresses("type")}>Type</th>
          </tr>
        </thead>
        <tbody>
          {filteredAdresses.map((adresse, index) => (
            <tr key={index} className="hover:bg-blue-100">
              <td><Link href ={`/addresses/${adresse._id}/edit`}>{adresse.street}</Link></td>
              <td><Link href ={`/addresses/${adresse._id}/edit`}>{adresse.name}</Link></td>
              <td><Link href ={`/addresses/${adresse._id}/edit`}>{adresse.city}</Link></td>
              <td><Link href ={`/addresses/${adresse._id}/edit`}>{adresse.country}</Link></td>
              <td><Link href ={`/addresses/${adresse._id}/edit`}>{adresse.postalCode}</Link></td>
              <td><Link href ={`/addresses/${adresse._id}/edit`}>{adresse.type}</Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default HomePage
