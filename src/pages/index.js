import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Link from 'next/link'

const HomePage = () => {
  const [adresses, setAdresses] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: '', direction: 'ascending' });

  useEffect(() => {
    const fetchAdresses = async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/api/addresses");
        setAdresses(data);
      } catch (error) {
        console.error("Erreur lors de la récupération des adresses:", error);
      }
    };

    fetchAdresses();
  }, []);

  const sortAdresses = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    } else {
      direction = 'ascending';
    }
    const sortedData = [...adresses].sort((a, b) => {
      if (a[key] < b[key]) return direction === 'ascending' ? -1 : 1;
      if (a[key] > b[key]) return direction === 'ascending' ? 1 : -1;
      return 0;
    });

    setAdresses(sortedData);
    setSortConfig({ key, direction });
  };

  return (
    <div className="flex justify-center mt-28">
      <table className="w-3/4 text-left shadow-lg bg-white dark:bg-gray-800 dark:text-white text-xs sm:text-base">
        <thead className="bg-blue-500 text-white">
          <tr>
            <th onClick={() => sortAdresses('street')}>Rue</th>
            <th onClick={() => sortAdresses('name')}>Nom</th>
            <th onClick={() => sortAdresses('city')}>Ville</th>
            <th onClick={() => sortAdresses('country')}>Pays</th>
            <th onClick={() => sortAdresses('postalCode')}>Code Postal</th>
            <th onClick={() => sortAdresses('type')}>Type</th>
          </tr>
        </thead>
        <tbody>
          {adresses.map((adresse, index) => (
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
  );
};

export default HomePage;
