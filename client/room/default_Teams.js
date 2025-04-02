// Библиотека, созданая как для - команд.
// Импорты:
import { Teams } from 'pixel_combats/room';
import { Color } from 'pixel_combats/basic';

// Константы, для названии части - команд:
export const BlueTeam_NAME = 'Blue';
export const RedTeam_NAME = 'Red';
export const BlueTeam_DISPLAYNAME = '<b><size=30><color=#0d177c>ß</color><color=#03088c>l</color><color=#0607b0>ᴜ</color><color=#1621ae>E</color></size></b>';
export const RedTeam_DISPLAYNAME = '<b><size=30><color=#962605>尺</color><color=#9a040c>ᴇ</color><color=#b8110b>D</color></size></b>';
export const BlueTeam_SPAWNPOINTSGROUP = 1;
export const RedTeam_SPAWNPOINTSGROUP = 2;
export const BlueTeam_COLOR = new Color(0, 0, 1, 0);
export const RedTeam_COLOR = new Color(1, 0, 0, 0);

// Функция, создания - синей команды:
export function CreateBlueTeam() {
 Teams.Add(BlueTeam_NAME, BlueTeam_DISPLAYNAME, BlueTeam_COLOR);
 Spawns.SpawnPointsGroups.Add(BlueTeam_SPAWNPOINTSGROUP);
}

// Функция, создания - красной команды:
export function CreateRedTeam() {
 Teams.Add(RedTeam_NAME, RedTeam_DISPLAYNAME, RedTeam_COLOR);
 Spawns.SpawnPointsGroups.Add(RedTeam_SPAWNPOINTSGROUP);
}
