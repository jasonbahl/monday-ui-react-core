/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const Wand =  React.forwardRef(({size, ...props}, ref) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M16.9384 4.75694C17.4881 3.67802 16.3361 2.52596 15.2572 3.0757L12.7747 4.34056L10.8046 2.37049C9.94841 1.51425 8.49672 2.25392 8.68615 3.44991L9.12199 6.20172L6.63956 7.46658C5.56064 8.01632 5.8155 9.62552 7.0115 9.81495L8.88363 10.1115L2.21967 16.7754C1.92678 17.0683 1.92678 17.5432 2.21967 17.8361C2.51256 18.129 2.98744 18.129 3.28033 17.8361L9.91402 11.2024L10.1991 13.0026C10.3886 14.1986 11.9978 14.4535 12.5475 13.3745L13.8124 10.8921L16.5642 11.3279C17.7602 11.5174 18.4998 10.0657 17.6436 9.20945L15.6735 7.23938L16.9384 4.75694ZM13.2939 5.75953L15.2526 4.76152L14.2546 6.72023C14.0087 7.20274 14.1015 7.78868 14.4844 8.1716L16.0389 9.72605L13.8676 9.38216C13.3328 9.29744 12.8042 9.56677 12.5583 10.0493L11.5603 12.008L11.2164 9.83674C11.1317 9.30187 10.7122 8.88239 10.1774 8.79767L8.0061 8.45378L9.96482 7.45577C10.4473 7.20992 10.7167 6.68133 10.6319 6.14646L10.288 3.97521L11.8425 5.52966C12.2254 5.91258 12.8114 6.00538 13.2939 5.75953Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
));
Wand.displayName = 'Wand';
Wand.propTypes = {
  size: PropTypes.string
}
export default Wand;
/* tslint:enable */
/* eslint-enable */
