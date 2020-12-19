import React from 'react'
import './stylsheets/video.css'
import {
    BsChevronDoubleDown, 
    BsChevronDoubleUp,
    BsCameraVideoFill, 
    BsMusicNoteBeamed
} from 'react-icons/bs'

class Video extends React.Component {

    state = {isOpen: false}

    handleDownloadVideo = () => {
        this.props.handleDownload(this.props.data, 'video', 'highest')
    }

    handleDownloadAudio = () => {
        this.props.handleDownload(this.props.data, 'audio', 'audioonly')
    }

    handleOpen = () => this.setState({isOpen: !this.state.isOpen})

    render() {
	console.log(this.props.data)
        const {data} = this.props
        const date = data?new Date(data.snippet.publishedAt.slice(0, 10)):null
        return (
            <>
            {data?
                <div className="col-12 col-lg-7">
		            <div className="main-video ">
                        <div className="frame">
                            <iframe 
                                title={data.id.videoId}
                                src={'https://www.youtube.com/embed/'+this.props.data.id.videoId}
                                frameBorder="0">
                            </iframe>
                        </div>
                        <hr/>
                        <div className="video-detailt">
                            <h4 className="title">
                                {data.snippet.title}
                            </h4>
                            <hr />
                            <div className="download-btns">
                                <button 
                                    onClick={this.handleDownloadVideo}
                                    className="btn btn-primary">
                                    Download <BsCameraVideoFill/>
                                    </button>
                                <button 
                                    onClick={this.handleDownloadAudio}
                                    className="btn btn-primary">
                                    Download <BsMusicNoteBeamed/>
                                </button>
                            </div>
                        </div>
			            <hr />
			            <div className="staff">
                            <div className='channel-info'> <span className='flag'>{data.snippet.channelTitle.substr(0, 1).toUpperCase()}</span><div><b>{data.snippet.channelTitle}</b><time>{date.toDateString()}</time></div></div>
                            <span className='icon'
                                onClick={this.handleOpen}>
                                {!this.state.isOpen
                                ?<BsChevronDoubleDown />
                                :<BsChevronDoubleUp/>
                                }
                            </span>
                        </div>
                        <hr/>
                        <p 
                            className={this.state.isOpen?"isopen":"isclose"}>
                            {data.snippet.description}
                        </p>
                    </div>
                </div>
                :<h5 className="text-center wait-msg">Fetching Data <span></span><span></span><span></span></h5>}
            </>
        )
    }
}

export default Video