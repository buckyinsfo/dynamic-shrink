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
        this.setState( prev => ({
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
                    this.state.colors.map( color => {
                        return <div 
                                    key={ color }  
                                    className={ color  + " big-block" }
                                    style={ color === 'red' ?  {...this.state.styles} : null }
                                >
                                </div>
                    })
                }
            </div>
        )
    }
}
