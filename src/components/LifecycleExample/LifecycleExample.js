import React from "react";


const Item =({ item }) => {

    const { title } = item;

    return (
        <div>
            <h3>
                {title}
            </h3>
        </div>
    )
}

class LifecycleExample extends React.Component {


    state = {
        data: []
    }

    componentDidMount() {
        // console.log('componentDidMount');

        const url = 'https://jsonplaceholder.typicode.com/todos';

        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                // console.log(data);

                this.setState({
                    data:data
                })
            });
    }

    render() {

        // console.log('first render');
        // console.log(this.state.data);

        return(
            <div>
                <h3>LifecycleExample</h3>


            </div>
        )
    }
}

export default LifecycleExample;