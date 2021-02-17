import React from 'react';
import ReactDOM from 'react-dom';

const myfirstelement = <h2>Welcome to my first react app</h2>
class Student extends React.Component {
    constructor(){
        super();
        this.state = {webDesign: "like"};
    }
    render(){
        return <h2>i am a student who {this.state.webDesign}s web design </h2>
    }
}

// function Student (){
//     return <h1>I am a student of type function</h1>;
// }



ReactDOM.render(<Student />, document.getElementById('root'));