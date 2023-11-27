import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import './App.css'

// Replace your code here
class App extends Component {
  state = {
    textInput: '',
    addedTexts: [],
  }

  addInputText = event => {
    this.setState({
      textInput: event.target.value,
    })
  }

  addTextInput = event => {
    event.preventDefault()
    const {textInput} = this.state
    const addedItems = {
      id: uuidv4(),
      word: textInput,
    }

    this.setState(prevState => ({
      addedTexts: [...prevState.addedTexts, addedItems],
      textInput: '',
    }))
  }

  render() {
    const {textInput, addedTexts} = this.state

    return (
      <div className="app-container">
        <div className="responsive-container">
          <div className="character-length-count-container">
            <h1>Count the characters like a Boss...</h1>
            {addedTexts.length > 0 ? (
              <ul className="text-items-container">
                {addedTexts.map(eachItem => (
                  <li className="list-item" key={eachItem.id}>
                    <p className="text-item" key={eachItem.id}>
                      {eachItem.word} : {eachItem.word.length}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <img
                className="no-user-inputs-img"
                src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                alt="no user inputs"
              />
            )}
          </div>
          <div className="character-input-container">
            <h1>Character Counter</h1>
            <form className="input-container" onSubmit={this.addTextInput}>
              <input
                className="user-input"
                type="text"
                onChange={this.addInputText}
                value={textInput}
                placeholder="Enter the characters here..."
              />
              <button className="add-btn" type="submit">
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default App
