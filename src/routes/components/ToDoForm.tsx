import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { categoryState, toDosState } from "../atoms";

const Form = styled.form`
  margin-top: 15vh;
  input {
    &:nth-of-type(1) {
      width: 450px;
      font-size: 20px;
      text-align: center;
      border-radius: 8px;
      padding: 10px 10px;
      margin-right: 15px;
    }
    &:nth-of-type(2) {
      font-size: 20px;
      background-color: ${(props) => props.theme.btnColor};
      border: none;
      border-radius: 8px;
      padding: 10px 24px;
    }
  }
`;
const H1 = styled.h1`
  color: ${(props) => props.theme.textColor};
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 60px;
`;

interface IForm {
  toDo: string;
}

function ToDoForm() {
  const setToDos = useSetRecoilState(toDosState);
  const category = useRecoilValue(categoryState);
  const { register, setValue, handleSubmit } = useForm<IForm>({
    defaultValues: {
      toDo: "",
    },
  });
  const onValid = ({ toDo }: IForm) => {
    setToDos((prev) => [{ id: Date.now(), text: toDo, category }, ...prev]);
    setValue("toDo", "");
  };
  return (
    <Form onSubmit={handleSubmit(onValid)}>
      <H1>To Do List</H1>
      <input
        {...register("toDo", { required: true })}
        type="text"
        placeholder="What to do?"
      />
      <input type="submit" />
    </Form>
  );
}

export default ToDoForm;
