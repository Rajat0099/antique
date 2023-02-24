
import Topbar from "./Navbar/Navigation";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
const App = () => {
  return (
    <Router>
    <Topbar />
    <Routes>
        <Route exact path='/' element={<Home />} />
        {/* <Route exact path='/' exact element={<Home />} /> */}
        {/* <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/blogs' element={<Blogs/>} />
        <Route path='/sign-up' element={<SignUp/>} /> */}
    </Routes>
    </Router>
  );
 };

export default App();