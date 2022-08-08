import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NotFound from './components/NotFound';

const Category = React.lazy(() => import('./components/Category'));
const Home = React.lazy(() => import('./components/Home'));
const Navbar = React.lazy(() => import('./components/Navbar'));
const Shop = React.lazy(() => import('./components/Shop'));
const NewProduct = React.lazy(() => import('./components/NewProduct'))

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={
            <React.Suspense>
              <Home />
            </React.Suspense>
          } />
          <Route path='/shop/:id' element={
            <React.Suspense>
              <Shop/>
            </React.Suspense>}>  
          </Route>
          <Route path='/category/:id' element={
            <React.Suspense>
              <Category/>
            </React.Suspense>
          } />
          <Route path='/new' element={
            <React.Suspense>
              <NewProduct />
            </React.Suspense>
          } />
          <Route path='*' element={
            <NotFound />
          }/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
