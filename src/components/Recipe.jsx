import React, { useState } from 'react'
import '../styles/recipe.css'

function Recipe(props) {

    const [rating, setRating] = useState(0)

    return(
        <div className="recipe">
            <img src={props.url}></img>
            <p className="title">{props.title}</p>
            <p>{`rating: ${rating}`}</p>
            <button onClick={() => setRating(rating + 1)}>Increment Rating</button>
        </div>
    )
}

export default Recipe