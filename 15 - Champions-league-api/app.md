# CHAMPIONS LEAGUE API ⚽

## Description
Project developed in [Digital Innovation One - DIO](https://web.dio.me)'s NodeJs Fundamentals course.

The project's objective was to implement a robust architecture and work with different http methods to get and send data (players and clubs) from/to the API.

## Request Endpoints

### Listing all clubs:
- **Endpoint:** `GET /api/clubs`
- **Description:** Returns a list of all clubs data.

### Filtering club by id:
- **Endpoint:** `GET /clubs/:id`
- **Description:** Returns data of the club that owns the id requested.

### Listing all players:
- **Endpoint:** `GET /api/players`
- **Description:** Returns a list of all players data.

### Filtering players by id:
- **Endpoint:** `GET /api/players/:id`
- **Description:** Return the player who owns the requested id.

### Add new player:
- **Endpoint:** `POST /api/players`
- **Description:** Receives a player in the request body and adds it to the players list.

### Delete player by id:
- **Endpoint:** `DELETE /api/players/:id`
- **Description:** Deletes the player with the id requested from the players list.

### Update player:
- **Endpoint:** `PATCH /api/players`
- **Description:** Receives a player from the request body and adds it to the players list replacing the player with the same id.

## API response data format:

**Clubs:**
```js
[
    {
        id:number,
        name:string
    }
]
```
**Players:**
````js
[
    {
        id: number,
        name: string,
        club: string,
        nationality: string,
        position: string,
        statistics: NormalStatisticsModel | GoalkeeperStatisticsModel
    }
]
````
**As we can see, there are different statistics for players and for goalkeepers:**

**Players:**
````js
{
    Overall: number,
    Pace: number,
    Shooting: number,
    Passing: number,
    Dribbling: number,
    Defending: number,
    Physical: number
}
````
**Goalkeepers:**
````js
{
    Overall: number,
    Diving:number,
    Handling: number,
    Kicking: number,
    Reflexes: number,
    Speed: number,
    Positioning: number,
}
````

## Differences between my project and the course's:
- There aren't important differences, the only difference is related to the PATCH method. In the course it was only possible to update the player's statiscs and the way I did it it's possible to change any of its attributes.


## Used Tecnologies

- **[TypeScript](https://www.typescriptlang.org/):** Programming Language used for the project development.
- **[Tsup](https://github.com/egoist/tsup):**  Packaging and building tool for TypeScript projects.
- **[Tsx](https://github.com/egoist/tsx):** TypeScript compiler that suports project building.
- **[Node.js](https://nodejs.org/):** JavaScript Execution Enviroment that allows server-side JS execution.
- **[@types/node](https://www.npmjs.com/package/@types/node):** Types definition package for NodeJs to assist on Typescript development.
- **[Express](https://www.npmjs.com/package/express):** Web framework that  provides a robust set of features for building web applications and APIs.
- **[CORS](https://www.npmjs.com/package/cors):** A node.js package for providing a Express middleware that can be used to enable CORS with various options.

## How to use

1. Clone this repository.
2. Install all dependencies using `npm install`.
3. Start the server executing `start:dev`.
4. Access the provided endpoints. 

## Contribution
Contributions are welcome! Feel free to point out issues and submit pull requests to improve this project.