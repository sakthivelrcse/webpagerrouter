import React from 'react';
import FooterComponent from './Component/FooterComponent/FooterComponent';
import NavbarComponent from './Component/NavbarComponent/NavbarComponent';


const App = () => {
  return (
    <React.Fragment>
      <NavbarComponent />
      <div>
        <FooterComponent />
      </div>
    </React.Fragment>
  );
}

export default App;
