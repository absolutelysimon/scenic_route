import React, { Component } from 'react'
import './HomeSearch.css'

export default class HomeSearch extends Component {
    render() {
        return (
            <div>
                <form >
                    <label for="startInput">Start</label>
                    <input type="text" name="startInput" />
                    <label for="endInput">End</label>
                    <input type="text" name="endInput" />
                    
                    <button>Submit</button>
                </form>
                <div className="gps-box"></div>
            </div>

        )
    }
}

