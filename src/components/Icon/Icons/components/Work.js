/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const Work =  React.forwardRef(({size, ...props}, ref) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M10.0417 3.25C8.98079 3.25 7.96338 3.67143 7.21323 4.42157C6.64233 4.99247 6.26183 5.71816 6.11258 6.5H3C2.58579 6.5 2.25 6.83579 2.25 7.25V11.5833V17C2.25 17.4142 2.58579 17.75 3 17.75H17.0833C17.4975 17.75 17.8333 17.4142 17.8333 17V11.5833V7.25C17.8333 6.83579 17.4975 6.5 17.0833 6.5H13.9707C13.8215 5.71816 13.441 4.99247 12.8701 4.42157C12.1199 3.67143 11.1025 3.25 10.0417 3.25ZM12.4265 6.5C12.3068 6.11948 12.0967 5.7695 11.8094 5.48223C11.3406 5.01339 10.7047 4.75 10.0417 4.75C9.37862 4.75 8.74273 5.01339 8.27389 5.48223C7.98662 5.7695 7.77648 6.11948 7.65681 6.5H12.4265ZM6.79166 8H13.2917H16.3333V10.8333H10.75V10.5C10.75 10.0858 10.4142 9.75 10 9.75C9.58579 9.75 9.25 10.0858 9.25 10.5V10.8333H3.75V8H6.79166ZM3.75 12.3333H9.25V12.6667C9.25 13.0809 9.58579 13.4167 10 13.4167C10.4142 13.4167 10.75 13.0809 10.75 12.6667V12.3333H16.3333V16.25H3.75V12.3333Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
));
Work.displayName = 'Work';
Work.propTypes = {
  size: PropTypes.string
}
export default Work;
/* tslint:enable */
/* eslint-enable */
