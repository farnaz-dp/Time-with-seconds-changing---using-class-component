import React from 'react'
import ReactDOM from 'react-dom'

class Time extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            date : new Date().toLocaleTimeString()
        }
    };

    tick(){
        this.setState({date : new Date().toLocaleTimeString()})
    };

    componentDidMount() {
        this.tickID = setInterval(()=> this.tick() , 1000 );
    };

    componentWillUnmount() {
        clearInterval(this.tickID)
    };

    render() {
        return (
            <div>
                <h1>
                    Time is {this.state.date}
                </h1>
            </div>
        )
    }
};


ReactDOM.render(
     <Time/>,
    document.getElementById("root")
);


