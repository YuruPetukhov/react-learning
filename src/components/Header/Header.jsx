import React from 'react'
import Avatar from '../Avatar'
import './header.css'

const Header = () => {
        const [state, setState] = React.useState('default')

        return (
                <div className="header" >
                        <Avatar message={state} switch={true} />
                        <Avatar message={state} switch={true} />
                        <Avatar message={state} switch={true} />

                        <button onClick={() => setState('new VALUE')}>Click on me </button>
                </div>
        )
}

export default Header