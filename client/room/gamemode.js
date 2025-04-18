import * as room from 'pixel_combats/room';
import * as basic from 'pixel_combats/basic';
import * as team from './default_team.js';
import * as mtr from './library_mtr.js';

const blueTeam = team.create_blue_team();
const redTeam = team.create_red_team();

room.Build.GetContext().FlyEnable = room.GameMode.Parameters.GetBool('Fly');
room.BreackGraph.OnlyPlayerBlocksDmg = room.GameMode.Parameters.GetBool('PartialDesruction');
room.Damage.GetContext().FriendlyFire = room.GameMode.Parameters.GetBool('FriendlyFire');
room.Damage.GetContext().DamageOut.Value = room.GameMode.Parameters.GetBool('DamageOut');

room.BreackGraph.BreackAll = true;
room.Build.GetContext().BlocksSet.Value = room.BuildBlocksSet.AllClear; if (room.GameMode.Parameters.GetBool('AllSetBlocks')) {
room.Build.GetContext().BlocksSet.Value = room.BuildBlocksSet.All;
room.TeamsBalancer.IsAutoBalance = true;

room.Teams.OnRequestJoinTeam.Add(function(p,t){t.Add(p);});
room.Teams.
  

