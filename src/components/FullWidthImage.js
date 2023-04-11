import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';

export default function FullWidthImage(props) {
  const {
    height = 300,
    img,
    title,
    subheading,
    imgPosition = 'top left'
  } = props;

  return (
    <React.Fragment>
      <div className="margin-top-0" style={{ display: 'grid', alignItems: 'center' }}>
        {
          img?.url ?
            <img src={img} style={{ gridArea: '3/1', height, width: '100%' }} alt="" />
            :
            <GatsbyImage
              image={img}
              objectFit={'cover'}
              objectPosition={imgPosition}
              style={{
                gridArea: '1/1',
                maxHeight: height
              }}
              layout="fullWidth"
              aspectratio={3 / 1}
              alt=""
              formats={['auto', 'webp', 'avif']}
            />
        }
        {(title || subheading) && (
          <div
            style={{
              gridArea: '1/1',
              position: 'relative',
              placeItems: 'center',
              display: 'grid'
            }}
          >
            {title && (
              <h1
                className="has-text-weight-bold"
                style={{
                  boxShadow:
                    'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
                  backgroundColor: 'rgb(255, 68, 0)',
                  color: 'white',
                  lineHeight: '1',
                  padding: '0.25em'
                }}
              >
                {title}
              </h1>
            )}
            {subheading && (
              <h3
                className="has-text-weight-bold"
                style={{
                  boxShadow:
                    'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
                  backgroundColor: 'rgb(255, 68, 0)',
                  color: 'white',
                  lineHeight: '1',
                  padding: '0.25rem',
                  marginTop: '0.5rem'
                }}
              >
                {subheading}
              </h3>
            )}
          </div>
        )}
      </div>
    </React.Fragment>
  );
}

FullWidthImage.propTypes = {
  img: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  height: PropTypes.number,
  subheading: PropTypes.string
};