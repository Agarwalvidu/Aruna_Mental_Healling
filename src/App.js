import { Header } from "./components/Header/header"
import { Arthub } from "./pages/arthub/Arthub"
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Header/>
      <Routes>
      <Route path="/arthub" element={<Arthub/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;

