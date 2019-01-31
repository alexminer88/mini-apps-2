import React from 'react';

const EditButton = ({ year, desc, editButton}) => {
  return (
    <>
      <button onClick={()=>{editButton(desc)}}>Edit!</button>
    </>
  );
};

export default EditButton;
