import React from 'react'
import './stylsheets/alert.css'

class Alert extends React.Component {

    reload = () => {
        window.location.reload()
    }

    render() {
        return (
            <div className="alert" style={{display: this.props.display}}>
                <div className="alert-card">
                    <h3>OOPS!</h3>
                    <p>You are offline</p>
                    <button 
                        className="reload btn btn-primary" 
                        onClick={this.reload}>
                        Try again
                    </button>
                </div>
            </div>
        )
    }
}
 
export default Alert;