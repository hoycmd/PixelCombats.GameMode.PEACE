// библиотека для работы со стандартными длинами матчей

import { GameMode } from 'pixel_combats/room';

// константы
const PARAMETER_GAME_LENGTH = 'default_game_mode_length';

// возвращает длину матча
export function game_mode_length_seconds() {
    const length = GameMode.Parameters.GetString(PARAMETER_GAME_LENGTH);
    switch (length) {
        case '10000Time': return 10000; // 10000 min
      case '7Time': return 420; // 7 min
    }
    return 300;
}
