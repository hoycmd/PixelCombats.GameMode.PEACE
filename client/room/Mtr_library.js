// Импорт:
import * as Room from 'pixel_combats/room';

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
 const GameModeParameters = Room.GameMode.Parameters.GetBool;

 // Параметры, при создании - комнаты:
  const damage = Room.Damage.GetContext();
  const build = Room.Build.GetContext();
  const Red = GameModeParameters('RedTeam');
  const Blue = GameModeParameters('BlueTeam');
  Room.BreackGraph.WeakBlocks = GameModeParameters('LoosenBlocks');
  Room.BreackGraph.OnlyPlayerBlocksDmg = GameModeParameters('PartialDesruction');
  Room.damage.FriendlyFire = GameModeParameters('FriendlyFire');
  build.FlyEnable = GameModeParameters('Fly');
 // Базовые функции, включённые в комнате:
  Room.damage.DamageOut.Value = true;
  Room.BreackGraph.PlayerBlockBoost = true;
}

// Задаём, основу - режима mtr:
export function MtrConfigure() {
 Room.Ui.GetContext().Hint.Value = 'MTR - by: TnT!'; // Подсказка, с верху в табе.
 Room.Ui.GetContext().QuadsCount.Value = true; // Количество квадов, в комнате.
 Room.BreackGraph.BreackAll = true; // Разрешаем сломать, любой блок.
 Room.Spawns.GetContext().RespawnTime.Value = 5; // Таймер, после респавна.
 Room.Properties.GetContext().GameModeName.Value = 'GameModes/Mtr'; // Название режима.
  SetEditor(); // Функции редактора - в комнате.
 SetInventory(); // Задаём, настройку - для инвентаря.
 OptionsGameMode(); // Опция настроек, и разные - базовые функции.
}

// Задаём, команды - по запросу:
export function CreateNewTeams() {
 const GameModeParameters = Room.GameMode.Parameters.GetBool;
 const InventoryNotTeamBlue = GameModeParameters('InventoryNotTeamBlue');
 const InventoryNotTeamRed = GameModeParameters('InventoryNotTeamRed');

// Создание команд - на основе, параметров о командах, и их - значении:
 if (Red || (!Red && !Blue)) {
  Team.CreateRedTeam();
}
 if (Blue || (!Red && !Blue)) {
  Team.CreateBlueTeam();
 }
  
// Настройка, инвентарёв - команд при их - значении:
Room.Teams.OnAddTeam.Add(function(Team) {
 if (Team.Name === 
