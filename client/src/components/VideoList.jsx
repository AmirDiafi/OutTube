import React from 'react'
import VideoItem from "./VideoItem"

class ListItem extends React.Component {
    render() {
        const {data} = this.props
        return (
            <div className="video-list col-12 col-lg-5">
                {data.length>0
                ?data.map(item_data=>
                <VideoItem 
                    data={item_data}
                    key={item_data.id.videoId}
                    handleSelect={this.props.handleSelect}
                />)
                :<h5 className="text-center wait-msg">Fetching Data <span></span><span></span><span></span></h5>}
            </div>
        )
    }
}
 
export default ListItem