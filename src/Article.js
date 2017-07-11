import React from 'react';
import PropTypes from 'prop-types';

const Article = (props) => {
  const { name, children } = props;
  const className = `${name || 'sample'}-block`;

  return (
    <article
      style={{ padding: '20px' }}
      className={className}
    >
      <h1>{name.toUpperCase()}</h1>
      {
        React.Children.map(children, item => <div style={{ paddingTop: '10px' }}>{item}</div>)
      }
    </article>
  );
};

Article.propTypes = {
  name: PropTypes.string,
  children: PropTypes.node,
};

Article.defaultProps = {
  name: 'sample',
  children: (<h1>Is void!</h1>),
};

export default Article;
