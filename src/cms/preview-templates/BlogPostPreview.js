import React from 'react';
import PropTypes from 'prop-types';
import { BlogPostTemplate } from '../../templates/blog-post';
import { Loading } from '../../components/Loading';

const BlogPostPreview = ({ entry, widgetFor, getAsset }) => {
  const tags = entry.getIn(['data', 'tags']),
    data = entry.getIn(['data']).toJS();
  if (data)
    return (
      <BlogPostTemplate
        content={widgetFor('body')}
        description={entry.getIn(['data', 'description'])}
        tags={tags && tags.toJS()}
        title={entry.getIn(['data', 'title'])}
        image={getAsset(entry.getIn(['data', 'featuredimage']))}
      />
    );
  else
    return <Loading />;
};

BlogPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default BlogPostPreview;
