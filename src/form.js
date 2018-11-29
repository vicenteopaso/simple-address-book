import React, { Component } from 'react'
import { getData } from 'country-list'

import 'bootstrap/dist/css/bootstrap.min.css'

let countries = getData()

export default class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
        mode: props.mode,
        contact: props.contact
    }
    this.submitHandler = this.submitHandler.bind(this)
    this.onKeyPressed = this.onKeyPressed.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    this.refs.first.value.length <= 2 ? this.refs.first.setCustomValidity('Please enter a valid name.') : this.refs.first.setCustomValidity('')
    this.refs.last.value.length <= 2 ? this.refs.last.setCustomValidity('Please enter a valid last name.') : this.refs.last.setCustomValidity('')
  }

  viewHandler(state) {
    this.props.viewState(state)
  }

  saveHandler(contact) {
    this.props.saveContact(contact)
    this.viewHandler('table')
  }

  handleChange(event) {
    let contact = this.state.contact
    switch(event.target.id) {
        case 'first':
            if(event.target.value.length <= 2) {
                contact.name.first = event.target.value
                event.target.setCustomValidity('Please enter a valid name.')
            } else {
                contact.name.first = event.target.value
                event.target.setCustomValidity('')
            }
            break;
        case 'last':
            if(event.target.value.length <= 2) {
                contact.name.last = event.target.value
                event.target.setCustomValidity('Please enter a valid last name.')
            } else {
                contact.name.last = event.target.value
                event.target.setCustomValidity('')
            }
            break;
        case 'email':
            if(event.target.value.length <= 2) {
                contact.email = event.target.value
                event.target.setCustomValidity('Please enter a valid email address.')
            } else {
                contact.email = event.target.value
                event.target.setCustomValidity('')
            }
            break;
        case 'country':
            contact.country = event.target.value
            break;
        default:
            console.log('No ID')
    }
    this.setState({contact: contact})
  }
  
  submitHandler(e) {
    if(e) { e.preventDefault() }
    if (this.formEl.checkValidity() === false) {
        try { this.formEl.reportValidity() } catch(error) { console.error(error) }
        console.log('Form Not Valid')
    } else {
        console.log('Form Valid!')
        this.saveHandler(this.state.contact)
    }
  }

  onKeyPressed(e) {
    if(e.keyCode === 13) {
        e.preventDefault()
        this.submitHandler()
    }
  }

  render() {
    return (
        <form ref={form => this.formEl = form} onSubmit={this.submitHandler.bind(this)}>
            {this.state.mode === 'edit' ? (
                <h2>Edit Contact</h2>
            ) : (
                <h2>Create a New Contact</h2>
            )}
            <fieldset>
                <div className="row">
                    <div className="col-sm">
                        <div className="form-group">
                            <label htmlFor="first">First Name</label>
                            <input 
                                type="text"
                                id="first"
                                ref="first"
                                className="form-control"
                                value={this.state.contact.name.first}
                                onChange={this.handleChange}
                                onKeyDown={this.onKeyPressed}
                                placeholder="First Name"
                                pattern=".{2,}"
                                required />
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="form-group">
                            <label htmlFor="last">Last Name</label>
                            <input
                                type="text"
                                id="last"
                                ref="last"
                                className="form-control"
                                value={this.state.contact.name.last}
                                onChange={this.handleChange}
                                onKeyDown={this.onKeyPressed}
                                placeholder="Last Name"
                                pattern=".{2,}"
                                required />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm">
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="text"
                                id="email"
                                ref="email"
                                className="form-control"
                                value={this.state.contact.email}
                                onChange={this.handleChange}
                                onKeyDown={this.onKeyPressed}
                                placeholder="Email"
                                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                required />
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="form-group">
                            <label htmlFor="country">Country</label>
                            <select
                              id="country"
                              ref="country"
                              className="form-control"
                              onChange={this.handleChange}
                              onKeyDown={this.onKeyPressed}
                              value={this.state.contact.country}
                              required >
                                <option value=""disabled>Select a country</option>
                                {countries.map(function(country, index){
                                    return <option value={country.code} key={index}>{country.name}</option>
                                })}
                            </select>
                        </div>
                    </div>
                </div>
            </fieldset>
            <div className="row">
                <div className="col-sm text-right">
                    <button onClick={() => {this.viewHandler('table')}} className="cancel btn btn-lg btn-light" >Cancel</button>
                    <button type="submit" className="save btn btn-lg btn-secondary" >Save</button>
                </div>
            </div>
        </form>
    )
  }
}
