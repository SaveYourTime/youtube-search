import React, { MutableRefObject } from 'react';
import styled from 'styled-components';

const MyLoading = styled.div`
  &.ui.text.loader {
    width: 100% !important;
  }
`;

const Loading = React.forwardRef((props, ref) => (
  <MyLoading
    className="ui active centered inline text loader"
    ref={ref as MutableRefObject<HTMLDivElement>}
  >
    Loading
  </MyLoading>
));

export default Loading;
