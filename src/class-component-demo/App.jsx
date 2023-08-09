import React from 'react';
import Counter from './Counter';

const App = (props) => {
  const [visible, setVisible] = React.useState(true);

  return (
    <>
      <div className='p-5'>
        <h2>
          React App{' '}
          <button
            className='btn btn-secondary btn-sm'
            onClick={() => setVisible(!visible)}
          >
            Toggle
          </button>
        </h2>
        <hr />
        {visible ? <Counter message='good morning' /> : null}
      </div>
    </>
  );
};

export default App;
