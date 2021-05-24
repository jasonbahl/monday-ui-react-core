/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const TextBig =  React.forwardRef(({size, ...props}, ref) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M6.05824 16.25H6.23297L6.29302 16.0859L7.46349 12.8874H12.5369L13.7154 16.0864L13.7756 16.25H13.95H15H15.3613L15.234 15.9119L10.7139 3.91188L10.6529 3.75H10.4799H9.5201H9.34712L9.28615 3.91188L4.76605 15.9119L4.63868 16.25H5H6.05824ZM7.95838 11.522L9.9959 5.96274L12.0334 11.522H7.95838Z"
      fill="currentColor" stroke="currentColor" strokeWidth=".5" />
  </svg>
));
TextBig.displayName = 'TextBig';
TextBig.propTypes = {
  size: PropTypes.string
}
export default TextBig;
/* tslint:enable */
/* eslint-enable */
