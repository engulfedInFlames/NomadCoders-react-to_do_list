import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { Categories, categoryState, toDosSelector } from "../atoms";
import ToDo from "./ToDo";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  list-style: decimal;
  select {
    font-size: 18px;
    padding: 6px 12px;
    border-radius: 8px;
    margin-bottom: 15px;
  }
`;

function ToDoList() {
  const tasks = useRecoilValue(toDosSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (e: React.FormEvent<HTMLSelectElement>) => {
    const {
      currentTarget: { value: option },
    } = e;
    setCategory(option as any);
  };
  return (
    <>
      <Form>
        <select value={category} onInput={onInput}>
          <option value={Categories.TODO}>To do</option>
          <option value={Categories.DOING}>Doing</option>
          <option value={Categories.DONE}>Done</option>
        </select>
        {tasks.map((task) => (
          <ToDo key={task.id} {...task} />
        ))}
      </Form>
    </>
  );
}

export default ToDoList;
