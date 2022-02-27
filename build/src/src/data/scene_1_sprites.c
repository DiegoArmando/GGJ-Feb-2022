#pragma bank 255

// Scene: A Collision
// Sprites

#include "gbs_types.h"
#include "data/spritesheet_1.h"

BANKREF(scene_1_sprites)

const far_ptr_t scene_1_sprites[] = {
    TO_FAR_PTR_T(spritesheet_1)
};
