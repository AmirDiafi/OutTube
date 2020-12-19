import React from 'react'
import Main from './components/Main'
import './App.css'

class App extends React.Component {
	render() {
		return (
			<div className='App'>
				<Main />
			</div>
		)
	}
}

export default App

//array of random search terms (made them code related)
// const searchTerms = [
// 	'factory%20functions',
// 	'data%20structures',
// 	'array%20functions%20javascript',
// 	'composition%20over%20inheritance',
// 	'lambda%20functions',
// 	'streams%20java',
// 	'higher%20order%functions%javascript',
// 	'functional%20programming',
// 	'c++%20lambda%20functions',
// 	'sorting%20algorithms',
// ]
// //a function to get a random search term
// const getSearchTerm = () =>
// 	searchTerms[Math.floor(Math.random() * (searchTerms.length - 1))]
// const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=&key=`
