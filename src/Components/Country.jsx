import { useState } from "react";
import "./Country.css"

const Country = ({propsName ,handelCountryVisited}) => {
    // console.log(propsName);
    const {name,flags} = propsName;
const [visited,setVisited] = useState(false);

            //   ----- XXX --------
const handleVisited = ()=>{
    if(visited){
        setVisited(false);
    }
    else {
             setVisited(true);
    }
   

}

    return (
        <div className={`country-box ${visited && `visited` }`}>
            <h2>Name = {name.common}</h2>
            <img src={flags.png} alt="" />
            <br />
            <button onClick={ () => handelCountryVisited(propsName)} >have visited</button><br />
            <button onClick={handleVisited}>visited</button>
            {
                visited && 'i have visited this country'
            }
        </div>
    );
};

export default Country;