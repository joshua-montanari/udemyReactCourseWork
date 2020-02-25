import React, {Component} from 'react';
import classes from './Person.css'
import Aux from '../../../hoc/Auxiliary'
import withClass from '../../../hoc/withClass'
import PropTypes from 'prop-types'
import AuthContext from '../../../context/auth-context'
//if using react.scrips 2.0, then you dont need to eject and update the css stuff, just change css file name to Person.module.css and import the same, and you wont need to eject
class Person extends Component {

    constructor(props){
        super(props)
        this.inputElementRef = React.createRef()
    }

    static contextType = AuthContext; //connects classbased compionent to your context, gives new property 'this.context' only in classbased. need hooks useContext to work in funcitonal based componenets

    componentDidMount(){
        //this.inputElement.focus()
        this.inputElementRef.current.focus()
        console.log(this.context.authenticated)
    }

    render(){
        console.log('[Person.js] is rendering...')
    //returning an array alows use to have ajacent jsx elements in the dom
    //you can also just wrap it in another component (BETTER PRACTICE) IE. React Fragment!!!
        return (
            //<div className='Person' style={style}> this.context, replaces the need for the AuthContext component inside of jsx
                <Aux>
                        {this.context.authenticated ? <p>Authenticated!</p> : <p>Please log in</p>} 
                 
                    <p onClick={this.props.click}>im {this.props.name} and i am {this.props.age} years old </p>
                    <p>{this.props.children}</p>
                    <input 
                    key='i3'
                    //ref={(inputEl) => {this.inputElement = inputEl}}
                    ref={this.inputElementRef}
                    type='text'
                    onChange={this.props.changed}
                    value={this.props.name}/>
                </Aux>
        );
    }
    
};

Person.propTypes ={
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}; // makes sure props are the right type of data, will thow an error if not

export default withClass(Person, classes.Person);