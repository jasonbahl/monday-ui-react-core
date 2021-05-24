/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const Shredder =  React.forwardRef(({size, ...props}, ref) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M10.8985 7.48036C11.1203 7.70216 11.4211 7.82676 11.7348 7.82676L14.879 7.82676L14.879 11.6944C14.879 12.1086 15.2148 12.4444 15.629 12.4444C16.0432 12.4444 16.379 12.1086 16.379 11.6944L16.379 7.07699C16.379 6.95189 16.3477 6.83002 16.2896 6.7218C16.2555 6.65831 16.2118 6.59911 16.1592 6.54643L11.8324 2.21969C11.6842 2.07145 11.4843 1.99501 11.2825 2.00025L5.24483 2.00025C4.81641 2.00025 4.40554 2.17044 4.1026 2.47338C3.79967 2.77631 3.62948 3.18718 3.62948 3.6156L3.62948 11.6944C3.62948 12.1086 3.96527 12.4444 4.37948 12.4444C4.79369 12.4444 5.12948 12.1086 5.12948 11.6944L5.12948 3.6156C5.12948 3.58501 5.14163 3.55567 5.16326 3.53404C5.1849 3.5124 5.21424 3.50025 5.24483 3.50025L10.5521 3.50025V6.64409C10.5521 6.95775 10.6767 7.25857 10.8985 7.48036ZM13.8181 6.32676L12.0521 4.56075V6.32676H13.8181ZM2.75 13.031C2.33579 13.031 2 13.3668 2 13.781C2 14.1952 2.33579 14.531 2.75 14.531H4.03709L4.03709 17.2593C4.03709 17.6735 4.37288 18.0093 4.78709 18.0093C5.2013 18.0093 5.53709 17.6735 5.53709 17.2593L5.53709 14.531H7.51538V16.365C7.51538 16.7792 7.85117 17.115 8.26538 17.115C8.6796 17.115 9.01538 16.7792 9.01538 16.365V14.531H10.9937V17.2593C10.9937 17.6735 11.3295 18.0093 11.7437 18.0093C12.1579 18.0093 12.4937 17.6735 12.4937 17.2593V14.531H14.472V16.365C14.472 16.7792 14.8078 17.115 15.222 17.115C15.6362 17.115 15.972 16.7792 15.972 16.365V14.531H17.2594C17.6737 14.531 18.0094 14.1952 18.0094 13.781C18.0094 13.3668 17.6737 13.031 17.2594 13.031L2.75 13.031Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
));
Shredder.displayName = 'Shredder';
Shredder.propTypes = {
  size: PropTypes.string
}
export default Shredder;
/* tslint:enable */
/* eslint-enable */
