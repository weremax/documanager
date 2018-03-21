import React, { Component } from 'react';
import * as Components from './components';
import './App.css';

class App extends Component {
  state = { templates: [] };

  componentDidMount() {
    fetch('/templates')
    .then(res => res.json())
    .then(templates => this.setState({ templates }));
  }

  render() {
    return (
      <div className="App">
        <Components.Search />
        {/*this.state.templates.map(template => 
          <div key={template.id}>
            {template.status}
            {template.name}
            {template.author}
            {template.created}
            {template.last_modified}
            {template.modified_by}
            {template.tags}
          </div>
        )*/}
        {this.state.templates ? 
          <Components.Table data={this.state.templates} />: null }
        
      </div>
    );
  }
}

export default App;
