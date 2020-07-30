import React, { Component } from 'react'

class Main extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <form className="mb-3" onSubmit={(event) => {
                    event.preventDefault()
                    this.props.create(this.input.value.toString())
                }}>
                    <label>Create NewUser</label>
                    <input ref={(input) => { this.input = input }} type="text" required />
                    <button type="submit" className="btn btn-primary btn-block btn-lg">Create</button>
                </form>
            </div>
        );
    }

}

export default Main;