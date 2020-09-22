import React from 'react';

import Header from './components/header/header';
import Form from './components/form/form';

import { GlobalStyle } from './global-styles';

const App = () => {
  return (
    <>
    <GlobalStyle />
    <Header />
    <Form />
    </>
  );
}

export default App;
