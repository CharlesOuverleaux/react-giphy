import React from 'react';
import ReactDOM from 'react-dom';

import '../assets/stylesheets/application.scss';

const Hello = ({ name }) => {
  return (
    <div class="container">
      <h1> Hello {name}! </h1>
    </div>
  );
};


const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<Hello name="World" />, root);
}
