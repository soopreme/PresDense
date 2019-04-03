'use strict';

class Index extends React.Component {
    render() {
        const {cp} = this.props
        return(
            <div>
                <Title cp={cp} />
                <LinkButton cp={cp} link="New" />
                <LinkButton cp={cp} link="Search" />
                <LinkButton cp={cp} link="View" />
            </div>
        )
    }
}