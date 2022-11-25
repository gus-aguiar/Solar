import React from 'react';
import Title from './Title';

class SolarSystem extends React.Component {
  render() {
    return (
      <header>
        <div data-testid="solar-system">
          <Title headline="Planetas" />
        </div>
      </header>
    );
  }
}

export default SolarSystem;
