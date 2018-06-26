import React from 'react';
import ReactDOM from 'react-dom';
import ActionsExplorer from './ActionsExplorer';

it('smoke test: renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <ActionsExplorer />,
  div);
  ReactDOM.unmountComponentAtNode(div);
});
