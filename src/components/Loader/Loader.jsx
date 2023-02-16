import { RotatingLines } from 'react-loader-spinner';

import { Div } from './loader.styled';

const Loader = () => {
  return (
    <Div >
    <RotatingLines
    strokeColor="black"
    strokeWidth="5"
    animationDuration="0.75"
    width="96"
    visible={true}
  />
  </Div>
  );
};

export default Loader;