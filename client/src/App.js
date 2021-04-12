import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import SearchBook from './pages/SearchBook';
import SavedBook from './pages/SavedBook';
import PageContent from './Components/PageContent';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <PageContent>
        <BrowserRouter>
          <Navbar />

          <Switch>
            <Route path="/" component={SearchBook} exact />
            <Route path="/saved" component={SavedBook} exact />
          </Switch>
        </BrowserRouter>
      </PageContent>
    </ThemeProvider>
  );
}

export default App;
