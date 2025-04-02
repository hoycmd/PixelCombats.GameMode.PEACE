import * as Room from 'pixel_combats/room';
import * as Basic from 'pixel_combats/basic';

export const BlueTeam_NAME = 'Blue';
export const RedTeam_NAME = 'Red';
export const BlueTeam_DISPLAYNAME = '<b><size=30><color=#0d177c>ß</color><color=#03088c>l</color><color=#0607b0>ᴜ</color><color=#1621ae>E</color></size></b>';
export const RedTeam_DISPLAYNAME = '<b><size=30><color=#962605>尺</color><color=#9a040c>ᴇ</color><color=#b8110b>D</color></size></b>';
export const BlueTeam_SPAWNPOINTSGROUP = 1;
export const RedTeam_SPAWNPOINTSGROUP = 2;
export const BlueTeam_COLOR = new Basic.Color(0, 0, 1, 0);
export const RedTeam_COLOR = new Basic.Color(1, 0, 0, 0);

export function CreateBlueTeam() {
 Room.Teams.Add(BlueTeam_NAME, BlueTeam_DISPLAYNAME, BlueTeam_COLOR);
 Room.Spawns.SpawnPointsGroups.Add(BlueTeam_SPAWNPOINTSGROUP);
}

export function CreateRedTeam() {
 Room.Teams.Add(RedTeam_NAME, RedTeam_DISPLAYNAME, RedTeam_COLOR);
 Room.Spawns.SpawnPointsGroups.Add(RedTeam_SPAWNPOINTSGROUP);
}
