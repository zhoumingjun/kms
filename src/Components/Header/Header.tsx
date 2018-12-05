import React from 'react';

//
// Props
//
interface IHeaderProps {
  name: string;
}

//
// Class
//
const Header: React.SFC<IHeaderProps> = (props) => {
  const { name } = props;
  return (
    <div>
      <span>{name} </span>
    </div>
  );
};


export default Header;
