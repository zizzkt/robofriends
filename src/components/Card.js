// import React from "react";

// //Destucturing step 2 fire 🔥
// const Card = ({name, email, id}) => {

//  //Destucturing step 1
//    // const {name, email,id } = props;

//     return(
//         <div className="bg-light-green dib br3 pa3 ma2 grow bw3 shadow-5 tc">
//             <img src= {`https://robohash.org/${id}?size=200x200`} alt='robots' />
//             <div>
//                 <h2>{name}</h2>
//                 <p>{email}</p>
//             </div>
//         </div>
//     )
// }

// export default Card;

import React from "react";

const Card = ({id, email , name,username}) => {
  return (
    <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc">
      <img src={`https://robohash.org/${id}?size=200x200` }alt="robot" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
        <p>{username}</p>
      </div>
    </div>
  );
};

export default Card;
