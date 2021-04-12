import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Saved from './Components/Saved';
import SearchBook from './pages/SearchBook';
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
            <Route path="/saved" component={Saved} exact />
          </Switch>
        </BrowserRouter>
      </PageContent>
    </ThemeProvider>
  );
}

export default App;
