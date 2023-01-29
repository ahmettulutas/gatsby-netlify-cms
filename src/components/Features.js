import * as React from 'react';
import PropTypes from 'prop-types';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import { BackgroundTitle } from './BackgroundTitle';
import IntersectionObserverWrapper from './IntersectionObserver';

const FeatureGrid = ({ gridItems }) => (
  <section className='page-container my-1'>
    <BackgroundTitle title={'Uzmanlıklarım'} />
    <div>
      <h3 className='size-1 highlighted m-auto'>Uzmanlıklarım</h3>
    </div>
    <div className='feature-cards'>

      {gridItems.map((item, index) => (
        <section key={item.text} lang="tr" className='feature'>
          <IntersectionObserverWrapper animationSlide={'slideUp'} translate={20} delay={800 * (index + 1)} once={false}>
            <div className='feature-image'>
              <PreviewCompatibleImage imageInfo={item} />
            </div>
            <div>
              <h3>{item.title}</h3>
              <p className='light-text'>{item.text}</p>
            </div>
          </IntersectionObserverWrapper>
        </section>
      ))}
    </div>
  </section>
);

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
      title: PropTypes.string
    })
  )
};

export default FeatureGrid;
