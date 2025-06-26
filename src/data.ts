import { AboutMeData, Game, GameEngine, LinkImageSource, MediaType, Platform } from "./types";

export const PersonalInfo: AboutMeData = {
  name: "Timothy Joe Plough",
  role: "Game Design, Programmer",
    introduction: "Young Designer and Programmer in games and other projects who wants to go out there and gain the experience and skills to work on your projects and show I am worth it to be on your teams",
  description: "My name is Timothy Joe Plough I am a recent graduate of Eastern Kentucky University with a computer science degree in multi media I am excited to work on many diffrent kinds of projects in the future. Being able to work on your pojects and learn from them pushing myself to be able to make the best applications I can.",
  image: `${process.env.PUBLIC_URL}/images/Profile.jpeg`,
  cvUri: `${process.env.PUBLIC_URL}/files/TimothyPlough_CV.pdf`,
  links: {
    github: "https://github.com/TimothyPlough",
    itchIO: "https://NAME.itch.io",
    linkedIn: "https://www.linkedin.com/in/timothyplough/",
  }
};

export const games: Game[] = [
  {
    name: "RoadSide Reverie",
        description: "Developed a side scrolling infinite running style game where the protagonist looks out a car window watching their imaginary character running along nearby buildings, powerlines, and automobiles this was a project for a school project and was left in a incomplete state in the end of December of 2024 my involvement was camera and level generation.",
    genres: ["Infinite Runner", "Platformer"],
    platforms: [Platform.Windows],
    engine: GameEngine.Unity,
    links: [
        { source: LinkImageSource.Github, url: "https://github.com/TimothyPlough/Roadside-Reverie-Game" },
    ],
    media: [
            { source: "/images/games/RSR/Screenshot_1.PNG", type: MediaType.Image },
            { source: "/images/games/RSR/Screenshot_2.PNG", type: MediaType.Image },
            { source: "/images/games/RSR/Screenshot_3.PNG", type: MediaType.Image },
            { source: "https://www.youtube.com/embed/RIkMShFwBeE", type: MediaType.YouTube }
        ],
  },
  {
    name: "EKU VR_Lab",
      description: "Developed a simulator and educational type of game meant to be used by education facilities to replace a shop lab that was decommissioned in by the board of Eastern Kentucky University in 2024 I left the project in the end of December 2024 where most of my involvement was the connectivity and server for the project.",
    genres: ["Virtual Reality", "Educational"],
    platforms: [Platform.Windows],
    engine: GameEngine.Unity,
    links: [
        { source: LinkImageSource.Github, url: "https://github.com/TimothyPlough/VR-Lab-Project" },
    ],
    media: [
            { source: "/images/games/VR/Screenshot_1.PNG", type: MediaType.Image },
          { source: "https://www.youtube.com/embed/-D4FEa-uxig", type: MediaType.YouTube },
          { source: "https://www.youtube.com/embed/9FAxbn5mjgw", type: MediaType.YouTube }
        ],
    },
    {
        name: "Pizza Order System",
        description: "Developed a basic Order SYstem for a fictional Pizza Chain using a combination of making a website with C# and using a backend list system combining experience in front and backend development basics. ",
        genres: ["Backend System"],
        platforms: [Platform.Windows],
        engine: GameEngine.WebServer,
        links: [
            { source: LinkImageSource.Github, url: "https://github.com/TimothyPlough/CSC340Assignment" },
        ],
        media: [
            { source: "/images/games/POS/screen1.PNG", type: MediaType.Image },
            { source: "/images/games/POS/screen2.PNG", type: MediaType.Image },
            { source: "/images/games/POS/screen3.PNG", type: MediaType.Image },
            { source: "/images/games/POS/screen4.PNG", type: MediaType.Image }
        ],
    },
    {
        name: "SpellBlade Fate",
        description: "Developed an action platforming game in 4 months as a major final project meant to increase skills in areas that I had lacked or left untouched such as the Unreal Engine and its multiple features. The game was left in its final state December 2024 working on all facets of it but art. N",
        genres: ["Action", "Platformer"],
        platforms: [Platform.Windows],
        engine: GameEngine.Unreal,
        links: [
            { source: LinkImageSource.Github, url: "https://github.com/TimothyPlough/SpellBladeFates" },
        ],
        media: [
            { source: "https://www.youtube.com/embed/DxfnWopCovY", type: MediaType.YouTube },
            { source: "https://www.youtube.com/embed/_Duf2sBNIM0", type: MediaType.YouTube },
            { source: "https://www.youtube.com/embed/aok0W0VFmhc", type: MediaType.YouTube },
            { source: "https://www.youtube.com/embed/JOD_ZRJWe14", type: MediaType.YouTube },
            { source: "https://www.youtube.com/embed/_jKFHsG_Wmk", type: MediaType.YouTube },
            { source: "https://www.youtube.com/embed/NTeFFAQ8qSg", type: MediaType.YouTube },
            { source: "https://www.youtube.com/embed/Z6pLx08OpjM", type: MediaType.YouTube },
            { source: "https://www.youtube.com/embed/bnPjUeWAq_Y", type: MediaType.YouTube }
        ],
    },
    {
        name: "Penultimate Phantasm",
        description: "Developing a passion project RPG based on many of my favorite RPG games through many years of playing those kind of games continuing to learn more about the Unreal Engine and gaining greater understanding of game coding though post university experience working on everything but art myself.",
        genres: ["Role Playing Game", "Dungeon Crawler", "Open World"],
        platforms: [Platform.Windows],
        engine: GameEngine.Unreal,
        links: [
            { source: LinkImageSource.Github, url: "https://github.com/TimothyPlough/Penultimate-Phantasm" },
        ],
        media: [
            { source: "/images/games/PP/WIP.PNG", type: MediaType.Image }
        ],
    }
];