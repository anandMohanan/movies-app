import React , { useState } from 'react';

import { InputContainer , FormContainer } from './styles';

import SearchItems from '../search-items/searchItems';
import Film from '../film-page/film-page';

const Main = () => {
    const [ input , setInput ] = useState('');
    const [ items , setItems ] = useState([]);
    const [ film , setFilm ] = useState({});

    const apiUrl = "https://www.omdbapi.com/?apikey=5864a600"

    const onSubmit = (event) => {
        if(event.key === "Enter"){
        event.preventDefault();
        fetch(`${apiUrl}&s=${input}`)
        /*.then((searchData) => searchData.json() )
        .then((search) => setData(search))*/
        .then((searchData) => searchData.json())
        .then((parsedData) => {
            setItems(parsedData.Search);    
                }
            )
        }
    };

    const openPage = id => {
        fetch(`${apiUrl}&i=${id}`)
        .then((searchData) => searchData.json())
        .then((parsedData) => {
            setFilm(parsedData);
            }
        );
        console.log(film.Title);
    };

    const closePage = () => {
        setFilm({});
    }

    const onChange = (event) => {
        setInput(event.target.value)
    }

    return(
        <>

        {   (typeof film.Title != "undefined") ? 
        <Film film={film} closePage = {closePage} /> 
        : 
        <>
        <FormContainer onKeyPress={onSubmit} >
            <InputContainer onChange={onChange}  type="text" placeholder="Search movies here" />
        </FormContainer>
        <SearchItems key={100} searchItems={items} openPage={openPage} /> </>}
        </>
    )
}

export default Main;

