import React from 'react';
import { useParams } from 'react-router-dom';

const Customers = (props) => {
  const { id } = useParams();

  console.log('id', id);

  return (
    <>
      <h4>Customers Component</h4>
    </>
  );
};

export default Customers;
