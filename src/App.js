import React from 'react';

import Header from './components/header/header';
import Main from './components/main/main';


import { GlobalStyle } from './global-styles';

const App = () => {
  return (
    <>
    <GlobalStyle />
    <Header />
    <Main />

    </>
  );
}

export default App;
