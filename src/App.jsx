import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import UserProfile from "./pages/UserProfile.jsx"; // Import the UserProfile component

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/profile" element={<UserProfile />} /> {/* Add route for UserProfile */}
      </Routes>
    </Router>
  );
}

export default App;
