import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import Carousel, { Modal, ModalGateway } from 'react-images';
import GalleryItem from './GalleryItem';
import projects from '../constants/projectsData';

const Gallery = () => {
  const [lightboxIsOpen, setLightboxIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const toggleLightbox = useCallback(
    (selectedIndex) => {
      setLightboxIsOpen(!lightboxIsOpen);
      setSelectedIndex(selectedIndex);
    },
    [lightboxIsOpen]
  );

  return (
    <div>
      {projects && (
        <div className='row'>
          {projects.map((project, i) => {
            return (
              <GalleryItem
                id={i + 1}
                source={project.sources[0].source}
                {...project}
                position={i}
                toggleLightbox={toggleLightbox}
              />
            );
          })}
        </div>
      )}
      <ModalGateway>
        {lightboxIsOpen && (
          <Modal onClose={toggleLightbox}>
            <Carousel
              currentIndex={0}
              views={projects[selectedIndex].sources}
              showNavigationOnTouchDevice={true}
            />
          </Modal>
        )}
      </ModalGateway>
    </div>
  );
};

Gallery.displayName = 'Gallery';
Gallery.propTypes = {
  projects: PropTypes.array,
};

export default Gallery;
