import * as room from 'pixel_combats/room';
import * as teams from './default_teams.js';

// разрешает все что можно для строительства
function set_inventory() {
    const context = room.Inventory.GetContext();
    context.Main.Value = true
    context.MainInfinity.Value = true;
    context.Secondary.Value = true;
    context.SecondaryInfinity.Value = true;
    context.Melee.Value = true;
    context.Explosive.Value = true;
    context.ExplosiveInfinity.Value = true;
    context.Build.Value = true;
    context.BuildInfinity.Value = true;
}

  if (room.id == "2827CD16AE7CC982") {
  Damage.DamageIn.Value = false;
  Inventory.Main.Value = true
  Inventory.MainInfinity.Value = true;
  Inventory.Secondary.Value = true;
  Inventory.SecondaryInfinity.Value = true;
  Inventory.Melee.Value = true;
  Inventory.Explosive.Value = true;
  Inventory.ExplosiveInfinity.Value = true;
  Inventory.Build.Value = true;
  Inventory.BuildInfinity.Value = true;
}

function set_build_settings() {
    const context = room.Build.GetContext();
    // прочие опции
    context.Pipette.Value = true;
    context.FloodFill.Value = true;
    context.FillQuad.Value = true;
    context.RemoveQuad.Value = true;
    context.BalkLenChange.Value = true;
    context.SetSkyEnable.Value = true;
    context.GenMapEnable.Value = true;
    context.ChangeCameraPointsEnable.Value = true;
    context.QuadChangeEnable.Value = true;
    context.BuildModeEnable.Value = true;
    context.CollapseChangeEnable.Value = true;
    context.RenameMapEnable.Value = true;
    context.ChangeMapAuthorsEnable.Value = true;
    context.LoadMapEnable.Value = true;
    context.ChangeSpawnsEnable.Value = true;
    context.BuildRangeEnable.Value = true;
    context.BlocksSet.Value = room.BuildBlocksSet.AllClear; // делаем возможность строительства всеми блоками
}

// задает в контекст инвентаря пустой инвентарь
function set_empty_inventory(inventory) {
    inventory.Main.Value = false;
    inventory.Secondary.Value = false;
    inventory.Melee.Value = false;
    inventory.Explosive.Value = false;
    inventory.Build.Value = false;
}

// задает опции режима мир, выбранные при создании комнаты
export function apply_room_options() {
    const gameModeParameters = room.GameMode.Parameters;

    // опции строительства
    const buildContext = room.Build.GetContext();
    buildContext.FlyEnable.Value = gameModeParameters.GetBool("Fly");

    // прочие опции
    room.Damage.GetContext().DamageOut.Value = gameModeParameters.GetBool("Damage");
    room.Damage.GetContext().FriendlyFire.Value = gameModeParameters.GetBool("FriendlyFire");
    room.BreackGraph.OnlyPlayerBlocksDmg = gameModeParameters.GetBool("PartialDesruction");
    room.BreackGraph.WeakBlocks = gameModeParameters.GetBool("LoosenBlocks");
}

// задает настройки режима мир
export function configure() {
    room.Properties.GetContext().GameModeName.Value = "GameModes/Peace";// задаем название режима
    room.Ui.GetContext().Hint.Value = "Hint/BuildBase";// выводим подсказку
    room.Ui.GetContext().QuadsCount.Value = true;// выводим количество квадов на карте
    room.BreackGraph.BreackAll = true; // делаем так, чтобы можно было сломать любой блок
    room.Spawns.GetContext().RespawnTime.Value = 0; // убираем таймер респавна
    set_build_settings();
    set_inventory();
    apply_room_options();
}

export function create_teams() {
    // создаем команды
    const roomParameters = room.GameMode.Parameters;
    const hasRedTeam = roomParameters.GetBool("RedTeam");
    const hasBlueTeam = roomParameters.GetBool("BlueTeam");
    if (hasRedTeam || !hasRedTeam && !hasBlueTeam) {
        teams.create_team_red();
    }
    if (hasBlueTeam || !hasRedTeam && !hasBlueTeam) {
        const blueTeam = teams.create_team_blue();
        if (roomParameters.GetBool("BlueHasNothing")) {
            set_empty_inventory(blueTeam.Inventort);
        }
    }

    // по запросу на вход в команду - кидаем игрока в команду
    room.Teams.OnRequestJoinTeam.Add(function (player, team) { team.Add(player); });
    // если игрок сменил команду или выбрал ее, то происходит спавн игрока
    room.Teams.OnPlayerChangeTeam.Add(function (player) { player.Spawns.Spawn() });
}
