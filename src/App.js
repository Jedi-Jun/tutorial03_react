import React from 'react';


class Subject extends React.Component {
  render() {
    return(
      <header>
        <h1>{this.props.title}</h1>
        {this.props.desc}
      </header>
    );
  }
}

class TOC extends React.Component {
  render() {
    return(
      <nav>
        <ul>
          <li><a href="1.html">HTML</a></li>
          <li><a href="2.html">CSS</a></li>
          <li><a href="3.html">JavaScript</a></li>
        </ul>
      </nav>
    );
  }
}

class Content extends React.Component {
  render() {
    const {title, desc} = this.props;
    return(
      <article>
          <h2>{title}</h2>
          {desc}
      </article>
    );
  }
}

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Sara" />;

class App extends React.Component {
  render() {
    return (
      <div>
        {element}
        <Subject title="WEB" desc="World Wide Web!"></Subject>
        <TOC></TOC>
        <Content title="HTML" desc="HTML is HyperText Markup Language."></Content>
    </div>
    );
  }
}

export default App;
