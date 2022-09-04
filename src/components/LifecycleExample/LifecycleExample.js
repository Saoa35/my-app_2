import React from "react";


const Item =({ item }) => {

    const { title, completed } = item;

    return (
        <div>
            <h3 style={{ color: completed ? 'red' : 'inherit'}}>
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

    componentWillUnmount() {
        console.log('Bye!');
    }

    render() {

        // console.log('first render');
        // console.log(this.state.data);

        return(
            <div>
                <h3>LifecycleExample</h3>

                {!this.state.data.length ? <h2>Loading...</h2>
                    : this.state.data.map(item => <Item key={item.id} item={item}/>)}
            </div>
        )
    }
}

export default LifecycleExample;