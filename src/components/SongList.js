import React, { Component } from 'react'
import { connect } from 'react-redux'

class SongList extends Component {
  renderList(){

    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>

          <div className = "right floated content">
            <button className="ui button success">
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

// GET DATA FROM REDUX STORE INTO A COMPONENT 
// by convention mapStateToProps but any name can works
// the flow : 1) import { connect } from 'react-redux
// 2) export default connect(mapStateToProps)(component)
// 3) define mapStateToProps(state)

const mapStateToProps = (state) => {
  // the state is stored !
  // mapStateToProps is always taking first argument of state
  // and returning an object showing up props inside a component 
  return { songs: state.songs }
}

export default connect(mapStateToProps)(SongList)
