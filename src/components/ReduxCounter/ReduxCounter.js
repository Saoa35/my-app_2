import React from "react";
import { connect } from "react-redux";

class ReduxCounter extends React.Component {

    handleInc () {
        this.props.dispatch({
            type: 'INC'
        })
    }

    render() {

        console.log(this.props);

        const { counter } = this.props;

        return(
            <div>
                <h3>Redux Counter</h3>

                <p>
                    <button onClick={this.handleInc.bind(this)}>
                        INC
                    </button>
                </p>

                <h4>
                    {counter}
                </h4>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        counter: state
    }
}

export default connect(mapStateToProps)(ReduxCounter);