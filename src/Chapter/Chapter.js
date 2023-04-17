export const Chapter = ({ chapter, onChapterEnd }) => {
  let step = 0;
  const element = document.createElement('article');
  element.id = 'chapter';

  const steps = chapter.steps;

  const hintElement = document.createElement('div');
  hintElement.id = 'hint';
  hintElement.innerHTML = 'A tyt nixy9';
  element.append(hintElement);

  const codeElement = document.createElement('div');
  codeElement.id = 'code';
  element.append(codeElement);

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
    console.info('Chapter: Show step:', s);

    messageElement.innerHTML = '';
    stepImageContainer.innerHTML = '';
    codeElement.innerHTML = '';

    const step = steps[s];

    if (step.text) {
      messageElement.innerHTML = step.text;
    }

    if (step.img) {
      const img = document.createElement('img');
      img.src = step.img;
      stepImageContainer.append(img);
    }

    if (step.code) {
      console.log('est code');
      codeElement.innerHTML = `
        <pre><code>
          ${step.code}
        </code></pre>
      `;
    }

    wormFaceVideo.play();
  }

  const backgroundImg = document.createElement('img');
  backgroundImg.src = 'assets/fostral.jpg';
  backgroundImg.id = 'background-img';
  element.append(backgroundImg);

  const wormFaceVideo = document.createElement('video');
  wormFaceVideo.id = 'worm-face';
  wormFaceVideo.src = 'assets/palec.webm';
  wormFaceVideo.muted = true;
  wormFaceVideo.volume = 1;
  element.append(wormFaceVideo);

  // create an audio context and hook up the video element as the source
  var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  var source = audioCtx.createMediaElementSource(wormFaceVideo);

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

  const stepImageContainer = document.createElement('div');
  stepImageContainer.id = 'step-image-container';
  element.append(stepImageContainer);

  const nextStepBtn = document.createElement('img');
  nextStepBtn.src = 'assets/next-button.png';
  nextStepBtn.id = 'next-step-img';
  nextStepBtn.addEventListener('click', nextStep);
  element.append(nextStepBtn);

  const prevStepBtn = document.createElement('img');
  prevStepBtn.src = 'assets/prev-button.png';
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
