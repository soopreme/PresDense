'use strict';

class AdminBadge extends React.Component {
    render() {
        return((this.props.isAdmin)
        ? <img style={{width: 40 + "px", height: 40 + "px"}} src="/res/adminIcon.png" />
        : null);
    }
}