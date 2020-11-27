import React from 'react';
import { render } from 'react-dom';

import { ChakraProvider } from '@chakra-ui/react';

import App from './components/App';

render(
  <ChakraProvider>
    <App />
  </ChakraProvider>,
  document.getElementById('root')
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/#hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
