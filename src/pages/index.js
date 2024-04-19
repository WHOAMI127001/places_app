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
  const [filterBarType, setFilterBarType] = useState("")  
  const [filterArtType, setFilterArtType] = useState("")
  const [filterParkType, setFilterParcType] = useState("")

  
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
  }, [filterType, filterCuisine, filterArtType,filterBarType,filterParkType,adresses,])

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
      {filterType === "restaurant" && (
        <div className="mb-4">
          <label htmlFor="filterCuisine" className="mr-2">Cuisine :</label>
          <select id="filterCuisine" value={filterCuisine} onChange={(e) => setFilterCuisine(e.target.value)}>
            <option value="">Toutes</option>
            <option value="indien">indien</option>
            <option value="français">Français</option>
            <option value="japonais">Japanese</option>
            <option value="mexicain">Mexican</option>
            <option value="thai">Thai</option>
            <option value="italien">Italian</option>
            <option value="chinois">Chinese</option>
            <option value="végétarien">Vegetarian</option>
            <option value="autre">Other</option>
          </select>
        </div>
        
      )}

      {filterType === "bar" && (
        <div className="mb-4">
          <label htmlFor="filterBarType" className="mr-2">Type de Bar :</label>
          <select id="filterBarType" value={filterBarType} onChange={(e) => setFilterBarType(e.target.value)}>
            <option value="">Tous</option>
            <option value="Pub">Pub</option>
          <option value="wine Bar">Wine Bar</option>
          <option value="Cocktail Bar">Cocktail Bar</option>
          <option value="Beer Bar">Beer Bar</option>
          <option value="Juice Bar">Juice Bar</option>
          </select>
        </div>
      )}
      {filterType === "Musée" && (
        <div className="mb-4">
          <label htmlFor="artType" className="mr-2">Type of Art :</label>
          <select id="artType" value={filterArtType} onChange={(e) => setFilterArtType(e.target.value)}>
            <option value="">All</option>
            <option value="Renaissance">Renaissance</option>
              <option value="Baroque">Baroque</option>
              <option value="Surréalism">Surréalism</option>
              <option value="Cubism">Cubism</option>
              <option value="Impressionism">Impressionism</option>
              <option value="Romanticism">Romanticism</option>
           </select>   
        </div>
      )}

      {filterType === "parc" && (
        <div className="mb-4">
          <label htmlFor="filterParcType" className="mr-2">Type of Parc :</label>
          <select id="filterParcType" value={filterParkType} onChange={(e) => setFilterParcType(e.target.value)}>
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
