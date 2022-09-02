import React from "react";

class StatefullExample extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            counts: 4,
            list: [1, 2, 3, 4, 5],
            obj: {
                key1: 'key1'
            },
            isShow: true
        };

        this.handleClick = this.handleClick.bind(this);
    }
    
    

    handleClick() {  
       
       this.setState(state => {
        Object.entries(state.obj);
       })
       
                console.log(this.state)
            }

    render() {

        return(
            <div>
                <h3>StatefullExample</h3>

                <div>
                    <button onClick={this.handleClick}>
                        Click me!
                    </button>

                    <div>
                        <h3>State:</h3>

                    </div>
                </div>
            </div>
        )
    }
}

export default StatefullExample;