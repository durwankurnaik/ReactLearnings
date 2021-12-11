import Navbar from './components/Navbar';
import Shop from './components/Shop';

function App() {
  return (
    <>
      <Navbar />
      <h2 className="container text-center">Hello folks, this is a Redux app</h2>
      <Shop />
    </>
  );
}

export default App;
