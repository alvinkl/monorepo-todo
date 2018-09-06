import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { wInfo } from '../../utils/withInfo';
import Input from './Input';

class App extends React.Component<{}, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      value1: '',
      value2: 'Vannia Ferdina',
      value3: 'Name@',
      value4: '',
      value5: 10000,
      value6: '',
      value7: '',
      value8: '',
      value9: '',
      value10: '',

      name: '',
      password: '',
      activation: '',
      phone: '',
      email: '',
      address: '',
    };
  }

  setValue = (str, val) => this.setState({ [str]: val });

  render() {
    return (
      <div style={{ margin: '20px' }}>
        <div>Sample Input</div>
        <div
          style={{
            float: 'left',
            width: 'calc(50% - 32px)',
            padding: '0px 16px',
          }}
        >
          <div style={{ margin: '20px 0px' }}>
            <p style={{ marginBottom: '5px' }}>Form Standard - Default</p>
            <Input
              type="text"
              placeholder="Your Name"
              name="nama"
              value={this.state.value1}
              onChange={this.setValue.bind(this, 'value1')}
            />
          </div>
          <div style={{ margin: '20px 0px' }}>
            <p style={{ marginBottom: '5px' }}>Form Disabled</p>
            <Input
              type="text"
              placeholder="Your Name"
              name="nama"
              value={this.state.value2}
              disabled={true}
              onChange={this.setValue.bind(this, 'value2')}
            />
          </div>
          <div style={{ margin: '20px 0px' }}>
            <p style={{ marginBottom: '5px' }}>Form Error</p>
            <Input
              type="NAME"
              placeholder="Your Name"
              name="Nama"
              value={this.state.value3}
              minChar={4}
              onChange={this.setValue.bind(this, 'value3')}
            />
          </div>
          <div style={{ margin: '20px 0px' }}>
            <p style={{ marginBottom: '5px' }}>Form type: PRICE</p>
            <Input
              type="PRICE"
              placeholder="Your Name"
              name="nama"
              value={this.state.value5}
              // minValue={0}
              maxValue={2000000}
              onChange={this.setValue.bind(this, 'value5')}
            />
          </div>
          <div style={{ margin: '20px 0px' }}>
            <p style={{ marginBottom: '5px' }}>Form type: NOSPACE</p>
            <Input
              type="NOSPACE"
              placeholder="Your Name"
              name="nama"
              value={this.state.value6}
              // disabled={true}
              onChange={this.setValue.bind(this, 'value6')}
            />
          </div>
          <div style={{ margin: '20px 0px' }}>
            <p style={{ marginBottom: '5px' }}>Form - With Left Icon</p>
            <Input
              type="NAME"
              placeholder="Your Name"
              name="Nama"
              value={this.state.value7}
              minChar={4}
              onChange={this.setValue.bind(this, 'value7')}
              leftImage="https://s3-ap-southeast-1.amazonaws.com/airy-assets/airy-thanos/search-icon.svg"
            />
          </div>
          <div style={{ margin: '20px 0px' }}>
            <p style={{ marginBottom: '5px' }}>Form - With Right Icon</p>
            <Input
              type="NAME"
              placeholder="Your Name"
              name="Nama"
              value={this.state.value8}
              minChar={4}
              onChange={this.setValue.bind(this, 'value8')}
              rightImage="https://s3-ap-southeast-1.amazonaws.com/airy-assets/airy-thanos/search-icon.svg"
            />
          </div>
          <div style={{ margin: '20px 0px' }}>
            <p style={{ marginBottom: '5px' }}>
              Form - With Left Icon and Prefix
            </p>
            <Input
              type="NAME"
              placeholder="Your Name"
              name="Nama"
              value={this.state.value9}
              minChar={4}
              prefix="Rp"
              onChange={this.setValue.bind(this, 'value9')}
              leftImage="https://s3-ap-southeast-1.amazonaws.com/airy-assets/airy-thanos/search-icon.svg"
            />
          </div>
          <div style={{ margin: '20px 0px' }}>
            <p style={{ marginBottom: '5px' }}>Form - With Prefix</p>
            <Input
              type="NAME"
              placeholder="Your prefix"
              name="Nama"
              value={this.state.value10}
              minChar={4}
              prefix="Rp"
              onChange={this.setValue.bind(this, 'value10')}
            />
          </div>
        </div>
        <div
          style={{
            float: 'right',
            width: 'calc(50% - 32px)',
            padding: '0px 16px',
          }}
        >
          <div style={{ margin: '20px 0px' }}>
            <p style={{ marginBottom: '5px' }}>Form - Multiline</p>
            <Input
              type="MULTILINE"
              placeholder="Your Name"
              name="Nama"
              value={this.state.value4}
              minChar={4}
              onChange={this.setValue.bind(this, 'value4')}
            />
          </div>
        </div>

        <div style={{ clear: 'both' }} />

        <h2>Sample Form</h2>
        <div style={{ width: '50%', padding: '0px 16px' }}>
          <div style={{ margin: '20px 0px' }}>
            Name
            <Input
              type="NAME"
              placeholder="Your Name"
              name="Name"
              value={this.state.name}
              minChar={2}
              onChange={this.setValue.bind(this, 'name')}
            />
          </div>
          <div style={{ margin: '20px 0px' }}>
            Password
            <Input
              type="PASSWORD"
              placeholder="Your Password"
              name="Password"
              value={this.state.password}
              minChar={6}
              onChange={this.setValue.bind(this, 'password')}
            />
          </div>
          <div style={{ margin: '20px 0px' }}>
            Activation Code (Number only)
            <Input
              type="NUMBER"
              placeholder="Activation Code"
              name="Activation code"
              value={this.state.activation}
              minChar={6}
              onChange={this.setValue.bind(this, 'activation')}
            />
          </div>
          <div style={{ margin: '20px 0px' }}>
            Phone
            <Input
              type="PHONE"
              placeholder="Your Phone Number"
              name="Phone Number"
              value={this.state.phone}
              minChar={9}
              onChange={this.setValue.bind(this, 'phone')}
            />
          </div>
          <div style={{ margin: '20px 0px' }}>
            Email
            <Input
              type="EMAIL"
              placeholder="Your Email"
              name="Email"
              value={this.state.email}
              onChange={this.setValue.bind(this, 'email')}
            />
          </div>
          <div style={{ margin: '20px 0px' }}>
            Address
            <Input
              type="MULTILINE"
              placeholder="Your Address"
              name="Address"
              value={this.state.address}
              minChar={2}
              maxChar={10}
              onChange={this.setValue.bind(this, 'address')}
            />
          </div>
        </div>
      </div>
    );
  }
}

(storiesOf('Input', module) as any).addWithJSX(
  'Input',
  wInfo(`

  ### Usage
  ~~~js
  <Input
    type="NAME"
    placeholder="Your Name"
    name="nama"
    value={value1}
    minChar={2}
    maxChar={20}
    isRequired={true}
    onChange={() => {}}
  />
  ~~~`)(() => {
    return (
      <div>
        <App />
        <div style={{ display: 'none' }}>
          <Input
            type="text"
            placeholder="Your Name"
            name="nama"
            value="NAMA"
            onChange={this.setValue.bind(this, 'testing')}
          />
        </div>
      </div>
    );
  })
);
