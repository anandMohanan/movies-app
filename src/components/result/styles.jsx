import styled from 'styled-components';

export const ResultContainer = styled.div`
    /*width: 33.333%;
    min-width:250px;
    display:flex;
    flex-direction:column;
    cursor:pointer;*/
    flex: 25%;
    max-width: 25%;
    padding: 40px 10px;
    

    @media screen and (max-width: 800px) {
        flex: 50%;
        max-width: 50%;  
    }

    @media screen and (max-width: 600px) {
        flex: 100%;
        max-width: 100%;
    }
  
`

export const ImageContainer = styled.img`
    /*width:100%;
    justify-content: center;
         align-items: center;
         margin:30px;

         @media screen and (max-width: 600px){
        width: 100%;
    }*/
    margin-top: 8px;
    vertical-align: middle;
    width: 100%;

    &:hover{
        opacity: 0.5;
    }
`
export const HeadingContainer = styled.h3`
    color: #fff;
    font-size: 20px;
    font-weight: 600;
    padding:5px;
    flex: 1 1 100%;
    text-align: center;
    transition: 0.4s ease-out;

    
`