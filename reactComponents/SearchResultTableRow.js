'use strict';
class SearchResultTableRow extends React.Component {
    render() {
        var {platform, name, profileName, id} = this.props;
        return (
            <tr key={platform}>
                <td key={"platform " + platform}>{platform}</td>
                <td key={"name " + name}>{name}</td>
                <td key={"profile " + profileName}><a href={"http://localhost:3010/id/" + id}>{profileName}</a></td>
            </tr>
        );
    }
}