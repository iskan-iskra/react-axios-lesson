import PropTypes from "prop-types";
import { Nav } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

export const AppNavList = ({ navList, ...rest }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <Nav
      {...rest}
      variant="tabs"
      style={{ border: "none" }}
      activeKey={pathname}
      onSelect={(e) => navigate(e)}
    >
      {navList.map(({ path, title }) => (
        <Nav.Link
          style={{ border: "none" }}
          disabled={pathname === path}
          eventKey={path}
          key={path}
        >
          {title}
        </Nav.Link>
      ))}
    </Nav>
  );
};

AppNavList.propTypes = {
  navList: PropTypes.array.isRequired,
};
