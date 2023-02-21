import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, StaticQuery } from 'gatsby';
import PreviewCompatibleImage from './PreviewCompatibleImage';
import { BackgroundTitle } from './BackgroundTitle';

const BlogRollTemplate = props => {
  const { edges: posts } = props.data.allMarkdownRemark;

  return (
    <div className='blogroll-container'>
      <BackgroundTitle title={'Blog'} />
      {posts?.map(({ node: post }) => (
        <div key={post.id} className="blogroll-card">
          <Link to={post.fields.slug}>
            <article>
              {post?.frontmatter?.featuredimage && (
                <div className='featured-thumbnail'>
                  <PreviewCompatibleImage
                    imageInfo={{
                      image: post.frontmatter.featuredimage,
                      alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                      width: post.frontmatter.featuredimage.childImageSharp.gatsbyImageData.width,
                      height: post.frontmatter.featuredimage.childImageSharp.gatsbyImageData.height
                    }} />
                </div>
              )}
              <section>
                <h3>
                  {post.frontmatter.title}
                </h3>
                <p>
                  {post.excerpt}
                </p>
              </section>
            </article>
          </Link>
          <Link className='button' to={post.fields.slug}>Okumaya Devam Et →</Link>
        </div>
      ))}
    </div>

  );
};


export default function BlogRoll() {
  return (
    <StaticQuery
      query={graphql`
				query BlogRollQuery {
					allMarkdownRemark(
						sort: { order: DESC, fields: [frontmatter___date] }
						filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
					) {
						edges {
							node {
								excerpt(pruneLength: 150)
								id
								fields {
									slug
								}
								frontmatter {
									title
									templateKey
									date(formatString: "MMMM DD, YYYY")
									featuredpost
									featuredimage {
										childImageSharp {
											gatsbyImageData(
												width: 800
												quality: 100
												layout: CONSTRAINED
											)
										}
									}
								}
							}
						}
					}
				}
			`}
      render={(data, count) => <BlogRollTemplate data={data} count={count} />}
    />
  );
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};