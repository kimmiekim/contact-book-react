import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ListContacts extends Component {
  static propTypes = {
    contacts: PropTypes.array.isRequired
  }
  render(){
    const contacts = this.props.contacts
    let showingContacts = contacts
    // {console.log(JSON.stringify(showingContacts))}


    return(
      <div>
        voila list contacts
        <ol className = 'contact-list'>
        {showingContacts.map((contact) => (
          <li key={contact.id} className = 'contact-list-item'>
            <div className='contact-avatar' style={{
              backgroundImage: `url(${contact.avatarURL})`
            }} />
            <div className='contact-details'>
              <p>{contact.name}</p>
              <p>{contact.email}</p>
            </div>
          </li>
        ))}
    </ol>
  </div>





    )
  }
}

export default ListContacts
