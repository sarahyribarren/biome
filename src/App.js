import React from 'react';
import './App.css';
import logo from './navBarLogo.png'
import menuIcon from './menuIcon.svg'
import video from './space.mp4'

function App() {

  return (
    <>
      <NavBar />
      <div className="mainBody" >
        <Page name="Home" />
        <Page name="Mission" />
        <Page name="Projects" />
        <Page name="Events" />
        <Page name="People" />
        <Page name="Join" />
      </div>
      <Footer />
    </>
  );
}

export default App;

function NavBar() {
  return (
    <div className="NavBar">
      <a href="./">
        <img alt="BIOME logo and link to website homepage." src={logo} className="NavBarLogo" />
      </a>
      <a href="./" className="NavBarText"> MISSION </a>
      <a href="./" className="NavBarText"> EVENTS </a>
      <a href="./" className="NavBarText"> PROJECTS </a>
      <a href="./" className="NavBarText"> PEOPLE </a>
      <a href="./" className="NavBarText"> JOIN </a>
      <NavDropDown />
    </div>
  );
}

class NavDropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropDownActive: false,
    };
  }

  toggleActive() {
    let newState = {
      dropDownActive: !this.state.dropDownActive,
    };
    this.setState(newState);
  }

  render() {
    let navDropDownState = "NavDropDown";
    let menuBarState = "MenuBar";
    let menuTextState = "MenuBarText";

    if (this.state.dropDownActive) {
      navDropDownState += "Click";
      menuBarState += "Click";
      menuTextState += "Click";
    }

    return (
      <>
        <img alt="Navigation Bar Dropdown" src={menuIcon} className={navDropDownState} onClick={() => this.toggleActive()} />
        <div className={menuBarState}>
          <a href="./" className={menuTextState}> MISSION </a>
          <a href="./" className={menuTextState}> EVENTS </a>
          <a href="./" className={menuTextState}> PROJECTS </a>
          <a href="./" className={menuTextState}> PEOPLE </a>
          <a href="./" className={menuTextState}> JOIN </a>
        </div>
      </>
    );
  }
}

function Page() {
  return (
    <div className="Page">
      <BackDrop contType="video" contSrc="space.mp4" />
      <PageHead />
      <PageTiles />
    </div>
  );
}

function BackDrop(props) {
  if (props.contType === "video") {
    return (
      <video autoPlay muted loop playsInline className="BackDropVid">
        <source src={video} />
      </video>
    );
  }
}

function PageHead() {
  return (
    <>

    </>
  );
}

function PageTiles() {
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
