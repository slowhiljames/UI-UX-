import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const ShowFooter = ({ children }) => {
  const location = useLocation();
  const [showFooter, setShowFooter] = useState(true);

  useEffect(() => {
    if (location.pathname === '/login') {
      setShowFooter(false);
    }else if(location.pathname === '/dashboard/admin'){
      setShowFooter(false)
    }else if(location.pathname === '/dashboard/siteeng'){
      setShowFooter(false)
    }else if(location.pathname === '/dashboard/manager'){
      setShowFooter(false)
    }else if(location.pathname === '/dashboard/client'){
      setShowFooter(false)
    } else {
      setShowFooter(true);
    }
  }, [location]);

  return <div>{showFooter && children}</div>;
};

export default ShowFooter;
