import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons'

class List extends Component {
  constructor(props){
    super(props)
    this.state = {
      activeListItem: '',
      detailsVisible: false
    }
    this.showDescription = this.showDescription.bind(this)
    this.hideDescription = this.hideDescription.bind(this)
  }

  showDescription(listItem) {
    this.setState({
      activeListItem: listItem,
      detailsVisible: true
    })
  }

  hideDescription() {
    this.setState({
      detailsVisible: !this.state
    })
  }

  render() {
    const list = this.props.list
    return(
      <div key={list.id} id="listItem">
        <h4>{list.title}</h4>
        <p>{list.excerpt}</p>
        {!this.state.detailsVisible 
          ? <button onClick={() => this.showDescription(list.id)}>Show Full Text</button>
          :
          <div>
            <p>{list.description}</p>
            <button onClick={() => this.hideDescription(list.id)}>Hide Full Text</button>  
          </div>}
        <br/>
        <button onClick={() => this.props.deleteItem(list.id)}><FontAwesomeIcon icon={faTrashAlt} /></button>
        <button onClick={() => this.props.editingItem(list.id)}><FontAwesomeIcon icon={faEdit} /></button>
        <hr/>
      </div>
    )
  }
}

export default List;