'use strict';
class PlatformTableRow extends React.Component {
    render() {
        return (
            <tr key={this.props.platform}>
                <td key={"platform " + this.props.platform}>{this.props.platform}</td>
                <td key={"name " + this.props.name}>{this.props.name}</td>
            </tr>
        );
    }
}