/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const Locked =  React.forwardRef(({size, ...props}, ref) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M8.13563 4.26517C8.63009 3.77071 9.30073 3.49292 10 3.49292C10.6993 3.49292 11.3699 3.77071 11.8644 4.26517C12.3589 4.75964 12.6367 5.43028 12.6367 6.12956V7.79858H7.36337V6.12956C7.36337 5.43028 7.64116 4.75964 8.13563 4.26517ZM6.60927 9.29858C6.61064 9.29859 6.61201 9.29859 6.61337 9.29859C6.61474 9.29859 6.61611 9.29859 6.61747 9.29858H13.3826C13.3839 9.29859 13.3853 9.29859 13.3867 9.29859C13.388 9.29859 13.3894 9.29859 13.3908 9.29858H14.5719V16.5071H5.42813V9.29858H6.60927ZM5.86337 7.79858V6.12956C5.86337 5.03246 6.2992 3.98029 7.07497 3.20451C7.85074 2.42874 8.90291 1.99292 10 1.99292C11.0971 1.99292 12.1493 2.42874 12.9251 3.20451C13.7008 3.98029 14.1367 5.03246 14.1367 6.12956V7.79858H15.3219C15.7361 7.79858 16.0719 8.13437 16.0719 8.54858V17.2571C16.0719 17.6713 15.7361 18.0071 15.3219 18.0071H4.67813C4.26392 18.0071 3.92813 17.6713 3.92813 17.2571V8.54858C3.92813 8.13437 4.26392 7.79858 4.67813 7.79858H5.86337Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
));
Locked.displayName = 'Locked';
Locked.propTypes = {
  size: PropTypes.string
}
export default Locked;
/* tslint:enable */
/* eslint-enable */
