// Импорты:
import * as Room from 'pixel_combats/room';
import * as Team from './default_teams.js';

// Функция, для конфигурации - инвентаря:
function SetInventory() {
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
}

// Функция, редактора: 
function SetEditor() {
 const build = Room.Build.GetContext();
  build.Pipette.Value = true;
  build.FloodFill.Value = true;
  build.FillQuad.Value = true;
  build.RemoveQuad.Value = true;
  build.BalkLenChange.Value = true;
  build.SetSkyEnable.Value = true;
  build.GenMapEnable.Value = true;
  build.ChangeCameraPointsEnable.Value = true;
  build.QuadChangeEnable.Value = true;
  build.BuildModeEnable.Value = true;
  build.CollapseChangeEnable.Value = true;
  build.RenameMapEnable.Value = true;
  build.ChangeMapAuthorsEnable.Value = true;
  build.LoadMapEnable.Value = true;
  build.ChangeSpawnsEnable.Value = true;
  build.BuildRangeEnable.Value = true;
}

// Задаём, опции настроек - для функции режима:
export function OptionsGameMode() {
 const GameModeParametersGetBool = Room.GameMode.Parameters.GetBool;
 const damage = Room.Damage.GetContext();
 const build = Room.Build.GetContext();
 const properties = Room.Properties.GetContext();
 const ui = Room.Ui.GetContext();

 // Параметры, при создании - комнаты:
  const Red = GameModeParametersGetBool('RedTeam');
  const Blue = GameModeParametersGetBool('BlueTeam');
  Room.BreackGraph.WeakBlocks = GameModeParametersGetBool('LoosenBlocks');
  Room.BreackGraph.OnlyPlayerBlocksDmg = GameModeParametersGetBool('PartialDesruction');
  damage.FriendlyFire = GameModeParametersGetBool('FriendlyFire');
  build.FlyEnable = GameModeParametersGetBool('Fly');
 // Базовые функции, включённые в комнате:
  damage.DamageOut.Value = true;
  Room.BreackGraph.PlayerBlockBoost = true;
}

// Задаём, основу - режима mtr:
export function MtrConfigure() {
 ui.Hint.Value = 'MTR - by: TnT!'; // Подсказка, с верху в табе.
 ui.QuadsCount.Value = true; // Количество квадов, в комнате.
 Room.BreackGraph.BreackAll = true; // Разрешаем сломать, любой блок.
 Room.Spawns.GetContext().RespawnTime.Value = 5; // Таймер, после респавна.
 properties.GameModeName.Value = 'GameModes/Mtr'; // Название режима.
  SetEditor(); // Функции редактора - в комнате.
 SetInventory(); // Задаём, настройку - для инвентаря.
 OptionsGameMode(); // Опция настроек, и разные - базовые функции.
}

// Задаём, команды - по запросу:
export function CreateNewTeams() {
 const GameModeParametersGetBool = Room.GameMode.Parameters.GetBool;
 
// Создание команд - на основе, параметров о командах, и их - значении:
 if (Red || (!Red && !Blue)) {
  Team.CreateRedTeam();
}
 if (Blue || (!Red && !Blue)) {
  Team.CreateBlueTeam();
 }
  
// Настройка, инвентарёв - команд при их - значении:
 if (GameModeParametersGetBool('InventoryNotTeamBlue')) {
   Room.Teams.Get('Blue').Inventory.Main.Value = false;
   Room.Teams.Get('Blue').Inventory.Secondary.Value = false;
   Room.Teams.Get('Blue').Inventory.Melee.Value = false;
   Room.Teams.Get('Blue').Inventory.Explosive.Value = false;
   Room.Teams.Get('Blue').Inventory.Build.Value = false;
 }
 if (GameModeParametersGetBool('InventoryNotTeamRed')) {
   Room.Teams.Get('Red').Inventory.Main.Value = false;
   Room.Teams.Get('Red').Inventory.Secondary.Value = false;
   Room.Teams.Get('Red').Inventory.Melee.Value = false;
   Room.Teams.Get('Red').Inventory.Explosive.Value = false;
   Room.Teams.Get('Red').Inventory.Build.Value = false;
 }
  

