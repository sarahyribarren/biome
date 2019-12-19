import React from 'react';
import './Toolbar.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
           <div className="toolbar__toggle-button">
               <DrawerToggleButton click={props.drawerClickHandler} />
           </div>
           <div className="toolbar__logo"><a href="/">Logo goes here</a></div>
           <div className="spacer" />
           <div className="toolbar_navigation-items">
               <ul>
                    <li><a href="/">Mission</a></li>
                    <li><a href="/">Projects</a></li>
                    <li><a href="/">iGEM</a></li>
                    <li><a href="/">Events</a></li>
                    <li><a href="/">People</a></li>
                    <li><a href="/">Join</a></li>
               </ul>
           </div>
    </nav>
  </header>
);

export default toolbar;
