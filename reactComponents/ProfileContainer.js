'use strict';

class ProfileContainer extends React.Component {
    render() {
        return(<div className="container"><Profile id={this.props.id} /></div>)
    }
}

var viewProfileLink = "http://localhost:3010/View";
var notFoundLink = "http://localhost:3010/404";

function getID() {
    if(window.location.href === viewProfileLink) {
        return grabIDFromLocalStorage()
    } else {
        var untreatedIDArray = (window.location.toString()).split('/');
        var Id = untreatedIDArray[untreatedIDArray.length-1];
        return Id;
    }
}

function grabIDFromLocalStorage() {
    var id = localStorage.getItem('id');
    if(id){
        return id;
    } else {
        window.location = notFoundLink;
    }
}

$(() => {
    const domContainer = document.querySelector('.root');
    ReactDOM.render(<ProfileContainer id={getID()} />, domContainer);
})