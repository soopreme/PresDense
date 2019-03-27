'use strict';
class SearchResultTable extends React.Component {
    render() {
        var {data} = this.props;
        var tableData = data.map(dataItem => {
            const {foundPlatform, foundName, profileName, foundProfileID} = dataItem;
            if(foundPlatform === "picurl" || foundPlatform === "profileID" || foundPlatform === "bio" || foundName === ""){
                return null;
            }
            return(<SearchResultTableRow platform={foundPlatform} name={foundName} profileName={profileName} id={foundProfileID} />)
        }) 

        return(<table>
            <tbody>
            <tr>
                <th>Platform</th>
                <th>Name</th>
                <th>Profile</th>
            </tr>
            {tableData}
            </tbody>
        </table>);
    }
}