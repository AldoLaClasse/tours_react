import { useEffect, useState } from "react";
import {data} from "./data"
import Tour from "./Tour"

const Tours = () => {

    const [places, isPlaces] = useState(data)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(()=>{
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
        }, 2000)
    }, [])

    if (isLoading) {
        return (
            <h1>... chargement de la page ...</h1>
        )
    }
    else {
        return (
           <div className="main">
               <h2>Voici nos séjours</h2>
               <div>
                    {places.map( (place) => {

                        return(
                            <Tour img={place.img} title={place.title} />
                        )

                    }

                    )}
               </div>
           </div>
        )
    }

}

export default Tours;