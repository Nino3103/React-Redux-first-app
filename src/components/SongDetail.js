import React from 'react'
import {connect} from 'react-redux'

const SongDetail = (props) => {
  // props = state.selectedSong --> props est le fruit de mapStateToProps AHAH moment props = what mapStateToProps returns + dispatch function
  if (!props.song){
    return <div>SELECT A SONG</div>
  }
  return (
    <div>
      <h3> Details for : </h3>
      <iframe></iframe>
      <p> Title : {props.song.title}</p>
      <p> Duration : { props.song.duration} </p>
    </div>
    
  )
  
}

const mapStateToProps = (state) => {
  return {song : state.selectedSong}
}

export default connect(mapStateToProps)(SongDetail)

// AGAIN : we don't use the dispatch function directly, we instead wired up our action creator to the connect function