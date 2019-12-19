import React from 'react';
import './SideDrawer.css';

const sideDrawer = props => {
     let drawerClasses = 'side-drawer';
     if (props.show) {
          drawerClasses = 'side-drawer open';
     }
     return (
          <nav className={drawerClasses}>
               <ul>
                    <li><a href="/">Mission</a></li>
                    <li><a href="/">Projects</a></li>
                    <li><a href="/">iGEM</a></li>
                    <li><a href="/">Events</a></li>
                    <li><a href="/">People</a></li>
                    <li><a href="/">Join</a></li>
               </ul>
          </nav>
     );
};

export default sideDrawer;
