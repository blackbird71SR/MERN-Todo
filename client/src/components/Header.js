import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div>
                <h1 className='text-center display-4'>
                <i className="fa fa-check-square-o" aria-hidden="true"></i>&nbsp;InBox
                </h1>
            </div>
        )
    }
}
