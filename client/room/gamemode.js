import * as room from 'pixel_combats/room';
import * as basic from 'pixel_combats/basic';

room.Teams.Add('blue', 'blue', new basic.Color(0, 0, 0, 0));
room.Teams.Add('red', 'red', new basic.Color(0, 0, 0, 0));
const blueTeam = room.Teams.Get('blue');
const redTeam = room.Teams.Get('red');

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
