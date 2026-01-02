import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgUpdateParams } from "./types/realfin/creditscore/v1/tx";
import { MsgCreateRate } from "./types/realfin/creditscore/v1/tx";
import { MsgUpdateRate } from "./types/realfin/creditscore/v1/tx";
import { MsgDeleteRate } from "./types/realfin/creditscore/v1/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/realfin.creditscore.v1.MsgUpdateParams", MsgUpdateParams],
    ["/realfin.creditscore.v1.MsgCreateRate", MsgCreateRate],
    ["/realfin.creditscore.v1.MsgUpdateRate", MsgUpdateRate],
    ["/realfin.creditscore.v1.MsgDeleteRate", MsgDeleteRate],
    
];

export { msgTypes }