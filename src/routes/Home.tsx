import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function Home() {
  return (
    <Container>
      <ToDoForm />
      <ToDoList />
    </Container>
  );
}

export default Home;
