import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <header>
        <div data-testid="solar-system">
          <Title headline="Planetas" />
          {planets.map(({ name, image }) => (

            <PlanetCard planetName={ name } planetImage={ image } key={ name } />
          ))}
        </div>
      </header>
    );
  }
}

export default SolarSystem;
