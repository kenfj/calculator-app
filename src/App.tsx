import React from 'react';
import Board from './Board';
import './App.css';

interface Props { }

interface State {
  calcText: string,
  className4: string,
}

class App extends React.Component<Props, State> {
  constructor(props: Readonly<Props>) {
    super(props);
    this.state = {
      calcText: '',
      className4: '',
    };
  }

  calc() {
    const text = encodeURIComponent(this.state.calcText);
    const url = `http://localhost:8080/calc?text=${text}`;

    // https://reactjs.org/docs/faq-ajax.html
    // https://jasonwatmore.com/post/2020/02/01/react-fetch-http-post-request-examples
    fetch(url)
      .then(async response => {
        const text = await response.text();

        if (!response.ok) {
          console.log(response);
          const error = text || response.status;
          return Promise.reject(error);
        }

        return text;
      })
      .then(text => {
        this.setText(text);
      })
      .catch(error => {
        this.setText(error.message);
      });
  }

  handleClick(x: string) {
    let newText = '';

    if (x === '=') {
      this.calc();
      return;
    }

    if (x === 'C') {
      newText = '';
    } else {
      newText = this.state.calcText + x;
    }

    this.setText(newText);
  }

  setText(newText: string) {
    const className = (newText.length > 10) ? 'SSize' : 'MSize';

    this.setState({
      calcText: newText,
      className4: className,
    });
  }

  render() {
    return (
      <div>
        <div className="board-row">
          <button className={"square square4 " + this.state.className4}>
            {this.state.calcText}
          </button>
        </div>
        <Board onClick={(x: string) => this.handleClick(x)} />
      </div>
    );
  }
}

export default App;
