import { Flex, Card } from "antd";
import ReactPlayer from "react-player";
import {
  Container,
  CustomNavLink,
  LogoText,
  Title,
} from "../components/styles/StyledComponents";

const Main = () => {
  return (
    <>
      <Container justifyContent="space-around">
        <Flex
          vertical
          justify="space-between"
          flex={1}
          style={{ maxWidth: "400px" }}
        >
          <Title>Most important title on the page</Title>
          <LogoText
            style={{
              maxWidth: "100%",
              wordWrap: "break-word",
              overflowWrap: "break-word",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            mattis, leo et condimentum ultricies, sem urna convallis metus, vel
            suscipit nibh lacus tincidunt ante
          </LogoText>
        </Flex>
        <ReactPlayer url="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />
      </Container>
      <Flex align="center" justify="center" style={{ margin: "20px" }}>
        <Title>Also very important title</Title>
      </Flex>
      <Flex
        align="center"
        justify="flex-start"
        wrap="wrap"
        gap="15px"
        style={{ maxWidth: "100%" }}
      >
        {Array(6)
          .fill({
            title: "Title",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentumLorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum",
          })
          .map((card, index) => (
            <Card
              title={card.title}
              style={{
                width: "calc(33.33% - 10px)",
                minWidth: "300px",
                flex: "1 1 auto",
              }}
              key={`card-${index}`}
            >
              <p>{card.body}</p>
            </Card>
          ))}
      </Flex>
      <Flex align="center" justify="center" style={{ margin: "20px" }}>
        <CustomNavLink to="/contact">Contact us</CustomNavLink>
      </Flex>
      <Container justifyContent="center" flexDirection="column">
        <Flex align="center" justify="center" style={{ margin: "20px" }}>
          <Title>Also very important title</Title>
        </Flex>
        <Flex align="center" justify="center" style={{ marginTop: "20px" }}>
          <CustomNavLink to="/contact">Contact us</CustomNavLink>
        </Flex>
      </Container>
    </>
  );
};

export default Main;
