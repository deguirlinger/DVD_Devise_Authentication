import React from "react"
import PropTypes from "prop-types"
class NewDvd extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dvdAttributes: {
        title: '',
        genre: '',
        year: ''
      }
    }
  }
  handleSubmit = (event) => {
    event.preventDefault()
  }
  render () {
    const {dvdAttributes} = this.state
    return (
      <div>
        <h1>Add a DVD you would like to watch.</h1>
        <form
          onSubmit={this.handleSubmit}
        >
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            value={dvdAttributes.title}
          />
          <br />
          <label htmlFor='genre'>Genre</label>
          <input
            type='text'
            value={dvdAttributes.genre}
          />
          <br />
          <label htmlFor='year'>Year</label>
          <input
            type='number'
            value={dvdAttributes.year}
          />
          <br />
          <button type='submit'>Add</button>
        </form>
      </div>
    );
  }
}

export default NewDvd
