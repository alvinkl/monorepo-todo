import * as React from 'react';

interface PropsTypes {
  onSubmit: Function;
}

export const TextBox = ({ onSubmit }: PropsTypes) => {
  let textInput: HTMLInputElement;

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
        <button
          className="btn btn-primary"
          type="button"
          onClick={() => {
            onSubmit(textInput.value);
            textInput.value = '';
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default TextBox;
