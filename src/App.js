import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import './default.scss';

// layouts
import MainLayout from './layouts/MainLayout';

// pages
import HomepageLayout from './layouts/HomepageLayout';
import Homepage from './pages/Homepage';
import Registration from './pages/Registration';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <HomepageLayout>
                <Homepage/>
              </HomepageLayout>
            }
          />
          <Route
            path="/registration"
            element={
              <MainLayout>
                <Registration />
              </MainLayout>
            }
          />
        </Routes>
    </div>
  );
}

export default App;
