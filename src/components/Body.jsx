import React from "react";
import Places from "./Places";
import data from "./data";

export default function Body(){
    
    const placesTravel = data.map(data => {
        return (
          <Places 
            key={data.id}
            {...data}
            />
        )
      })
    
    return(
        <div className="body--div">
            {placesTravel}
        </div>
    );
}