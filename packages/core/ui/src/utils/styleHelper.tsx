import * as React from 'react';

const css: any = [];

const collectOrRender = (styles: any[]) => {
  const renderedCollection: any = [];

  for (let i = 0, l = styles.length; i < l; i++) {
    const stylesFile = styles[i];

    if (typeof window !== 'undefined' && window) {
      renderedCollection.push(stylesFile._insertCss());
    }

    css.push(stylesFile._getCss());
  }

  return renderedCollection;
};

export function styleHelper(ComposedComponent, styles) {
  return class Styles extends React.Component<any, any> {
    styleRemovers;

    componentWillMount() {
      this.styleRemovers = collectOrRender(styles);
    }

    componentDidMount() {
      for (let i = 0, l = this.styleRemovers.length; i < l; i++) {
        const styleRemover = this.styleRemovers[i];
        if (typeof styleRemover === 'function') styleRemover();
      }
    }

    componentWillUnmount() {
      setTimeout(() => {
        for (let i = 0, l = this.styleRemovers.length; i < l; i++) {
          const styleRemover = this.styleRemovers[i];
          if (typeof styleRemover === 'function') styleRemover();
        }
      }, 0);
    }

    render() {
      return (
        <React.Fragment>
          <ComposedComponent {...this.props} />
          <style
            className="_isl-styles"
            dangerouslySetInnerHTML={{ __html: css.join('') }}
          />
        </React.Fragment>
      );
    }
  };
}

export function renderStyles() {
  return css.join('');
}
