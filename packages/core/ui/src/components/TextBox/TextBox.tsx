import * as React from 'react';

interface IPropsTypes {
  onSubmit: (text: string) => void;
}

export const TextBox = ({ onSubmit }: IPropsTypes) => {
  let textInput: HTMLInputElement;

  const onClick = () => {
    onSubmit(textInput.value);
    textInput.value = '';
  };

  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Input your task"
        ref={(input: HTMLInputElement) => {
          textInput = input;
        }}
      />

      <div className="input-group-append">
        <button className="btn btn-primary" type="button" onClick={onClick}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default TextBox;
