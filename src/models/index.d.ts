import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

export enum TradeActions {
  BUY = "BUY",
  SELL = "SELL"
}



type EagerTrades = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Trades, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly scriptName?: string | null;
  readonly quantity?: number | null;
  readonly price?: number | null;
  readonly amount?: number | null;
  readonly buyDate?: string | null;
  readonly sellDate?: string | null;
  readonly profit?: string | null;
  readonly actions?: TradeActions | keyof typeof TradeActions | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTrades = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Trades, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly scriptName?: string | null;
  readonly quantity?: number | null;
  readonly price?: number | null;
  readonly amount?: number | null;
  readonly buyDate?: string | null;
  readonly sellDate?: string | null;
  readonly profit?: string | null;
  readonly actions?: TradeActions | keyof typeof TradeActions | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Trades = LazyLoading extends LazyLoadingDisabled ? EagerTrades : LazyTrades

export declare const Trades: (new (init: ModelInit<Trades>) => Trades) & {
  copyOf(source: Trades, mutator: (draft: MutableModel<Trades>) => MutableModel<Trades> | void): Trades;
}