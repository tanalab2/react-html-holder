import React from "react";

class HtmlHolder extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { onload } = this.props;
    if (onload) {
      onload();
    }
  }

  render() {
    const { innerHtml, onload, ...props } = this.props;
    return <div dangerouslySetInnerHTML={{ __html: innerHtml }} {...props} />;
  }
}

export const htmlStory = (
  props = { html: "no data in html", styles: {}, onload: () => {} }
) => {
  const { html, onload, styles } = props;

  return () => <Htmlstory innerHtml={html} onload={onload} style={styles} />;
};

export default HtmlHolder;
