'use strict';
class NewContainer extends React.Component {

    render() {
        return(<div className="container"><New /></div>);
    }
}
$(() => {
    const domContainer = document.querySelector('.root');
    ReactDOM.render(<NewContainer />, domContainer);
})