# Vangers
Gamified tutorial for creating a javascript game with physics.

![Game screenshot](readme-img/vangers-screenshot-1.png)

## Website
[https://darthvanger.github.io/vangers-website](https://darthvanger.github.io/vangers-website)

## Run Locally
Run any server, for example
```
npx http-server .
```

## Framework
There is no framework :)

But it is done in React fashion: each component has a folder, js and css file.

For example `Chapter` component folder:
```bash
─── Chapter
    ├── Chapter.css
    └── Chapter.js
```

Each component returns `HTMLElement`.

`App` is the root component, which appends all the other components to itself.

`App` component is also responsible for showing different pages based on `location.hash`.

### Folder Structure
```
.
├── README.md
├── index.html # Main html file, all the other pages are in javascript
├── index.js # Main js file, which appends App component to document.body
└── src
    ├── App.css
    ├── App.js # App - root component, it is appended to document.body
    ├── Chapter
    │   ├── Chapter.css
    │   └── Chapter.js # Chapter component - shows chapter page
    ├── ChapterList
    │   ├── ChapterItem.js # ChapterItem - shows link to the chapter on main page
    │   ├── ChapterList.css
    │   └── ChapterList.js # ChapterList - shows list of links to each chapter of the tutorial
    ├── MusicPlayer
    │   ├── MusicPlayer.css
    │   ├── MusicPlayer.js # MusicPlayer - shows music player at the bottom of screen, plays music
    │   ├── Volume.css
    │   ├── Volume.js # Volume - shows volume bar inside of music player, allows changing volume
    │   └── playlist.js # playlist - exports array of tracks for music player
    ├── NotFound
    │   └── NotFound.js # NotFound - not found page to show for bad URLs
    ├── Home
    │   └── Home.js # Home - Home page. It is shown for the "/" route.
    └── chapters # chapters folder - contains each chapter file
        ├── chapterArray.js
        ├── chapterRepository.js
        └── chapterSpace.js
```

```mermaid
  graph LR;
    root[vangers]
    root --> README.md
    root --> index.html
    root --> index.js
    root --> src

    src --> App.css
    src --> App.js
    src --> Chapter
    Chapter --> Chapter.css
    Chapter --> Chapter.js
    src --> ChapterList
    ChapterList --> ChapterItem.js
    ChapterList --> ChapterList.css
    ChapterList --> ChapterList.js
    src --> Home
    Home --> Home.js
    src --> MusicPlayer
    MusicPlayer --> MusicPlayer.css
    MusicPlayer --> MusicPlayer.js
    MusicPlayer --> Volume.css
    MusicPlayer --> Volume.js
    MusicPlayer --> playlist.js
    src --> NotFound
    NotFound --> NotFound.js
    src --> chapters
    chapters --> chapterArray.js
    chapters --> chapterRepository.js
    chapters --> chapterSpace.js
```