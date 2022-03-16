import Button from './Button.js';
import ListComponent from './ListComponent';
import './App.css';
import { useState } from 'react';

function App() {

  const [component_1, setComponent_1] = useState([""]);
  const [component_2, setComponent_2] = useState(['', 'Practice Code', 'Learn something New', 'Meditate', 'Yoga', 'Listen Music', 'Take a ride to Beach', 'Listen chants']);


  function addComponent() {

    if (component_1.length < 8) {

      component_2.splice(0, 1);
      setComponent_1([...component_1, component_2[0]]);
      setComponent_2([...component_2, component_2[0]]);

    } else {


      alert("No more tasks to add!");

    }

  }

  function removeComponent() {

    if (component_1.length > 1) {

      component_1.splice(component_1.length - 1, 1);

      setComponent_1([...component_1])

    } else {

      alert("No more tasks to remove!");

    }

  }



  return (
    <div className='Container'>
      <div className="SectionContainer">
        <div className="Btn">
          <Button onClick={addComponent} text="Add Task" />
          <Button onClick={removeComponent} text="Delete Task" />
        </div>
        <div className="ListContainer">
          {component_1.map((item, i) => (<ListComponent text={item} />))}
        </div>
      </div>
    </div >

  );
}

export default App;
