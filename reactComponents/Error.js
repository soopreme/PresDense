'use strict';
class Error extends React.Component {
    render() {
        return(
        <div>
            <Title />
            <img src="/res/sooSad.png" />
            <h1>Thats an error.</h1>
            <p>It seems like something went wrong. please <a href="..">go home</a> and try again, and if the problem persists contact an administrator.</p>
        </div>)
    }
}