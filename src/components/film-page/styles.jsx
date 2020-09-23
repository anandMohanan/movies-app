import styled from 'styled-components';


export const FilmContainer = styled.section`
    background-color: black;
    padding: 10px;
    
    height: 90vh;
`;

export const FlexContainer = styled.div`
    display: flex;
    padding: 20px;

    @media screen and (max-width: 800px){
        flex-direction: column;
    }
`

export const FilmSecondaryContainer = styled.div`
    color: #fff;
    

`;

export const TitleContainer = styled.h1`
    color: #03fc1c;
    text-align:center;
    margin-bottom:30px;
`;

export const YearContainer = styled.span`
    color: #03fc1c;
`;

export const ButtonContainer = styled.button`
    color: #fff;
    position: absolute;
    top: 110px;
    right: 10px;

    @media screen and (max-width: 500px){
        top: 150px;
    }
`;

export const RatingContainer = styled.p`
    color: #fff;
    text-align: center;
`;

export const FilmBodyContainer = styled.div`
    color: #fff;
    margin-left: 10px;
    
`;

export const ImageContainer = styled.img`
    color: #fff;

    @media screen and (max-width: 800px){
        width: 80vw;
        margin: 0 auto;
    }
`;

export const PlotContainer = styled.p`
    color: #fff;
    padding: 10px;
`;

export const DataContainer = styled.p`
    color: #fff;
    padding:10px;

`

export const HeadingStyleContainer = styled.span`
    color: #03fc1c;
`