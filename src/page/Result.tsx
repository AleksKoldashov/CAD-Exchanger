import { useLocation } from "react-router-dom";

import { Container, Title } from "../components/styles/StyledComponents";

const Result = () => {
  const locate = useLocation();
  console.log("locate", locate.state.message);

  return (
    <Container Height="80vh" justifyContent="center">
      <Title>{locate.state.message}</Title>
    </Container>
  );
};

export default Result;
