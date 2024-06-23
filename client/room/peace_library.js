import { DisplayValueHeader, Color } from 'pixel_combats/basic';
import { Game, Players, Inventory, LeaderBoard, Teams, Damage, BreackGraph, Ui, Properties, GameMode, Spawns, Timers, Build, BuildBlocksSet, TeamsBalancer } from 'pixel_combats/room';

// Настройки
Damage.GetContext().DamageOut.Value = GameMode.Parameters.GetBool('Damage');
Damage.GetContext().FriendlyFire.Value = GameMode.Parameters.GetBool('FriendlyFire');
BreackGraph.WeakBlocks = GameMode.Parameters.GetBool('WeakBlocks');
BreackGraph.OnlyPlayerBlocksDmg = GameMode = Parameters.GetBool('PartialDesruction');
BreackGraph.FlyEnable.Value = GameMode.Parameters.GetBool('Fly');

// Команды
if (GameMode.Parameters.GetBool('BlueTeam')) {
Teams.Add('Blue', '<b><i>Синие</i></b>', new Color(0, 0, 1, 0));
const BlueTeam = Teams.Get('Blue');
BlueTeam.Spawns.SpawnPointsGroups.Add(1);
BlueTeam.Build.BuildBlocksSet.Value = BuildBlocksSet.AllClear;
if (GameMode.Parameters.GetBool('InventoryBlueTeam')) {
BlueTeam.Player.Inventory.Main.Value = false;
BlueTeam.Player.Inventory.MainInfinity.Value = false;
BlueTeam.Player.Inventory.Secondary.Value = false;
BlueTeam.Player.Inventory.SecondaryInfinity.Value = false;
BlueTeam.Player.Inventory.Melee.Value = false;
BlueTeam.Player.Inventory.Explosive.Value = false;
BlueTeam.Player.Inventory.ExplosiveInfinity.Value = false;
BlueTeam.Player.Inventory.Build.Value = false;
BlueTeam.Player.Inventory.BuildInfinity.Value = false;
} 
BlueTeam.Inventory.Main.Value = true;
BlueTeam.Inventory.MainInfinity.Value = true;
BlueTeam.Inventory.Secondary.Value = true;
BlueTeam.Inventory.SecondaryInfinity.Value = true;
BlueTeam.Inventory.Melee.Value = true;
BlueTeam.Inventory.Explosive.Value = true;
BlueTeam.Inventory.ExplosiveInfinity.Value = true;
BlueTeam.Inventory.Build.Value = true;
BlueTeam.Inventory.BuildInfinity.Value = true;
BlueTeam.Build.Pipette.Value = true;
BlueTeam.Build.BalkLenChange.Value = true;
BlueTeam.Build.BuildRangeEnable.Value = true;
BlueTeam.Build.BuildModeEnable.Value = true;
BlueTeam.Build.RemoveQuad.Value = true;
BlueTeam.Build.FillQuad.Value = true;
BlueTeam.Build.FloodFill.Value = true;
BlueTeam.Build.ChangeSpawnsEnable.Value = true;
BlueTeam.Build.LoadMapEnable.Value = true;
BlueTeam.Build.ChangeMapAuthorsEnable.Value = true;
BlueTeam.Build.GenMapEnable.Value = true;
BlueTeam.Build.ChangeCameraPointsEnable.Value = true;
BlueTeam.Build.CollapseChangeEnable.Value = true;
BlueTeam.Build.QuadChangeEnable.Value = true;
BlueTeam.Build.SetSkyEnable.Value = true;
BlueTeam.Build.BlocksSet.Value = BuildBlocksSet.AllClear;
}
if (GameMode.Parameters.GetBool('RedTeam')) {
Teams.Add('Red', '<b><i>Красные</i></b>', new Color(1, 0, 0, 0));
const RedTeam = Teams.Get('Red');
RedTeam.Spawns.SpawnPointsGroups.Add(2);
RedTeam.Build.BuildBlocksSet.Value = BuildBlocksSet.AllClear;
if (GameMode.Parameters.GetBool('InventoryRedTeam')) {
RedTeam.Player.Inventory.Main.Value = false;
RedTeam.Player.Inventory.MainInfinity.Value = false;
RedTeam.Player.Inventory.Secondary.Value = false;
RedTeam.Player.Inventory.SecondaryInfinity.Value = false;
RedTeam.Player.Inventory.Melee.Value = false;
RedTeam.Player.Inventory.Explosive.Value = false;
RedTeam.Player.Inventory.ExplosiveInfinity.Value = false;
RedTeam.Player.Inventory.Build.Value = false;
RedTeam.Player.Inventory.BuildInfinity.Value = false;
}
RedTeam.Inventory.Main.Value = true;
RedTeam.Inventory.MainInfinity.Value = true;
RedTeam.Inventory.Secondary.Value = true;
RedTeam.Inventory.SecondaryInfinity.Value = true;
RedTeam.Inventory.Melee.Value = true;
RedTeam.Inventory.Explosive.Value = true;
RedTeam.Inventory.ExplosiveInfinity.Value = true;
RedTeam.Inventory.Build.Value = true;
RedTeam.Inventory.BuildInfinity.Value = true;
RedTeam.Build.Pipette.Value = true;
RedTeam.Build.BalkLenChange.Value = true;
RedTeam.Build.BuildRangeEnable.Value = true;
RedTeam.Build.BuildModeEnable.Value = true;
RedTeam.Build.RemoveQuad.Value = true;
RedTeam.Build.FillQuad.Value = true;
RedTeam.Build.FloodFill.Value = true;
RedTeam.Build.ChangeSpawnsEnable.Value = true;
RedTeam.Build.LoadMapEnable.Value = true;
RedTeam.Build.ChangeMapAuthorsEnable.Value = true;
RedTeam.Build.GenMapEnable.Value = true;
RedTeam.Build.ChangeCameraPointsEnable.Value = true;
RedTeam.Build.CollapseChangeEnable.Value = true;
RedTeam.Build.QuadChangeEnable.Value = true;
RedTeam.Build.SetSkyEnable.Value = true;
RedTeam.Build.BlocksSet.Value = BuildBlocksSet.AllClear;
}

// Спавн (время)
if (GameMode.Parameters.GetBool('Spawns0')) {
Spawns.GetContext().RespawnTime.Value = 0;
}
Spawns.GetContext().RespawnTime.Value = 5;

// Таблица лидеров (и его свойства)
LeaderBoard.PlayerLeaderBoardValues = [
	new DisplayValueHeader('Kills', '<b><i>КИЛЛЫ</i></b>', '<b><i>КИЛЛЫ</i></b>'),
	new DisplayValueHeader('Deaths', '<b><i>СМЕРТИ</i></b>', '<b><i>СМЕРТИ</i></b>'),
	new DisplayValueHeader('Scores', '<b><i>ОЧКИ</i></b>', '<b><i>ОЧКИ</i></b>')
];
LeaderBoard.PlayersWeightGetter.Set(function(p) {
	return p.Properties.Get('Scores').Value;
});

Teams.OnRequestJoinTeam.Add(function(p, t) {
	p.contextedProperties.MaxHp.Value = GameMode.Parameters.GetBool('MiniHp') ? GameMode.Parameters.GetBool('BigHp') ? 150 : 50 : 100;
	t.Add(p);
});
Teams.OnPlayerChangeTeam.Add(function(p) {
	p.Spawns.Spawn();
});

Spawns.GetContext().OnSpawn.Add(function(p) {
	p.Properties.Immortality.Value = true;
	p.Timers.Get('immortality').Restart(GameMode.Parameters.GetBool('MiniImmortalityTime') ? GameMode.Parameters.GetBool('BigImmortalityTime') ? 10 : 3 : 5);
});
Timers.OnPlayerTimer.Add(function(t) {
	if (t.Id != 'immortality') return;
	t.Player.Properties.Immortality.Value = false;
});
Damage.OnDeath.Add(function(p) {
	++p.Properties.Deaths.Value;
});
Damage.OnKill.Add(function(p, k) {
	if (p.id != k.id) {
		++p.Properties.Kills.Value;
		if (p.Team != k.Team) {
			p.Properties.Scores.Value += 500;
		};
	};
});












  



