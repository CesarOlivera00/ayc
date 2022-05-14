import './assets/css/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from "react";

// Components
import TopNavBar from './components/TopNavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetail from './components/ItemDetail';
import { DarkModeContext } from './context/darkModeContext';

const styleButtonFiltro = {
    color: "white",
    marginLeft: "10px",
    marginRight: "10px",
    marginBottom: "10px",
    marginTop: "10px"
}

const styleContent = {
    height: "100vh",
    backgroundColor: "white",
}

const styleDarkContent = {
    height: "100vh",
    backgroundColor: "#34495E"
}


function App() {
    const [isDarkMode, setDarkMode] = useState(false);

    const DarkModeHandler = () => {
        setDarkMode(!isDarkMode);
    }

    return (
        <div style={ (isDarkMode ? styleContent : styleDarkContent) }>
            <DarkModeContext.Provider value={isDarkMode}>
                <BrowserRouter>
                    <TopNavBar title="A Y C" />
                    <div style={{textAlign: "right", margin: "5px"}}>
                        <button className="btn" onClick={DarkModeHandler}>{ (isDarkMode ? "Desactivar" : "Activar") + " Modo Oscuro"}</button>
                    </div>
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
            </DarkModeContext.Provider>
        </div>
    );
}

export default App;
