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

export declare namespace TokenAdminRegistry {
  export type TokenConfigStruct = {
    administrator: AddressLike;
    pendingAdministrator: AddressLike;
    tokenPool: AddressLike;
  };

  export type TokenConfigStructOutput = [
    administrator: string,
    pendingAdministrator: string,
    tokenPool: string
  ] & {
    administrator: string;
    pendingAdministrator: string;
    tokenPool: string;
  };
}

export interface TokenAdminRegistryInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "acceptAdminRole"
      | "acceptOwnership"
      | "addRegistryModule"
      | "getAllConfiguredTokens"
      | "getPool"
      | "getPools"
      | "getTokenConfig"
      | "isAdministrator"
      | "isRegistryModule"
      | "owner"
      | "proposeAdministrator"
      | "removeRegistryModule"
      | "setPool"
      | "transferAdminRole"
      | "transferOwnership"
      | "typeAndVersion"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "AdministratorTransferRequested"
      | "AdministratorTransferred"
      | "OwnershipTransferRequested"
      | "OwnershipTransferred"
      | "PoolSet"
      | "RegistryModuleAdded"
      | "RegistryModuleRemoved"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "acceptAdminRole",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "acceptOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "addRegistryModule",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getAllConfiguredTokens",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getPool",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getPools",
    values: [AddressLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getTokenConfig",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isAdministrator",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isRegistryModule",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "proposeAdministrator",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "removeRegistryModule",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setPool",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "transferAdminRole",
    values: [AddressLike, AddressLike]
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
    functionFragment: "acceptAdminRole",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "acceptOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addRegistryModule",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAllConfiguredTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getPool", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getPools", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getTokenConfig",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isAdministrator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isRegistryModule",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "proposeAdministrator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeRegistryModule",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setPool", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferAdminRole",
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

export namespace AdministratorTransferRequestedEvent {
  export type InputTuple = [
    token: AddressLike,
    currentAdmin: AddressLike,
    newAdmin: AddressLike
  ];
  export type OutputTuple = [
    token: string,
    currentAdmin: string,
    newAdmin: string
  ];
  export interface OutputObject {
    token: string;
    currentAdmin: string;
    newAdmin: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace AdministratorTransferredEvent {
  export type InputTuple = [token: AddressLike, newAdmin: AddressLike];
  export type OutputTuple = [token: string, newAdmin: string];
  export interface OutputObject {
    token: string;
    newAdmin: string;
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

export namespace PoolSetEvent {
  export type InputTuple = [
    token: AddressLike,
    previousPool: AddressLike,
    newPool: AddressLike
  ];
  export type OutputTuple = [
    token: string,
    previousPool: string,
    newPool: string
  ];
  export interface OutputObject {
    token: string;
    previousPool: string;
    newPool: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RegistryModuleAddedEvent {
  export type InputTuple = [module: AddressLike];
  export type OutputTuple = [module: string];
  export interface OutputObject {
    module: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RegistryModuleRemovedEvent {
  export type InputTuple = [module: AddressLike];
  export type OutputTuple = [module: string];
  export interface OutputObject {
    module: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface TokenAdminRegistry extends BaseContract {
  connect(runner?: ContractRunner | null): TokenAdminRegistry;
  waitForDeployment(): Promise<this>;

  interface: TokenAdminRegistryInterface;

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

  acceptAdminRole: TypedContractMethod<
    [localToken: AddressLike],
    [void],
    "nonpayable"
  >;

  acceptOwnership: TypedContractMethod<[], [void], "nonpayable">;

  addRegistryModule: TypedContractMethod<
    [module: AddressLike],
    [void],
    "nonpayable"
  >;

  getAllConfiguredTokens: TypedContractMethod<
    [startIndex: BigNumberish, maxCount: BigNumberish],
    [string[]],
    "view"
  >;

  getPool: TypedContractMethod<[token: AddressLike], [string], "view">;

  getPools: TypedContractMethod<[tokens: AddressLike[]], [string[]], "view">;

  getTokenConfig: TypedContractMethod<
    [token: AddressLike],
    [TokenAdminRegistry.TokenConfigStructOutput],
    "view"
  >;

  isAdministrator: TypedContractMethod<
    [localToken: AddressLike, administrator: AddressLike],
    [boolean],
    "view"
  >;

  isRegistryModule: TypedContractMethod<
    [module: AddressLike],
    [boolean],
    "view"
  >;

  owner: TypedContractMethod<[], [string], "view">;

  proposeAdministrator: TypedContractMethod<
    [localToken: AddressLike, administrator: AddressLike],
    [void],
    "nonpayable"
  >;

  removeRegistryModule: TypedContractMethod<
    [module: AddressLike],
    [void],
    "nonpayable"
  >;

  setPool: TypedContractMethod<
    [localToken: AddressLike, pool: AddressLike],
    [void],
    "nonpayable"
  >;

  transferAdminRole: TypedContractMethod<
    [localToken: AddressLike, newAdmin: AddressLike],
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
    nameOrSignature: "acceptAdminRole"
  ): TypedContractMethod<[localToken: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "acceptOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "addRegistryModule"
  ): TypedContractMethod<[module: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "getAllConfiguredTokens"
  ): TypedContractMethod<
    [startIndex: BigNumberish, maxCount: BigNumberish],
    [string[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "getPool"
  ): TypedContractMethod<[token: AddressLike], [string], "view">;
  getFunction(
    nameOrSignature: "getPools"
  ): TypedContractMethod<[tokens: AddressLike[]], [string[]], "view">;
  getFunction(
    nameOrSignature: "getTokenConfig"
  ): TypedContractMethod<
    [token: AddressLike],
    [TokenAdminRegistry.TokenConfigStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "isAdministrator"
  ): TypedContractMethod<
    [localToken: AddressLike, administrator: AddressLike],
    [boolean],
    "view"
  >;
  getFunction(
    nameOrSignature: "isRegistryModule"
  ): TypedContractMethod<[module: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "proposeAdministrator"
  ): TypedContractMethod<
    [localToken: AddressLike, administrator: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "removeRegistryModule"
  ): TypedContractMethod<[module: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setPool"
  ): TypedContractMethod<
    [localToken: AddressLike, pool: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "transferAdminRole"
  ): TypedContractMethod<
    [localToken: AddressLike, newAdmin: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[to: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "typeAndVersion"
  ): TypedContractMethod<[], [string], "view">;

  getEvent(
    key: "AdministratorTransferRequested"
  ): TypedContractEvent<
    AdministratorTransferRequestedEvent.InputTuple,
    AdministratorTransferRequestedEvent.OutputTuple,
    AdministratorTransferRequestedEvent.OutputObject
  >;
  getEvent(
    key: "AdministratorTransferred"
  ): TypedContractEvent<
    AdministratorTransferredEvent.InputTuple,
    AdministratorTransferredEvent.OutputTuple,
    AdministratorTransferredEvent.OutputObject
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
    key: "PoolSet"
  ): TypedContractEvent<
    PoolSetEvent.InputTuple,
    PoolSetEvent.OutputTuple,
    PoolSetEvent.OutputObject
  >;
  getEvent(
    key: "RegistryModuleAdded"
  ): TypedContractEvent<
    RegistryModuleAddedEvent.InputTuple,
    RegistryModuleAddedEvent.OutputTuple,
    RegistryModuleAddedEvent.OutputObject
  >;
  getEvent(
    key: "RegistryModuleRemoved"
  ): TypedContractEvent<
    RegistryModuleRemovedEvent.InputTuple,
    RegistryModuleRemovedEvent.OutputTuple,
    RegistryModuleRemovedEvent.OutputObject
  >;

  filters: {
    "AdministratorTransferRequested(address,address,address)": TypedContractEvent<
      AdministratorTransferRequestedEvent.InputTuple,
      AdministratorTransferRequestedEvent.OutputTuple,
      AdministratorTransferRequestedEvent.OutputObject
    >;
    AdministratorTransferRequested: TypedContractEvent<
      AdministratorTransferRequestedEvent.InputTuple,
      AdministratorTransferRequestedEvent.OutputTuple,
      AdministratorTransferRequestedEvent.OutputObject
    >;

    "AdministratorTransferred(address,address)": TypedContractEvent<
      AdministratorTransferredEvent.InputTuple,
      AdministratorTransferredEvent.OutputTuple,
      AdministratorTransferredEvent.OutputObject
    >;
    AdministratorTransferred: TypedContractEvent<
      AdministratorTransferredEvent.InputTuple,
      AdministratorTransferredEvent.OutputTuple,
      AdministratorTransferredEvent.OutputObject
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

    "PoolSet(address,address,address)": TypedContractEvent<
      PoolSetEvent.InputTuple,
      PoolSetEvent.OutputTuple,
      PoolSetEvent.OutputObject
    >;
    PoolSet: TypedContractEvent<
      PoolSetEvent.InputTuple,
      PoolSetEvent.OutputTuple,
      PoolSetEvent.OutputObject
    >;

    "RegistryModuleAdded(address)": TypedContractEvent<
      RegistryModuleAddedEvent.InputTuple,
      RegistryModuleAddedEvent.OutputTuple,
      RegistryModuleAddedEvent.OutputObject
    >;
    RegistryModuleAdded: TypedContractEvent<
      RegistryModuleAddedEvent.InputTuple,
      RegistryModuleAddedEvent.OutputTuple,
      RegistryModuleAddedEvent.OutputObject
    >;

    "RegistryModuleRemoved(address)": TypedContractEvent<
      RegistryModuleRemovedEvent.InputTuple,
      RegistryModuleRemovedEvent.OutputTuple,
      RegistryModuleRemovedEvent.OutputObject
    >;
    RegistryModuleRemoved: TypedContractEvent<
      RegistryModuleRemovedEvent.InputTuple,
      RegistryModuleRemovedEvent.OutputTuple,
      RegistryModuleRemovedEvent.OutputObject
    >;
  };
}
