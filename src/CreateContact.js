import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ImageInput from './ImageInput'
import serializeForm from 'form-serialize'

class CreateContact extends Component {
  handleSubmit = (e)=> {
    e.preventDefault()
    const values = serializeForm(e.target, {hash: true})
    if (this.props.onCreateContact)
    this.props.onCreateContact(values)
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="create-contact-form">
          <ImageInput
            className="create-contact-avatar-input"
            name="avatarURL"
            maxHeight={64}
          />
          <div className = "create-contact-details">
            <input type="text" name="name" placeholder="name"/>
            <input type="text" name="email" placeholder="email"/>
            <button>Add Contact</button>
          </div>
        </form>
        <Link to="/">Back</Link>
      </div>
    )
  }
}

export default CreateContact
