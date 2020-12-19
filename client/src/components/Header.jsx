import React from 'react'
import './stylsheets/header.css'

class Header extends React.Component {

    reload = () => {
        window.location.reload()
    }

    render() {
        return (
            <header>
		        <img src="https://drive.google.com/uc?export=view&id=18MGoH1ogMFuNBV7UjupZywrPCDCzaCKl" alt="" />
                <h1 className="text-center">OutTube</h1>
            </header>
        )
    }
}
 
export default Header