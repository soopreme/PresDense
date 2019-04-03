'use strict';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            path: 'home'
        }
    }

    changePath(path) {
        this.setState({ path });
    }

    render() {
        const { path } = this.state;
        return((path === 'home')
        ? <div className="container"><Index cp={this.changePath.bind(this)} /></div>
        : (path === 'New')
        ? <div className="container"><New cp={this.changePath.bind(this)}/></div>
        : (path === 'View')
        ? <div className="container"><Profile cp={this.changePath.bind(this)} id={localStorage.getItem('id')}/></div>
        : (path === 'Search')
        ? <div className="container"><Search cp={this.changePath.bind(this)} /></div>
        : !(isNaN(path))
        ? <div className="container"><Profile cp={this.changePath.bind(this)} id={path}/></div>
        : <div className="container"><NotFound cp={this.changePath.bind(this)} /></div>)
    }
}
$(() => {
    const domContainer = document.querySelector('.root');
    ReactDOM.render(<App />, domContainer);
})