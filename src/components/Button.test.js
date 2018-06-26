import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';

it('smoke test: renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Button color="success" isLoading="true"
            size="small" text="test" />,
  div);
  ReactDOM.unmountComponentAtNode(div);
});
