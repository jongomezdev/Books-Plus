import React from 'react';
import Navbar from './Components/Navbar';
import PageContent from './Components/PageContent';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <PageContent>
        <Navbar />
      </PageContent>
    </ThemeProvider>
  );
}

export default App;
