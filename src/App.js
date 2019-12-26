import React from 'react';
import './App.css';
import logo from './finalogo-light.png'

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
      <a href="./">
        <img alt="BIOME logo and link to website homepage." src={logo} className="NavBarLogo" />
      </a>
      <a href="./" className="NavBarText"> MISSION </a>
      <a href="./" className="NavBarText"> EVENTS </a>
      <a href="./" className="NavBarText"> PROJECTS </a>
      <a href="./" className="NavBarText"> PEOPLE </a>
      <a href="./" className="NavBarText"> JOIN </a>
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
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus ligula ut egestas viverra. Nam vel consectetur ante, et sollicitudin risus. Morbi eu elit nec nunc eleifend vulputate. Cras a sapien ipsum. Praesent sed luctus erat, dignissim malesuada ipsum. Duis vitae porttitor nibh, a gravida lacus. Fusce risus justo, tempus nec elit et, iaculis vulputate ligula. Sed eu eros congue, blandit sem at, porttitor enim. Quisque facilisis finibus eros non volutpat. Nunc finibus, mi a vulputate finibus, orci nisi pharetra elit, vitae hendrerit nibh massa in justo. Suspendisse potenti. Etiam maximus sem vel nunc vestibulum ornare.

      Donec molestie tempus scelerisque. Donec augue justo, condimentum id augue et, varius vehicula erat. Quisque purus sapien, eleifend et vehicula nec, rhoncus ac quam. Aliquam imperdiet lacus nec ante vulputate dignissim. Curabitur vel mollis enim. Donec in mauris tortor. Integer suscipit nulla non hendrerit hendrerit. Sed et maximus justo. Sed placerat purus in varius rhoncus. Duis aliquet leo eros, a blandit libero congue non. Etiam ac lobortis ex, vel fermentum turpis. Suspendisse vitae nulla mauris. Aliquam sed luctus orci, at gravida turpis. Etiam ornare dapibus sapien, id fermentum nibh consectetur sed. Etiam quis nisi pretium, bibendum eros a, condimentum lectus.

      Nunc rutrum, massa et sollicitudin laoreet, odio turpis mollis tellus, ac mattis turpis neque eget dolor. Pellentesque magna neque, ultricies eget eleifend vitae, gravida commodo enim. Sed viverra mauris sem, et imperdiet neque aliquet vitae. Nulla consectetur purus at enim porttitor, non rhoncus purus suscipit. Curabitur dapibus magna tortor, ac vehicula massa aliquam vitae. In id ullamcorper odio. Donec felis justo, suscipit ut sem vitae, sagittis molestie purus. Phasellus vestibulum elit ac dui pretium eleifend. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla facilisi. Proin at condimentum velit. Aenean tristique ligula dui, eu facilisis ipsum interdum quis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec at nunc urna. Quisque ut mattis erat.

      Cras eros lacus, pharetra sed elit ac, lobortis malesuada quam. Proin convallis elementum quam ac pulvinar. In lobortis, odio a dictum aliquet, purus sapien ullamcorper lacus, sed tempor odio dui a quam. Aliquam posuere scelerisque congue. Sed scelerisque urna orci, at finibus lacus dapibus sed. Curabitur id metus mi. Aliquam porta viverra facilisis.

      Nulla bibendum mauris id purus semper tristique. Aliquam sed purus orci. Proin ut lacus accumsan, vestibulum risus sed, sodales massa. Aliquam id luctus metus. Donec ac neque semper, accumsan dui at, sollicitudin leo. Curabitur efficitur nisl dolor, a placerat dolor semper vitae. Cras sodales diam ut justo cursus, varius lobortis velit eleifend. Quisque a velit nec dui posuere pharetra. Etiam hendrerit urna sed quam ultrices bibendum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed fringilla arcu id sem rhoncus, a rhoncus felis egestas.

      Vestibulum commodo dapibus mauris. Praesent ullamcorper arcu in neque finibus pulvinar. In neque dolor, vestibulum a pharetra eu, elementum vitae sem. Cras pretium nibh non sapien suscipit, in ultricies nisl ultrices. Vestibulum cursus dolor sit amet laoreet bibendum. Proin odio ligula, facilisis at vulputate posuere, accumsan quis tellus. Aliquam pharetra ipsum vitae fermentum luctus. Sed ut dolor id velit egestas consequat et sit amet odio. Suspendisse eget convallis leo. Donec eu urna justo. Aliquam at ornare justo. Integer neque nibh, finibus id sem id, malesuada vehicula quam. Sed dapibus congue enim. Integer at pharetra magna, scelerisque bibendum lorem. Quisque ultricies in lectus vel blandit. Pellentesque purus ante, condimentum vitae rhoncus a, luctus sed tellus.

      Nulla vel dui at tellus commodo volutpat et id felis. Donec ultricies nisl ut augue pulvinar tincidunt. Vivamus hendrerit ante ac arcu finibus, non pellentesque nulla sodales. Mauris faucibus posuere erat nec aliquam. Duis vestibulum faucibus purus ac tincidunt. Mauris a aliquet erat, eget pellentesque justo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum eu nisl ullamcorper, sollicitudin neque sed, sodales erat. Etiam et vehicula metus. Maecenas eleifend eros id convallis facilisis. Donec sed lectus a lorem sollicitudin gravida. In eu rhoncus ex. Donec molestie hendrerit diam vitae vestibulum. Donec luctus nisl venenatis ipsum semper varius. In a enim aliquam, fringilla nunc in, ultricies velit. Fusce vel egestas nulla.

      Morbi ultricies auctor ex et porttitor. Aenean dignissim et ante nec lacinia. Proin feugiat elit a ex tempus, non aliquam enim efficitur. Aenean ut enim sodales, feugiat nunc at, vulputate ex. Suspendisse hendrerit lacinia mauris, non blandit velit dictum non. Vestibulum vehicula congue elit ac pellentesque. Mauris convallis, eros ut lobortis euismod, erat ligula volutpat augue, a euismod ipsum dui quis sem. Aliquam erat volutpat. Donec vestibulum tristique risus, nec hendrerit turpis aliquet aliquam. Mauris fermentum urna nulla, et varius justo imperdiet vestibulum. Maecenas vitae hendrerit felis, et ornare eros. Ut vel tellus porta, convallis enim vel, pharetra metus. Cras in nisl erat. Donec eget blandit erat. In nec ullamcorper arcu.
    </>
  );
}

function Footer() {
  return (
    <>

    </>
  );
}
