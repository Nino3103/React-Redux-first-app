import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectSong } from '../actions'

class SongList extends Component {
  renderList(){

    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>

          <div className = "right floated content">
            <button className="ui button green"
            onClick = {() => this.props.selectSong(song)}>
              Select
            </button>
          </div>

          <div className="content"> {song.title}</div>
        </div>
      )
    })
  }

  render() {
   
    return <div className = "ui divided list"> {this.renderList()} </div>
  }
}


const mapStateToProps = (state) => {
  // the state is stored !
  // mapStateToProps is always taking first argument of state
  // and returning an object showing up props inside a component 
  console.log(state)
  return { songs: state.songs }
}

export default connect(mapStateToProps, { selectSong: selectSong})(SongList)

// GET DATA FROM REDUX STORE INTO A COMPONENT 
// by convention mapStateToProps but any name can works
// the flow : 1) import { connect } from 'react-redux
// 2) export default connect(mapStateToProps)(component)
// 3) define mapStateToProps(state)


// We pass the action creator in the connect function. 
//The connect function does a special operation on the function inside this object. 
// It looks all the functions inside this object and wraps it inside a new javascript function
// when we call the new javascript function, the connect function will automatically 
// call the action creator, take the action returned and call the dispatch function for us
// SO whenever we call the props.action creator, the connect function
// will take the action and throw it in the dispatch function for us
// SO anytime you call an action creator from a component, you will always going to pass it in the connect function


// By passing the mapStateToProps argument into our connect function, Redux connects this component to the Redux Store and provides the mapStateToProps function with the current state object returned by our reducers. We then set and return a key to reference that piece of the state object to use in our component songs: state.songs.

// It might be helpful to checkout the docs for combineReducers to see how state.songs is being set:

// The resulting reducer calls every child reducer, and gathers their results into a single state object. The state produced by combineReducers() namespaces the states of each reducer under their keys as passed to combineReducers()