import React from 'react';
import Components from './Components/Components';
import Parse from 'parse';

Parse.initialize(
  process.env.REACT_APP_APPLICATION_ID,
  process.env.REACT_APP_API_KEY
);
Parse.serverURL = process.env.REACT_APP_SERVER_URL;

const App = () => {
  return (
    <div>
      <Components />
    </div>
  );
};

export default App;
