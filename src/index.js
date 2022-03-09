import React from "react";
import ReactDOM from "react-dom";
import './styles.css';
import "typeface-roboto"

class QuoteMachine extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          test: "hello",
          quotes: [
              ["The journey of a thousand miles begins with one step.", "Lao Tzu"],
              ["That which does not kill us makes us stronger.", "Friedrich Nietzsche"],
              ["Life is what happens when you're busy making other plans.", "John Lennon"],
              ["When the going gets tough, the tough get going.", "Joe Kennedy"],
              ["You must be the change you wish to see in the world.", "Mahatma Gandhi"],
              ["Tough times never last but tough people do.", "Robert H. Schuller"],
              ["Get busy living or get busy dying.", "Stephen King"],
              ["Whether you think you can or you think you can't, you're right.", "Henry Ford"],
              ["Tis better to have loved and lost than to have never loved at all.", "Alfred Lord Tennyson"],
              ["You miss 100 percent of the shots you never take.", "Wayne Gretzky"],
              ["Strive not to be a success, but rather to be of value.", "Albert Einstein"],
              ["Those who dare to fail miserably can achieve greatly.", "John F. Kennedy"],
              ["Never let the fear of striking out keep you from playing the game.", "Babe Ruth"],
              ["All that we are is the result of what we have thought.", "The Buddha"],
              ["Stay hungry, stay foolish.", "Steve Jobs"]
          ],
          currentQuote: 0
      };
      this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {   
      let isNew = false;
      let x = 0;
      while (!isNew) {
          x = Math.floor(Math.random() * this.state.quotes.length);
          if (x != this.state.currentQuote) {
              isNew = true;
          }
      }
      this.setState({
          currentQuote: x
      });
      // console.log(this.state)
  }

  render() {
      return (<div id="quote-box">
          <NewQuoteButton handler={this.handleClick}/>
          <QuoteText quote={this.state.quotes[this.state.currentQuote]}/>
      </div>);
  }
}

class NewQuoteButton extends React.Component {
  constructor(props) {
      super(props);
  }

  render() {
      return (<div id="button-container" onClick={this.props.handler}>
              <button id="new-quote"><strong>GENERATE NEW QUOTE</strong></button>
      </div>)
  }
}

class QuoteText extends React.Component {
  constructor(props) {
      super(props);
  }

  render() {
      return (<div id="text-container">
          <div id="quote-text-div">
              <h1 id="text">{this.props.quote[0]}</h1>
          </div>
          <div id="quote-subtext-div">
              <h3 id="author">- {this.props.quote[1]}</h3>
              <a id="tweet-quote" href={"https://twitter.com/intent/tweet?text=\"" + this.props.quote[0] + "\" - " + this.props.quote[1]} target="_blank">
                  <h4>
                      <svg id="twitter-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                          <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                      </svg>
                  </h4>
                  <h4>Tweet</h4>
              </a>
          </div>
      </div>)
  }
}

ReactDOM.render(<QuoteMachine />, document.getElementById("root"));