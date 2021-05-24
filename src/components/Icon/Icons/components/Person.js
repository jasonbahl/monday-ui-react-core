/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const Person =  React.forwardRef(({size, ...props}, ref) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M9.81628 2C8.63228 2 7.49677 2.47034 6.65955 3.30756C5.82234 4.14477 5.352 5.28028 5.352 6.46429C5.352 7.64829 5.82234 8.7838 6.65955 9.62101C7.49677 10.4582 8.63228 10.9286 9.81628 10.9286C11.0003 10.9286 12.1358 10.4582 12.973 9.62101C13.8102 8.7838 14.2806 7.64829 14.2806 6.46429C14.2806 5.28028 13.8102 4.14477 12.973 3.30756C12.1358 2.47034 11.0003 2 9.81628 2ZM7.72021 4.36822C8.27613 3.81231 9.0301 3.5 9.81628 3.5C10.6025 3.5 11.3564 3.81231 11.9123 4.36822C12.4683 4.92413 12.7806 5.67811 12.7806 6.46429C12.7806 7.25046 12.4683 8.00444 11.9123 8.56035C11.3564 9.11626 10.6025 9.42857 9.81628 9.42857C9.0301 9.42857 8.27613 9.11626 7.72021 8.56035C7.1643 8.00444 6.852 7.25046 6.852 6.46429C6.852 5.67811 7.1643 4.92413 7.72021 4.36822ZM9.81629 11.7202C8.08836 11.7202 6.40482 12.2674 5.00718 13.2835C3.60954 14.2995 2.56962 15.7321 2.03658 17.3758C1.96255 17.6041 2.00224 17.854 2.14337 18.0482C2.28449 18.2423 2.51 18.3572 2.75001 18.3572H16.8826C17.1226 18.3572 17.3481 18.2423 17.4892 18.0482C17.6303 17.854 17.67 17.6041 17.596 17.3758C17.063 15.7321 16.023 14.2995 14.6254 13.2835C13.2278 12.2674 11.5442 11.7202 9.81629 11.7202ZM5.8892 14.4968C7.03051 13.6671 8.40527 13.2202 9.81629 13.2202C11.2273 13.2202 12.6021 13.6671 13.7434 14.4968C14.5964 15.1169 15.2863 15.927 15.7621 16.8572H3.87051C4.34632 15.927 5.03617 15.1169 5.8892 14.4968Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
));
Person.displayName = 'Person';
Person.propTypes = {
  size: PropTypes.string
}
export default Person;
/* tslint:enable */
/* eslint-enable */
