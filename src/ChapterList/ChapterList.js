import { ChapterItem } from './ChapterItem.js';
import { chapterRepository } from '../chapters/chapterRepository.js';

export const ChapterList = () => {
  const element = document.createElement('section');
  element.innerHTML = `
    <h2>Chapter List</h2>
  `;

  element.append(ChapterItem({ chapter: chapterRepository }));     

  return element;
};
