import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

class ListContacts extends Component {
  static propTypes = {
    contacts: PropTypes.array.isRequired
  }
  state= {
    query: ''
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim() })
  }

  clearQuery = (query) => {
    this.setState({ query: '' })
  }

  render() {
    const { contacts, onDeleteContact } = this.props
    const { query } = this.state

    let showingContacts
    if (query) {
      const match = new RegExp(escapeRegExp(query), 'i')
      showingContacts = contacts.filter((contact) => match.test(contact.name))
    } else {
      showingContacts = contacts
    }
    showingContacts.sort(sortBy('name'))
    // {console.log(showingContacts)}

    return (
      <div>
        <input
          className = "search-contact"
          type = "text"
          placeholder = "search-contact"
          value = {this.state.query}
          onChange = {(event) => this.updateQuery(event.target.value)}
          />

        <Link to="/create" className="add-contact">+</Link>

        {showingContacts.length !== contacts.length && (
          <div className="showing-contacts">
            <span>Now showing {showingContacts.length} of {contacts.length} total</span>
            <button onClick={this.clearQuery}>Show All</button>
          </div>
        )}

        <ol className="contact-list">
          {showingContacts.map((contact) => (
            <li key={contact.id} className="contact-list-item">
              <div className="contact-avatar" style={{
                backgroundImage: `url(${contact.avatarURL})`
              }}/>
              <div className="contact-details">
                <p>{contact.name}</p>
                <p>{contact.email}</p>
              </div>
              <button onClick={()=> onDeleteContact(contact)} className="contact-remove">x</button>
            </li>
          ))}
        </ol>
      </div>

    )
  }
}

export default ListContacts
