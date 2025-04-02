// Импорты:
import { Build, Spawns, GameMode, Ui, Teams, BreackGraph, BuildBlocksSet, Damage, Players } from 'pixel_combats/room';
import * as teams from './default_teams.js';
import * as mtr from './mtr_library.js';

try {
 
// Настройки команд:
 const RedTeam = teams.CreateRedTeam(); 
 const BlueTeam = teams.CreateBlueTeam();
 RedTeam.Build.BlocksSet.Value = BuildBlocksSet.All;
 BlueTeam.Build.BlocksSet.Value = BuildBlocksSet.All;
// Задаём, настройку - для инвентаря:
mtr.SetInventory();

// Параметры, при создании - комнаты:
BreackGraph.WeakBlocks = GameMode.Parameters.GetBool('LoosenBlocks');
BreackGraph.OnlyPlayerBlocksDmg = GameMode.Parameters.GetBool('PartialDesruction');
Damage.GetContext().FriendlyFire = GameMode.Parameters.GetBool('FriendlyFire');	
// Базовые функции, включённые в комнате:
Damage.GetContext().DamageOut.Value = true;
BreackGraph.PlayerBlockBoost = true;

// Настройка редактора, в комнате:
mtr.SetEditor();

// Вход в команду, по запросу:
Teams.OnRequestJoinTeam.Add(function(Player, Team) { Team.Add(Player); });
// При входе, спавним игрока - в команде:
Teams.OnPlayerChangeTeam.Add(function(Player) { Player.Spawns.Spawn(); });	

// Задаём, подсказку - в комнате:
Ui.GetContext().Hint.Value = 'MTR - By: TnT!';

// Моментальный спавн:
Spawns.GetContext().RespawnTime.Value = 5;
