import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import CustomTable from './table'
import ContactForm from './form'

import './index.css'

let data = require('./data')

class SAB extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: data.content,
      view: 'table',
      contact: null
    }
  }

  render() {
    return (
      <div className="SAB">
        <header className="SAB-header">
          <h1>Simple Address Book</h1>
          {this.state.view === 'table' ? (
            <FontAwesomeIcon title="Add New Contact" icon={faUserPlus} size="2x" onClick={() => {this.newContact()}} />
          ) : null}
        </header>
        <section>
        {this.state.view === 'table' ? (
          <CustomTable
            contacts={this.state.content}
            deleteContact={this.deleteContact}
            editContact={this.editContact} />

        ) : (
          <ContactForm
            viewState={this.viewState}
            mode={this.state.view}
            contact={this.state.contact}
            saveContact={this.saveContact} />
        )}
        </section>
      </div>
    )
  }

  viewState = state => {
    this.setState({
        view: state
    })
  }

  storeContent = content => {
    this.setState({
        content: content
    })
    localStorage.setItem('SimpleAddressBook', JSON.stringify(content))
  }
  
  deleteContact = id => {
    let updatedContent = this.state.content.filter((entry) => { 
        return entry.id !== id;
    })
    this.storeContent(updatedContent)
  }
  
  editContact = id => {
    let contact = this.state.content.filter((entry) => { 
      return entry.id === id;
    })
    this.setState({
      view: 'edit',
      contact: contact[0]
    })
  }

  newContact = () => {
    let contact = {
      name: {
        first: '',
        last: ''
      },
      email: '',
      country: ''
    }
    this.setState({
      view: 'new',
      contact: contact
    })
  }

  saveContact = contact => {
    if(contact.id !== undefined) {
      let index = this.state.content.findIndex((e) => e.id === contact.id)
      let array = this.state.content
      array[index] = contact
      this.storeContent(array)
    } else {
      contact.id = Math.random().toString(16).substring(2, 14) + Math.random().toString(16).substring(2, 14)
      let array = this.state.content
      array.push(contact)
      this.storeContent(array)
    }
  }
}

ReactDOM.render(<SAB />, document.getElementById('root'))
