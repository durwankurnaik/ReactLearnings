import './App.css';
import { Child } from './components/Parent Child/Child';
import { Parent } from './components/Parent Child/Parent';
// import { ObjectUseState } from './components/ObjectUseState/ObjectUseState';
// import { UseState } from './components/UseState/UseState';

function App() {
  return (
    <>
      {/* <UseState />
      <ObjectUseState /> */}

      <Parent />
      <Child />
    </>
  );
}

export default App;
