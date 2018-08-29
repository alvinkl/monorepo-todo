import { withInfo } from '@storybook/addon-info';
// import * as wInfoStyle from "./styles.json";

export default function wInfo(text: string): any {
  return withInfo({ text, inline: true, source: false });
}
