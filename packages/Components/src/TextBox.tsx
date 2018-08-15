import * as React from 'react'

export const TextBox = props => {
    let textInput;

    return (
        <div className="input-group mb-3">
            <input
                type="text"
                className="form-control"
                placeholder="Input your task"
                ref={input => {
                    textInput = input;
                }}
            />

            <div className="input-group-append">
                <button
                    className="btn btn-primary"
                    type="button"
                    onClick={() => {
                        props.onSubmit(textInput.value);
                        textInput.value = '';
                    }}>
                    Submit
                </button>
            </div>
        </div>
    );
}