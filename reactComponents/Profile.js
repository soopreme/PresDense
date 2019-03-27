//<PlatformTable data={this.state.profileData} />
'use strict';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            profileData: {},
            error: null
        }
    }
    render() {
        const {error, profileData, isLoading} = this.state;
        return ((isLoading)
        ? <div className="container"><Loading /></div>
        : (error === 404)
        ? <NotFound />
        : <div className="container">
            <img id="pfp" src={profileData.picurl} />
            <h2>{profileData.name}</h2>{(profileData.isAdmin) ? <AdminBadge /> : null}
            <h4>{profileData.bio}</h4>
            <PlatformTable profileData={profileData} />
          </div>
        )
    }
    getData() {
        fetch("http://localhost:3010/api/id/" + this.props.id)
        .then(res => {
            if(res.status === 404) {
                this.setState({isLoading: false, profileData: null, error: 404});
            }
            return res.json()
        })
        .then(json => {
            this.setState({isLoading: false, profileData: json, error: null});
        });
    }
    componentDidMount() {
        this.getData();
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
    ReactDOM.render(<Profile id={getID()} />, domContainer);
})