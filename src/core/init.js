import { CoachModel, coachSchema } from '../models/Coach.js';
import { StadiumModel } from '../models/Stadium.js';
import { TeamModel } from '../models/Team.js';
import { PlayerModel } from '../models/Player.js';
import fs from 'fs';

/**
 * Initialize mongodb
 */
export const init = async function () {
    try {
        // Checking if we need initialization
        const teamCount = await TeamModel.countDocuments().exec();
        console.info(`Count of teams are ${teamCount}`);
        // if we don't have teams
        if (teamCount === 0) {
            // get teams from json file
            const teams = JSON.parse(fs.readFileSync(`${process.cwd()}/Teams.json`, 'utf8'));
            for (let i = 0; i < teams.length; i++) {
                // create the coach object first
                const coachOfTeam = await CoachModel.create(teams[i].coach);
                if (coachOfTeam) {
                    //create the team
                    const team = await TeamModel.create({
                        name: teams[i].name,
                        nickname: teams[i].nickname,
                        fifaRanking: teams[i].fifaRanking,
                        points: 0,
                        coach: coachOfTeam._id,
                    });
                    if (team) {
                        for (let j = 0; j < teams[i].players.length; j++) {
                            await PlayerModel.create({
                                firstName: teams[i].players[j].firstName,
                                lastName: teams[i].players[j].lastName,
                                number: teams[i].players[j].number,
                                team: team._id,
                            })
                        }
                    }
                }
            }
        }
        // Checking if we need initialization for stadiums
        const stadiumsCount = await StadiumModel.countDocuments().exec();
        console.info(`Count of stadiums are ${stadiumsCount}`);
        // if we don't have stadiums
        if (stadiumsCount === 0) {
            // insert default stadiums
            const stadiums = JSON.parse(fs.readFileSync(`${process.cwd()}/Stadiums.json`, 'utf8'));
            for (let i = 0; i < stadiums.length; i++) {
                await StadiumModel.create(stadiums[i]);
            }
        }
    } catch (err) {
        console.error(err);
    }
}