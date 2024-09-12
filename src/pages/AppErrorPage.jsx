import { APP_ROUTER_PATH } from "@/const";
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export const AppErrorPage = () => (
  <>
    <Container>
      <h1>Error page</h1>
      <NavLink to={APP_ROUTER_PATH.MAIN}>Вернуться на главную</NavLink>
    </Container>
  </>
);
