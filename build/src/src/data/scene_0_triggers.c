#pragma bank 255

// Scene: Scene 1
// Triggers

#include "gbs_types.h"
#include "data/script_s0t0_interact.h"
#include "data/script_s0t1_interact.h"
#include "data/script_s0t2_interact.h"

BANKREF(scene_0_triggers)

const struct trigger_t scene_0_triggers[] = {
    {
        // Trigger 1,
        .x = 19,
        .y = 55,
        .width = 8,
        .height = 1,
        .script = TO_FAR_PTR_T(script_s0t0_interact),
        .script_flags = TRIGGER_HAS_ENTER_SCRIPT
    },
    {
        // Trigger 2,
        .x = 15,
        .y = 52,
        .width = 2,
        .height = 2,
        .script = TO_FAR_PTR_T(script_s0t1_interact),
        .script_flags = TRIGGER_HAS_ENTER_SCRIPT
    },
    {
        // Trigger 3,
        .x = 29,
        .y = 52,
        .width = 2,
        .height = 2,
        .script = TO_FAR_PTR_T(script_s0t2_interact),
        .script_flags = TRIGGER_HAS_ENTER_SCRIPT
    }
};
