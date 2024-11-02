import React from 'react';
import './styles/App.css';
import Map from './components/Map'; 
import Timeline from './components/Timeline';  
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';  // Import Router, Routes, and useNavigate

// Home Component with the button to redirect to /map
function Home() {
  const navigate = useNavigate();  // Hook for navigating to another route

  const goToMap = () => {
    navigate('/map');  // Redirect to /map when the button is clicked
  };
  const goToTimeline = () => {
    navigate('/timeline');
  };

  return (
    <div>
      <header className="App-header">
        <h1>PuckTales - Hockey History & Fan Culture</h1>
        <button onClick={goToMap}>Go to Map</button>  {/* Button to navigate to /map */}
        <button onClick={goToTimeline}>Go to Timeline</button>
      </header>
      <h2>Welcome to PuckTales!</h2>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">

        
        <Routes>
          <Route path="/" element={<Home />} />  {/* Home component with the button */}
          <Route path="/map" element={<Map />} />  {/* React Router handles /map */}
          <Route path="/timeline" element={<Timeline />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
