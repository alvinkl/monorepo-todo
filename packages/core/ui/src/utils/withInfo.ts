import { withInfo } from '@storybook/addon-info';
// import * as wInfoStyle from "./styles.json";

export function wInfo(text: string): any {
  return withInfo({ text, inline: false, source: false });
}

export default wInfo;
