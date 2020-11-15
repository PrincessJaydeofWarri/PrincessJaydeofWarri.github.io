import React ,{useState}from 'react';
import styled from 'styled-components'
import MORTGAGEImg from '../images/MORTGAGE.jpg'
import Formcontainer from './pagecomponents/Formcontainer'
import Info from './pagecomponents/Info'





const Container = styled.div`
background: url(${MORTGAGEImg});
background-size: cover;
background-position: center;
padding: 2rem 0;
height: 100vh;
width: 100%;
`;

const Work = () => {
  return(
    <>
    <Info/>
      <Container>
        <Formcontainer/>
      </Container>
    </>

  )
}

export default Work
