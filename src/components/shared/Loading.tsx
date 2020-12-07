import React, { MutableRefObject } from 'react';

const Loading = React.forwardRef((props, ref) => (
  <div
    className="ui active centered inline text loader"
    ref={ref as MutableRefObject<HTMLDivElement>}
  >
    Loading
  </div>
));

export default Loading;
