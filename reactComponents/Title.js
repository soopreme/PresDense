'use strict';

class Title extends React.Component {
    render() {
        return (
            <a style={{textDecoration: "none"}} onClick={this.goHome.bind(this)}><h1><span>PresDense</span></h1></a>
        )
    }
    goHome() {
        const {cp} = this.props;
        cp('home');
    }
}