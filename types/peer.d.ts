import { Pubkey } from "./general";
interface ConnectPeerParams {
    address: string;
    save?: boolean;
}
interface DisconnectPeerParams {
    pubkey: Pubkey;
}
interface PeerInfo {
    pubkey: Pubkey;
    address: string;
}
interface ListPeerResult {
    peers: PeerInfo[];
}
export type { ConnectPeerParams, DisconnectPeerParams, ListPeerResult, PeerInfo };
//# sourceMappingURL=../../src/dist/types/peer.d.ts.map