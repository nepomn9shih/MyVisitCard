import './style.css';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import { HashRouter } from 'react-router-dom';

function App() {
  return (
    <><HashRouter>
        <Header/>
        <Body/>
        <Footer/>
    </HashRouter>
    </>
  );
}

export default App;
