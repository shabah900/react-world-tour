import { useEffect, useState } from "react";
import Country from "./Country";

const Countries = () => {
  // for show visited country list 
const [visitedCountry , setVisitedCountry] = useState([]);

const handelCountryVisited = (country) => {
    // console.log(country);   
    const newVisitedCountry = [...visitedCountry,country];
    setVisitedCountry(newVisitedCountry);
    console.log(newVisitedCountry);
    
}



const [countries,setCountries] = useState([]);
useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => setCountries(data));
},[])

    return (
        <div>
           <div>
             <h2>Visited Country :</h2>
             <ul>
                {
                    visitedCountry.map(country => <li key={country.cca3}>{country.name.common}</li>)
                }
             </ul>
           </div>
            <h2>Country</h2>
            {
            countries.map(country=><Country 
                handelCountryVisited={handelCountryVisited}
                key={country.cca3}
                propsName={country}></Country>)
            }
            
        </div>
    );
}; 

export default Countries;