import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import './assets/css/custom.css';
import { menuItems, sliderImages, toDoList, faqList } from './json/homeJson';
import { PRODUCTS, PRODUCT_OPTIONS} from './json/exampleJson';

import GuestLayout from './GuestLayout';
import Home from './pages/Home';

//import reportWebVitals from './reportWebVitals';

/* Examples: Class Component */
import ClockTicks from './components/examples/class-components/ClockTicks';
import Warning from './components/examples/class-components/Warning';
import Toggle from './components/examples/class-components/Toggle';
import Login from './components/examples/class-components/Login';
import FormExample from './components/examples/class-components/FormExample';
import TemperatureCalculator from './components/examples/class-components/TemperatureCalculator';
import FilterableProductTable from './components/examples/class-components/product/FilterableProductTable';
import CounterClass from './components/examples/class-components/Counter';

/* Examples: Hooks */
import CounterHook from './components/examples/hooks/Counter';
import ThemeProvider from './utils/ThemeProvider';
import Theme from './components/examples/hooks/Theme';
import StopWatch from './components/examples/hooks/StopWatch';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
          <Routes>
            
            {/* Start Guest Layout Route wrapper */}
            <Route path="/" element={
                <GuestLayout homeJson={{
                    menuItems: menuItems,
                    sliderImages: sliderImages
                  }}
                />
            }>
              
              <Route index element={<Home homeJson={{toDoList:toDoList, faqList:faqList}}/>} />

              <Route path="quick-note">
                <Route path="react-installation" />
                <Route path="useful-package" />
                <Route path="react-doc-summary" />
              </Route>

              <Route path="class-component-examples">
                <Route path="clock-ticks"   element={<ClockTicks />} />
                <Route path="warning" element={<Warning />}/>
                <Route path="toggle"  element={<Toggle />}/>
                <Route path="login"   element={<Login />}/>
                <Route path="form"    element={<FormExample  productOptions={PRODUCT_OPTIONS}/>}/>
                <Route path="temperature-calculator" element={<TemperatureCalculator />}/>
                <Route path="search-product" element={<FilterableProductTable products={PRODUCTS} />}/>
                <Route path="click-counter" element={<CounterClass />} />
              </Route>

              <Route path="hook-examples">
                <Route path="click-counter" element={<CounterHook />} />
                <Route path="theme" element={<Theme />} />
                <Route path="stop-watch" element={<StopWatch />} />
              </Route>
            
            {/* End of GuestLayout Route wrapper */}
            </Route>

          </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
