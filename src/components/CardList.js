// import React from 'react'
// import Card from './Card'

// const CardList = ({robots}) => {

//     const cardComponet = robots.map((robot, i)=>{

//         return  (
//         <Card key={i}
//          id={robots[i].id}
//          name={robots[i].name}
//          email={robots[i].email}

//          />
//          )
//     })

//   return (
//     <div>
//      {cardComponet}
//     </div>
//   )
// }

// export default CardList

//------------------------------------------------------------------------------------------------//

import React from "react";
import Card from "./Card";
// import { robots } from './robots'

const CardList = ({ robots }) => {
  const CardArray = robots.map((robot, i) => {
    return (
      <Card
        key={i}
        id={robots[i].id}
        name={robots[i].name}
        email={robots[i].email}
        username={robots[i].username}
      />
    );
  });

  return <div>{CardArray}</div>;
};

export default CardList;
