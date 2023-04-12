import { ChapterItem } from './ChapterItem.js';
import { chapterRepository } from '../chapters/chapterRepository.js';
import { chapterArray } from '../chapters/chapterArray.js';

export const ChapterList = () => {
  const element = document.createElement('section');
  element.innerHTML = `
    <h2>Chapter List</h2>
  `;

  element.append(ChapterItem({ chapter: chapterRepository }));
  element.append(ChapterItem({ chapter: chapterArray }));

  return element;
};
