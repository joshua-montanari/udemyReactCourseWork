import React, { useEffect, useRef, useContext } from 'react'
import classes from './Cockpit.css'
import AuthContext from '../../context/auth-context'

const cockpit = (props) => {

    const toggleBtnRef = useRef(null)
    const authContext = useContext(AuthContext) //pass in the Authorization object 
    //useContext Hook is for funcitonal componetnes as static contextType is for class based components
    //toggleBtnRef.current.click() toggles the button, will not work, cause func running before stuff is even rendered

    console.log(authContext.authenticated)

    useEffect( ()=> {
      console.log('cockpit.js: useEffect') //excutes every render cycle
      //http request...
      // setTimeout( () => {
      //   alert('saved data to cloud')
      // }, 1000);
      toggleBtnRef.current.click() //putting in this hook has it work after the first render cycle
      return () => {
        console.log('cockpit.js cleanup work useefffect') //works the same as componentdidunmount()
      }
    }, []) //only runs when this array is updated... empty arry, only runs the first time

    //can use useEffect() many times, just change the other funciton arguement
   
    useEffect(()=> {
      console.log('cockpit.js second useeffect')
      return () => {
        console.log('cockpit.js clean up in second useeffect')
      }
    })

    const assignedClasses = [];
    let btnClass = ''
    if(props.showPersons){
        btnClass = classes.Red;
    }
    
    if(props.personsLength <= 2){
      assignedClasses.push(classes.red); //classes = ['red']
    }
    if(props.personsLength <= 1){
      assignedClasses.push(classes.bold)//classes = ['red', 'bold']
    }
  
    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p> 
            <button 
              ref={toggleBtnRef}
              className={btnClass}
              onClick={props.clicked}> 
              Toggle Persons
            </button>
              <button onClick={authContext.login}>log in</button> 
        </div>
    );
}
//dont need the AuthContext compoentent when you created the authcontext variable with the useContext hook!!!

export default React.memo(cockpit) //only rerenders if it changes