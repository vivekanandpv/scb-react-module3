import React from 'react';
import { useHistory } from 'react-router-dom';

const Home = (props) => {
  const history = useHistory();

  const toContact = () => {
    history.push('/contact');
  };

  return (
    <>
      <h4>
        Home Component{' '}
        <button className='btn btn-secondary btn-sm' onClick={toContact}>
          To Contact
        </button>
      </h4>
    </>
  );
};

export default Home;
