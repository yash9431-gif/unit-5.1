
import './App.css';
import Filters from './components/Filters';
import Navbar from './components/Navbar';
import Offers from './components/Offers';
import Restaurants from './components/Restaurants';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Offers />
        <section className="near-you"></section>
      <Filters />
      <Restaurants />
      <section/>
    </div>
  );
}

export default App;
