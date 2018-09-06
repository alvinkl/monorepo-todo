import * as React from 'react';
import { styleHelper } from '../../utils/styleHelper';
// import * as Cleave from 'cleave.js/react'
// import MaskedInput from 'react-text-mask'
// import createNumberMask from 'text-mask-addons/dist/createNumberMask'

interface IInput {
  /** placeholder of input */
  placeholder: string;
  /** input is disabled or not */
  disabled?: boolean;
  /** value of the input */
  value: string;

  /** minimum character */
  minChar?: number;
  /** maximum character */
  maxChar?: number;
  /** input is required or not */
  isRequired?: boolean;
  /** will be used for error message */
  name: string;
  readonly?: boolean;

  /** 'TEXT', 'PASSWORD', 'NUMBER', 'PHONE', 'EMAIL', 'NAME', 'CREDIT_CARD', 'MULTILINE', 'PRICE', 'NOSPACE' */
  type: string;

  /** right icon url */
  rightImage?: string;
  /** left icon url */
  leftImage?: string;

  /** prefix string */
  prefix?: string;

  /** min and max value, only applicable for 'PRICE' type */
  minValue?: number;
  maxValue?: number;
  /** on value change listener */
  onChange: any;
  onFocus?: any;
  onBlur?: any;
}

export class Input extends React.Component<IInput, any> {
  constructor(props: IInput) {
    super(props);
    this.state = {
      showPassword: false,
    };
  }

  onChange = (event: any) => {
    if (this.props.type === 'PRICE') {
      let value = event.target.value;
      if (value === '') value = '0';
      if (value.charAt(0) === '0' && value.length > 1) value = value.substr(1);
      if (value.match('^\\d+$')) {
        if (this.props.minValue && this.props.maxValue) {
          if (value >= this.props.minValue && value <= this.props.maxValue) {
            this.props.onChange(value);
          }
        } else if (this.props.minValue && value >= this.props.minValue) {
          this.props.onChange(value);
        } else if (this.props.maxValue && value <= this.props.maxValue) {
          this.props.onChange(value);
        }
      }
    } else if (this.props.type === 'NOSPACE') {
      const value = event.target.value;
      if (value === '') this.props.onChange(value);
      else if (value !== '' && value.match('^\\S*$')) {
        this.props.onChange(value);
      }
    } else this.props.onChange(event.target.value);
  };

  onFocus = () => {
    if (this.props.onFocus) {
      this.props.onFocus();
    }
  };

  onBlur = () => {
    if (this.props.onBlur) {
      this.props.onBlur();
    }
  };

  getHTMLInputType(type: string) {
    switch (type) {
      case 'PASSWORD':
        return 'password';
      case 'CREDIT_CARD':
      case 'NUMBER':
        return 'tel';
      case 'PRICE':
      // return 'number'
      case 'EMAIL':
      // return 'email'
      case 'TEXT':
      case 'NAME':
      default:
        return 'text';
    }
  }

  isVisa(value: string) {
    const visaRegex = /^4[0-9]{12}(?:[0-9]{3})?$/;
    return value.match(visaRegex);
  }

  isMasterCard(value: string) {
    const masterCardRegex = /^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$/;
    return value.match(masterCardRegex);
  }

  isCreditCard(value: string) {
    return this.isVisa(value) || this.isMasterCard(value);
  }

  isEmail(value: string) {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return value.match(emailRegex);
  }

  isNumber(value: string) {
    const numberRegex = /^[0-9]+$/;
    return value.match(numberRegex);
  }

  isTextOnly(value: string) {
    const textRegex = /^[a-zA-Z ]*$/;
    return value.match(textRegex);
  }

  isPhone(value: string) {
    const phoneRegex = /^[+]{0,1}[(]{1}[0-9]{1,4}[)]{1}[0-9]*$/g;
    const phoneRegex2 = /^[+]{0,1}[0-9]*$/g;
    return value.match(phoneRegex) || value.match(phoneRegex2);
  }

  createValidationMessage(
    value: string,
    type: string,
    name: string,
    rules: any
  ) {
    const { isRequired, minChar, maxChar, exactLength } = rules;
    const valLen = value ? value.length : 0;
    const fieldName = name ? name : 'Field';
    let msg = '';

    if (isRequired) {
      msg = valLen > 0 ? msg : `${fieldName} dibutuhkan`;
    }
    if (minChar && valLen < minChar) {
      msg = `${fieldName} minimal ${minChar} karakter`;
    }
    if (maxChar && valLen > maxChar) {
      msg = `${fieldName} maksimal ${maxChar} karakter`;
    }
    if (exactLength && valLen !== exactLength) {
      msg = `${fieldName} harus ${exactLength} digit`;
    }
    if (type === 'EMAIL') {
      msg = this.isEmail(value) ? msg : 'Format email tidak valid';
    }
    if (type === 'PHONE') {
      msg = this.isPhone(value) ? msg : 'Format nomor telepon tidak valid';
      msg =
        value.charAt(0) === '0'
          ? 'Tidak boleh ada angka 0 di depan nomor'
          : msg;
    }
    if (type === 'CREDIT_CARD') {
      msg = this.isCreditCard(value) ? msg : 'Format kartu kredit tidak valid';
    }
    if (type === 'NUMBER') {
      msg = this.isNumber(value) ? msg : 'Hanya boleh mengandung angka';
    }
    if (type === 'NAME') {
      msg = this.isTextOnly(value)
        ? msg
        : 'Tidak boleh terdiri dari simbol atau angka';
    }
    if (type === 'PASSWORD') {
      // const alphanumericRegex = /^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$/
      // msg = value.match(alphanumericRegex) ? msg : "Format harus terdiri dari angka dan huruf"
    }
    if (!isRequired) {
      msg = valLen === 0 ? '' : msg;
    }

    return msg;
  }

  renderValidation(value: string, type: string, name: string, rules: object) {
    const validationMessage = this.createValidationMessage(
      value,
      type,
      name,
      rules
    );

    return validationMessage ? (
      <div style={{ marginTop: '8px' }}>
        <p className="validation">{validationMessage}</p>
      </div>
    ) : null;
  }

  generateCleaveOption(type: string): object {
    switch (type) {
      case 'PRICE':
        return {
          numeral: true,
          numeralThousandsGroupStyle: 'thousand',
          prefix: 'Rp',
          rawValueTrimPrefix: true,
        };
      case 'NOSPACE':
        return { prefix: '#', rawValueTrimPrefix: true };
      default:
        return {};
    }
  }

  render() {
    const {
      type,
      isRequired,
      placeholder,
      minChar,
      maxChar,
      name,
    } = this.props;
    const value = this.props.value;
    const rules = { isRequired, minChar, maxChar };
    const error = this.renderValidation(value, type, name, rules);
    const fieldSetClassName = error ? 'material error' : 'material';
    const inputType = !this.state.showPassword
      ? this.getHTMLInputType(type)
      : this.getHTMLInputType('TEXT');

    // let inputRightPadding = this.props.disabled || this.props.rightImage ? '52px' : '16px'
    // let inputLeftPadding = this.props.leftImage ? '52px' : '16px'

    let inputLeftPadding = this.props.prefix
      ? this.props.prefix.length * 8 + 32
      : 16;

    const inputRightPadding =
      this.props.disabled || this.props.rightImage ? '52px' : '16px';
    inputLeftPadding += this.props.leftImage ? 36 : 0;

    // inputLeftPadding += this.props.prefix ? this.props.prefix.length * 10 : 0

    const leftPadding = `${inputLeftPadding} px`;
    const leftImagePosition = this.props.prefix
      ? `${this.props.prefix.length * 8 + 16} px`
      : '0px';
    // const formatOptiion = this.generateCleaveOption(type)

    // const numberMask = createNumberMask({
    //   prefix: '',
    //   suffix: '', // This will put the dollar sign at the end, with a space.
    //   includeThousandsSeparator: true,
    //   thousandsSeparatorSymbol: ','
    // })

    return (
      <fieldset className={fieldSetClassName}>
        <div>
          {this.props.prefix && (
            <span className="prefix">{this.props.prefix}</span>
          )}
          {this.props.leftImage && (
            <div className="leftImage" style={{ left: leftImagePosition }}>
              <img src={this.props.leftImage} />
            </div>
          )}
          {type !== 'MULTILINE' && (
            <input
              type={inputType}
              maxLength={maxChar}
              minLength={minChar}
              value={value}
              disabled={this.props.disabled}
              placeholder={placeholder}
              onFocus={this.onFocus}
              onBlur={this.onBlur}
              readOnly={this.props.readonly}
              onChange={this.onChange}
              style={{
                backgroundImage: 'none',
                paddingRight: inputRightPadding,
                paddingLeft: leftPadding,
              }}
            />
          )}
          {type === 'MULTILINE' && (
            <textarea
              placeholder={placeholder}
              maxLength={maxChar}
              value={value}
              rows={5}
              onChange={this.onChange}
              style={{
                paddingRight: inputRightPadding,
                paddingLeft: inputLeftPadding,
              }}
            />
          )}
          {/* {type === 'PRICE' && (
            <MaskedInput
              mask={[ numberMask ]}
              value={value}
              placeholder={placeholder}
              onFocus={this.onFocus}
              onBlur={this.onBlur}
              readOnly={this.props.readonly}
              onChange={this.onChange.bind(this)}
              style={{ backgroundImage: 'none', paddingRight: inputRightPadding, paddingLeft: leftPadding }}
            />
          )} */}
          {/* {(type === 'PRICE' || type === 'NOSPACE') && <Cleave min={1000} max={2000} placeholder={this.props.placeholder} value={value} options={formatOptiion} onChange={this.onChange.bind(this)} />} */}

          {this.props.rightImage &&
            !this.props.disabled && (
              <div className="rightImage">
                <img src={this.props.rightImage} />
              </div>
            )}
          {this.props.disabled && (
            <div className="disabled">
              <img src="https://s3-ap-southeast-1.amazonaws.com/airy-assets/airy-web/icon/padlock.png" />
            </div>
          )}
        </div>
        {error}
      </fieldset>
    );
  }
}

const styles = [require('./input.css?raw')];

export default styleHelper(Input, styles);
