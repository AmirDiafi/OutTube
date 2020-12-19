import React from 'react'
import './stylsheets/searchbar.css'
import {FaYoutube} from 'react-icons/fa'

class Searchbar extends React.Component {
    constructor() {
        super()
        this.submit_btn = React.createRef()
    }
    state = {
        value: ''
     }

     handleChange = (e) => {
        this.setState({value: e.target.value})
        if(e.target.value.length>0) {
            this.submit_btn.current.removeAttribute('disabled')
        } else {
            this.submit_btn.current.setAttribute('disabled', true)
        }
     }

     handleSubmit=(e)=> {
        e.preventDefault()
        this.props.handleSearch(this.state.value)
        this.setState({value: ''})
        this.submit_btn.current.setAttribute('disabled', true)
    }

    render() {
        return (
            <div className="searchbar">
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="search" 
                        placeholder='Search Video To Download' 
                        onChange={this.handleChange} 
                        value={this.state.value}
                    />
                    <button 
                        ref={this.submit_btn}
                        disabled
                        type="submit">
                        Search <FaYoutube />
                    </button>
                </form>
            </div>
        )
    }
}
 
export default Searchbar