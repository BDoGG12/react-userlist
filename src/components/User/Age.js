import React from 'react';

const Age = (props) => {


  const ageEvent = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    props.onAgeHandler(e.target.value);
  }

  return (
    <div>
      <label>Age:</label>
      <input type="number" onChange={ageEvent} max="3"></input>
    </div>
  );
}

export default Age;