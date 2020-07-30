import React from 'react'

function Main({ create, read, update, destroy }) {
    
    const getValue = (identifier) => {
        return document.getElementById(identifier).value
    }

    return (
        <div>
            <div className="row mb-3">
                <div className="col-6">
                    <input className="form-control" type="text" id="id" placeholder="ID" required />
                </div>
                
                <div className="col-6">
                    <input className="form-control" type="text" id="name" placeholder="Name" required />
                </div>
            </div>

            <div className="row">
                <div className="col-3">
                    <button onClick={() => create(getValue('name'))} type="submit" className="btn btn-primary form-control">Create</button>
                </div>

                <div className="col-3">
                    <button onClick={() => read(getValue("id"))} type="submit" className="btn btn-success form-control">Read</button>
                </div>

                <div className="col-3">
                    <button onClick={() => update(getValue("id"), getValue("name"))} type="submit" className="btn btn-info form-control">Update</button>
                </div>

                <div className="col-3">
                    <button onClick={() => destroy(getValue("id"))} type="submit" className="btn btn-danger form-control">Destroy</button>
                </div>
            </div>
        </div>
    );
}

export default Main;