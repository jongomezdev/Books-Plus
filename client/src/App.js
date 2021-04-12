import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import SearchBook from './pages/SearchBook';
import SavedBook from './pages/SavedBook';
import PageContent from './Components/PageContent';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Navbar />
        <Switch>
          <PageContent>
            <Route path="/" component={SearchBook} exact />
            <Route path="/saved" component={SavedBook} exact />
          </PageContent>
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
