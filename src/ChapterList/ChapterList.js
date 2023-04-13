import { ChapterItem } from './ChapterItem.js';
import { chapterRepository } from '../chapters/chapterRepository.js';
import { chapterArray } from '../chapters/chapterArray.js';
import { chapterSpace } from '../chapters/chapterSpace.js';
import { chapterTime } from '../chapters/chapterTime.js';

export const ChapterList = () => {
  const element = document.createElement('section');
  element.innerHTML = `
    <h2>Chapter List</h2>
  `;

  element.append(ChapterItem({ chapter: chapterRepository }));
  element.append(ChapterItem({ chapter: chapterArray }));
  element.append(ChapterItem({ chapter: chapterSpace }));
  element.append(ChapterItem({ chapter: chapterTime }));
  

  return element;
};
