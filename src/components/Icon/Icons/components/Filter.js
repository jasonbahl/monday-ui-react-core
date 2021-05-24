/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const Filter =  React.forwardRef(({size, ...props}, ref) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M2 2.74436C2 2.33326 2.33401 2 2.74603 2H17.254C17.666 2 18 2.33323 18 2.74432V3.20521C18 6.64579 15.516 9.5466 12.1818 10.1358V15.0135C12.1818 15.3799 12.0627 15.7363 11.8424 16.0294L10.8727 17.3194C9.89424 18.6212 7.81818 17.9307 7.81818 16.3035V10.0952C4.42996 9.29204 2 6.26397 2 2.74436ZM3.49535 3.4513C3.80553 6.12305 5.85298 8.31496 8.56735 8.76634L8.64912 8.77994C9.00897 8.83978 9.27273 9.15043 9.27273 9.51444V16.3035C9.27273 16.536 9.56931 16.6346 9.70909 16.4487L10.6788 15.1586C10.7103 15.1168 10.7273 15.0658 10.7273 15.0135V9.51427C10.7273 9.12787 11.0241 8.80598 11.41 8.7739C14.2304 8.53939 16.4183 6.24705 16.5401 3.4513H3.49535Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
));
Filter.displayName = 'Filter';
Filter.propTypes = {
  size: PropTypes.string
}
export default Filter;
/* tslint:enable */
/* eslint-enable */
