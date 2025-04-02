import { Inventory, Build } from 'pixel_combats/room';

function SetInventory() {
  const inventory = Inventory.GetContext();
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

function SetEditor() {
 const build = Build.GetContext();
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
