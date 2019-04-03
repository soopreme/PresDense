'use strict';
var contentTypeHeader = new Headers({
    'Content-Type': 'application/json'
});
class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            searchQuery: '',
            isSearched: false,
            searchData: null,
            isEmpty: false
        }
    }
    render() {
        const {isLoading, searchQuery, searchData, isEmpty, isSearched} = this.state;
        const {cp} = this.props;
        return((isLoading)
        ? <Loading />
        : (isEmpty)
        ? <div>
            <Title cp={cp} />
            <input placeholder="Name..." value={searchQuery} onChange={evt => this.updateSearchValue(evt)} />
            <button onClick={this.search.bind(this)} style={{marginTop: 20 + "px"}} id="submitSearch">Search <img src="/res/searchIcon.png" style={{height: 30 + "px", width: 30 + "px", padding: 5 + "px"}}/></button>
            <EmptySearch />
          </div>
        : (isSearched)
        ? <div>
            <Title cp={cp} />
            <input placeholder="Name..." value={searchQuery} onChange={evt => this.updateSearchValue(evt)} />
            <button onClick={this.search.bind(this)} style={{marginTop: 20 + "px"}} id="submitSearch">Search <img src="/res/searchIcon.png" style={{height: 30 + "px", width: 30 + "px", padding: 5 + "px"}}/></button>
            <SearchResultTable cp={cp} data={searchData} />
          </div>
        : <div>
            <Title cp={cp} />
            <input placeholder="Name..." value={searchQuery} onChange={evt => this.updateSearchValue(evt)} />
            <br /><button onClick={this.search.bind(this)} style={{marginTop: 20 + "px"}} id="submitSearch">Search <img src="/res/searchIcon.png" style={{height: 30 + "px", width: 30 + "px", padding: 5 + "px"}}/></button>
          </div>
        )
    }
    updateSearchValue(evt) {
        this.setState({
          searchQuery: evt.target.value
        });
    }
    search() {
        this.setState({
            isLoading: true,
            isEmpty: false
        });
        fetch("http://localhost:3010/api/search/name", {
            method: 'POST',
            headers: contentTypeHeader,
            body: JSON.stringify({name: this.state.searchQuery})
        })
        .then(res => {
            if(res.status === 404) {
                return this.setState({
                    isLoading: false,
                    isEmpty: true
                })
            }
            return res.json()
        })
        .then(json => {
            this.setState({
                isLoading: false,
                searchData: json.json,
                isSearched: true,
                isEmpty: false
            });
        })
        .catch(err => {
            console.log(err);
            return this.setState({
                isLoading: false,
                isEmpty: true
            })
        })
    }
    componentDidMount() {
        this.setState({
            isLoading: false
        })
    }
}