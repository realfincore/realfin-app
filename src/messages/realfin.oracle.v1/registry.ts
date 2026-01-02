import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgUpdateParams } from "./types/realfin/oracle/v1/tx";
import { MsgCreatePrice } from "./types/realfin/oracle/v1/tx";
import { MsgUpdatePrice } from "./types/realfin/oracle/v1/tx";
import { MsgDeletePrice } from "./types/realfin/oracle/v1/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/realfin.oracle.v1.MsgUpdateParams", MsgUpdateParams],
    ["/realfin.oracle.v1.MsgCreatePrice", MsgCreatePrice],
    ["/realfin.oracle.v1.MsgUpdatePrice", MsgUpdatePrice],
    ["/realfin.oracle.v1.MsgDeletePrice", MsgDeletePrice],
    
];

export { msgTypes }