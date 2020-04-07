import React from 'react';

function Singers(props:any) {
  console.log(props);
  return  (
    <div>Singers</div>
  )
}

export default React.memo(Singers);