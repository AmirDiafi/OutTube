import React from 'react'
import './stylsheets/videoitem.css'

class VideoItem extends React.Component {
    
    handleSelect = () => {
        this.props.handleSelect(this.props.data)
    }

    render() {
        const item_data = this.props.data.snippet
        const date = new Date(item_data.publishedAt.slice(0, 10))
        return (
            <div 
                className="video-item"
                onClick={this.handleSelect}
            >
                <img src={item_data.thumbnails.default.url} alt=""/>
                <div className="info">
                    <h5> {item_data.title} </h5>
                    <time> {date.toDateString()} </time>
                </div>
            </div>
        )
    }
}
 
export default VideoItem