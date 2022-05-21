import './assets/css/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Components
import TopNavBar from './components/TopNavBar';
import ProductItemListContainer from './components/ProductItemListContainer';
import ProductItemDetail from './components/ProductItemDetail';

function App() {
    return (
        <BrowserRouter>
            <TopNavBar title="A Y C" />
            <Routes>
                <Route path='/' element={<ProductItemListContainer title="todos" />}/>
                <Route path='/category/:categoryId' element={<ProductItemListContainer />}/>
                <Route path='/peripheral/:peripheralId' element={<ProductItemDetail/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
