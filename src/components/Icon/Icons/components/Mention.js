/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const Mention =  React.forwardRef(({size, ...props}, ref) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M11.056 7.66181C10.7273 7.52608 10.3749 7.45626 10.019 7.45638H10.0188C9.48278 7.45638 8.95896 7.6149 8.51358 7.91168C8.06822 8.20845 7.7214 8.63004 7.51668 9.12294C7.31196 9.61582 7.25843 10.1581 7.36277 10.6812C7.46711 11.2043 7.7247 11.6851 8.10328 12.0626C8.48187 12.4402 8.96447 12.6975 9.49014 12.8018C10.0158 12.9061 10.5607 12.8525 11.0557 12.648C11.5508 12.4435 11.9736 12.0974 12.2709 11.6536C12.5682 11.2099 12.7268 10.6884 12.7268 10.155H13.4355L12.7268 10.1548C12.7269 9.80068 12.6571 9.44996 12.5212 9.12266C12.3853 8.79536 12.186 8.49784 11.9347 8.24715C11.6833 7.99646 11.3847 7.79753 11.056 7.66181ZM14.1443 10.155C14.1444 9.61423 14.0377 9.07873 13.8303 8.57916C13.6229 8.07951 13.3188 7.62565 12.9356 7.24346C12.5524 6.86128 12.0975 6.55825 11.597 6.3516C11.0966 6.14498 10.5603 6.03873 10.0188 6.03888M14.1443 10.1553C14.1442 10.9697 13.902 11.7657 13.4485 12.4426C12.995 13.1195 12.3505 13.6468 11.5969 13.9581C10.8433 14.2694 10.0142 14.3509 9.21432 14.1922C8.41443 14.0335 7.67941 13.6418 7.10233 13.0663C6.52522 12.4908 6.13199 11.7573 5.97266 10.9584C5.81332 10.1596 5.89511 9.33159 6.20761 8.57922C6.5201 7.82687 7.04914 7.18414 7.72755 6.73208C8.40587 6.28008 9.20314 6.03893 10.0186 6.03888"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
    <path d="M10.0252 2.14624V2.14627C11.4321 2.15886 12.8119 2.53495 14.0298 3.23798C15.2464 3.9402 16.2601 4.94472 16.9721 6.1539C18.7487 9.08619 17.9842 11.7046 16.6033 13.0411C15.9481 13.6752 15.0445 14.1089 14.1877 13.9111C13.7366 13.8069 13.3499 13.5336 13.09 13.1107C12.839 12.7023 12.7269 12.1907 12.7269 11.615V10.155C12.7269 9.76356 13.0442 9.44624 13.4356 9.44624C13.827 9.44624 14.1444 9.76356 14.1444 10.155V11.615C14.1444 12.0191 14.2246 12.2495 14.2977 12.3685C14.3619 12.4729 14.431 12.5124 14.5066 12.5299C14.7033 12.5753 15.137 12.4875 15.6175 12.0226C16.507 11.1616 17.2065 9.27323 15.7576 6.88494L15.7526 6.87664L15.7527 6.87661C15.1649 5.87708 14.3272 5.04634 13.3212 4.46563C12.3161 3.88545 11.1773 3.57469 10.0158 3.56374C9.03845 3.56436 8.07348 3.781 7.19029 4.19801C6.30614 4.61547 5.52605 5.22329 4.90617 5.97753C4.2863 6.73176 3.84207 7.61363 3.60538 8.55952C3.36868 9.5054 3.3454 10.4918 3.53718 11.4478C3.72897 12.4037 4.13108 13.3054 4.71464 14.0879C5.2982 14.8703 6.04871 15.5141 6.91215 15.9726C7.7756 16.431 8.73041 16.6928 9.70773 16.7389C10.685 16.785 11.6604 16.6142 12.5634 16.239C12.9249 16.0888 13.3397 16.26 13.4899 16.6215C13.6401 16.983 13.4688 17.3977 13.1073 17.5479C12.0111 18.0035 10.8272 18.2107 9.64097 18.1548C8.45479 18.0989 7.29574 17.7812 6.24738 17.2245C5.19901 16.6678 4.2874 15.886 3.57836 14.9353C2.86931 13.9846 2.38053 12.8887 2.14738 11.7266C1.91423 10.5645 1.94255 9.36528 2.23028 8.21542C2.51801 7.06557 3.05796 5.99386 3.81106 5.07751C4.56416 4.16117 5.51163 3.42304 6.58508 2.9162C7.65852 2.40937 8.83126 2.14642 10.0188 2.14624L10.0252 2.14624Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
));
Mention.displayName = 'Mention';
Mention.propTypes = {
  size: PropTypes.string
}
export default Mention;
/* tslint:enable */
/* eslint-enable */
