import { default as withStyles } from 'isomorphic-style-loader/lib/withStyles';
import * as React from 'react';
import * as style from './text.css';

export const Text = () => <h1 className={style.h1}>This is a text</h1>;

export default withStyles(style)(Text);
