import * as Room from 'pixel_combats/room';
import * as Basic from 'pixel_combats/basic';
import * as TeamMTR from './Teams_TeamMTR.js;';

try {

const MessageBlue = '<b><size=62><color=Green>M</a><color=Red>ᴛ</a><a>ʀ</a></size></b>';
const MessageRed = '<b><size=82><color=Green>ᴮʸ:</a> <color=Red>ƬNƬ</a><color=Yellow>!</a></size></b>';

const RedTeam = TeamMTR.CreateRedTeam();
const BlueTeam = TeamMTR.CreateBlueTeam();
BlueTeam.Build.BlocksSet.Value = Room.BuildBlocksSet.All;
RedTeam.Build.BlocksSet.Value = Room.BuildBlocksSet.All;

const inventory = Room.Inventory.GetContext();
 inventory.Main.Value = true; 
 inventory.MainInfinity.Value = true;
 inventory.Secondary.Value = true;
 inventory.SecondaryInfinity.Value = true;
 inventory.Melee.Value = true;
 inventory.Explosive.Value = true;
 inventory.ExplosiveInfinity.Value = true;
 inventory.Build.Value = true;
 inventory.BuildInfinity.Value = true;

 Room.Build.GetContext().Pipette.Value = true;
 Room.Build.GetContext().FloodFill.Value = true;
 Room.Build.GetContext().FillQuad.Value = true;
 Room.Build.GetContext().RemoveQuad.Value = true;
 Room.Build.GetContext().BalkLenChange.Value = true;
 Room.Build.GetContext().FlyEnable.Value = true;
 Room.Build.GetContext().SetSkyEnable.Value = true;
 Room.Build.GetContext().GenMapEnable.Value = true;
 Room.Build.GetContext().ChangeCameraPointsEnable.Value = true;
 Room.Build.GetContext().QuadChangeEnable.Value = true;
 Room.Build.GetContext().BuildModeEnable.Value = true;
 Room.Build.GetContext().CollapseChangeEnable.Value = true;
 Room.Build.GetContext().RenameMapEnable.Value = true;
 Room.Build.GetContext().ChangeMapAuthorsEnable.Value = true;
 Room.Build.GetContext().LoadMapEnable.Value = true;
 Room.Build.GetContext().ChangeSpawnsEnable.Value = true;
 Room.Build.GetContext().BuildRangeEnable.Value = true;
	
Room.BreackGraph.WeakBlocks = Room.GameMode.Parameters.GetBool('LoosenBlocks');
Room.BreackGraph.OnlyPlayerBlocksDmg = Room.GameMode.Parameters.GetBool('PartialDesruction');
Room.Damage.GetContext().FriendlyFire = Room.GameMode.Parameters.GetBool('FriendlyFire');
Room.Build.GetContext().FlyEnable = Room.GameMode.Parameters.GetBool('Fly');
Room.Damage.GetContext().DamageOut.Value = true;
Room.BreackGraph.PlayerBlockBoost = true;

Room.Teams.OnRequestJoinTeam.Add(function(Player, Team) { Team.Add(Player); });
Room.Teams.OnPlayerChangeTeam.Add(function(Player) { Player.Spawns.Spawn(); });

Room.Teams.Get('Red').Properties.Get('MessageRed').Value = MessageRed;
Room.Ui.GetContext().Hint.Value = 'MTR - By: TnT!';
Room.Spawns.GetContext().RespawnTime.Value = 5;
Room.Teams.Get('Blue').Properties.Get('MessageBlue').Value = MessageBlue;

Room.Ui.GetContext().TeamProp1.Value = { Team: 'Blue', Prop: 'MessageBlue' };
Room.Ui.GetContext().TeamProp2.Value = { Team: 'Red', Prop: 'MessageRed' };

const ImmortalityTimerName = 'Immortality';	
Spawns.GetContext().OnSpawn.Add(function(Player) {
 Player.Properties.Immortality.Value = true;
	Timer = Player.Timers.Get(ImmortalityTimerName).Restart(10);
});
Timers.OnPlayerTimer.Add(function(Timer) {
	if (Timer.Id != ImmortalityTimerName) return;
	  Timer.Player.Properties.Immortality.Value = false;
});

} catch (e) {
        Room.Players.All.forEach(Room => {
                Room.msg.Show(`${e.name}: ${e.message} ${e.stack}`);
        });
			   }	

