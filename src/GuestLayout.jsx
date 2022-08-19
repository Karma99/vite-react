import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderMenu from './components/HeaderMenu';
import ImageSlider from './components/ImageSlider';
import PageBreadcrumb from './components/PageBreadcrumb';
import Footer from './components/Footer';
import { Outlet, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';


function GuestLayout(props) {
  
  const location = useLocation();
  
  return (
    <div className="app-container">
      <HeaderMenu menuItems={props.homeJson.menuItems} />
      {
        location.pathname === "/" && 
        <ImageSlider sliderImages={props.homeJson.sliderImages} />
      }
    
      <Container className="body-container">
        <PageBreadcrumb/>
        
        {/* Load Dynamic Body Component */}
        <Outlet />

      </Container>

      <Footer />
    </div>
  );
}

export default GuestLayout;
