import React from 'react';

class PropTest extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.headerProp}</h1>
                <h2>{this.props.contentProp}</h2>
            </div>
        );
    }

}
PropTest.defaultProps={
headerProp:"shivkaran defult test",
 contentProp:"Content default Test"
}

export default PropTest;