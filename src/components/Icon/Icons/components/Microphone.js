/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const Microphone =  React.forwardRef(({size, ...props}, ref) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M11.4521 8.55267V4.97849C11.4521 4.16194 10.7901 3.5 9.9736 3.5C9.15706 3.5 8.49512 4.16194 8.49512 4.97848V8.55267C8.49512 9.36921 9.15706 10.0312 9.9736 10.0312C10.7901 10.0312 11.4521 9.36921 11.4521 8.55267ZM9.9736 2C8.32863 2 6.99512 3.33351 6.99512 4.97848V8.55267C6.99512 10.1976 8.32863 11.5312 9.9736 11.5312C11.6186 11.5312 12.9521 10.1976 12.9521 8.55267V4.97849C12.9521 3.33351 11.6186 2 9.9736 2ZM15.4595 8.40878C15.868 8.47695 16.144 8.86342 16.0758 9.27199C15.481 12.8371 12.7765 14.3114 10.749 14.6067V17.2C10.749 17.6142 10.4132 17.95 9.99902 17.95C9.58481 17.95 9.24902 17.6142 9.24902 17.2V14.6287C8.16946 14.5234 7.09077 14.1747 6.17073 13.4657C5.02857 12.5856 4.20878 11.2098 3.90002 9.26622C3.83504 8.85714 4.11399 8.47283 4.52307 8.40784C4.93215 8.34286 5.31646 8.62181 5.38145 9.03089C5.64047 10.6614 6.29596 11.6685 7.08633 12.2776C7.88838 12.8957 8.90814 13.1641 9.98808 13.1641C11.5155 13.1641 14.0769 12.1379 14.5963 9.02512C14.6644 8.61656 15.0509 8.34061 15.4595 8.40878Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
));
Microphone.displayName = 'Microphone';
Microphone.propTypes = {
  size: PropTypes.string
}
export default Microphone;
/* tslint:enable */
/* eslint-enable */
