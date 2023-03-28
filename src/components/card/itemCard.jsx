import React, {useState} from 'react';

const ItemCard = () => {


    const globalId = 0;

    let [inputCardFilm, setInputCardFilms] = useState({
        name:"" ,
        description:"",
    })

    return(
        <div>
            <p>NAME FILM :</p>
            <input type= "text"
            value={inputCardFilm.name}
            onChange={(event => setInputCardFilms({...inputCardFilm, name: event.target.value()}))}/>
        </div>
    )

};

export default ItemCard;