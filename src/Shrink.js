import React from 'react'
import './Shrink.css'

export default class Shrink extends React.Component {
    
   state = { 
        colors: ['red', 'white', 'blue'],
    }

    componentDidMount() {
        window.addEventListener('scroll', this.onScroll )
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll )
    }

    onScroll = ( ev ) => {
        this.setState(prev => ({
            styles: {
                ...prev.styles,
                width: "calc(100vw - " + window.scrollY / 10 + "vw)"
            }
        }))
    }

    render() {
                
        return ( 
            <div>
                { 
                    this.state.colors.map( c => {
                        return <div 
                                    key={ c }  
                                    className={ c  + " big-block" }
                                    style={ c === 'red' ?  {...this.state.styles} : null }
                                >
                                </div>
                    })
                }
            </div>
        )
    }
}
