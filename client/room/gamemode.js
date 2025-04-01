import * as Room from 'pixel_combats/room';
import * as Basic from 'pixel_combats/basic';

const ImmortalityTimerName = 'Immortality';
const MessageBlue = '<b><size=62><color=Green>M</a><color=Red>ᴛ</a><a>ʀ</a></size></b>';
const MessageRed = '<b><size=82><color=Green>ᴮʸ:</a> <color=Red>ƬNƬ</a><color=Yellow>!</a></size></b>';

const RedTeam = Room.Teams.CreateRedTeam();
const BlueTeam = Room.Teams.CreateBlueTeam();
BlueTeam.Build.BlocksSet.Value = Room.BuildBlocksSet.All;
RedTeam.Build.BlocksSet.Value = Room.BuildBlocksSet.All;

EditSettings();
InventoryAll();

Room.BreackGraph.WeakBlocks = Room.GameMode.Parameters.GetBool('LoosenBlocks');
Room.BreackGraph.OnlyPlayerBlocksDmg = Room.GameMode.Parameters.GetBool('OnlyPlayerBlocksDmg');
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
