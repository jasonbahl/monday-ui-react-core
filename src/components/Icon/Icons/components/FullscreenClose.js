/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const FullscreenClose =  React.forwardRef(({size, ...props}, ref) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M3.28033 2.21967C2.98744 1.92678 2.51256 1.92678 2.21967 2.21967C1.92678 2.51256 1.92678 2.98744 2.21967 3.28033L5.43934 6.5H2.75C2.33579 6.5 2 6.83579 2 7.25C2 7.66421 2.33579 8 2.75 8H7.25H8V7.25V2.75C8 2.33579 7.66421 2 7.25 2C6.83579 2 6.5 2.33579 6.5 2.75V5.43934L3.28033 2.21967ZM13.5 14.5607L16.7197 17.7803C17.0126 18.0732 17.4874 18.0732 17.7803 17.7803C18.0732 17.4874 18.0732 17.0126 17.7803 16.7197L14.5607 13.5H17.25C17.6642 13.5 18 13.1642 18 12.75C18 12.3358 17.6642 12 17.25 12H12.75H12V12.75V17.25C12 17.6642 12.3358 18 12.75 18C13.1642 18 13.5 17.6642 13.5 17.25V14.5607ZM17.7803 2.21967C18.0732 2.51256 18.0732 2.98744 17.7803 3.28033L14.5607 6.5H17.25C17.6642 6.5 18 6.83579 18 7.25C18 7.66421 17.6642 8 17.25 8H12.75H12V7.25V2.75C12 2.33579 12.3358 2 12.75 2C13.1642 2 13.5 2.33579 13.5 2.75V5.43934L16.7197 2.21967C17.0126 1.92678 17.4874 1.92678 17.7803 2.21967ZM2.21967 16.7197C1.92678 17.0126 1.92678 17.4874 2.21967 17.7803C2.51256 18.0732 2.98744 18.0732 3.28033 17.7803L6.5 14.5607L6.5 17.25C6.5 17.6642 6.83579 18 7.25 18C7.66421 18 8 17.6642 8 17.25L8 12.75L8 12H7.25L2.75 12C2.33579 12 2 12.3358 2 12.75C2 13.1642 2.33579 13.5 2.75 13.5H5.43934L2.21967 16.7197Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
));
FullscreenClose.displayName = 'FullscreenClose';
FullscreenClose.propTypes = {
  size: PropTypes.string
}
export default FullscreenClose;
/* tslint:enable */
/* eslint-enable */
