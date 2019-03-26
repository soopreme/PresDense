'use strict';

class LinkButton extends React.Component {
  render() {
    return (
      <button onClick={() => window.location += this.props.link}>
      {this.props.link}
      </button>
    );
  }
}

