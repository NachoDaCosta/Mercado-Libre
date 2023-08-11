
import './App.css';
import Footer from './Footer/Footer';
import Nav from './Nav/nav';
import News from './News/News';
import Payment from './Payment/Payment';
import Products from './Products/Products';
import Copy from './Copy/Copy';


function App() {
  return (
    <div className="App">
        <Nav/>
        <News/>
        <Products/>
        <Payment/>
        <Footer/>
        <Copy/>
    </div>
  );
}

export default App;
