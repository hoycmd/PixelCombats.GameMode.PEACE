import { DisplayValueHeader, Color } from 'pixel_combats/basic';
import { Game, Players, Inventory, LeaderBoard, BuildBlocksSet, Teams, Damage, BreackGraph, Ui, Properties, GameMode, Spawns, Timers, TeamsBalancer } from 'pixel_combats/room';

// Настройки
Damage.GetContext().DamageOut.Value = GameMode.Parameters.GetBool('Damage');
Damage.GetContext().FriendlyFire.Value = GameMode.Parameters.GetBool('FriendlyFire');
BreackGraph.WeakBlocks = GameMode.Parameters.GetBool('WeakBlocks');
