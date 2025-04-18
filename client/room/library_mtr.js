import * as room from 'pixel_combats/room';

export function set_inventory() {
 const inventory = room.Inventory.GetContext();
  inventory.Main.Value = true; 
  inventory.MainInfinity.Value = true;
  inventory.Secondary.Value = true;
  inventory.SecondaryInfinity.Value = true;
  inventory.Melee.Value = true;
  inventory.Explosive.Value = true;
  inventory.ExplosiveInfinity.Value = true;
  inventory.Build.Value = true;
  inventory.BuildInfinity.Value = true;

  if (room.GameMode.Parameters.GetBool('InventoryNotTeamBlue')){
    Room.Teams.Get('Blue').inventory.Main.Value = false;
    Room.Teams.Get('Blue').inventory.Secondary.Value = false;
    Room.Teams.Get('Blue').inventory.Melee.Value = false;
    Room.Teams.Get('Blue').inventory.Explosive.Value = false;
    Room.Teams.Get('Blue').inventory.Build.Value = false;
}
  if (room.GameMode.Parameters.GetBool('InventoryNotTeamRed')){
    Room.Teams.Get('Red').inventory.Main.Value = false;
    Room.Teams.Get('Red').inventory.Secondary.Value = false;
    Room.Teams.Get('Red').inventory.Melee.Value = false;
    Room.Teams.Get('Red').inventory.Explosive.Value = false;
    Room.Teams.Get('Red').inventory.Build.Value = false;
}
}

export function set_editor() {
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
