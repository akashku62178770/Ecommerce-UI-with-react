 import React from 'react'
import { useFilterContext } from '../context/filter_context';
 

 const OccasionPage = () => {
  const {filter_products} = useFilterContext();
  console.log(filter_products)
   return (
     <div>OccasionPage</div>
   )
 }
 
 export default OccasionPage