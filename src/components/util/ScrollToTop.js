import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

const ScrollToTop = ({ children, location }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return children;
};

export default withRouter(ScrollToTop);
