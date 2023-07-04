import './style/App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Message from './components/Message';
import Footer from './components/Footer';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/message" element={<Message />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
