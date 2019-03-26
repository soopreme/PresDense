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
        return ((this.state.isLoading)
        ? <div className="container"><Loading /></div>
        : <div className="container">
            <img id="pfp" src={this.state.profileData.picurl} />
            <h2>{this.state.profileData.name}<AdminBadge isAdmin={this.state.profileData.isAdmin} /></h2>
            <h4>{this.state.profileData.bio}</h4>
          </div>
        )
    }
    getData() {
        fetch("http://localhost:3010/api/id/" + this.props.id)
        .then(res => {
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

$(() => {
    const domContainer = document.querySelector('.root');
    ReactDOM.render(<Profile id="0" />, domContainer);
})