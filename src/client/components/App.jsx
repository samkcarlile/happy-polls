import React from 'react';
import { Center, Heading } from '@chakra-ui/react';

import Layout from './Layout';
import DashboardPage from '../pages/dashboard/DashboardPage';

const App = () => {
  return (
    <Layout>
      <DashboardPage />
    </Layout>
  );
};

export default App;
