import './App.css';
import Home from "./pages/Home";
import District from "./pages/District";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddUser from "./user/AddUser";
import ResponsiveAppBar from "./layout/Navbar";
import Comparison from "./comparison/Comparison";
import Trends from "./trends/Trends";
import Profile from "./pages/Profile";
import Logout from "./pages/Logout";
import Admin from "./pages/Admin";
import EditUser from "./user/EditUser";
import ViewUser from "./user/ViewUser";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
        <Router>
            <ResponsiveAppBar />

            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/district" element={<District />}  />
                <Route exact path="/comparison" element={<Comparison />}  />
                <Route exact path="/trends" element={<Trends />}  />
                <Route exact path="/admin" element={<Admin />}  />
                <Route exact path="/profile" element={<Profile />} />
                <Route exact path="/logout" element={<Logout />} />

                <Route exact path="/adduser" element={<AddUser />} />
                <Route exact path="/edituser/:id" element={<EditUser />} />
                <Route exact path="/viewuser/:id" element={<ViewUser />} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;

// https://stackoverflow.com/questions/70554412/mui-appbar-how-to-go-to-the-pages
