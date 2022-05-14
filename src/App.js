import './assets/css/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Components
import TopNavBar from './components/TopNavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetail from './components/ItemDetail';

const styleButtonFiltro = {
    color: "white",
    marginLeft: "10px",
    marginRight: "10px",
    marginBottom: "10px",
    marginTop: "10px"
}

function App() {
    return (
        <BrowserRouter>
            <TopNavBar title="A Y C" />
            <div style={{textAlign: "center"}}>
                <a className="btn btn-active btn-info" style={styleButtonFiltro} href="/">Todo</a>
                <a className="btn btn-active btn-info" style={styleButtonFiltro} href="/category/1">Teclados</a>
                <a className="btn btn-active btn-info" style={styleButtonFiltro} href="/category/2">Mouses</a>
            </div>
            <Routes>
                <Route path='/' element={<ItemListContainer />}/>
                <Route path='/category/:categoryId' element={<ItemListContainer />}/>
                <Route path='/peripheral/:peripheralId' element={<ItemDetail/>}/>
            </Routes>
            
            <div style={{textAlign: "center"}}>
                <button className="btn btn-active btn-accent" style={{color: "white"}}>Boton</button>
            </div>
        </BrowserRouter>
    );
}

export default App;
