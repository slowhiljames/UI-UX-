import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const ShowHeader = ({ children }) => {
  const location = useLocation();
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    if (location.pathname === '/login') {
      setShowNavbar(false);
    }else if(location.pathname === '/dashboard/admin'){
      setShowNavbar(false)
    }else if(location.pathname === '/dashboard/admin'){
      setShowNavbar(false)
    }else if(location.pathname === '/dashboard/siteeng'){
      setShowNavbar(false)
    }else if(location.pathname === '/dashboard/client'){
      setShowNavbar(false)
    }else {
      setShowNavbar(true);
    }
  }, [location]);

  return <div>{showNavbar && children}</div>;
};

export default ShowHeader;
