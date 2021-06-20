import React, { Component } from 'react';
import {
    Link
} from "react-router-dom";
class About extends Component {
    state = { count: 0 }
    render() {
        return (
            <div className="count">
                {this.state.count}
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>+</button>


                Call to action
                <Link to="/contact">Contact!</Link>
            </div>
        );
    }
}

export default About;