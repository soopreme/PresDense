'use strict';

class LinkButton extends React.Component {
  render() {
    const {link, cp} = this.props
    return (
      <button onClick={() => cp(link)}>
      {link}
      </button>
    );
  }
}

