import { Color } from 'pixel_combats/basic';
import { Teams } from 'pixel_combats/room';

// Создаём, команды
Teams.Add("Blue", "<b><i>Синие| v1.577 - PC2 API 2.0</i></b>", new Color(0, 0, 1, 0));
Teams.Add("Red", "<b><i>Красные| v1.577 - PC2 API2.0</i></b>", new Color(1, 0, 0, 0,));
var BlueTeam = Teams.Get("Blue");
var RedTeam = Teams.Get("Red");
BlueTeam.Spawns.SpawnPointsGroups.Add(1);
RedTeam.Spawns.SpawnPointsGroups.Add(2);
