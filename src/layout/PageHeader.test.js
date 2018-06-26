import React from 'react';
import ReactDOM from 'react-dom';
import PageHeader from './PageHeader';

it('smoke test: renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PageHeader />, div);
  ReactDOM.unmountComponentAtNode(div);
});
