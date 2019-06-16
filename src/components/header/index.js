import React, {Component} from 'react';

export default class Header extends Component{




    render(){
        return(<header className='topbar'>
        <nav className='navbar top-navbar navbar-expand-md navbar-light'>
            <div className='navbar-header'>
                <a className='navbar-brand' href='#'>
                    <b>
                        <img src='src/assets/images/logo-icon.png' alt='homepage' className='dark-logo' />
                        <img src='src/assets/images/logo-light-icon.png' alt='homepage' className='light-logo' />
                    </b>
                    <span>
                     <img src='src/assets/images/logo-text.png' alt='homepage' className='dark-logo' />
                     <img src='src/assets/images/logo-light-text.png' className='light-logo' alt='homepage' />
                     </span>
                 </a>
            </div>
        </nav>
    </header>)
    }
}
