import React, { Component } from 'react';
import './App.css';
import NoteList from './NoteList.jsx';
import NoteItem from './NoteItem.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      inputValue: ""
    }
  }

  // //manage array of inputs
  // const [items, setItems] = useState([]);
  // const [inputValue, setInputValue] = useState('');

  doInputChange = (event) => {
    if (event.target.value != '') {
      this.setState({ inputValue: event.target.value });
    }
  };

  // const doInputChange = (event) => {
  //   setInputValue(event.target.value);
  // };

  doSubmit = (event) => {
    event.preventDefault();  //disable natural feature of the form
    const { items, inputValue } = this.state;
    //generate an id based on array length
    const newItem = {
      inputValue,
      id: items.length + 1
    };

    if (inputValue != '') {
      // Add the new item to the array of items
      this.setState({
        items: [...items, newItem],
        inputValue: ""
      });
    }
  };

  render() {
    const { items, inputValue } = this.state;

    //check if the items array is emty. If yes, show "no notes yet"
    // const content = items.length === 0 ? (
    //   <p>No notes yet</p>
    // ) : (
    //   <NoteList>
    //     {items.map(item => (
    //       <NoteItem key={item.id} note={item.inputValue} />
    //     ))}
    //   </NoteList>
    // );

    const content = items.length === 0 || items[items.length - 1].inputValue == '' ? (
      <p>No notes yet</p>
    ) : (
      <NoteList>
        {items.map(item => (
          <NoteItem key={item.id} note={item.inputValue} />
        ))}
      </NoteList>
    );

  // const doSubmit = (event) => {
  //   event.preventDefault();  //disable natural feature of the form
  
  // //generate an id based on array length
  // const newItem = {
  //   inputValue,
  //   id: items.length + 1
  // };

  // //add new item to the array of items
  // setItems((prevItems) => [...prevItems, newItem]);

  // setInputValue(''); //clear input field after submission

  // }
  // const renderedList = items.map(item => <NoteItem key={item.id} note={item.inputValue}></NoteItem>);

  return (
    <div>
      <form onSubmit={this.doSubmit}>
        <input
          id="nameInput"
          type="text"
          value={inputValue}
          onChange={this.doInputChange}
          placeholder="Enter your name"
         />
         <button id="submitButton" type="submit">Ok</button>
      </form>
      <h2>Your notes:</h2>
      <NoteList >
        {content}
      </NoteList>
    </div>
  );
}
}

export default App

