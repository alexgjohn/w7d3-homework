import Film from "./Film"

const FilmsList = ({films}) => {

    const filmComponents = films.map( film => {
        return (
            <a href=""><Film key={film.id} title={film.title}/></a>
        )
    })
    return (
        <>
            {filmComponents}
        </>
    )
}


export default FilmsList