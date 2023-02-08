// Step 1: Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '.App';


// Step 2: Get a reference to the div with ID root
const el = document.getElementById('root');


// Step 3: Tell React to take control of that element
const root = ReactDOM.createRoot(el);


// Step 4: Create a component 
//function App(){
    //let message = 'Bye there';

    //if(Math.random() > 0.5){
    //    message = 'Hello there';
    //}

    //return <hi> {new Date().toLocaleTimeString()} </hi>;

    /*const name = 'Dov';
    const age = 20;
    return(
        <h1>
            Hi, my name is {name} and my age is {age}
        </h1>
    );
    */

    /*const inputType = 'number';
    const minValue = 5;
    
    return <input style={{ border: '3px solid red' }} type={inputType} min={minValue} />;
    */

    /*return (
        <input placeholder="hi there" />
    );*/

//}


// Step 5: Show the component on the screen
root.render(<App />);
