import { useState } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import Index from "./pages/index";
import SignIn from "./pages/sign-in";
import User from "./pages/user";

function App() {
  const [userDataStorage, setUserDataStorage] = useState(null);
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route exact path='/home' element={<Index/>}/>
          <Route path='/signIn' element={<SignIn setUserDataStorage={setUserDataStorage}/>}/>
          <Route path='/user/profile' element={<User userDataStorage={userDataStorage}/>}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
