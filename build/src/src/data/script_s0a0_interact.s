.module script_s0a0_interact

.include "vm.i"
.include "data/game_globals.i"

.area _CODE_255


___bank_script_s0a0_interact = 255
.globl ___bank_script_s0a0_interact
.CURRENT_SCRIPT_BANK == ___bank_script_s0a0_interact

_script_s0a0_interact::
        VM_LOCK

        VM_PUSH_CONST         2
        VM_REPLACE_TILE_XY    19,54,___bank_tileset_0, _tileset_0, .ARG0
        VM_POP                1

        ; Stop Script
        VM_STOP
