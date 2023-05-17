import Header from "../components/Header"
import FilmsList from "../components/FilmsList"
import ViewMore from "../components/ViewMore"
import { useState } from "react"
const UpcomingReleases = () => {


    const [films, setFilms] = useState(
        [
            {
                id: 1, 
                title: "Spider-Man: Into The Spider-Verse"
            },
            {
                id: 2, 
                title: "Life Itself"
            },
            {
                id: 3, 
                title: "Mary Queen of Scots"
            },
            {
                id: 4, 
                title: "The Lego Movie 2: The Second Part"
            },
            {
                id: 5, 
                title: "Captain Marvel"
            },


        ]
    )

    return(
        <>
            <Header/>
            <hr></hr>
            <ul>
                <FilmsList films={films}/>
            </ul>
            <ViewMore/>
        </>
    )
}


export default UpcomingReleases