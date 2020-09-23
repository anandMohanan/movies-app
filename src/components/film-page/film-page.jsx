import React from 'react';

import { FilmContainer , FilmSecondaryContainer ,TitleContainer , YearContainer , ButtonContainer , RatingContainer , FilmBodyContainer , ImageContainer , PlotContainer , DataContainer , FlexContainer , HeadingStyleContainer } from './styles';

const Film = ({film , closePage}) => {
    return(
        <FilmContainer>
            <TitleContainer>
                    {film.Title} -
                        <YearContainer>{film.Year} {console.log(film)}</YearContainer>
                </TitleContainer>
                <ButtonContainer onClick={closePage}>&#9932;</ButtonContainer>
                <RatingContainer>Rating: {film.imdbRating} &#9733;</RatingContainer>
                <FlexContainer>
            <FilmSecondaryContainer>
                
                <ImageContainer alt={film.Title} src={film.Poster} />
                </FilmSecondaryContainer>
                <FilmBodyContainer>
                    
                    <PlotContainer><HeadingStyleContainer>PLOT:</HeadingStyleContainer> {film.Plot}</PlotContainer>
                    <DataContainer>
                        <HeadingStyleContainer>ACTORS:</HeadingStyleContainer> {film.Actors} <br/> <br/> 
                        <HeadingStyleContainer>AWARDS:</HeadingStyleContainer> {film.Awards} <br/> <br/>
                        <HeadingStyleContainer>BOX OFFICE:</HeadingStyleContainer> {film.BoxOffice} <br/> <br/>
                        <HeadingStyleContainer>COUNTRY:</HeadingStyleContainer> {film.Country} <br/> <br/>
                        <HeadingStyleContainer>DVD:</HeadingStyleContainer> {film.DVD} <br/> <br/>
                        <HeadingStyleContainer>DIRECTOR:</HeadingStyleContainer> {film.Director} <br/> <br/>
                        <HeadingStyleContainer>GENRE:</HeadingStyleContainer> {film.Genre} <br/> <br/>
                        <HeadingStyleContainer>LANGUAGE:</HeadingStyleContainer> {film.Language} <br/> <br/>
                        <HeadingStyleContainer>PRODUCTION:</HeadingStyleContainer> {film.Production} <br/> <br/>
                        <HeadingStyleContainer>RELEASED:</HeadingStyleContainer> {film.Released} <br /> <br/>
                        <HeadingStyleContainer>WRITER:</HeadingStyleContainer> {film.Writer}
                    </DataContainer>

                </FilmBodyContainer>
                </FlexContainer>

            
        </FilmContainer>
    )
};

export default Film;