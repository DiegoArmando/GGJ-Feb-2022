#pragma bank 255

// Scene: AC Collision
// Triggers

#include "gbs_types.h"
#include "data/script_s2t0_interact.h"
#include "data/script_s2t1_interact.h"
#include "data/script_s2t2_interact.h"

BANKREF(scene_2_triggers)

const struct trigger_t scene_2_triggers[] = {
    {
        // Trigger 1,
        .x = 25,
        .y = 33,
        .width = 13,
        .height = 1,
        .script = TO_FAR_PTR_T(script_s2t0_interact),
        .script_flags = TRIGGER_HAS_ENTER_SCRIPT
    },
    {
        // Trigger 2,
        .x = 21,
        .y = 30,
        .width = 2,
        .height = 2,
        .script = TO_FAR_PTR_T(script_s2t1_interact),
        .script_flags = TRIGGER_HAS_ENTER_SCRIPT
    },
    {
        // Trigger 3,
        .x = 40,
        .y = 30,
        .width = 2,
        .height = 2,
        .script = TO_FAR_PTR_T(script_s2t2_interact),
        .script_flags = TRIGGER_HAS_ENTER_SCRIPT
    }
};
