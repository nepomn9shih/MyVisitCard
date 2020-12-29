import './style.css';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <><BrowserRouter>
        <Header/>
        <Body/>
        <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
