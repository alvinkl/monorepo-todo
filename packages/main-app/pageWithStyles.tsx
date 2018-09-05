import { default as T } from 'prop-types';
import { Component, default as React } from 'react';

const pageWithStyles = (WrappedComponent) => {
  interface IPageWithStylesProps {
    css: any[];
  }

  // @ts-ignore
  class PWS extends Component<IPageWithStylesProps, {}> {
    static displayName;

    static defaultProps = {
      css: [],
    };

    static childContextTypes = {
      insertCss: T.func,
    };

    static getInitialProps(param) {
      if (typeof WrappedComponent.getInitialProps === 'function') {
        return WrappedComponent.getInitialProps(param);
      }

      return {};
    }

    getChildContext() {
      const { css } = this.props;

      let insertCss;

      if (typeof window === 'undefined') {
        insertCss = (...styles) => {
          styles.forEach((style) => {
            const cssText = style._getCss();
            if (!~css.indexOf(cssText)) {
              css.push(cssText);
            }
          });
        };
      } else {
        insertCss = (...styles) => {
          const removeCss = styles.map((x) => x._insertCss());

          return () => {
            removeCss.forEach((f) => f());
          };
        };
      }

      return { insertCss };
    }

    render() {
      const { css = [] } = this.props;

      return (
        <div>
          <WrappedComponent {...this.props} />
          <style
            className="_isl-styles"
            dangerouslySetInnerHTML={{ __html: css.join('') }}
          />
        </div>
      );
    }
  }

  const displayName =
    WrappedComponent.displayName || WrappedComponent.name || 'Component';

  PWS.displayName = `PageWithStyles(${displayName})`;

  return PWS;
};

export { pageWithStyles as pws };
// @ts-ignore
export default pageWithStyles;
