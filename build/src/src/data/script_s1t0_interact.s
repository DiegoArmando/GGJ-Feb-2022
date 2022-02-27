.module script_s1t0_interact

.include "vm.i"
.include "data/game_globals.i"

.area _CODE_255

ACTOR = -4

___bank_script_s1t0_interact = 255
.globl ___bank_script_s1t0_interact
.CURRENT_SCRIPT_BANK == ___bank_script_s1t0_interact

_script_s1t0_interact::
        VM_LOCK

        ; Local Actor
        VM_PUSH_CONST           0
        VM_PUSH_CONST           0
        VM_PUSH_CONST           0
        VM_PUSH_CONST           0

        ; Actor Set Active
        VM_SET_CONST            ACTOR, 0

        ; Actor Set Position To Variables
        VM_RPN
            .R_REF      VAR_RESPAWN_X
            .R_INT16    128
            .R_OPERATOR .MUL
            .R_REF      VAR_RESPAWN_Y
            .R_INT16    128
            .R_OPERATOR .MUL
            .R_STOP
        VM_SET                  ^/(ACTOR + 1 - 2)/, .ARG1
        VM_SET                  ^/(ACTOR + 2 - 2)/, .ARG0
        VM_POP                  2
        VM_ACTOR_SET_POS        ACTOR

        ; Stop Script
        VM_STOP
