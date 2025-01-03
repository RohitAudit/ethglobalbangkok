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

export declare namespace Router {
  export type OnRampStruct = {
    destChainSelector: BigNumberish;
    onRamp: AddressLike;
  };

  export type OnRampStructOutput = [
    destChainSelector: bigint,
    onRamp: string
  ] & { destChainSelector: bigint; onRamp: string };

  export type OffRampStruct = {
    sourceChainSelector: BigNumberish;
    offRamp: AddressLike;
  };

  export type OffRampStructOutput = [
    sourceChainSelector: bigint,
    offRamp: string
  ] & { sourceChainSelector: bigint; offRamp: string };
}

export declare namespace Client {
  export type EVMTokenAmountStruct = {
    token: AddressLike;
    amount: BigNumberish;
  };

  export type EVMTokenAmountStructOutput = [token: string, amount: bigint] & {
    token: string;
    amount: bigint;
  };

  export type EVM2AnyMessageStruct = {
    receiver: BytesLike;
    data: BytesLike;
    tokenAmounts: Client.EVMTokenAmountStruct[];
    feeToken: AddressLike;
    extraArgs: BytesLike;
  };

  export type EVM2AnyMessageStructOutput = [
    receiver: string,
    data: string,
    tokenAmounts: Client.EVMTokenAmountStructOutput[],
    feeToken: string,
    extraArgs: string
  ] & {
    receiver: string;
    data: string;
    tokenAmounts: Client.EVMTokenAmountStructOutput[];
    feeToken: string;
    extraArgs: string;
  };

  export type Any2EVMMessageStruct = {
    messageId: BytesLike;
    sourceChainSelector: BigNumberish;
    sender: BytesLike;
    data: BytesLike;
    destTokenAmounts: Client.EVMTokenAmountStruct[];
  };

  export type Any2EVMMessageStructOutput = [
    messageId: string,
    sourceChainSelector: bigint,
    sender: string,
    data: string,
    destTokenAmounts: Client.EVMTokenAmountStructOutput[]
  ] & {
    messageId: string;
    sourceChainSelector: bigint;
    sender: string;
    data: string;
    destTokenAmounts: Client.EVMTokenAmountStructOutput[];
  };
}

export interface RouterInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "MAX_RET_BYTES"
      | "acceptOwnership"
      | "applyRampUpdates"
      | "ccipSend"
      | "getArmProxy"
      | "getFee"
      | "getOffRamps"
      | "getOnRamp"
      | "getSupportedTokens"
      | "getWrappedNative"
      | "isChainSupported"
      | "isOffRamp"
      | "owner"
      | "recoverTokens"
      | "routeMessage"
      | "setWrappedNative"
      | "transferOwnership"
      | "typeAndVersion"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "MessageExecuted"
      | "OffRampAdded"
      | "OffRampRemoved"
      | "OnRampSet"
      | "OwnershipTransferRequested"
      | "OwnershipTransferred"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "MAX_RET_BYTES",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "acceptOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "applyRampUpdates",
    values: [
      Router.OnRampStruct[],
      Router.OffRampStruct[],
      Router.OffRampStruct[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "ccipSend",
    values: [BigNumberish, Client.EVM2AnyMessageStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "getArmProxy",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getFee",
    values: [BigNumberish, Client.EVM2AnyMessageStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "getOffRamps",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getOnRamp",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getSupportedTokens",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getWrappedNative",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isChainSupported",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isOffRamp",
    values: [BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "recoverTokens",
    values: [AddressLike, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "routeMessage",
    values: [
      Client.Any2EVMMessageStruct,
      BigNumberish,
      BigNumberish,
      AddressLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setWrappedNative",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "typeAndVersion",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "MAX_RET_BYTES",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "acceptOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "applyRampUpdates",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "ccipSend", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getArmProxy",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getFee", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getOffRamps",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getOnRamp", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getSupportedTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getWrappedNative",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isChainSupported",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isOffRamp", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "recoverTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "routeMessage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setWrappedNative",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "typeAndVersion",
    data: BytesLike
  ): Result;
}

export namespace MessageExecutedEvent {
  export type InputTuple = [
    messageId: BytesLike,
    sourceChainSelector: BigNumberish,
    offRamp: AddressLike,
    calldataHash: BytesLike
  ];
  export type OutputTuple = [
    messageId: string,
    sourceChainSelector: bigint,
    offRamp: string,
    calldataHash: string
  ];
  export interface OutputObject {
    messageId: string;
    sourceChainSelector: bigint;
    offRamp: string;
    calldataHash: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OffRampAddedEvent {
  export type InputTuple = [
    sourceChainSelector: BigNumberish,
    offRamp: AddressLike
  ];
  export type OutputTuple = [sourceChainSelector: bigint, offRamp: string];
  export interface OutputObject {
    sourceChainSelector: bigint;
    offRamp: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OffRampRemovedEvent {
  export type InputTuple = [
    sourceChainSelector: BigNumberish,
    offRamp: AddressLike
  ];
  export type OutputTuple = [sourceChainSelector: bigint, offRamp: string];
  export interface OutputObject {
    sourceChainSelector: bigint;
    offRamp: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OnRampSetEvent {
  export type InputTuple = [
    destChainSelector: BigNumberish,
    onRamp: AddressLike
  ];
  export type OutputTuple = [destChainSelector: bigint, onRamp: string];
  export interface OutputObject {
    destChainSelector: bigint;
    onRamp: string;
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

export interface Router extends BaseContract {
  connect(runner?: ContractRunner | null): Router;
  waitForDeployment(): Promise<this>;

  interface: RouterInterface;

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

  MAX_RET_BYTES: TypedContractMethod<[], [bigint], "view">;

  acceptOwnership: TypedContractMethod<[], [void], "nonpayable">;

  applyRampUpdates: TypedContractMethod<
    [
      onRampUpdates: Router.OnRampStruct[],
      offRampRemoves: Router.OffRampStruct[],
      offRampAdds: Router.OffRampStruct[]
    ],
    [void],
    "nonpayable"
  >;

  ccipSend: TypedContractMethod<
    [
      destinationChainSelector: BigNumberish,
      message: Client.EVM2AnyMessageStruct
    ],
    [string],
    "payable"
  >;

  getArmProxy: TypedContractMethod<[], [string], "view">;

  getFee: TypedContractMethod<
    [
      destinationChainSelector: BigNumberish,
      message: Client.EVM2AnyMessageStruct
    ],
    [bigint],
    "view"
  >;

  getOffRamps: TypedContractMethod<[], [Router.OffRampStructOutput[]], "view">;

  getOnRamp: TypedContractMethod<
    [destChainSelector: BigNumberish],
    [string],
    "view"
  >;

  getSupportedTokens: TypedContractMethod<
    [chainSelector: BigNumberish],
    [string[]],
    "view"
  >;

  getWrappedNative: TypedContractMethod<[], [string], "view">;

  isChainSupported: TypedContractMethod<
    [chainSelector: BigNumberish],
    [boolean],
    "view"
  >;

  isOffRamp: TypedContractMethod<
    [sourceChainSelector: BigNumberish, offRamp: AddressLike],
    [boolean],
    "view"
  >;

  owner: TypedContractMethod<[], [string], "view">;

  recoverTokens: TypedContractMethod<
    [tokenAddress: AddressLike, to: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  routeMessage: TypedContractMethod<
    [
      message: Client.Any2EVMMessageStruct,
      gasForCallExactCheck: BigNumberish,
      gasLimit: BigNumberish,
      receiver: AddressLike
    ],
    [
      [boolean, string, bigint] & {
        success: boolean;
        retData: string;
        gasUsed: bigint;
      }
    ],
    "nonpayable"
  >;

  setWrappedNative: TypedContractMethod<
    [wrappedNative: AddressLike],
    [void],
    "nonpayable"
  >;

  transferOwnership: TypedContractMethod<
    [to: AddressLike],
    [void],
    "nonpayable"
  >;

  typeAndVersion: TypedContractMethod<[], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "MAX_RET_BYTES"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "acceptOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "applyRampUpdates"
  ): TypedContractMethod<
    [
      onRampUpdates: Router.OnRampStruct[],
      offRampRemoves: Router.OffRampStruct[],
      offRampAdds: Router.OffRampStruct[]
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "ccipSend"
  ): TypedContractMethod<
    [
      destinationChainSelector: BigNumberish,
      message: Client.EVM2AnyMessageStruct
    ],
    [string],
    "payable"
  >;
  getFunction(
    nameOrSignature: "getArmProxy"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "getFee"
  ): TypedContractMethod<
    [
      destinationChainSelector: BigNumberish,
      message: Client.EVM2AnyMessageStruct
    ],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "getOffRamps"
  ): TypedContractMethod<[], [Router.OffRampStructOutput[]], "view">;
  getFunction(
    nameOrSignature: "getOnRamp"
  ): TypedContractMethod<[destChainSelector: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "getSupportedTokens"
  ): TypedContractMethod<[chainSelector: BigNumberish], [string[]], "view">;
  getFunction(
    nameOrSignature: "getWrappedNative"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "isChainSupported"
  ): TypedContractMethod<[chainSelector: BigNumberish], [boolean], "view">;
  getFunction(
    nameOrSignature: "isOffRamp"
  ): TypedContractMethod<
    [sourceChainSelector: BigNumberish, offRamp: AddressLike],
    [boolean],
    "view"
  >;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "recoverTokens"
  ): TypedContractMethod<
    [tokenAddress: AddressLike, to: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "routeMessage"
  ): TypedContractMethod<
    [
      message: Client.Any2EVMMessageStruct,
      gasForCallExactCheck: BigNumberish,
      gasLimit: BigNumberish,
      receiver: AddressLike
    ],
    [
      [boolean, string, bigint] & {
        success: boolean;
        retData: string;
        gasUsed: bigint;
      }
    ],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setWrappedNative"
  ): TypedContractMethod<[wrappedNative: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[to: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "typeAndVersion"
  ): TypedContractMethod<[], [string], "view">;

  getEvent(
    key: "MessageExecuted"
  ): TypedContractEvent<
    MessageExecutedEvent.InputTuple,
    MessageExecutedEvent.OutputTuple,
    MessageExecutedEvent.OutputObject
  >;
  getEvent(
    key: "OffRampAdded"
  ): TypedContractEvent<
    OffRampAddedEvent.InputTuple,
    OffRampAddedEvent.OutputTuple,
    OffRampAddedEvent.OutputObject
  >;
  getEvent(
    key: "OffRampRemoved"
  ): TypedContractEvent<
    OffRampRemovedEvent.InputTuple,
    OffRampRemovedEvent.OutputTuple,
    OffRampRemovedEvent.OutputObject
  >;
  getEvent(
    key: "OnRampSet"
  ): TypedContractEvent<
    OnRampSetEvent.InputTuple,
    OnRampSetEvent.OutputTuple,
    OnRampSetEvent.OutputObject
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

  filters: {
    "MessageExecuted(bytes32,uint64,address,bytes32)": TypedContractEvent<
      MessageExecutedEvent.InputTuple,
      MessageExecutedEvent.OutputTuple,
      MessageExecutedEvent.OutputObject
    >;
    MessageExecuted: TypedContractEvent<
      MessageExecutedEvent.InputTuple,
      MessageExecutedEvent.OutputTuple,
      MessageExecutedEvent.OutputObject
    >;

    "OffRampAdded(uint64,address)": TypedContractEvent<
      OffRampAddedEvent.InputTuple,
      OffRampAddedEvent.OutputTuple,
      OffRampAddedEvent.OutputObject
    >;
    OffRampAdded: TypedContractEvent<
      OffRampAddedEvent.InputTuple,
      OffRampAddedEvent.OutputTuple,
      OffRampAddedEvent.OutputObject
    >;

    "OffRampRemoved(uint64,address)": TypedContractEvent<
      OffRampRemovedEvent.InputTuple,
      OffRampRemovedEvent.OutputTuple,
      OffRampRemovedEvent.OutputObject
    >;
    OffRampRemoved: TypedContractEvent<
      OffRampRemovedEvent.InputTuple,
      OffRampRemovedEvent.OutputTuple,
      OffRampRemovedEvent.OutputObject
    >;

    "OnRampSet(uint64,address)": TypedContractEvent<
      OnRampSetEvent.InputTuple,
      OnRampSetEvent.OutputTuple,
      OnRampSetEvent.OutputObject
    >;
    OnRampSet: TypedContractEvent<
      OnRampSetEvent.InputTuple,
      OnRampSetEvent.OutputTuple,
      OnRampSetEvent.OutputObject
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
  };
}
