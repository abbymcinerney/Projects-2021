import React from 'react';
import ReactDOM from 'react-dom';




// class Student extends React.Component {
//     constructor(){
//         super();
//         this.state = {webDesign: "like"};
//     }
//     render(){
//         return <h2>i am a student who {this.state.webDesign}s web design </h2>
//     }
// }

function Student (){
    const element = (
        <div> <h1>CSY2043 - Website Design </h1> 
        <p>This module focuses on creating client side software as well as web applications for the World Wide Web.. </p> 
        <ul> 
            <li>Field: Computing</li> 
            <li>Level: BSc</li> 
            <li>Lecturer: Dr Muawya Eldaw</li> 
            <li>Day: Tuesday</li> 
            <li>Time: 16:00</li> 
        </ul></div>
    )
    return element;
        
    
}



ReactDOM.render(<Student/>, document.getElementById('root'));