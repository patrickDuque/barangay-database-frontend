import React from 'react';

export default props => (
  <div className='SelectComponent uk-margin'>
    <label className='uk-text-center' htmlFor={props.id}>
      {props.label}
    </label>
    <select {...props} id={props.id}>
      {props.options.map((option, i) => (
        <option value={option} key={i + option + i}>
          {option}
        </option>
      ))}
    </select>
  </div>
);
