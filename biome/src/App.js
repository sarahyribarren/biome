import React, {Component} from 'react';

import './App.css';
import Toolbar from './Components/Toolbar/Toolbar';
import SideDrawer from './Components/SideDrawer/SideDrawer';
import Backdrop from './Components/Backdrop/Backdrop';

class App extends Component {
     state = {
          sideDrawerOpen: false
     };

     drawerToggleClickHandler = () => {
          this.setState((prevState) => {
               return {sideDrawerOpen: !prevState.sideDrawerOpen};
          });
     };

     backdropClickedHandler = () => {
          this.setState({sideDrawerOpen: false});
     };

     render () {
       //Backdrop variable allows for us to display it when we click on the hamburger menu
       let backdrop;
       if (this.state.sideDrawerOpen) {
          backdrop = <Backdrop click={this.backdropClickedHandler} />
       }

       return (
         <div style={{height: '100%'}}>
         //Toolbar and Sibebar menu, one for desktop and one for Mobile
          <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
          <SideDrawer show={this.state.sideDrawerOpen}/>
          {backdrop}

          //Page contents go here
           <main style={{marginTop: '64px'}}>
               <p>this is page content</p>
           </main>
         </div>
       );
     }
}

export default App;
