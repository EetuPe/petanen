import { useState } from 'react';
import './App.css';
import { toast, Toaster } from 'react-hot-toast';
import { Slider } from './Slider';
import { items } from './items';

function App() {
  const [count, setCount] = useState(0);

  function greeting() {
    setCount(count + 1);
    toast.success(`count is ${count}`);
  }

  return (
    <div className="overflow-hidden scrollbar-hide">
      <Toaster />
      <div className="scrollbar-hide">
        <h1>Eetu Petänen</h1>
        <div className="card">
          <button onClick={() => greeting()}>Press Me!</button>
        </div>
        <h2>Projects I've worked on:</h2>
        <div className="h-[500px] w-full scrollbar-hide">
          <Slider items={items} width={450} visible={2}>
            {(item) => (
              <div className="h-full w-full scrollbar-hide">{item}</div>
            )}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default App;
