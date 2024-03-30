import { Header } from "./components/Header/header"
import { Arthub } from "./pages/arthub/Arthub"
import Tracker from "./pages/trackersheet/Tracker"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Header/>
      <Routes>
      <Route path="/arthub" element={<Arthub/>} />
      <Route path="/tracker" element={<Tracker/>} />
      <Route index={true} element={<Arthub/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;

