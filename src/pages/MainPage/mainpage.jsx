import React from 'react';
import {useSelector} from "react-redux";

const MainPage = () => {

  const characters = useSelector( state => state.data.data )

  return (
    <div>
      {characters.map((item, idx) => {
        return (
          <div key={idx}>
            {item.fullName}
          </div>
        )
      })}
    </div>
  );
};

export default MainPage;