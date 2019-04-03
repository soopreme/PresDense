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
        const {cp} = this.props;
        return ((isLoading)
        ? <Loading />
        : (error === 404)
        ? <NotFound />
        : <div>
            <Title cp={cp} />
            <img id="pfp" src={profileData.picurl} />
            <h2>{profileData.name}</h2>{(profileData.isAdmin) ? <AdminBadge /> : null}
            <h4>{profileData.bio}</h4>
            <ProfilePlatformTable profileData={profileData} />
          </div>
        )
    }
    getData() {
        fetch("http://localhost:3010/api/id/" + this.props.id)
        .then(res => {
            if(res.status === 404) {
                return this.setState({isLoading: false, profileData: null, error: 404});
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