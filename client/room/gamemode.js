// Импорты:
import { Build, Spawns, GameMode, Ui, Teams, BreackGraph, BuildBlocksSet, Damage } from 'pixel_combats/room';
import * as Teams from './default_teams.js';
import * as Mtr from './mtr_library.js';

// Настройки команд:
const Red = GameMode.Parameters.GetBool('RedTeam'); 
const Blue = GameMode.Parameters.GetBool('BlueTeam');
 if (Red || !Red && !Blue) = Teams.CreateRedTeam(); 
 if (Blue || !Red && !Blue) = Teams.CreateBlueTeam(); 
// Задаём, все блоки:
Build.GetContext().BlocksSet.Value = BuildBlocksSet.All; 
// Задаём, настройку - для инвентаря:
Mtr.SetInventory();

// Параметры, при создании - комнаты:
BreackGraph.WeakBlocks = GameMode.Parameters.GetBool('LoosenBlocks');
BreackGraph.OnlyPlayerBlocksDmg = GameMode.Parameters.GetBool('PartialDesruction');
Damage.GetContext().FriendlyFire = GameMode.Parameters.GetBool('FriendlyFire');
Build.GetContext().FlyEnable = GameMode.Parameters.GetBool('Fly');	
// Базовые функции, включённые в комнате:
Damage.GetContext().DamageOut.Value = true;
BreackGraph.PlayerBlockBoost = true;

// Настройка редактора, в комнате:
Mtr.SetEditor();

// Вход в команду, по запросу:
Teams.OnRequestJoinTeam.Add(function(Player, Team) { Team.Add(Player); });
// При входе, спавним игрока - в команде:
Teams.OnPlayerChangeTeam.Add(function(Player) { Player.Spawns.Spawn(); });	

// Задаём, подсказку - в комнате:
Ui.GetContext().Hint.Value = 'MTR - By: TnT!';

// Моментальный спавн:
Spawns.GetContext().RespawnTime.Value = 5;
