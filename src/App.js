import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <SolarSystem />
        <Title headline='teste' />
      </div>
    );
  }
}

export default App;
//initial commit
