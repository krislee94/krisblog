import React from 'react';

function Recommend(props:any) {
  console.log(props);
  return  (
    <div>Recommend</div>
  )
}

export default React.memo(Recommend);