import './assets/css/App.css';

// Components
import TopNavBar from './components/TopNavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
    return (
        <>
            <TopNavBar title="A Y C" />
            <ItemListContainer cant="3" name="Cesar" />
            <div style={{textAlign: "center"}}>
                <button className="btn btn-active btn-accent" style={{color: "white"}}>Boton</button>
            </div>
        </>
    );
}

export default App;
