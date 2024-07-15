# PODCAST MANAGER 🎙️

## Description
Project developed in [Digital Innovation One - DIO](https://web.dio.me)'s NodeJs Fundamentals course.
In this project the objective was to fetch a JSON repository with podcast episodes data and return those that match the search input parameter.


## Features
The main feature of this project is to filter podcasts, and sort them by categories, podcast name, and even by guest once all the podcast titles contains the guests' names. Thus, facilitating the access to the episode wished by the user.


## Request Endpoints

### Filtering episodes:
- **Endpoint:** `GET /api/filter?p={queryString}`
- **Description:** Returns a list of podcasts that match the user's search input (queryString).

### Listing all episodes:
- **Endpoint:** `GET /api/list`
- **Description:** Returns a list with all podcasts in the podcasts repository.


## API response data format:
```js
[
    {
        podcastName:"flow",
        episode: "CBUM - Flow #319",
        videoId:"pQSuQmUfS30",
        categories:["esporte", "bodybuilding"]
    },
    {
        podcastName: "Inteligência Ltda",
        episode: "O APOCALIPSE DE JOÃO: RODRIGO SILVA - Inteligência Ltda. Podcast #1187",
        videoId: "NooYVBIXKso",
        categories: ["Deus", "apocalipse"]
    }
]
```


## Differences between my project and the course's:
- Created a View layer so I could see the api working as it was created to be and screw around with my basic front-end skills.
- Change made to make it possible to request the API (even locally) on the frontend and see it actually working with no CORS problems.

```js
    //server.ts - line 9
    res.setHeader('Access-Control-Allow-Origin', '*');
```

- Change made to enable search by category and episode as well, not just by podcast name.
```js
    //podcast-repository.ts - line 15
    jsonFile = jsonFile.filter((podcast: PodcastModel) => {
                return podcast.podcastName.toLowerCase() === queryString ||
                podcast.categories.join('').toLowerCase().includes(queryString) ||
                podcast.episode.toLowerCase().includes(queryString);
            });
```


## Used Tecnologies

- **[TypeScript](https://www.typescriptlang.org/):** Programming Language used for the project development.
- **[Tsup](https://github.com/egoist/tsup):**  Packaging and building tool for TypeScript projects.
- **[Tsx](https://github.com/egoist/tsx):** TypeScript compiler that suports project building.
- **[Node.js](https://nodejs.org/):** JavaScript Execution Enviroment that allows server-side JS execution.
- **[@types/node](https://www.npmjs.com/package/@types/node):** Types definition package for NodeJs to assist on Typescript development.

## How to use

1. Clone this repository.
2. Install all dependencies using `npm install`.
3. Start the server executing `start:dev`.
4. Access the provided endpoints to list the podcast episodes filtering it or not. OR :
5. You can also use it through `view/index.html.`

## Contribution
Contributions are welcome! Feel free to point out issues and submit pull requests to improve this project.