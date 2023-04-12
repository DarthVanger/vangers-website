import { ChapterList } from '../ChapterList/ChapterList.js';

export const VangersHome = () => {
  const element = document.createElement('div');
  element.id = 'vangers-home';

  element.innerHTML = `
    <h1>Vangers</h1>
  `;

  element.append(ChapterList());

  return element;
};
