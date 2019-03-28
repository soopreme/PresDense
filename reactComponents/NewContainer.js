'use strict';
class NewContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDone: false,
            isLoading: false,
            isError: false,
            doneID: null
        }
    }
    render() {
        const {isError, isLoading, isDone, doneID} = this.state
        return((isLoading)
        ?   <div className="container"><Loading /></div>
        :   (isDone)
        ?   <div className="container"><Profile id={doneID} /></div>
        :   (isError)
        ?   <div className="container"><NotFound /></div>
        :   <div className="container">
                <Title />
                <input placeholder="Profile picture URL" ref="picurl"/>
                <input placeholder="Name" ref="name"/>
                <textarea placeholder="Bio" ref="bio"></textarea>
                <input placeholder="GitHub" ref="github"/>
                <input placeholder="Discord" ref="discord"/>
                <input placeholder="Snapchat" ref="snapchat"/>
                <input placeholder="Instagram" ref="instagram"/>
                <input placeholder="Reddit" ref="reddit"/>
                <input placeholder="Steam" ref="steam"/>
                <input placeholder="Twitter" ref="twitter"/>
                <input placeholder="Facebook" ref="facebook"/>
                <br /><button onClick={this.newProfile.bind(this)}>Submit.</button>
            </div>
        );
    }
    newProfile() {
        var contentTypeHeader = new Headers({
            'Content-Type': 'application/json'
        });
        const {picurl, name, bio, github, discord, snapchat, instagram, reddit, steam, twitter, facebook} = this.refs
        var userProfile = {
            picurl: picurl.value,
            name: name.value,
            bio: bio.value,
            github: github.value,
            discord: discord.value,
            snapchat: snapchat.value,
            instagram: instagram.value,
            reddit: reddit.value,
            steam: steam.value,
            twitter: twitter.value,
            facebook: facebook.value,
            isAdmin: false
        }
        this.setState({
            isLoading: true
        });
        fetch('http://localhost:3010/api/new', {
            method: 'POST',
            headers: contentTypeHeader,
            body: JSON.stringify(userProfile)
        })
        .then(res => {
            return res.json()
        })
        .then(json => {
            this.setState({
                isDone: true,
                isLoading: false,
                isError: false,
                doneID: json.id
            });
            localStorage.setItem('id', json.id);
        })
        .catch(err => {
            this.setState({
                isError: true,
                isLoading: false
            });
            console.error(err);
        })
    }
}
$(() => {
    const domContainer = document.querySelector('.root');
    ReactDOM.render(<NewContainer />, domContainer);
})