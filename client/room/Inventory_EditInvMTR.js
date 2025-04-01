import * as Room from 'pixel_combats/room';

export function EditSettings() {
 Room.Build.GetContext().Pipette.Value = true;
 Room.Build.GetContext().FloodFill.Value = true;
 Room.Build.GetContext().FillQuad.Value = true;
 Room.Build.GetContext().RemoveQuad.Value = true;
 Room.Build.GetContext().BalkLenChange.Value = true;
 Room.Build.GetContext().FlyEnable.Value = true;
 Room.Build.GetContext().SetSkyEnable.Value = true;
 Room.Build.GetContext().GenMapEnable.Value = true;
 Room.Build.GetContext().ChangeCameraPointsEnable.Value = true;
 Room.Build.GetContext().QuadChangeEnable.Value = true;
 Room.Build.GetContext().BuildModeEnable.Value = true;
 Room.Build.GetContext().CollapseChangeEnable.Value = true;
 Room.Build.GetContext().RenameMapEnable.Value = true;
 Room.Build.GetContext().ChangeMapAuthorsEnable.Value = true;
 Room.Build.GetContext().LoadMapEnable.Value = true;
 Room.Build.GetContext().ChangeSpawnsEnable.Value = true;
 Room.Build.GetContext().BuildRangeEnable.Value = true;
}

export function InventoryAll() {
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
