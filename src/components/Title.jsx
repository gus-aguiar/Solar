import React from 'react';

class Title extends React.Component {
  render() {
    { headline } = this.props
    return (
        <h1>{headline}</h1>
    );
  }
}

export default Title;
