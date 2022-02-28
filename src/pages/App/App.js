import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
          <Route exact path="/login">
            <div className="login">
              <LoginPage />
            </div>
          </Route>
          <Route exact path="/signup">
            <div className="signup">
              <SignupPage />
            </div>
          </Route>
          {userService.getUser() ? 
            <>
                <Route exact path="/">
                  <div className="home">
                    <HomePage user={user} />
                  </div>
                </Route>
                <Route path="/:username">
                  <div className="profile">
                    <ProfilePage user={user} handleLogout={handleLogout}/>
                  </div>
                </Route>
            </>
            :
            <Redirect to='/login'/>
          }
      </Switch>
    </div>
  );
}

export default App;
