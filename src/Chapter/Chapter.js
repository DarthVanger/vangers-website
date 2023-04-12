export const Chapter = ({ chapter, onChapterEnd }) => {
  let step = 0;
  const element = document.createElement('article');
  element.id = 'chapter';

  const steps = chapter.steps;

  const hintElement = document.createElement('div');
  hintElement.id = 'hint';
  element.append(hintElement);

  async function nextStep() {
    nextStepBtn.classList.add('push');
    setTimeout(() => { nextStepBtn.classList.remove('push') }, 4000);

    if (step > steps.length - 2) {
      console.info('Chapter: no more steps, chapter end');
      onChapterEnd();
    } else {
      step++;
      showStep(step);
    }
  };

  function prevStep() {
    if (step < 1) return;
    step--;
    showStep(step);
  };

  function showStep(s) {
    messageElement.innerHTML = '';
    console.info('Chapter: Show step:', s);
    const paragraph = steps[s].text;
    if (paragraph?.type == 'image') {
      const img = document.createElement('img');
      img.className = 'vangers-img';
      img.src = paragraph.src;
      messageElement.append(img);
    } else {
      messageElement.innerHTML = paragraph;
    }

    video.play();
  }

  const backgroundImg = document.createElement('img');
  backgroundImg.src = '/assets/fostral.jpg';
  backgroundImg.id = 'background-img';
  element.append(backgroundImg);

  const videoContainer = document.createElement('div');
  videoContainer.id = 'video-container';
  const video = document.createElement('video');
  video.src = '/assets/fostral.mp4';
  video.volume = 1;
  videoContainer.append(video);
  element.append(videoContainer);

  // create an audio context and hook up the video element as the source
  var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  var source = audioCtx.createMediaElementSource(video);

  // create a gain node
  var gainNode = audioCtx.createGain();
  gainNode.gain.value = 3; // double the volume
  source.connect(gainNode);

  // connect the gain node to an output destination
  gainNode.connect(audioCtx.destination);


  const messagePanel = document.createElement('article');
  const messageElement = document.createElement('p');
  messagePanel.id = 'message-panel';
  messageElement.innerHTML = steps[step].text;
  messagePanel.append(messageElement);
  element.append(messagePanel);

  const nextStepBtn = document.createElement('img');
  nextStepBtn.src = '/assets/next-button.png';
  nextStepBtn.id = 'next-step-img';
  nextStepBtn.addEventListener('click', nextStep);
  element.append(nextStepBtn);

  const prevStepBtn = document.createElement('img');
  prevStepBtn.src = '/assets/prev-button.png';
  prevStepBtn.id = 'prev-step-img';
  prevStepBtn.addEventListener('click', prevStep);
  element.append(prevStepBtn);

  const hiddenHint = document.createElement('div');
  hiddenHint.id = 'hidden-hint';
  hiddenHint.textContent = 'Тут мог быть твой дик пик...';
  element.append(hiddenHint)

  showStep(step);

  return element;
};
