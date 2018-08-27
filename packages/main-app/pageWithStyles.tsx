import { default as T } from 'prop-types';
import { Component, default as React } from 'react';

export const pageWithStyles = WrappedComponent => {
  interface IPageWithStylesProps {
    css: any[];
  }

  class PageWithStyles extends Component<IPageWithStylesProps, {}> {
    static defaultProps = {
      css: [],
    };

    static childContextTypes = {
      insertCss: T.func,
    };

    getChildContext() {
      const { css } = this.props;

      const insertCss =
        typeof window === 'undefined'
          ? (...styles) => {
            styles.forEach(style => {
                const cssText = style._getCss();
                if (!~css.indexOf(cssText)) {
                  css.push(cssText);
                }
              });
          }
          : (...styles) => {
            const removeCss = styles.map(x => x._insertCss());

            return () => {
                removeCss.forEach(f => f());
              };
          };

      return { insertCss };
    }

    render() {
      const { css = [] } = this.props;
      console.log(css);

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

  PageWithStyles.displayName = `PageWithStyles(${displayName})`;

  return PageWithStyles;
};

export default pageWithStyles;
