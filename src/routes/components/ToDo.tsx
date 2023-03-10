import React from "react";
import { useSetRecoilState } from "recoil";
import { Categories, IToDo, toDosState } from "../atoms";
import styled from "styled-components";

const Li = styled.li`
  font-size: 18px;
`;

const Btn = styled.button`
  font-size: 18px;
  background-color: ${(props) => props.theme.btnColor};
  border: none;
  border-radius: 6px;
  user-select: none;
  margin-left: 10px;
`;

function ToDo({ id, text, category }: IToDo) {
  const setToDos = useSetRecoilState(toDosState);
  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = e;
    setToDos((prevToDos) => {
      const targetIndex = prevToDos.findIndex((toDo) => toDo.id === id);
      const currentToDo: IToDo = {
        id,
        text,
        category: name as Categories,
      };
      // 상태 관리 모듈을 사용할 때는 기본적으로 mutate를 해서는 안 된다.
      const frontToDos = prevToDos.slice(0, targetIndex);
      const backToDos = prevToDos.slice(targetIndex + 1);
      return [...frontToDos, currentToDo, ...backToDos];
    });
  };
  return (
    <Li>
      {text}
      {category !== "TODO" ? (
        <Btn name={Categories.TODO} onClick={onClick}>
          To do
        </Btn>
      ) : null}
      {category !== "DOING" ? (
        <Btn name={Categories.DOING} onClick={onClick}>
          Doing
        </Btn>
      ) : null}
      {category !== "DONE" ? (
        <Btn name={Categories.DONE} onClick={onClick}>
          Done
        </Btn>
      ) : null}
    </Li>
  );
}

export default ToDo;
