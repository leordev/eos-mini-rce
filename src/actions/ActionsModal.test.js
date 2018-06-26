import React from 'react';
import ReactDOM from 'react-dom';
import ActionsModal from './ActionsModal';

it('smoke test: renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <ActionsModal />,
  div);
  ReactDOM.unmountComponentAtNode(div);
});
