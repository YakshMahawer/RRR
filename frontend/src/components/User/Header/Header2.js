// Header for Thank You Page which only includes staistics and status and not complain 

import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <Link className="statsistics" to="/statistics">
        STATISTICS
      </Link>
      <Link className="status" to="/status">
        CHECK STATUS
      </Link>
    </div>
  );
};

export default Header;
