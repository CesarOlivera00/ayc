import './assets/css/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Components
import TopNavBar from './components/TopNavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetail from './components/ItemDetail';

function App() {
    return (
        <BrowserRouter>
            <TopNavBar title="A Y C" />
            <Routes>
                <Route path='/' element={<ItemListContainer />}/>
                <Route path='/peripheral/:peripheralId' element={<ItemDetail/>}/>
            </Routes>
            
            <div style={{textAlign: "center"}}>
                <button className="btn btn-active btn-accent" style={{color: "white"}}>Boton</button>
            </div>
        </BrowserRouter>
    );
}

export default App;
