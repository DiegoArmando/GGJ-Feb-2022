#pragma bank 255
// SpriteSheet: numbers
  
#include "gbs_types.h"
#include "data/tileset_2.h"

BANKREF(spritesheet_1)

#define SPRITE_1_STATE_DEFAULT 0

const metasprite_t spritesheet_1_metasprite_0[]  = {
    { 0, 8, 0, 0 }, { 0, -8, 2, 0 },
    {metasprite_end}
};

const metasprite_t spritesheet_1_metasprite_1[]  = {
    { 0, 8, 4, 0 }, { 0, -8, 6, 0 },
    {metasprite_end}
};

const metasprite_t spritesheet_1_metasprite_2[]  = {
    { 0, 8, 8, 0 }, { 0, -8, 10, 0 },
    {metasprite_end}
};

const metasprite_t spritesheet_1_metasprite_3[]  = {
    { 0, 8, 12, 0 }, { 0, -8, 14, 0 },
    {metasprite_end}
};

const metasprite_t spritesheet_1_metasprite_4[]  = {
    { 0, 8, 16, 0 }, { 0, -8, 18, 0 },
    {metasprite_end}
};

const metasprite_t * const spritesheet_1_metasprites[] = {
    spritesheet_1_metasprite_0,
    spritesheet_1_metasprite_1,
    spritesheet_1_metasprite_2,
    spritesheet_1_metasprite_3,
    spritesheet_1_metasprite_4
};

const struct animation_t spritesheet_1_animations[] = {
    {
        .start = 0,
        .end = 4
    },
    {
        .start = 0,
        .end = 4
    },
    {
        .start = 0,
        .end = 4
    },
    {
        .start = 0,
        .end = 4
    },
    {
        .start = 0,
        .end = 4
    },
    {
        .start = 0,
        .end = 4
    },
    {
        .start = 0,
        .end = 4
    },
    {
        .start = 0,
        .end = 4
    }
};

const UWORD spritesheet_1_animations_lookup[] = {
    SPRITE_1_STATE_DEFAULT
};

const struct spritesheet_t spritesheet_1 = {
    .n_metasprites = 5,
    .emote_origin = {
        .x = 0,
        .y = -16
    },
    .metasprites = spritesheet_1_metasprites,
    .animations = spritesheet_1_animations,
    .animations_lookup = spritesheet_1_animations_lookup,
    .bounds = {
        .left = 0,
        .bottom = 7,
        .right = 15,
        .top = -8
    },
    .tileset = TO_FAR_PTR_T(tileset_2),
    .cgb_tileset = { NULL, NULL }
};