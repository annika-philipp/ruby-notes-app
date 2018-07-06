import React, { Component } from 'react'

class EditListForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      id: this.props.list.id,
      title: this.props.list.title,
      excerpt: this.props.list.excerpt,
      description: this.props.list.description
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { id, title, excerpt, description } = this.state
    this.props.editListItem(id, title, excerpt, description)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input name="title" type="text" placeholder="Title..." value={this.state.title} onChange={this.handleChange} />
        <input name="excerpt" type="text" placeholder="Excerpt..." value={this.state.excerpt} onChange={this.handleChange} />
        <input name="description" type="text" placeholder="Description..." value={this.state.description} onChange={this.handleChange} />
        <button>Update List</button>
      </form>
    )
  }

}

export default EditListForm