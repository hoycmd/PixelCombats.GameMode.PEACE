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
room.Build.GetContext().BlocksSet.Value = room.BuildBlocksSet.AllClear; if (room.GameMode.Parameters.GetBool('AllSetBlocks')) {
room.Build.GetContext().BlocksSet.Value = room.BuildBlocksSet.All;

room.BreackGraph.BreackAll = true;
room.TeamsBalancer.IsAutoBalance = true;
room.Ui.GetContext().TeamProp1.Value = { Team: 'blue', Prop: 'Text' };  
room.Teams.Get('blue').Properties.Get('Text').Value = 'Тгк создателя: @TnTPixelCombats2!';
room.Ui.GetContext().Hint.Value = 'MTR - By: TnT!';
room.Ui.GetContext().QuadsCount.Value = true;
room.Spawns.GetContext().RespawnTime.Value = 5;

room.Teams.OnRequestJoinTeam.Add(function(p,t){t.Add(p);});
room.Teams.OnPlayerChangeTeam.Add(function(p){ 
 for (const i = 0; i <= PlayersBanList.length; i++){
   if (PlayersBanList[i] === p.id){
  p.Spawns.Enable = false;
  p.Spawns.Despawn();
  p.Team.Remove(p);
   } else {
  p.Spawns.Spawn();
           }
     }
}

mtr.set_inventory();
mtr.set_editor();
