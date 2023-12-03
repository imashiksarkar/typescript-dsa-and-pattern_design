import { printf } from "./utils";
const drawPyramid = (numberOfRows: number): void => {
  const max_stars = numberOfRows * 2 - 1;

  for (let i = 1; i <= numberOfRows; i++) {
    for (let s = 1; s <= max_stars - (i * 2 - 1); s++) {
      printf(" ");
    }

    for (let j = 1; j <= i * 2 - 1; j++) {
      printf("* ");
    }
    printf("\n");
  }
};

export default drawPyramid;
