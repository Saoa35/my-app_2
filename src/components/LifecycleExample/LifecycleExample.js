import React from "react";

class LifecycleExample extends React.Component {

    componentDidMount() {
        // console.log('componentDidMount');

        const url = 'https://jsonplaceholder.typicode.com/todos';

        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                console.log(data);
            })
    }

    render() {

        console.log('first render');

        return(
            <div>
                <h3>LifecycleExample</h3>
            </div>
        )
    }
}

export default LifecycleExample;