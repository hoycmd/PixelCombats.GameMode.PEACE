import { Inventory, GameMode } from 'pixel_combats/room';
import * as teams from './default_teams.js';
import * as peace from './peace_library.js';

// Инвентарь (Обычная версия)
  if (GameMode.Parameters.GetBool("Inventory")) {
  const Inventory = room.Inventory.GetContext();
  Inventory.Main.Value = false;
  Inventory.Secondary.Value = false;
  Inventory.Melee.Value = true;
  Inventory.Explosive.Value = false;
  Inventory.Build.Value = true;
  Inventory.BuildInfinity.Value = true;
 }

// Инвентарь (ТДМ версия)
   if (GameMode.Parameters.GetBool("InventoryTDM")) {
    const Inventory = room.Inventory.GeContext();
    Inventory.Main.Value = true;
    Inventory.MainInfinity.Value = false;
    Inventory.Secondary.Value = true;
    Inventory.SecondaryInfinity.Value = false;
    Inventory.Melee.Value = true;
    Inventory.Explosive.Value = true;
    Inventory.ExplosiveInfinity.Value = false;
    Inventory.Build.Value = true;
    Inventory.BuildInfinity.Value = false;
   }

// Инвентарь (Для красных нету)
   if (GameMode.Parameters.GetBool("RedInventory")) {
    const Inventory = room.Inventory.GetContext();
    Inventory.Main.Value = false;
    Inventory.Secondary.Value = false;
    Inventory.Melee.Value = false;
    Inventory.Explosive.Value = false;
    Inventory.Build.Value = false;
   }
  

