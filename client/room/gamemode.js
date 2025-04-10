// Импорты:
import * as Room from 'pixel_combats/room';
import * as Team from './default_Team.js';
import * as Mtr from './Mtr_library.js';
 
// Настройки команд:
 const RedTeam = Team.CreateRedTeam(); 
 const BlueTeam = Team.CreateBlueTeam();
 RedTeam.Build.BlocksSet.Value = Room.BuildBlocksSet.All;
 BlueTeam.Build.BlocksSet.Value = Room.BuildBlocksSet.All;
// Задаём, настройку - для инвентаря:
Mtr.SetInventory();

// Параметры, при создании - комнаты:
Room.BreackGraph.WeakBlocks = Room.GameMode.Parameters.GetBool('LoosenBlocks');
Room.BreackGraph.OnlyPlayerBlocksDmg = Room.GameMode.Parameters.GetBool('PartialDesruction');
Room.Damage.GetContext().FriendlyFire = Room.GameMode.Parameters.GetBool('FriendlyFire');	
// Базовые функции, включённые в комнате:
Room.Damage.GetContext().DamageOut.Value = true;
Room.BreackGraph.PlayerBlockBoost = true;

// Настройка редактора, в комнате:
Mtr.SetEditor();

// Вход в команду, по запросу:
Room.Teams.OnRequestJoinTeam.Add(function(Player, Team) { Team.Add(Player); });
// При входе, спавним игрока - в команде:
Room.Teams.OnPlayerChangeTeam.Add(function(Player) { Player.Spawns.Spawn(); });	

// Задаём, подсказку - в комнате:
Room.Ui.GetContext().Hint.Value = 'MTR - By: TnT!';

// Моментальный спавн:
Room.Spawns.GetContext().RespawnTime.Value = 5;
