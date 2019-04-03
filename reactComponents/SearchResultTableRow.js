'use strict';
class SearchResultTableRow extends React.Component {
    render() {
        var {platform, name, profileName, id, cp} = this.props;
        return (
            <tr key={platform}>
                <td key={"platform " + platform}>{platform}</td>
                <td key={"name " + name}>{name}</td>
                <td key={"profile " + profileName}><a onClick={this.goToID.bind(this)}>{profileName}</a></td>
            </tr>
        );
    }
    goToID() {
        var {id, cp} = this.props;
        cp(id);
    }
}