export interface PlayerModel {
    id: number,
    name: string;
    club: string,
    nationality: string,
    position: string,
    statistics: NormalStatisticsModel | GoalkeeperStatisticsModel
}

interface NormalStatisticsModel {
    Overall: number,
    Pace: number,
    Shooting: number,
    Passing: number,
    Dribbling: number,
    Defending: number,
    Physical: number
}

interface GoalkeeperStatisticsModel {
    Overall: number,
    Diving:number,
    Handling: number,
    Kicking: number,
    Reflexes: number,
    Speed: number,
    Positioning: number,
}