import type Big from "big.js";

export interface GetInfoResponse {
  vaults: VaultMeta[];
  tokens: TokenMeta[];
  metadata: Metadata;
}

export interface Metadata {
  apysContractId: string;
  bonusRewardsTokenId: string;
}

export interface TokenMeta {
  symbol: string;
  contractId: string;
  decimals: number;
  available: boolean;
  fractionDigits: number;
}

export interface TokenMetaWithPrice extends TokenMeta {
  price: Big;
  minDepositAmount: number;
}

export interface VaultMeta {
  uuid: string;
  name: string;
  contractId: string;
  status: "live" | "upcoming" | "finished";
  depositTokens: TokenMetaWithPrice[];
  rewardToken: string;
  dex: "REF" | "JUMBO";
  dexUrl: string;
  apr: Big;
  tvl: Big;
  osc: Big;
  bonusApr: Big;
}
