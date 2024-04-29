/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable max-lines-per-function */
import React, { useState, useEffect } from "react"
import axios from "axios"
import Link from "next/link"
import FilterCuisine from "@/components/FilterCuisine"
import FilterBarType from "@/components/FilterBarType"
import FilterArtMovement from "@/components/FilterArtMovement"
import FilterArtType from "@/components/FilterArtType"
import FilterParkType from "@/components/FilterParkType"

const HomePage = () => {
  const [adresses, setAdresses] = useState([])
  const [filteredAdresses, setFilteredAdresses] = useState([])
  const [sortConfig, setSortConfig] = useState({ key: "", direction: "ascending" })
  const [filterType, setFilterType] = useState("")
  const [filterCuisine, setFilterCuisine] = useState("")
  const [filterBarType, setFilterBarType] = useState("")  
  const [filterArtType, setFilterArtType] = useState("")
  const [filterArtMovement, setFilterArtMovement] = useState("")
  const [filterParkType, setFilterParcType] = useState("")
  
useEffect(() => {
    const fetchAdresses = async () => {
       const { data } = await axios.get("http://localhost:3000/api/addresses")
        setAdresses(data)
        setFilteredAdresses(data)
         }

    fetchAdresses()
  }, [])

  useEffect(() => {
    applyFilters()
  }, [filterType, filterCuisine, filterArtType, filterArtMovement,filterBarType,filterParkType,adresses,])

  const sortAdresses = (key) => {
    let direction = "ascending"

    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending"
    }

    const sortedData = [...filteredAdresses].sort((a, b) => {
      if (a[key] < b[key]) {
        return direction === "ascending" ? -1 : 1
      }

      if (a[key] > b[key]) {
        return direction === "ascending" ? 1 : -1
      }

      return 0
    })

    setFilteredAdresses(sortedData)
    setSortConfig({ key, direction })
  }
  const applyFilters = () => {
    let filteredData = [...adresses]
  
    
    if (filterType) {
      filteredData = filteredData.filter(adresse => adresse.type.toLowerCase() === filterType.toLowerCase())
    }
  
    
    if (filterType === "restaurant" && filterCuisine) {
      filteredData = filteredData.filter(adresse => adresse.cuisineType && adresse.cuisineType.toLowerCase() === filterCuisine.toLowerCase())
    }
  
    
    if (filterType === "bar" && filterBarType) {
      filteredData = filteredData.filter(adresse => adresse.barType && adresse.barType.toLowerCase() === filterBarType.toLowerCase())
    }
  
    
    if (filterType === "Musée" && filterArtType) {
      filteredData = filteredData.filter(adresse => adresse.artType && adresse.artType.toLowerCase() === filterArtType.toLowerCase())
    }

    if (filterArtMovement && filterType === "Musée") {
      filteredData = filteredData.filter((adresse) => adresse.artMovement && adresse.artMovement.toLowerCase() === filterArtMovement.toLowerCase())
    }
  
    if (filterType === "parc" && filterParkType) {
      filteredData = filteredData.filter(adresse => adresse.parcType && adresse.parcType.toLowerCase() === filterParkType.toLowerCase())
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
          <option value="Musée">Musée</option>
          <option value="parc">Parc</option>
        </select>
      </div>
      {filterType === "restaurant" && <FilterCuisine value={filterCuisine} onChange={(e) => setFilterCuisine(e.target.value)} />}
      {filterType === "bar" && <FilterBarType value={filterBarType} onChange={(e) => setFilterBarType(e.target.value)} />}
      {filterType === "Musée" && <FilterArtType value={filterArtType} onChange={(e) => setFilterArtType(e.target.value)} />}
      {filterType === "Musée" && <FilterArtMovement value={filterArtMovement} onChange={(e) => setFilterArtMovement(e.target.value)} />}
      {filterType === "parc" && <FilterParkType value={filterParkType} onChange={(e) => setFilterParcType(e.target.value)} />}
      
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
