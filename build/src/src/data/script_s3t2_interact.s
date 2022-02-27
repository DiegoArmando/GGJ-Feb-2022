.module script_s3t2_interact

.include "vm.i"
.include "data/game_globals.i"

.area _CODE_255

ACTOR = -4

___bank_script_s3t2_interact = 255
.globl ___bank_script_s3t2_interact
.CURRENT_SCRIPT_BANK == ___bank_script_s3t2_interact

_script_s3t2_interact::
        VM_LOCK

        ; Local Actor
        VM_PUSH_CONST           0
        VM_PUSH_CONST           0
        VM_PUSH_CONST           0
        VM_PUSH_CONST           0

        VM_SET_CONST            ACTOR, 0
        ; Store X Position In Variable
        VM_ACTOR_GET_POS        ACTOR
        VM_RPN
            .R_REF      ^/(ACTOR + 1)/
            .R_INT16    128
            .R_OPERATOR .DIV
            .R_STOP
        VM_SET                  VAR_RESPAWN_X, .ARG0
        VM_POP                  1

        VM_SET_CONST            ACTOR, 0
        ; Store Y Position In Variable
        VM_ACTOR_GET_POS        ACTOR
        VM_RPN
            .R_REF      ^/(ACTOR + 2)/
            .R_INT16    128
            .R_OPERATOR .DIV
            .R_STOP
        VM_SET                  VAR_RESPAWN_Y, .ARG0
        VM_POP                  1

        ; Stop Script
        VM_STOP
