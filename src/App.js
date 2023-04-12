import { VangersHome } from './VangersHome/VangersHome.js';
import { NotFound } from './NotFound/NotFound.js';
import { Chapter } from './Chapter/Chapter.js';
import { chapterRepository } from './chapters/chapterRepository.js';
import { chapterArray } from './chapters/chapterArray.js';
import { MusicPlayer } from './MusicPlayer/MusicPlayer.js';

export const App = () => {
  const element = document.createElement('div');
  element.id = 'vangers';
  let currentPage;

  window.addEventListener('hashchange', handleHashChange);

  element.append(MusicPlayer());

  const route = location.hash || '#/';
  showPage(route);

  function handleHashChange() {
    console.info('App: handle URL hash change: ', location.hash);
    const route = location.hash || '#/';
    showPage(route);
  }

  function showPage(route) {
    currentPage?.remove();

    if (route === '#/') {
      console.info('App: show home page');
      currentPage = VangersHome();
      element.append(currentPage);
      return;
    }

    if (route === '#/chapter/repository') {
      console.info('App: show chapter "Create Repo"');
      currentPage = Chapter({ chapter: chapterRepository });
      element.append(currentPage);
      return;
    }

    if (route === '#/chapter/array') {
      console.info('App: show chapter "Create Repo"');
      currentPage = Chapter({ chapter: chapterArray });
      element.append(currentPage);
      return;
    }

    console.info('App: page for route ' + route + ' not found');
    currentPage = NotFound();
    element.append(currentPage);
  }

  return element;
};
