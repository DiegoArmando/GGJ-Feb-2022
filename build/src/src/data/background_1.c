#pragma bank 255

// Background: sample_town

#include "gbs_types.h"
#include "data/tileset_0.h"
#include "data/tilemap_1.h"

BANKREF(background_1)

const struct background_t background_1 = {
    .width = 56,
    .height = 56,
    .tileset = TO_FAR_PTR_T(tileset_0),
    .cgb_tileset = { NULL, NULL },
    .tilemap = TO_FAR_PTR_T(tilemap_1),
    .cgb_tilemap_attr = { NULL, NULL }
};
