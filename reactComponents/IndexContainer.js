'use strict';

class IndexContainer extends React.Component {
    render() {
        return(
            <div className="container">
                <Title />
                <LinkButton link="New" />
                <LinkButton link="Search" />
                <LinkButton link="View" />
            </div>
        )
    }
}
$(() => {
    const domContainer = document.querySelector('.root');
    ReactDOM.render(<IndexContainer />, domContainer);
})