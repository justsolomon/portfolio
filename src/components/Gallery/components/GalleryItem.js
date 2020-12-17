import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import SkillList from './SkillList';

const GalleryItem = ({
  id,
  source,
  thumbnail,
  name,
  description,
  skills,
  repoUrl,
  liveUrl,
  position,
  toggleLightbox,
}) => {
  const onClick = useCallback(
    (e) => {
      e.preventDefault();
      toggleLightbox(position);
    },
    [position, toggleLightbox]
  );

  return (
    <article key={id} className='6u 12u$(xsmall) work-item'>
      <a className='image fit thumb' href={source} onClick={onClick}>
        <img src={thumbnail} alt={`${name} project thumbnail`} />
      </a>

      <div className='details-illustration'>
        <SkillList skills={skills} />

        <div className='icon-list'>
          {repoUrl && (
            <a
              target='_blank'
              rel='noreferrer'
              href={repoUrl}
              className='icon fa-github'
            >
              <span className='label'>GitHub Repository</span>
            </a>
          )}
          <a
            target='_blank'
            rel='noreferrer'
            href={liveUrl}
            className='icon fa-globe'
          >
            <span className='label'>Live Website</span>
          </a>
        </div>
      </div>

      <h3>{name}</h3>
      <p>{description}</p>
    </article>
  );
};

GalleryItem.displayName = 'GalleryItem';
GalleryItem.propTypes = {
  id: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  skills: PropTypes.array.isRequired,
  liveUrl: PropTypes.string.isRequired,
  repoUrl: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  toggleLightbox: PropTypes.func.isRequired,
};

export default GalleryItem;
