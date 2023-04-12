export const ChapterItem = ({ chapter }) => {
  const element = document.createElement('div');
  element.className = 'chapter-item';
  element.innerHTML = `
    <h3>${chapter.title}</h3>
  `;

  element.addEventListener('click', handleChapterClick);

  function handleChapterClick() {
    location.hash = '#/chapter/' + chapter.id;
  }

  return element;
};
