import { MusicPlayer } from './MusicPlayer/MusicPlayer.js';
import { Home } from './Home/Home.js';
import { NotFound } from './NotFound/NotFound.js';
import { Chapter } from './Chapter/Chapter.js';
import { chapterRepository } from './chapters/chapterRepository.js';
import { chapterArray } from './chapters/chapterArray.js';
import { chapterSpace } from './chapters/chapterSpace.js';

export const App = () => {
  const element = document.createElement('div');
  element.id = 'vangers';

  let currentPage;

  element.append(MusicPlayer());

  const route = location.hash || '#/';
  showPage(route);

  window.addEventListener('hashchange', handleHashChange);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'q') {
      location.hash = '#/';
    }
  });

  function handleHashChange() {
    console.info('App: handle URL hash change: ', location.hash);
    const route = location.hash || '#/';
    showPage(route);
  }

  function showPage(route) {
    currentPage?.remove();

    if (route === '#/') {
      console.info('App: show home page');
      currentPage = Home();
      element.append(currentPage);
      return;
    }

    if (route === '#/chapter/repository') {
      console.info('App: show chapter "repository"');
      currentPage = Chapter({ chapter: chapterRepository });
      element.append(currentPage);
      return;
    }

    if (route === '#/chapter/array') {
      console.info('App: show chapter "array"');
      currentPage = Chapter({ chapter: chapterArray });
      element.append(currentPage);
      return;
    }

    if (route === '#/chapter/space') {
      console.info('App: show chapter "space"');
      currentPage = Chapter({ chapter: chapterSpace });
      element.append(currentPage);
      return;
    }

    console.info('App: page for route ' + route + ' not found');
    currentPage = NotFound();
    element.append(currentPage);
  }

  return element;
};
