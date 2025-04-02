import * as Room from 'pixel_combats/room';
import * as Basic from 'pixel_combats/basic';
import * as Teams from './default_Teams.js';
import * as Mtr from './Mtr_library.js';

try {

const MessageBlue = '<b><size=62><color=Green>M</a><color=Red>ᴛ</a><a>ʀ</a></size></b>';
const MessageRed = '<b><size=82><color=Green>ᴮʸ:</a> <color=Red>ƬNƬ</a><color=Yellow>!</a></size></b>';

if (Red || !Red && !Blue) = Room.Teams.CreateRedTeam();
if (Blue || !Red && !Blue) = Room.Teams.CreateBlueTeam();
	
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

