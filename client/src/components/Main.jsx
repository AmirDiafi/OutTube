import React from 'react'
import Searchbar from './Searchbar'
import VideoList from "./VideoList"
import Video from "./Video"
import Alert from "./Alert"
import Header from "./Header"
import Footer from "./Footer"

class Main extends React.Component {
    constructor(props) {
		super(props)
        this.YOUTUBE_API_KEY = 'AIzaSyCTUDAp5ocZZF3tkH63uTNUnM-f7XeWD8g'
        this.AlertOffline = React.createRef()
		this.state = {
            data: [],
            static_data: [],
            selected_video: undefined,
            display: 'none'
		}
    }
    
    sendRequest = (value) => {
        this.setState({display: 'none'})
        try {
            const URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${value}&key=${this.YOUTUBE_API_KEY}&type=video`
            fetch(URL)
            .then((result) => result.json())
            .then((final_result) => {
                this.setState({
                    static_data: final_result,
                    data: final_result.items.filter(item=>item.id.videoId!==final_result.items[0].id.videoId),
                    selected_video: final_result.items[0]
                })
            })
        } catch (error) {
            console.log(error)
        }
    }

	componentDidMount() {
        // Make a random search value first time
	const {language} = navigator
        const options = [`hit ${language==="en-GB"?'english':'arabic'} pop`, 'pop']
        const search_val = options[Math.floor(
            Math.random()*options.length)]

        // Look if the use is online on mouning first time
        if (navigator.onLine) {
            this.sendRequest(search_val)
        } else {
            this.setState({display: 'flex'})
        }

        // then add the event listener
        window.addEventListener('online', () => {
            this.sendRequest(search_val)
        })

        window.addEventListener('offline', () => {
            this.setState({display: 'flex'})
        })
    }

    componentWillUnmount() {
        window.removeEventListener('online', this.sendRequest)
    }

    handleSearch = (value) => {
	this.setState({data: [], static_data: [] , selected_video: undefined})
        this.sendRequest(value)
    }

    handleSelect = (value) => {
        this.setState({
            selected_video: value,
            data: this.state.static_data.items.filter(item=>item.id.videoId!==value.id.videoId)
        })
        setTimeout(() => window.scrollTo(0, 200), 0)
    }

    handleDownload = (videoDetails, type, quality) => {
        try {
            const {videoId} = videoDetails.id
            const {title} = videoDetails.snippet
			const url_val = `https://www.youtube.com/watch?v=${videoId}`
			if (navigator.onLine && url_val) {
				this.sendURL(url_val, type, title, quality)
			} else {
				window.alert('OOPS! There is an error')
			}
		} catch (error) {
			console.log(error)
            window.alert('OOPS! there is an error: '+error)
		}
    }

    sendURL = (url, type, title, quality) => {
        window.location.href = `/api/video_download?URL=${url}&type=${type}&title=${title}&quality=${quality}`
    }

    render() {
        return (
            <div className="container">
                <Alert display={this.state.display} />
		        <Header />
                <Searchbar handleSearch={this.handleSearch} />
                <hr/>
		{this.state.data&&this.state.data.length>0?
                <div className="main-show row">
                    <Video 
                        data={this.state.selected_video}
                        handleDownload={this.handleDownload} />
                    <VideoList 
                        handleSelect={this.handleSelect}
                        data={this.state.data} />
		<Footer />
		        </div>
		:<h5 className="text-center wait-msg">Fetching Data <span></span><span></span><span></span></h5>}
            </div>
        )
    }
}
 
export default Main