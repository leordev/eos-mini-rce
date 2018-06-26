import React from 'react';
import ReactDOM from 'react-dom';
import BlocksTable from './BlocksTable';

it('smoke test: renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BlocksTable />,
  div);
  ReactDOM.unmountComponentAtNode(div);
});
