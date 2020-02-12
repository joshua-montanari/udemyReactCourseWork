import React, {Component} from 'react'
import Person from './Person/Person'

class Persons extends Component{
  // static getDerivedStateFromProps(props, state){
  //   console.log('[Persons.js] getDerivedStateFromProps')
  //   return state
  // }

  // componentWillReceiveProps(props){
  //   console.log('Perosns.js] Componentwillreciveprops')
  // }

  shouldComponentUpdate(nextProps, nextState){
    console.log('[Persons.js] shouldComponentUpdate')
    return true
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('[Perosns.js] getssnapshotbeforUopdate')
    return {message: 'snapshot! '};

  }

  // componentWillUpdate() {

  // }

  componentDidUpdate(prevProps, prevState, snapshot ){
    console.log('[Perosns.js] COMPONENTDidUpdate')
    console.log(snapshot)
  }

  render(){
    console.log('[Persons.js] rendering...')
    return this.props.persons.map( (person, index) => {
      return (
      <Person 
        click={() => this.props.clicked(index)}
        name={person.name}
        age={person.age}
        key={person.id}
        changed={(event)=> this.props.changed(event, person.id)}
        /> 
      )
    })
  }
}

      export default Persons