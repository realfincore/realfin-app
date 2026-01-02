import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgUpdateParams } from "./types/realfin/realestate/v1/tx";
import { MsgCreateRate } from "./types/realfin/realestate/v1/tx";
import { MsgUpdateRate } from "./types/realfin/realestate/v1/tx";
import { MsgDeleteRate } from "./types/realfin/realestate/v1/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/realfin.realestate.v1.MsgUpdateParams", MsgUpdateParams],
    ["/realfin.realestate.v1.MsgCreateRate", MsgCreateRate],
    ["/realfin.realestate.v1.MsgUpdateRate", MsgUpdateRate],
    ["/realfin.realestate.v1.MsgDeleteRate", MsgDeleteRate],
    
];

export { msgTypes }