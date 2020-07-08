import React, { Component } from 'react';
import './App.css';
import AutoCompletedText from './AutoCompletedText.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      languages: [
        { name: "Python", votes: 0 },
        { name: "Java", votes: 0 },
        { name: "React", votes: 0 },
        { name: "Angular", votes: 0 }
      ]
    }
  }
  vote(i) {
    let newLanguages = [...this.state.languages];
    newLanguages[i].votes++;
    this.setState({ languages: newLanguages });
  }
  render() {
    return (
      <>
        <h1>Voting Application</h1>
        <div className="languages">
          {
            this.state.languages.map((lang, i) =>
              <div key={i} className="language">
                <div className="voteCount">
                  {lang.votes}
                </div>
                <div className="languageName">
                  {lang.name}
                </div>
                <button onClick={this.vote.bind(this, i)}>Click Here</button>
              </div>
            )
          }
        </div>
        <AutoCompletedText />
      </>
    );
  }
}

export default App;
