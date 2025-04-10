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
 Room.Ui.GetContext().Hint.Value = 'MTR - by: TnT!';
 

  
