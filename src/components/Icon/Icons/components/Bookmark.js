/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const Bookmark =  React.forwardRef(({size, ...props}, ref) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M6.5 3.75C6.4337 3.75 6.37011 3.77634 6.32322 3.82322C6.27634 3.87011 6.25 3.9337 6.25 4V16.5595L10.0699 13.8856C10.3281 13.7048 10.6719 13.7048 10.9301 13.8856L14.75 16.5595V4C14.75 3.9337 14.7237 3.87011 14.6768 3.82322C14.6299 3.77634 14.5663 3.75 14.5 3.75H6.5ZM14.2833 18.0638C14.4706 18.1949 14.6902 18.2721 14.9183 18.287C15.1464 18.3019 15.3742 18.254 15.577 18.1485C15.7798 18.043 15.9497 17.884 16.0684 17.6886C16.187 17.4932 16.2499 17.2691 16.25 17.0405V4C16.25 3.53587 16.0656 3.09075 15.7374 2.76256C15.4092 2.43437 14.9641 2.25 14.5 2.25H6.5C6.03587 2.25 5.59075 2.43437 5.26256 2.76256C4.93437 3.09075 4.75 3.53587 4.75 4V17.04C4.75015 17.2686 4.81297 17.4932 4.93163 17.6886C5.05029 17.8839 5.22025 18.043 5.42301 18.1485C5.62578 18.254 5.8536 18.3019 6.08168 18.287C6.30977 18.2721 6.52939 18.1949 6.71667 18.0638L10.5 15.4155L14.2833 18.0638Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
));
Bookmark.displayName = 'Bookmark';
Bookmark.propTypes = {
  size: PropTypes.string
}
export default Bookmark;
/* tslint:enable */
/* eslint-enable */
