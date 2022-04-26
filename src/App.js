import './assets/css/App.css';

// Components
import TopNavBar from './components/TopNavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
    return (
        <>
            <TopNavBar title="A Y C" />
            <ItemListContainer />
            <div style={{textAlign: "center"}}>
                <button className="btn btn-active btn-accent" style={{color: "white"}}>Boton</button>
            </div>
        </>
    );
}

export default App;
