import * as room from 'pixel_combats/room';
import * as basic from 'pixel_combats/basic';

export const blue_team_name = 'blue';
export const red_team_name = 'red';
export const red_team_displayname = '<size=59>尺ᴇD</size>';
export const blue_team_displayname = '<size=59>ßlᴜE</size>';
export const blue_team_spawnpointsgroups = '1';
export const red_team_spawnpointsgroups = '2';
export const blue_team_newcolorteam = new basic.Color(0, 0, 0.2, 0);
export const red_team_newcolorteam = new basic.Color(0.2, 0, 0, 0);

export function create_blue_team() {
 room.Teams.Add(blue_team_name, blue_team_displayname, blue_team_newcolorteam);
 room.Teams.Get(blue_team_name).SpawnPointsGroups.Add(blue_team_spawnpointsgroups);
}

export function create_red_team() {
 room.Teams.Add(red_team_name, red_team_displayname, red_team_newcolorteam);
 room.Teams.Get(red_team_name).SpawnPointsGroups.Add(red_team_spawnpointsgroups);
}
