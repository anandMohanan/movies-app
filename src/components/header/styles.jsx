import styled from 'styled-components';

export const HeaderContainer = styled.div`
    overflow: hidden;
    background-color: #000;
    padding: 20px 10px;
`
export const LinkContainer = styled.a`
    float: left;
    color: #fff;
    text-align: center;
    padding: 12px;
    text-decoration: none;
    font-size: 18px;
    line-height: 25px;
    border-radius: 4px;

    &:hover{
        color: #03fc1c;
    }

    &:active{
        color: #fff;
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
    color: #fff;
    text-align: center;
    padding: 12px;
    text-decoration: none;
    font-size: 18px;
    line-height: 25px;
    border-radius: 4px;

    &:hover{
        color: #03fc1c;
    }

    &:active{
        color: #03fc1c;
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

