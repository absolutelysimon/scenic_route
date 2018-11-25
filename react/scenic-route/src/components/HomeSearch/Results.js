import React, { Component } from 'react'
import './Results.css'

export default class Results extends Component {

    constructor(props) {
        super(props)

        this.state = {
            dataList: [
                {
                    id: 1,
                    location: "a"
                },
                {
                    id: 2,
                    location: "b"
                },
                {
                    id: 3,
                    location: "c"
                },
                {
                    id: 4,
                    location: "d"
                },
                {
                    id: 5,
                    location: "e"
                },
            ]
        }
    }







    render() {
        return (
            <div>
                <h1>Results</h1>
            </div>
        )
    }
}
