.module script_create_bridge

.include "vm.i"
.include "data/game_globals.i"

.area _CODE_255


___bank_script_create_bridge = 255
.globl ___bank_script_create_bridge
.CURRENT_SCRIPT_BANK == ___bank_script_create_bridge

_script_create_bridge::
        VM_SET_INT16 

        VM_RET_FAR
