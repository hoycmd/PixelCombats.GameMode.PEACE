import * as Room from 'pixel_combats/room';
import * as Basic from 'pixel_combats/basic';
import * as MTR from './Settings_MTR.js;';

try {
	
const ImmortalityTimerName = 'Immortality';
const MessageBlue = '<b><size=62><color=Green>M</a><color=Red>ᴛ</a><a>ʀ</a></size></b>';
const MessageRed = '<b><size=82><color=Green>ᴮʸ:</a> <color=Red>ƬNƬ</a><color=Yellow>!</a></size></b>';

MTR.EditSettings();
MTR.InventoryAll();

Red = Room.GameMode.Parameters.GetBool('RedTeam');
Blue = Room.GameMode.Parameters.GetBool('BlueTeam');
Room.BreackGraph.WeakBlocks = Room.GameMode.Parameters.GetBool('LoosenBlocks');
Room.BreackGraph.OnlyPlayerBlocksDmg = Room.GameMode.Parameters.GetBool('PartialDesruction');
Room.Damage.GetContext().FriendlyFire = Room.GameMode.Parameters.GetBool('FriendlyFire');
Room.Damage.GetContext().DamageOut.Value = true;
Room.BreackGraph.PlayerBlockBoost = true;

Room.Teams.OnRequestJoinTeam.Add(function(Player, Team) { Team.Add(Player); });
Room.Teams.OnPlayerChangeTeam.Add(function(Player) { Player.Spawns.Spawn(); });

Room.Teams.Get('Red').Properties.Get('MessageRed').Value = MessageRed;
Room.Ui.GetContext().Hint.Value = 'MTR - By: TnT!';
Room.Spawns.GetContext().RespawnTime.Value = 5;
Room.Teams.Get('Blue').Properties.Get('MessageBlue').Value = MessageBlue;

Room.Ui.GetContext(BlueTeam).TeamProp1.Value = { Team: 'Blue', Prop: 'MessageBlue' };
Room.Ui.GetContext(RedTeam).TeamProp2.Value = { Team: 'Red', Prop: 'MessageRed' };

Spawns.GetContext().OnSpawn.Add(function(Player) {
 Player.Properties.Immortality.Value = true;
	Timer = Player.Timers.Get(Immortality).Restart(10);
});
Timers.OnPlayerTimer.Add(function(Timer) {
	if (Timer.Id != Immortality) return;
	  Timer.Player.Properties.Immortality.Value = false;
});

if (Blue || !Red && Blue) { 
  const BlueTeam = MTR.CreateBlueTeam();
  BlueTeam.Build.BlocksSet.Value = Room.BuildBlocksSet.All;
if (Room.GameMode.Parameters.GetBool('BlueHasNothing')) {
 Room.Teams.Get('BlueTeam').Inventory.Main.Value = false;
 Room.Teams.Get('BlueTeam').Inventory.Secondary.Value = false;
 Room.Teams.Get('BlueTeam').Inventory.Melee.Value = false;
 Room.Teams.Get('BlueTeam').Inventory.Explosive.Value = false;
 Room.Teams.Get('BlueTeam').Inventory.Build.Value = false;
    }
}
 if (Red || !Red && !Blue) {
  const RedTeam = MTR.CreateRedTeam();
  RedTeam.Build.BlocksSet.Value = Room.BuildBlocksSet.All;
if (Room.GameMode.Parameters.GetBool('RedHasNothing')) {
 Room.Teams.Get('RedTeam').Inventory.Main.Value = false;
 Room.Teams.Get('RedTeam').Inventory.Secondary.Value = false;
 Room.Teams.Get('RedTeam').Inventory.Melee.Value = false;
 Room.Teams.Get('RedTeam').Inventory.Explosive.Value = false;
 Room.Teams.Get('RedTeam').Inventory.Build.Value = false;
     }
  }

} catch (e) {
        Room.Players.All.forEach(Room => {
                Room.msg.Show(`${e.name}: ${e.message} ${e.stack}`);
        });
			   }	

