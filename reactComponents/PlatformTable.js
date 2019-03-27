'use strict';
class PlatformTable extends React.Component {
    tableData() {
        var profileData = this.props.profileData;
        return(<tbody>
            <tr key={"head"}>
                <th key={"platform head"}>Platform</th>
                <th key={"name head"}>Name</th>
            </tr>
            {Object.keys(profileData).filter(key => !(key === "name") ? !(key === "picurl") ? !(key === "isAdmin") ? !(key === "bio") ? !(key === "profileID") : false : false : false : false).map(key => {
                if(profileData[key] === "") {
                    return null;
                }
                return(<PlatformTableRow platform={key} name={profileData[key]} />);
        })}</tbody>);
    }
    render() {        
        return(<table>
            {this.tableData()}
        </table>);
    }
}

