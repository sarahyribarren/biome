import React from 'react';
import './App.css';

function App() {
  return (
    <>
      <NavBar />
      <Page name="Mission" />
      <Page name="Projects" />
      <Page name="Events" />
      <Page name="People" />
      <Page name="Join" />
      <Footer />
    </>
  );
}

export default App;

function NavBar() {
  return (
    <div className="NavBar">
      <a href="./" className="NavBarText"> Logo </a>
      <a href="./" className="NavBarText"> Mission </a>
      <a href="./" className="NavBarText"> Events </a>
      <a href="./" className="NavBarText"> People </a>
      <a href="./" className="NavBarText"> Join </a>
      <NavDropDown className="NavDropDown" />
    </div>
  );
}

function NavDropDown() {
  return (
    <>

    </>
  );
}

function Page() {
  return (
    <>

    </>
  );
}

function Footer() {
  return (
    <>

    </>
  );
}
