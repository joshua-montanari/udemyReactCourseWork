import React, {Component} from 'react';
import classes from './Person.css'
//if using react.scrips 2.0, then you dont need to eject and update the css stuff, just change css file name to Person.module.css and import the same, and you wont need to eject
class Person extends Component {
    render(){
        console.log('[Person.js] is rendering...')
    
        return (
            //<div className='Person' style={style}>
            <div className={classes.Person}>
                <p onClick={this.props.click}>im {this.props.name} and i am {this.props.age} years old </p>
                <p>{this.props.children}</p>
                <input type='text'onChange={this.props.changed} value={this.props.name}/>
            </div>
        );
    }
    
};

export default Person;