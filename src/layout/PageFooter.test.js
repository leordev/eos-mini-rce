import React from 'react';
import ReactDOM from 'react-dom';
import PageFooter from './PageFooter';

it('smoke test: renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PageFooter />, div);
  ReactDOM.unmountComponentAtNode(div);
});
