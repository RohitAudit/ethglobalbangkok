/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "./common";

export declare namespace RateLimiter {
  export type ConfigStruct = {
    isEnabled: boolean;
    capacity: BigNumberish;
    rate: BigNumberish;
  };

  export type ConfigStructOutput = [
    isEnabled: boolean,
    capacity: bigint,
    rate: bigint
  ] & { isEnabled: boolean; capacity: bigint; rate: bigint };

  export type TokenBucketStruct = {
    tokens: BigNumberish;
    lastUpdated: BigNumberish;
    isEnabled: boolean;
    capacity: BigNumberish;
    rate: BigNumberish;
  };

  export type TokenBucketStructOutput = [
    tokens: bigint,
    lastUpdated: bigint,
    isEnabled: boolean,
    capacity: bigint,
    rate: bigint
  ] & {
    tokens: bigint;
    lastUpdated: bigint;
    isEnabled: boolean;
    capacity: bigint;
    rate: bigint;
  };
}

export declare namespace TokenPool {
  export type ChainUpdateStruct = {
    remoteChainSelector: BigNumberish;
    allowed: boolean;
    remotePoolAddress: BytesLike;
    remoteTokenAddress: BytesLike;
    outboundRateLimiterConfig: RateLimiter.ConfigStruct;
    inboundRateLimiterConfig: RateLimiter.ConfigStruct;
  };

  export type ChainUpdateStructOutput = [
    remoteChainSelector: bigint,
    allowed: boolean,
    remotePoolAddress: string,
    remoteTokenAddress: string,
    outboundRateLimiterConfig: RateLimiter.ConfigStructOutput,
    inboundRateLimiterConfig: RateLimiter.ConfigStructOutput
  ] & {
    remoteChainSelector: bigint;
    allowed: boolean;
    remotePoolAddress: string;
    remoteTokenAddress: string;
    outboundRateLimiterConfig: RateLimiter.ConfigStructOutput;
    inboundRateLimiterConfig: RateLimiter.ConfigStructOutput;
  };
}

export declare namespace Pool {
  export type LockOrBurnInV1Struct = {
    receiver: BytesLike;
    remoteChainSelector: BigNumberish;
    originalSender: AddressLike;
    amount: BigNumberish;
    localToken: AddressLike;
  };

  export type LockOrBurnInV1StructOutput = [
    receiver: string,
    remoteChainSelector: bigint,
    originalSender: string,
    amount: bigint,
    localToken: string
  ] & {
    receiver: string;
    remoteChainSelector: bigint;
    originalSender: string;
    amount: bigint;
    localToken: string;
  };

  export type LockOrBurnOutV1Struct = {
    destTokenAddress: BytesLike;
    destPoolData: BytesLike;
  };

  export type LockOrBurnOutV1StructOutput = [
    destTokenAddress: string,
    destPoolData: string
  ] & { destTokenAddress: string; destPoolData: string };

  export type ReleaseOrMintInV1Struct = {
    originalSender: BytesLike;
    remoteChainSelector: BigNumberish;
    receiver: AddressLike;
    amount: BigNumberish;
    localToken: AddressLike;
    sourcePoolAddress: BytesLike;
    sourcePoolData: BytesLike;
    offchainTokenData: BytesLike;
  };

  export type ReleaseOrMintInV1StructOutput = [
    originalSender: string,
    remoteChainSelector: bigint,
    receiver: string,
    amount: bigint,
    localToken: string,
    sourcePoolAddress: string,
    sourcePoolData: string,
    offchainTokenData: string
  ] & {
    originalSender: string;
    remoteChainSelector: bigint;
    receiver: string;
    amount: bigint;
    localToken: string;
    sourcePoolAddress: string;
    sourcePoolData: string;
    offchainTokenData: string;
  };

  export type ReleaseOrMintOutV1Struct = { destinationAmount: BigNumberish };

  export type ReleaseOrMintOutV1StructOutput = [destinationAmount: bigint] & {
    destinationAmount: bigint;
  };
}

export interface TokenPoolInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "acceptOwnership"
      | "applyAllowListUpdates"
      | "applyChainUpdates"
      | "getAllowList"
      | "getAllowListEnabled"
      | "getCurrentInboundRateLimiterState"
      | "getCurrentOutboundRateLimiterState"
      | "getRateLimitAdmin"
      | "getRemotePool"
      | "getRemoteToken"
      | "getRmnProxy"
      | "getRouter"
      | "getSupportedChains"
      | "getToken"
      | "isSupportedChain"
      | "isSupportedToken"
      | "lockOrBurn"
      | "owner"
      | "releaseOrMint"
      | "setChainRateLimiterConfig"
      | "setRateLimitAdmin"
      | "setRemotePool"
      | "setRouter"
      | "supportsInterface"
      | "transferOwnership"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "AllowListAdd"
      | "AllowListRemove"
      | "Burned"
      | "ChainAdded"
      | "ChainConfigured"
      | "ChainRemoved"
      | "ConfigChanged"
      | "Locked"
      | "Minted"
      | "OwnershipTransferRequested"
      | "OwnershipTransferred"
      | "Released"
      | "RemotePoolSet"
      | "RouterUpdated"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "acceptOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "applyAllowListUpdates",
    values: [AddressLike[], AddressLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "applyChainUpdates",
    values: [TokenPool.ChainUpdateStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getAllowList",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getAllowListEnabled",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getCurrentInboundRateLimiterState",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getCurrentOutboundRateLimiterState",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getRateLimitAdmin",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getRemotePool",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getRemoteToken",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getRmnProxy",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "getRouter", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getSupportedChains",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "getToken", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "isSupportedChain",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isSupportedToken",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "lockOrBurn",
    values: [Pool.LockOrBurnInV1Struct]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "releaseOrMint",
    values: [Pool.ReleaseOrMintInV1Struct]
  ): string;
  encodeFunctionData(
    functionFragment: "setChainRateLimiterConfig",
    values: [BigNumberish, RateLimiter.ConfigStruct, RateLimiter.ConfigStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "setRateLimitAdmin",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setRemotePool",
    values: [BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setRouter",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "acceptOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "applyAllowListUpdates",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "applyChainUpdates",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAllowList",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAllowListEnabled",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCurrentInboundRateLimiterState",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCurrentOutboundRateLimiterState",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRateLimitAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRemotePool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRemoteToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRmnProxy",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getRouter", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getSupportedChains",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isSupportedChain",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isSupportedToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "lockOrBurn", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "releaseOrMint",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setChainRateLimiterConfig",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setRateLimitAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setRemotePool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setRouter", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
}

export namespace AllowListAddEvent {
  export type InputTuple = [sender: AddressLike];
  export type OutputTuple = [sender: string];
  export interface OutputObject {
    sender: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace AllowListRemoveEvent {
  export type InputTuple = [sender: AddressLike];
  export type OutputTuple = [sender: string];
  export interface OutputObject {
    sender: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace BurnedEvent {
  export type InputTuple = [sender: AddressLike, amount: BigNumberish];
  export type OutputTuple = [sender: string, amount: bigint];
  export interface OutputObject {
    sender: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ChainAddedEvent {
  export type InputTuple = [
    remoteChainSelector: BigNumberish,
    remoteToken: BytesLike,
    outboundRateLimiterConfig: RateLimiter.ConfigStruct,
    inboundRateLimiterConfig: RateLimiter.ConfigStruct
  ];
  export type OutputTuple = [
    remoteChainSelector: bigint,
    remoteToken: string,
    outboundRateLimiterConfig: RateLimiter.ConfigStructOutput,
    inboundRateLimiterConfig: RateLimiter.ConfigStructOutput
  ];
  export interface OutputObject {
    remoteChainSelector: bigint;
    remoteToken: string;
    outboundRateLimiterConfig: RateLimiter.ConfigStructOutput;
    inboundRateLimiterConfig: RateLimiter.ConfigStructOutput;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ChainConfiguredEvent {
  export type InputTuple = [
    remoteChainSelector: BigNumberish,
    outboundRateLimiterConfig: RateLimiter.ConfigStruct,
    inboundRateLimiterConfig: RateLimiter.ConfigStruct
  ];
  export type OutputTuple = [
    remoteChainSelector: bigint,
    outboundRateLimiterConfig: RateLimiter.ConfigStructOutput,
    inboundRateLimiterConfig: RateLimiter.ConfigStructOutput
  ];
  export interface OutputObject {
    remoteChainSelector: bigint;
    outboundRateLimiterConfig: RateLimiter.ConfigStructOutput;
    inboundRateLimiterConfig: RateLimiter.ConfigStructOutput;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ChainRemovedEvent {
  export type InputTuple = [remoteChainSelector: BigNumberish];
  export type OutputTuple = [remoteChainSelector: bigint];
  export interface OutputObject {
    remoteChainSelector: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ConfigChangedEvent {
  export type InputTuple = [config: RateLimiter.ConfigStruct];
  export type OutputTuple = [config: RateLimiter.ConfigStructOutput];
  export interface OutputObject {
    config: RateLimiter.ConfigStructOutput;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace LockedEvent {
  export type InputTuple = [sender: AddressLike, amount: BigNumberish];
  export type OutputTuple = [sender: string, amount: bigint];
  export interface OutputObject {
    sender: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace MintedEvent {
  export type InputTuple = [
    sender: AddressLike,
    recipient: AddressLike,
    amount: BigNumberish
  ];
  export type OutputTuple = [sender: string, recipient: string, amount: bigint];
  export interface OutputObject {
    sender: string;
    recipient: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OwnershipTransferRequestedEvent {
  export type InputTuple = [from: AddressLike, to: AddressLike];
  export type OutputTuple = [from: string, to: string];
  export interface OutputObject {
    from: string;
    to: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OwnershipTransferredEvent {
  export type InputTuple = [from: AddressLike, to: AddressLike];
  export type OutputTuple = [from: string, to: string];
  export interface OutputObject {
    from: string;
    to: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ReleasedEvent {
  export type InputTuple = [
    sender: AddressLike,
    recipient: AddressLike,
    amount: BigNumberish
  ];
  export type OutputTuple = [sender: string, recipient: string, amount: bigint];
  export interface OutputObject {
    sender: string;
    recipient: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RemotePoolSetEvent {
  export type InputTuple = [
    remoteChainSelector: BigNumberish,
    previousPoolAddress: BytesLike,
    remotePoolAddress: BytesLike
  ];
  export type OutputTuple = [
    remoteChainSelector: bigint,
    previousPoolAddress: string,
    remotePoolAddress: string
  ];
  export interface OutputObject {
    remoteChainSelector: bigint;
    previousPoolAddress: string;
    remotePoolAddress: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RouterUpdatedEvent {
  export type InputTuple = [oldRouter: AddressLike, newRouter: AddressLike];
  export type OutputTuple = [oldRouter: string, newRouter: string];
  export interface OutputObject {
    oldRouter: string;
    newRouter: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface TokenPool extends BaseContract {
  connect(runner?: ContractRunner | null): TokenPool;
  waitForDeployment(): Promise<this>;

  interface: TokenPoolInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  acceptOwnership: TypedContractMethod<[], [void], "nonpayable">;

  applyAllowListUpdates: TypedContractMethod<
    [removes: AddressLike[], adds: AddressLike[]],
    [void],
    "nonpayable"
  >;

  applyChainUpdates: TypedContractMethod<
    [chains: TokenPool.ChainUpdateStruct[]],
    [void],
    "nonpayable"
  >;

  getAllowList: TypedContractMethod<[], [string[]], "view">;

  getAllowListEnabled: TypedContractMethod<[], [boolean], "view">;

  getCurrentInboundRateLimiterState: TypedContractMethod<
    [remoteChainSelector: BigNumberish],
    [RateLimiter.TokenBucketStructOutput],
    "view"
  >;

  getCurrentOutboundRateLimiterState: TypedContractMethod<
    [remoteChainSelector: BigNumberish],
    [RateLimiter.TokenBucketStructOutput],
    "view"
  >;

  getRateLimitAdmin: TypedContractMethod<[], [string], "view">;

  getRemotePool: TypedContractMethod<
    [remoteChainSelector: BigNumberish],
    [string],
    "view"
  >;

  getRemoteToken: TypedContractMethod<
    [remoteChainSelector: BigNumberish],
    [string],
    "view"
  >;

  getRmnProxy: TypedContractMethod<[], [string], "view">;

  getRouter: TypedContractMethod<[], [string], "view">;

  getSupportedChains: TypedContractMethod<[], [bigint[]], "view">;

  getToken: TypedContractMethod<[], [string], "view">;

  isSupportedChain: TypedContractMethod<
    [remoteChainSelector: BigNumberish],
    [boolean],
    "view"
  >;

  isSupportedToken: TypedContractMethod<
    [token: AddressLike],
    [boolean],
    "view"
  >;

  lockOrBurn: TypedContractMethod<
    [lockOrBurnIn: Pool.LockOrBurnInV1Struct],
    [Pool.LockOrBurnOutV1StructOutput],
    "nonpayable"
  >;

  owner: TypedContractMethod<[], [string], "view">;

  releaseOrMint: TypedContractMethod<
    [releaseOrMintIn: Pool.ReleaseOrMintInV1Struct],
    [Pool.ReleaseOrMintOutV1StructOutput],
    "nonpayable"
  >;

  setChainRateLimiterConfig: TypedContractMethod<
    [
      remoteChainSelector: BigNumberish,
      outboundConfig: RateLimiter.ConfigStruct,
      inboundConfig: RateLimiter.ConfigStruct
    ],
    [void],
    "nonpayable"
  >;

  setRateLimitAdmin: TypedContractMethod<
    [rateLimitAdmin: AddressLike],
    [void],
    "nonpayable"
  >;

  setRemotePool: TypedContractMethod<
    [remoteChainSelector: BigNumberish, remotePoolAddress: BytesLike],
    [void],
    "nonpayable"
  >;

  setRouter: TypedContractMethod<
    [newRouter: AddressLike],
    [void],
    "nonpayable"
  >;

  supportsInterface: TypedContractMethod<
    [interfaceId: BytesLike],
    [boolean],
    "view"
  >;

  transferOwnership: TypedContractMethod<
    [to: AddressLike],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "acceptOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "applyAllowListUpdates"
  ): TypedContractMethod<
    [removes: AddressLike[], adds: AddressLike[]],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "applyChainUpdates"
  ): TypedContractMethod<
    [chains: TokenPool.ChainUpdateStruct[]],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "getAllowList"
  ): TypedContractMethod<[], [string[]], "view">;
  getFunction(
    nameOrSignature: "getAllowListEnabled"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "getCurrentInboundRateLimiterState"
  ): TypedContractMethod<
    [remoteChainSelector: BigNumberish],
    [RateLimiter.TokenBucketStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "getCurrentOutboundRateLimiterState"
  ): TypedContractMethod<
    [remoteChainSelector: BigNumberish],
    [RateLimiter.TokenBucketStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "getRateLimitAdmin"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "getRemotePool"
  ): TypedContractMethod<[remoteChainSelector: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "getRemoteToken"
  ): TypedContractMethod<[remoteChainSelector: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "getRmnProxy"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "getRouter"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "getSupportedChains"
  ): TypedContractMethod<[], [bigint[]], "view">;
  getFunction(
    nameOrSignature: "getToken"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "isSupportedChain"
  ): TypedContractMethod<
    [remoteChainSelector: BigNumberish],
    [boolean],
    "view"
  >;
  getFunction(
    nameOrSignature: "isSupportedToken"
  ): TypedContractMethod<[token: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "lockOrBurn"
  ): TypedContractMethod<
    [lockOrBurnIn: Pool.LockOrBurnInV1Struct],
    [Pool.LockOrBurnOutV1StructOutput],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "releaseOrMint"
  ): TypedContractMethod<
    [releaseOrMintIn: Pool.ReleaseOrMintInV1Struct],
    [Pool.ReleaseOrMintOutV1StructOutput],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setChainRateLimiterConfig"
  ): TypedContractMethod<
    [
      remoteChainSelector: BigNumberish,
      outboundConfig: RateLimiter.ConfigStruct,
      inboundConfig: RateLimiter.ConfigStruct
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setRateLimitAdmin"
  ): TypedContractMethod<[rateLimitAdmin: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setRemotePool"
  ): TypedContractMethod<
    [remoteChainSelector: BigNumberish, remotePoolAddress: BytesLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setRouter"
  ): TypedContractMethod<[newRouter: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "supportsInterface"
  ): TypedContractMethod<[interfaceId: BytesLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[to: AddressLike], [void], "nonpayable">;

  getEvent(
    key: "AllowListAdd"
  ): TypedContractEvent<
    AllowListAddEvent.InputTuple,
    AllowListAddEvent.OutputTuple,
    AllowListAddEvent.OutputObject
  >;
  getEvent(
    key: "AllowListRemove"
  ): TypedContractEvent<
    AllowListRemoveEvent.InputTuple,
    AllowListRemoveEvent.OutputTuple,
    AllowListRemoveEvent.OutputObject
  >;
  getEvent(
    key: "Burned"
  ): TypedContractEvent<
    BurnedEvent.InputTuple,
    BurnedEvent.OutputTuple,
    BurnedEvent.OutputObject
  >;
  getEvent(
    key: "ChainAdded"
  ): TypedContractEvent<
    ChainAddedEvent.InputTuple,
    ChainAddedEvent.OutputTuple,
    ChainAddedEvent.OutputObject
  >;
  getEvent(
    key: "ChainConfigured"
  ): TypedContractEvent<
    ChainConfiguredEvent.InputTuple,
    ChainConfiguredEvent.OutputTuple,
    ChainConfiguredEvent.OutputObject
  >;
  getEvent(
    key: "ChainRemoved"
  ): TypedContractEvent<
    ChainRemovedEvent.InputTuple,
    ChainRemovedEvent.OutputTuple,
    ChainRemovedEvent.OutputObject
  >;
  getEvent(
    key: "ConfigChanged"
  ): TypedContractEvent<
    ConfigChangedEvent.InputTuple,
    ConfigChangedEvent.OutputTuple,
    ConfigChangedEvent.OutputObject
  >;
  getEvent(
    key: "Locked"
  ): TypedContractEvent<
    LockedEvent.InputTuple,
    LockedEvent.OutputTuple,
    LockedEvent.OutputObject
  >;
  getEvent(
    key: "Minted"
  ): TypedContractEvent<
    MintedEvent.InputTuple,
    MintedEvent.OutputTuple,
    MintedEvent.OutputObject
  >;
  getEvent(
    key: "OwnershipTransferRequested"
  ): TypedContractEvent<
    OwnershipTransferRequestedEvent.InputTuple,
    OwnershipTransferRequestedEvent.OutputTuple,
    OwnershipTransferRequestedEvent.OutputObject
  >;
  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;
  getEvent(
    key: "Released"
  ): TypedContractEvent<
    ReleasedEvent.InputTuple,
    ReleasedEvent.OutputTuple,
    ReleasedEvent.OutputObject
  >;
  getEvent(
    key: "RemotePoolSet"
  ): TypedContractEvent<
    RemotePoolSetEvent.InputTuple,
    RemotePoolSetEvent.OutputTuple,
    RemotePoolSetEvent.OutputObject
  >;
  getEvent(
    key: "RouterUpdated"
  ): TypedContractEvent<
    RouterUpdatedEvent.InputTuple,
    RouterUpdatedEvent.OutputTuple,
    RouterUpdatedEvent.OutputObject
  >;

  filters: {
    "AllowListAdd(address)": TypedContractEvent<
      AllowListAddEvent.InputTuple,
      AllowListAddEvent.OutputTuple,
      AllowListAddEvent.OutputObject
    >;
    AllowListAdd: TypedContractEvent<
      AllowListAddEvent.InputTuple,
      AllowListAddEvent.OutputTuple,
      AllowListAddEvent.OutputObject
    >;

    "AllowListRemove(address)": TypedContractEvent<
      AllowListRemoveEvent.InputTuple,
      AllowListRemoveEvent.OutputTuple,
      AllowListRemoveEvent.OutputObject
    >;
    AllowListRemove: TypedContractEvent<
      AllowListRemoveEvent.InputTuple,
      AllowListRemoveEvent.OutputTuple,
      AllowListRemoveEvent.OutputObject
    >;

    "Burned(address,uint256)": TypedContractEvent<
      BurnedEvent.InputTuple,
      BurnedEvent.OutputTuple,
      BurnedEvent.OutputObject
    >;
    Burned: TypedContractEvent<
      BurnedEvent.InputTuple,
      BurnedEvent.OutputTuple,
      BurnedEvent.OutputObject
    >;

    "ChainAdded(uint64,bytes,tuple,tuple)": TypedContractEvent<
      ChainAddedEvent.InputTuple,
      ChainAddedEvent.OutputTuple,
      ChainAddedEvent.OutputObject
    >;
    ChainAdded: TypedContractEvent<
      ChainAddedEvent.InputTuple,
      ChainAddedEvent.OutputTuple,
      ChainAddedEvent.OutputObject
    >;

    "ChainConfigured(uint64,tuple,tuple)": TypedContractEvent<
      ChainConfiguredEvent.InputTuple,
      ChainConfiguredEvent.OutputTuple,
      ChainConfiguredEvent.OutputObject
    >;
    ChainConfigured: TypedContractEvent<
      ChainConfiguredEvent.InputTuple,
      ChainConfiguredEvent.OutputTuple,
      ChainConfiguredEvent.OutputObject
    >;

    "ChainRemoved(uint64)": TypedContractEvent<
      ChainRemovedEvent.InputTuple,
      ChainRemovedEvent.OutputTuple,
      ChainRemovedEvent.OutputObject
    >;
    ChainRemoved: TypedContractEvent<
      ChainRemovedEvent.InputTuple,
      ChainRemovedEvent.OutputTuple,
      ChainRemovedEvent.OutputObject
    >;

    "ConfigChanged(tuple)": TypedContractEvent<
      ConfigChangedEvent.InputTuple,
      ConfigChangedEvent.OutputTuple,
      ConfigChangedEvent.OutputObject
    >;
    ConfigChanged: TypedContractEvent<
      ConfigChangedEvent.InputTuple,
      ConfigChangedEvent.OutputTuple,
      ConfigChangedEvent.OutputObject
    >;

    "Locked(address,uint256)": TypedContractEvent<
      LockedEvent.InputTuple,
      LockedEvent.OutputTuple,
      LockedEvent.OutputObject
    >;
    Locked: TypedContractEvent<
      LockedEvent.InputTuple,
      LockedEvent.OutputTuple,
      LockedEvent.OutputObject
    >;

    "Minted(address,address,uint256)": TypedContractEvent<
      MintedEvent.InputTuple,
      MintedEvent.OutputTuple,
      MintedEvent.OutputObject
    >;
    Minted: TypedContractEvent<
      MintedEvent.InputTuple,
      MintedEvent.OutputTuple,
      MintedEvent.OutputObject
    >;

    "OwnershipTransferRequested(address,address)": TypedContractEvent<
      OwnershipTransferRequestedEvent.InputTuple,
      OwnershipTransferRequestedEvent.OutputTuple,
      OwnershipTransferRequestedEvent.OutputObject
    >;
    OwnershipTransferRequested: TypedContractEvent<
      OwnershipTransferRequestedEvent.InputTuple,
      OwnershipTransferRequestedEvent.OutputTuple,
      OwnershipTransferRequestedEvent.OutputObject
    >;

    "OwnershipTransferred(address,address)": TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;
    OwnershipTransferred: TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;

    "Released(address,address,uint256)": TypedContractEvent<
      ReleasedEvent.InputTuple,
      ReleasedEvent.OutputTuple,
      ReleasedEvent.OutputObject
    >;
    Released: TypedContractEvent<
      ReleasedEvent.InputTuple,
      ReleasedEvent.OutputTuple,
      ReleasedEvent.OutputObject
    >;

    "RemotePoolSet(uint64,bytes,bytes)": TypedContractEvent<
      RemotePoolSetEvent.InputTuple,
      RemotePoolSetEvent.OutputTuple,
      RemotePoolSetEvent.OutputObject
    >;
    RemotePoolSet: TypedContractEvent<
      RemotePoolSetEvent.InputTuple,
      RemotePoolSetEvent.OutputTuple,
      RemotePoolSetEvent.OutputObject
    >;

    "RouterUpdated(address,address)": TypedContractEvent<
      RouterUpdatedEvent.InputTuple,
      RouterUpdatedEvent.OutputTuple,
      RouterUpdatedEvent.OutputObject
    >;
    RouterUpdated: TypedContractEvent<
      RouterUpdatedEvent.InputTuple,
      RouterUpdatedEvent.OutputTuple,
      RouterUpdatedEvent.OutputObject
    >;
  };
}
