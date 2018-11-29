import React, { Component } from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import paginationFactory from 'react-bootstrap-table2-paginator'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { getName } from 'country-list'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css'
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css'

export default class CustomTable extends Component {
  editHandler(id) {
    this.props.editContact(id)
  }

  deleteHandler(id) {
    this.props.deleteContact(id)
  }

  render() {
    return (
        <BootstrapTable
            keyField='id'
            data={ this.props.contacts }
            columns={ this.columns }
            bootstrap4={ true }
            hover={ true }
            classes='table-responsive-sm'
            pagination={ paginationFactory() }
            noDataIndication={ () => { return 'You have no contacts at the moment, feel free to add contacts by clicking the button above!' } } />
    )
  }

  _mailtoLink = email => {
    return (
      <a href={'mailto:' + email} target="_blank" rel="noopener noreferrer">{email}</a>
    )
  }

  _actionButtons = id => {
    return (
      <div>
        <FontAwesomeIcon title="Edit" icon={faEdit} onClick={() => {this.editHandler(id)}} />
        <FontAwesomeIcon title="Delete" icon={faTrashAlt} onClick={() => {window.confirm("Are you sure you wish to delete this entry?") && this.deleteHandler(id)}} />
      </div>
    )
  }

  columns = [{
      dataField: 'name.first',
      text: 'First Name',
      sort: true
    }, {
      dataField: 'name.last',
      text: 'Last Name',
      sort: true
    }, {
      dataField: 'email',
      formatter: this._mailtoLink,
      classes: 'emailColumn',
      headerClasses: 'emailColumn',
      text: 'Email'
    }, {
      dataField: 'country',
      formatter: getName,
      text: 'Country',
      sort: true
    }, {
      dataField: 'id',
      formatter: this._actionButtons,
      classes: 'actionsColumn',
      headerClasses: 'actionsColumn',
      align: 'center',
      headerAlign: 'center',
      text: 'Actions'
    }
  ]
}
