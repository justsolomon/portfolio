import React from 'react';
import PropTypes from 'prop-types';

function SkillList({ skills }) {
  return (
    <ul className='skills-list'>
      {skills.map((skill, index) => (
        <li key={index} className='skills-list__item'>
          {skill}
        </li>
      ))}
    </ul>
  );
}

SkillList.propTypes = {
  skills: PropTypes.array.isRequired,
};

export default SkillList;
