#pragma bank 255

// Scene: ABC Collision

#include "gbs_types.h"
#include "data/background_0.h"
#include "data/scene_4_collisions.h"
#include "data/palette_0.h"
#include "data/palette_1.h"
#include "data/spritesheet_0.h"
#include "data/scene_4_actors.h"
#include "data/scene_4_triggers.h"
#include "data/scene_4_sprites.h"
#include "data/script_s4_init.h"

BANKREF(scene_4)

const struct scene_t scene_4 = {
    .width = 56,
    .height = 56,
    .type = SCENE_TYPE_PLATFORM,
    .background = TO_FAR_PTR_T(background_0),
    .collisions = TO_FAR_PTR_T(scene_4_collisions),
    .parallax_rows = {
        PARALLAX_STEP(0,0,0)
    },
    .palette = TO_FAR_PTR_T(palette_0),
    .sprite_palette = TO_FAR_PTR_T(palette_1),
    .reserve_tiles = 0,
    .player_sprite = TO_FAR_PTR_T(spritesheet_0),
    .n_actors = 1,
    .n_triggers = 3,
    .n_sprites = 1,
    .n_projectiles = 0,
    .actors = TO_FAR_PTR_T(scene_4_actors),
    .triggers = TO_FAR_PTR_T(scene_4_triggers),
    .sprites = TO_FAR_PTR_T(scene_4_sprites),
    .script_init = TO_FAR_PTR_T(script_s4_init)
};
