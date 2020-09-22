import styled from 'styled-components';

export const HeaderContainer = styled.div`
    overflow: hidden;
    background-color: #f1f1f1;
    padding: 20px 10px;
`
export const LinkContainer = styled.a`
    float: left;
    color: black;
    text-align: center;
    padding: 12px;
    text-decoration: none;
    font-size: 18px;
    line-height: 25px;
    border-radius: 4px;

    &:hover{
        background-color: #ddd;
        color: black;
    }

    &:active{
        background-color: dodgerblue;
        color: white;
    }

    @media screen and (max-width: 500px) {
      float: none;
      display: block;
      text-align: left;
    }

`

export const LogoContainer = styled.a`
    font-size: 25px;
    font-weight: bold;
    float: left;
    color: black;
    text-align: center;
    padding: 12px;
    text-decoration: none;
    font-size: 18px;
    line-height: 25px;
    border-radius: 4px;

    &:hover{
        background-color: #ddd;
        color: black;
    }

    &:active{
        background-color: dodgerblue;
        color: white;
    }

    @media screen and (max-width: 500px) {
      float: none;
      display: block;
      text-align: left;
    }

`
export const HeaderRightContainer = styled.div`
    float: right;

    @media screen and (max-width: 500px){
        float: none;
    }
`

