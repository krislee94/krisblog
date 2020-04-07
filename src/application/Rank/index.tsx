import React from 'react';

function Rank(props:any) {
  console.log(props);  
  return  (
    <div>Rank</div>
  )
}

export default React.memo(Rank);