import React from 'react';

const Text = () => {
    return <p>Text component</p>;
}

class Exampales extends React.Component {

    render() {

        const str = 'some text',
              num = +((Math.random() * 100).toFixed(2)),
              bool = true,
              arr = [1, 2, 3, 4, 5],
              jsxTitle = <h3>Examples {str} <Text/></h3>,
              obj = {
                k1: 'key 1',
                k2: 'key 2'
              };
        const myFunc = (obj) => {
            return obj.k1 + ' ' + obj.k2;
        }

        if(!bool) {
            return <h2>Boolean is incorrect!</h2>
        }

        return(
            <div>
                {jsxTitle}

                {bool && <h4>Boolean is correct</h4>}

                <p>
                    My string: {str}
                </p>

                <p>
                    Random number: {num}
                </p>

                <p>
                    array: {arr}
                </p>

                <p>
                    Object: {JSON.stringify(obj)}
                </p>

                <p>
                    Function: {myFunc(obj)}
                </p>
            </div>
        )
    }
}

export default Exampales;