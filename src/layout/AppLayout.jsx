import { AppHeader } from "@/widjets";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";

export const AppLayout = () => (
  <>
    <AppHeader />
    <main>
      <Container>
        <Outlet />
      </Container>
    </main>
  </>
);
