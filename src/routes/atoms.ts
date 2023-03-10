import { atom, selector } from "recoil";

export enum Categories {
  "TODO" = "TODO",
  "DOING" = "DOING",
  "DONE" = "DONE",
  // 값을 할당하지 않으면 enum은 각 상수들에 0부터 순서대로 값을 할당한다.
}

export interface IToDo {
  id: number;
  text: string;
  category: Categories;
}

export const toDosState = atom<IToDo[]>({
  key: "toDos",
  default: [],
});

export const categoryState = atom<Categories>({
  key: "category",
  default: Categories.TODO,
});

export const toDosSelector = selector({
  key: "toDosSelector",
  get: ({ get }) => {
    const toDos = get(toDosState);
    const category = get(categoryState);
    return toDos.filter((toDo) => toDo.category === category);
  },
});
