import React from 'react';

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

  export default Content;