import './styles';
import React from 'react';
import ReactDOM from 'react-dom';
import SignUp from './pages/signup';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%'
  }
};

const App = () => (
  <div style={styles.container}>
    <SignUp />
  </div>
);

ReactDOM.render(<App />, document.getElementById('content'));
