import React, {PureComponent} from 'react'
import Person from './Person/Person'

class Persons extends PureComponent{
  // static getDerivedStateFromProps(props, state){
  //   console.log('[Persons.js] getDerivedStateFromProps')
  //   return state
  // }

  // componentWillReceiveProps(props){
  //   console.log('Perosns.js] Componentwillreciveprops')
  // }

  // shouldComponentUpdate(nextProps, nextState){
  //   console.log('[Persons.js] shouldComponentUpdate')
  //   if(nextProps.Persons !== this.props.persons || nextProps.changed !== this.props.changed || nextProps.clicked !== this.props.clicked){
  //     return true;
  //   } else {
  //     return false;
  //   }
  //   //return true
  // }

  //PureComponenet instead of checking if all props change. Use regular component if you are only checking some props

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

  componentWillUnmount(){
    console.log('component will unmount')
  }

  render(){
    console.log('[Persons.js] rendering...')
    return (this.props.persons.map( (person, index) => {
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
    )
  }
}

      export default Persons