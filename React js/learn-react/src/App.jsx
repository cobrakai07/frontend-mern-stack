
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Props from './Components/Props';
import PersonComponent from './Components/PersonComponent';
import ParentChild from './Components/ParentChild';
import Parent from './Components/Parent';
import Counter from './Components/Counter';
import { useState } from 'react';
import ChannelComponent from './Components/ChannelComponent';


function App() {
 
 const [count, setCount] = useState(1);
 console.log("Whole App loaded!",count);

  return (
    <>
    <div>
      <Props Props='Kai'></Props>
        <div className='myCSS'>
          <p>Refractoring in REACT</p>
        <PersonComponent></PersonComponent>
        {/* <AddPerson></AddPerson> */}
      </div>
      
      <div className='myCSS'>
      <p>children prop in REACT</p>
        <Parent> 
          <ParentChild buttontext="MyButton"></ParentChild>
        </Parent>
      </div>
      <div className='myCSS'>
      <p>This counter will not reload whole page</p>
      <Counter></Counter>
      </div>

      
      <div className='myCSS'>
      <p>Setting the state Up</p>
      <ChannelComponent></ChannelComponent>
      </div>
      

        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>

    </div>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      
      </div>

    </>
  )
}

export default App
