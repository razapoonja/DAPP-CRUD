import React, { Component } from 'react'

class Main extends Component {

    constructor(props) {
        super(props)

        this.state = {id: '1'}
    }

    handleChange(event) {
        this.setState({title: event.target.value})
    }

    render() {
        return (
            <div>
                <input type="text" id="id" placeholder="ID" required />
                <input type="text" id="name" placeholder="Name" required />


                <form id="form" className="mb-3" onSubmit={(event) => {
                    event.preventDefault()
                    this.props.create(document.getElementById("name").value)
                }}>
                    <button type="submit" className="btn btn-primary btn-block btn-lg">Create</button>
                </form>

                <form className="mb-3" onSubmit={(event) => {
                    event.preventDefault()
                    this.props.read(document.getElementById("id").value)
                }}>
                    <button type="submit" className="btn btn-primary btn-block btn-lg">Read</button>
                </form>

                <form className="mb-3" onSubmit={(event) => {
                    event.preventDefault()
                    this.props.update(document.getElementById("id").value, document.getElementById("name").value)
                }}>
                    <button type="submit" className="btn btn-primary btn-block btn-lg">Update</button>
                </form>

                <form className="mb-3" onSubmit={(event) => {
                    event.preventDefault()
                    this.props.destroy(document.getElementById("id").value)
                }}>
                    <button type="submit" className="btn btn-primary btn-block btn-lg">Destroy</button>
                </form>
            </div>
        );
    }

}

export default Main;