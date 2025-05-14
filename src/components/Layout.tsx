import { Outlet, useLocation } from "react-router-dom";
import { CustomNavLink, LogoText } from "./styles/StyledComponents";
import { Layout } from "antd";
import styled from "styled-components";

const { Header, Footer, Content } = Layout;
const StyledHeader = styled(Header)`
  background-color: #bbb;
  color: white;
  padding: 5px 25px;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledContent = styled(Content)`
  background-color: #f0f2f5;
  padding: 20px;
  min-height: 280px;
`;

const StyledFooter = styled(Footer)`
  background-color: #001529;
  color: white;
  text-align: center;
  padding: 10px;
`;

const ComponentsLayout = () => {
  const location = useLocation();
  console.log("Полный путь:", location.pathname);
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <StyledHeader>
        <LogoText>Some Company</LogoText>
        <CustomNavLink to={`${location.pathname === "/" ? "/contact" : "/"}`}>
          {location.pathname === "/" ? "Contact us" : "Back"}
        </CustomNavLink>
      </StyledHeader>

      <StyledContent>
        <Outlet />
      </StyledContent>

      <StyledFooter>Some Company 2024</StyledFooter>
    </Layout>
  );
};

export default ComponentsLayout;
