import { playlist } from './playlist.js';
import { Volume, getVolume, onVolumeChange } from './Volume.js';

let isPlaying = false;
let curTrack;
let audio;

const getTrackElement = () => document.querySelector('#music-player #track');
export const MusicPlayer = () => {
  const getRandomTrack = () => playlist[Math.floor(Math.random() * playlist.length)];
  const element = document.createElement('div');
  const trackElement = document.createElement('div');
  trackElement.id = 'track';
  element.append(Volume());
  element.append(trackElement);
  curTrack = getRandomTrack();

  audio = new Audio(curTrack.path);
  audio.volume = getVolume();
  element.id = 'music-player';

  onVolumeChange(v => {
    audio.volume = v;
    document.querySelector('#volume input[type="range"]').value = v;
  });

  trackElement.addEventListener('click', () => {
    if (isPlaying) {
      pauseMusic();
    } else {
      resumeMusic();
    }
  });

  audio.addEventListener('ended', () => {
    console.log('audio ended, playing next one');
    playRandomTrack();
  });

  trackElement.innerHTML = `
     🎵<marquee>${curTrack.title}</marquee>▶️
  `;

  const playRandomTrack = () => {
    curTrack = getRandomTrack();
    console.log(`MusicPlayer: change track to`, curTrack);
    audio.src = curTrack.path;
    audio.volume = getVolume();

    resumeMusic();
  };
  
  return element;
};

export const pauseMusic = () => {
  console.log(`MusicPlayer: pause track: "${curTrack.title}"`);
  audio.pause();
  isPlaying = false;
  getTrackElement().innerHTML = `
     🎵<marquee>${curTrack.title}</marquee>▶️
  `;
};

export const resumeMusic = () => {
   console.log(`MusicPlayer: resume track: "${curTrack.title}"`);
   audio.volume = getVolume();
   console.log('set audio volume to ', getVolume());
   audio.play();
   isPlaying = true;

   getTrackElement().innerHTML = `
      🎵<marquee>${curTrack.title}</marquee>⏸︎
   `;
};
