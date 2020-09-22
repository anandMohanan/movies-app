import React from 'react';

import { HeaderContainer , HeaderRightContainer , LogoContainer ,LinkContainer } from './styles';

const Header = () => {
    return(
        <HeaderContainer>
            <LogoContainer href="/">MoviesSearch</LogoContainer>
                <HeaderRightContainer>
                    <LinkContainer href="#contact">Contact</LinkContainer>
                    <LinkContainer href="#about">About</LinkContainer>
                </HeaderRightContainer>
        </HeaderContainer>
    )
}

export default Header;
