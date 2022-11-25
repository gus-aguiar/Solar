import React from 'react';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div data-testid="planet-card">
        <p ata-testid="planet-name">{planetName}</p>
        <img src={ planetImage } alt={ planetName } />
      </div>
    );
  }
}
PlanetCard.propTypes = { planetName: PropTypes.string.isRequired };
PlanetCard.propTypes = { planetImage: PropTypes.string.isRequired };

export default PlanetCard;