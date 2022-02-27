.module script_s3a0_interact

.include "vm.i"
.include "data/game_globals.i"

.area _CODE_255


___bank_script_s3a0_interact = 255
.globl ___bank_script_s3a0_interact
.CURRENT_SCRIPT_BANK == ___bank_script_s3a0_interact

_script_s3a0_interact::
        VM_LOCK

        ; Call Script: Create Bridge
        VM_CALL_FAR             ___bank_script_create_bridge, _script_create_bridge

        ; Stop Script
        VM_STOP
