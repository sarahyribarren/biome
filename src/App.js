import React, { useState, useLayoutEffect } from 'react';
import './App.css';
import './NavBar.css';
import logo from './navBarLogo.png'
import menuIcon from './menuIcon.svg'
import video from './space.mp4'
import pic from './finalogo-light.png'

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
  const [isNavTop, setNavTop] = useState(false);

  useLayoutEffect(
    () => {
      let debounceHandleNavTop = () => {
        let timeDelayID;
        return function handleNavTop() {
          clearTimeout(timeDelayID);
          timeDelayID = setTimeout(
            () => {
              if (window.scrollY < 10 && !isNavTop) {
                setNavTop(true);
              }
              if (window.scrollY > 10 && isNavTop) {
                setNavTop(false);
              }
            },
            30
          );
        };
      }
      debounceHandleNavTop()();
      window.addEventListener("scroll", debounceHandleNavTop());
      return () => window.removeEventListener("scroll", debounceHandleNavTop());
    },
    [isNavTop]
  );

  let navTop = isNavTop ? "Top" : "";

  return (
    <div className={"NavBar" + navTop}>
      <a href="./">
        <img alt="BIOME logo and link to website homepage." src={logo} className={"NavBarLogo" + navTop} />
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
      <div className="PageContent">
        <PageHead />
        <PageTiles />
      </div>
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
      <h1> BIOME </h1>
      <h2>
        Ye ye
      </h2>
      <h3>
        Ye ee lmfao ting man grr grr big ben push up
      </h3>
    </>
  );
}

function PageTiles() {
  return (
    <>
      <div className="TileCategories">
        <TileGrid />
        <TileGrid />
      </div>
    </>
  );
}

function TileGrid() {
  return (
    <>
      <span className="TileCategoryText">
        Category
      </span>
      <div className="TileGrid">
        <Tile />
        <Tile />
        <Tile />
      </div>
    </>
  );
}

function Tile() {
  return (
    <>
    </>
  );
}

// <TileFace />
// <TileContent />

function TileFace() {
  return (
    <>
    </>
  );
}

function TileContent() {
  return (
    <>
    </>
  );
}

// Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget lacinia augue. Nam vulputate placerat pellentesque. Duis ac sodales nulla. Ut a est id enim vehicula pulvinar ut vitae sapien. Donec eget felis tortor. In sagittis libero neque, et pharetra purus iaculis sed. Etiam quis quam et nisl imperdiet egestas vel cursus ipsum. Phasellus id ex massa. Aliquam a malesuada ipsum. Donec eget lectus rhoncus, blandit sem non, fermentum libero. Integer faucibus erat pharetra, tristique ligula vel, auctor risus. Suspendisse vel justo quis magna imperdiet pretium.
//
// Fusce leo diam, viverra vel auctor et, condimentum vitae mi. Suspendisse aliquet nulla et mi venenatis, eu venenatis dui placerat. Nullam arcu enim, tristique vitae accumsan in, iaculis quis tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean ac est varius sem tincidunt elementum. Mauris nisi mi, congue id ante eu, fringilla interdum arcu. Praesent feugiat maximus orci a dictum. Duis tempor viverra nulla vel imperdiet. Nulla a pellentesque lorem, nec sodales urna. Vestibulum bibendum nunc libero, eget bibendum tellus maximus quis. Aliquam erat volutpat. Nam vel neque rhoncus, mattis libero nec, imperdiet elit. Donec tristique pretium nulla sit amet porta. Mauris arcu odio, auctor at lacinia in, pellentesque sed risus. Ut massa enim, sodales eu varius nec, sodales at diam. Aliquam ut commodo lorem, ut vehicula nulla.
//
// Praesent nec ullamcorper libero. Nullam mi diam, faucibus vel congue faucibus, lobortis a augue. Quisque a dolor eu lacus fringilla laoreet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec blandit venenatis turpis, nec varius erat vestibulum et. Pellentesque nec est nunc. Curabitur molestie velit vitae urna interdum, at lacinia purus dignissim.
//
// Nunc vel porttitor nunc, nec auctor diam. Sed commodo in urna id aliquam. Nulla ultricies lacus a porttitor interdum. Mauris euismod iaculis sapien, et viverra massa. Aenean et tortor mattis purus efficitur lacinia. Duis diam est, maximus eu purus fringilla, maximus scelerisque massa. Nulla at lectus quis ligula convallis pulvinar. Fusce non nunc at libero dapibus dapibus et id sapien. Aenean hendrerit ante ac velit ullamcorper, id maximus augue pharetra. Aenean dapibus egestas nisl eget ultricies. Sed feugiat, justo vel congue interdum, nulla purus ultrices mi, at feugiat felis ante ut nisl. Maecenas pellentesque nunc et enim condimentum hendrerit. Nulla diam risus, pretium sit amet pretium sed, finibus vitae felis.
//
// Pellentesque malesuada urna imperdiet nunc volutpat, nec porta ipsum dapibus. Nunc eu ligula neque. Sed sagittis mauris lacus, nec pharetra nisl molestie quis. Vestibulum id posuere felis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque in eleifend tellus. Phasellus id luctus massa.

function Footer() {
  return (
    <>

    </>
  );
}
