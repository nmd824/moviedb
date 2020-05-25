import React from 'react'

function OpenMovie({selected, closeMovie}) {

    return (

        <section className = "popup">
            <div className = "content">
                <h2>
                    {selected.Title}
                    <span>({selected.Year})</span>
                    <p className = "rating">Rating: {selected.imdbRating}</p>
                    <div className = "plot">
                        <img src = {selected.Poster}></img>
                        <p>{selected.Plot}</p>
                    </div>
                </h2>
                <button className = "close" onClick = {closeMovie}>Close</button>
            </div>
        </section>

    )
}

export default OpenMovie