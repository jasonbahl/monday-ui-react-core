/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const Bullets =  React.forwardRef(({size, ...props}, ref) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <g fill="currentColor">
      <path d="M3 5.53846C3 5.68127 3.05673 5.81823 3.15771 5.91921C3.25869 6.02019 3.39565 6.07692 3.53846 6.07692C3.68127 6.07692 3.81823 6.02019 3.91921 5.91921C4.02019 5.81823 4.07692 5.68127 4.07692 5.53846C4.07692 5.39565 4.02019 5.25869 3.91921 5.15771C3.81823 5.05673 3.68127 5 3.53846 5C3.39565 5 3.25869 5.05673 3.15771 5.15771C3.05673 5.25869 3 5.39565 3 5.53846V5.53846Z"
      />
      <path d="M2.62738 4.62738C2.86901 4.38575 3.19674 4.25 3.53846 4.25 3.88018 4.25 4.20791 4.38575 4.44954 4.62738 4.69117 4.86902 4.82692 5.19674 4.82692 5.53846 4.82692 5.88018 4.69117 6.20791 4.44954 6.44954 4.20791 6.69117 3.88018 6.82692 3.53846 6.82692 3.19674 6.82692 2.86901 6.69117 2.62738 6.44954 2.38575 6.20791 2.25 5.88018 2.25 5.53846 2.25 5.19674 2.38575 4.86902 2.62738 4.62738zM3.53846 5.75C3.59457 5.75 3.64837 5.72771 3.68804 5.68804 3.72771 5.64837 3.75 5.59457 3.75 5.53846 3.75 5.48236 3.72771 5.42855 3.68804 5.38888 3.64837 5.34921 3.59457 5.32692 3.53846 5.32692 3.48236 5.32692 3.42855 5.34921 3.38888 5.38888 3.34921 5.42855 3.32692 5.48236 3.32692 5.53846 3.32692 5.59457 3.34921 5.64837 3.38888 5.68804 3.42855 5.72771 3.48236 5.75 3.53846 5.75zM6.55769 5.53845C6.55769 5.12424 6.89348 4.78845 7.30769 4.78845H17C17.4142 4.78845 17.75 5.12424 17.75 5.53845 17.75 5.95267 17.4142 6.28845 17 6.28845H7.30769C6.89348 6.28845 6.55769 5.95267 6.55769 5.53845z"
        fillRule="evenodd" clipRule="evenodd" />
      <path d="M3 10.3846C3 10.5274 3.05673 10.6644 3.15771 10.7654C3.25869 10.8663 3.39565 10.9231 3.53846 10.9231C3.68127 10.9231 3.81823 10.8663 3.91921 10.7654C4.02019 10.6644 4.07692 10.5274 4.07692 10.3846C4.07692 10.2418 4.02019 10.1048 3.91921 10.0039C3.81823 9.90288 3.68127 9.84615 3.53846 9.84615C3.39565 9.84615 3.25869 9.90288 3.15771 10.0039C3.05673 10.1048 3 10.2418 3 10.3846V10.3846Z"
      />
      <path d="M2.62738 9.47353C2.86901 9.23189 3.19674 9.09615 3.53846 9.09615 3.88018 9.09615 4.20791 9.23189 4.44954 9.47353 4.69117 9.71516 4.82692 10.0429 4.82692 10.3846 4.82692 10.7263 4.69117 11.0541 4.44954 11.2957 4.20791 11.5373 3.88018 11.6731 3.53846 11.6731 3.19674 11.6731 2.86901 11.5373 2.62738 11.2957 2.38575 11.0541 2.25 10.7263 2.25 10.3846 2.25 10.0429 2.38575 9.71516 2.62738 9.47353zM3.53846 10.5961C3.59457 10.5961 3.64837 10.5739 3.68804 10.5342 3.72771 10.4945 3.75 10.4407 3.75 10.3846 3.75 10.3285 3.72771 10.2747 3.68804 10.235 3.64837 10.1954 3.59457 10.1731 3.53846 10.1731 3.48236 10.1731 3.42855 10.1954 3.38888 10.235 3.34921 10.2747 3.32692 10.3285 3.32692 10.3846 3.32692 10.4407 3.34921 10.4945 3.38888 10.5342 3.42855 10.5739 3.48236 10.5961 3.53846 10.5961zM6.55769 10.3846C6.55769 9.9704 6.89348 9.63461 7.30769 9.63461H17C17.4142 9.63461 17.75 9.9704 17.75 10.3846 17.75 10.7988 17.4142 11.1346 17 11.1346H7.30769C6.89348 11.1346 6.55769 10.7988 6.55769 10.3846z"
        fillRule="evenodd" clipRule="evenodd" />
      <path d="M3 15.2308C3 15.3736 3.05673 15.5105 3.15771 15.6115C3.25869 15.7125 3.39565 15.7692 3.53846 15.7692C3.68127 15.7692 3.81823 15.7125 3.91921 15.6115C4.02019 15.5105 4.07692 15.3736 4.07692 15.2308C4.07692 15.0879 4.02019 14.951 3.91921 14.85C3.81823 14.749 3.68127 14.6923 3.53846 14.6923C3.39565 14.6923 3.25869 14.749 3.15771 14.85C3.05673 14.951 3 15.0879 3 15.2308V15.2308Z"
      />
      <path d="M2.62738 14.3197C2.86902 14.078 3.19674 13.9423 3.53846 13.9423 3.88018 13.9423 4.20791 14.078 4.44954 14.3197 4.69118 14.5613 4.82692 14.889 4.82692 15.2308 4.82692 15.5725 4.69118 15.9002 4.44954 16.1418 4.20791 16.3835 3.88018 16.5192 3.53846 16.5192 3.19674 16.5192 2.86902 16.3835 2.62738 16.1418 2.38575 15.9002 2.25 15.5725 2.25 15.2308 2.25 14.889 2.38575 14.5613 2.62738 14.3197zM3.53846 15.4423C3.59456 15.4423 3.64837 15.42 3.68804 15.3803 3.72771 15.3407 3.75 15.2869 3.75 15.2308 3.75 15.1747 3.72771 15.1208 3.68804 15.0812 3.64837 15.0415 3.59456 15.0192 3.53846 15.0192 3.48236 15.0192 3.42855 15.0415 3.38888 15.0812 3.34921 15.1208 3.32692 15.1747 3.32692 15.2308 3.32692 15.2869 3.34921 15.3407 3.38888 15.3803 3.42855 15.42 3.48236 15.4423 3.53846 15.4423zM6.55769 15.2308C6.55769 14.8166 6.89348 14.4808 7.30769 14.4808H17C17.4142 14.4808 17.75 14.8166 17.75 15.2308 17.75 15.645 17.4142 15.9808 17 15.9808H7.30769C6.89348 15.9808 6.55769 15.645 6.55769 15.2308z"
        fillRule="evenodd" clipRule="evenodd" />
    </g>
  </svg>
));
Bullets.displayName = 'Bullets';
Bullets.propTypes = {
  size: PropTypes.string
}
export default Bullets;
/* tslint:enable */
/* eslint-enable */
