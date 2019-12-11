This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## TO REMEMBER / LEARN : 

The <Provider /> makes the Redux store available to any nested components that have been wrapped in the connect() function.

(The connect function) does not modify the component class passed to it; instead, it returns a new, connected component class that wraps the component you passed in.

// GET DATA FROM REDUX STORE INTO A COMPONENT 
// by convention mapStateToProps but any name can works
// the flow in the component js file 
// 1) import { connect } from 'react-redux
// 2) export default connect(mapStateToProps)(component)
// 3) define mapStateToProps(state)

// mapStateToProps is always taking first argument of state
// and returning an object showing up props inside a component 


// IMPORTANT REMARK 
// merging of stateProps and props of the connected component : 


connect accepts four different parameters, all optional. By convention, they are called:

mapStateToProps: Function

mapDispatchToProps: Function | Object

mergeProps: Function

options: Object

If your mapStateToProps function is declared as taking one parameter, it will be called whenever the store state changes, and given the store state as the only parameter.

Your mapStateToProps functions are expected to return an object. This object, normally referred to as stateProps, will be merged as props to your connected component.


EXAMPLE OF THE IMPORTANT REMARK : 

import React, { Component } from 'react'
import { connect } from 'react-redux'

class SongList extends Component {
  render(){
    console.log(this.props)
    return <div>SongList</div>
  }
}
const mapStateToProps = (state) => {
  return { songs: state.songs }
}

export default connect(mapStateToProps)(SongList)

--> OUPUT : this.props = state      and     this.props.songs = state.songs 
--> the merging was done 
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
