import { FC, SVGProps } from 'react';

const Star: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M16.479 0C20.7669 13.9567 19.0433 12.1911 33 16.479C19.0433 20.7669 20.7669 19.0433 16.479 33C12.1911 19.0433 13.9567 20.7669 0 16.479C13.9567 12.1911 12.1911 13.9567 16.479 0Z" fill="#1771F1"/>
  </svg>
);

export default Star;