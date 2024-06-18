// App.js
import React, { Fragment, useState } from "react";
import Navbar from './asset/components/Navbar';
import Menu from './asset/components/Menu';
import Logins from './asset/components/Logins';
import Routes from './Routes';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Fragment>
      {isLoggedIn ? (
        <Fragment>
          <Navbar />
          <div class="container-fluid">
            <div class="row">
              <Menu />
              <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <Routes />
              </main>
            </div>
          </div>
        </Fragment>
      ) : (
        <Logins onLogin={handleLogin} />
      )}
    </Fragment>
  );
}

export default App;