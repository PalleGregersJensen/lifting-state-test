import React from 'react';


export default function EnterValue(props) {
    console.log(props);
    const handleChange = (event) => { 
        props.setValue(event.target.value);
    }



  return (
    <div>
      <h2>Enter a value</h2>
          <input type="text" onChange={handleChange} />
    </div>
  )
}