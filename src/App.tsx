import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { TestSuitePageComponent } from './pages/test-suite';
import { Home } from './pages/home';
import { NavbarComponent } from './components/navbar';

export const App = (): JSX.Element => {
  return (
    <>
      <NavbarComponent />
      <div className='m-5'>
        <div className='container'>
          <BrowserRouter>
            <Routes>
              <Route
                path='/'
                element={<Home />}
              />
              <Route
                path='/test-suites'
                element={<TestSuitePageComponent />}
              />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </>
  );
};