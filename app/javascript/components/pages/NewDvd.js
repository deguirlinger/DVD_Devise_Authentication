import React from "react"
import PropTypes from "prop-types"
import {Redirect} from "react-router-dom"
class NewDvd extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      responseOk: false,
      dvdAttributes: {
        title: '',
        genre: '',
        year: ''
      }
    }
  }
  handleSubmit = (event) => {
    event.preventDefault()
    console.log("You've submitted!!");
    fetch('/dvds.json', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({dvd:this.state.dvdAttributes})
    })
    .then((response) => {
      this.setState({responseOk: true})
    })
  }
  handleChange = (event) => {
    const {dvdAttributes} = this.state
    dvdAttributes[event.target.name] = event.target.value
    this.setState({dvdAttributes: dvdAttributes})
  }
  render () {
    const {dvdAttributes, responseOk} = this.state
    return (
      <div>
        {responseOk &&
        <Redirect to="/all-dvds" />
        }
        {!responseOk &&
        <div>
          <h1>Add a DVD you would like to watch.</h1>
          <form
            onSubmit={this.handleSubmit}
          >
            <label htmlFor='title'>Title</label>
            <input
              type='text'
              name='title'
              value={dvdAttributes.title}
              onChange={this.handleChange}
            />
            <br />
            <label htmlFor='genre'>Genre</label>
            <input
              type='text'
              name='genre'
              value={dvdAttributes.genre}
              onChange={this.handleChange}
            />
            <br />
            <label htmlFor='year'>Year</label>
            <input
              type='number'
              name='year'
              value={dvdAttributes.year}
              onChange={this.handleChange}
            />
            <br />
            <button type='submit'>Add</button>
          </form>
        </div>
        }
      </div>
    );
  }
}

export default NewDvd
