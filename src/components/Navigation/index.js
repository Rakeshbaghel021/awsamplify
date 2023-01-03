import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <Link to="/">dash</Link>
      <Link to="/trade">trades</Link>
    </div>
  );
};

export default Navigation;
