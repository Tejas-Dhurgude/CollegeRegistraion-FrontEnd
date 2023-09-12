import React from "react";
import { Link } from "react-router-dom";
import SchoolIcon from '@mui/icons-material/School';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';


export default function Navbar() {
  return (
    <div className="flex p-4 bg-yellow-300 justify-between">
      <div className="cursor-pointer font-semibold text-slate-600 text-md ml-2"><Link to='/'><SchoolIcon />  Institute Registration</Link></div>
      <div className="cursor-pointer font-semibold text-slate-600 text-md mr-2"><Link to='/student'>Student Registration  <LocalLibraryIcon/></Link>  </div>
    </div>
  );
}
