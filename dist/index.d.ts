// Generated by dts-bundle v0.7.3
// Dependencies for this module:
//   ../../../@clusterws/cws
//   ../../../http
//   ../../../https
//   ../../../tls

import { WebSocket } from '@clusterws/cws';
import * as HTTP from 'http';
import * as HTTPS from 'https';
import { SecureContextOptions } from 'tls';

export default class ClusterWS {
    constructor(configurations: Configurations);
}

export class BrokerClient {
    constructor(url: string);
    on(event: string, listener: Listener): void;
    send(message: string | Buffer): boolean;
}

export class Scaler {
    constructor(horizontalScaleOptions: HorizontalScaleOptions);
}

export class Broker {
    constructor(options: Options, port: number, securityKey: string, serverId: string);
}

export class PubSubEngine {
    constructor(logger: Logger, interval: number);
    addListener(event: string, listener: Listener): void;
    register(userId: string, listener: Listener): void;
    unregister(userId: string, channels: string[]): void;
    subscribe(userId: string, channel: string): any;
    unsubscribe(userId: string, channel: string): void;
    publish(channel: string, message: Message, userId?: string): any;
}

export class PubSubEngine {
    constructor(loopInterval: number);
    on(name: string, listener: Listener): void;
    getAllChannels(): string[];
    register(userId: string, listener: Listener): void;
    deRegister(userId: string, channels: string[]): void;
    subscribe(channelName: string, userId: string): any;
    unsubscribe(channelName: string, userId: string): void;
    publish(channel: string, message: Message, id?: string): void;
}

export class Socket {
    constructor(worker: Worker, socket: WebSocket);
    on(event: string, listener: Listener): void;
    send(event: string, message: Message, eventType?: string): void;
    disconnect(code?: number, reason?: string): void;
    terminate(): void;
}

export class WSServer extends EventEmitter {
    constructor(options: Options, securityKey: string);
    publish(channelName: string, message: Message, id?: string): void;
    subscribe(id: string, channelName: string): void;
    unsubscribe(id: string, channelName: string): void;
}

export class Worker {
    options: Options;
    wss: WSServer;
    server: HTTP.Server | HTTPS.Server;
    constructor(options: Options, securityKey: string);
}

export function runProcesses(options: Options): any;

export class EventEmitter {
    constructor(logger: Logger);
    on(event: 'connection', listener: (socket: Socket) => void): void;
    on(event: string, listener: Listener): void;
    emit(event: string, message: Message): void;
    emit(event: string, ...args: any[]): void;
    exist(event: string): boolean;
    off(event: string): void;
    removeEvents(): void;
}

export function random(min: number, max: number): number;
export function logError<T>(data: T): any;
export function logReady<T>(data: T): any;
export function logWarning<T>(data: T): any;
export function isFunction<T>(fn: T): boolean;
export function generateKey(length: number): string;

export function isFunction<T>(fn: T): boolean;
export function generateUid(length: number): string;

export enum Level {
    ALL = 0,
    DEBUG = 1,
    INFO = 2,
    WARN = 3,
    ERROR = 4
}
export class Logger {
    constructor(level: Level);
    debug(prefix: string, data: any): void;
    info(data: any): void;
    error(data: any): void;
    warning(): void;
}

export type Message = any;
export type Listener = (...args: any[]) => void;
export type WorkerFunction = () => void;
export enum Mode {
    Scale = 0,
    CurrentProcess = 1
}
export type HorizontalScaleOptions = {
    key?: string;
    serverId?: string;
    brokersUrls?: string[];
    masterOptions?: {
        port: number;
        tlsOptions?: SecureContextOptions;
    };
};
export type Configurations = {
    worker: WorkerFunction;
    mode?: Mode;
    port?: number;
    host?: string;
    logger?: Logger;
    wsPath?: string;
    workers?: number;
    brokers?: number;
    autoPing?: boolean;
    tlsOptions?: SecureContextOptions;
    pingInterval?: number;
    brokersPorts?: number[];
    restartWorkerOnFail?: boolean;
    horizontalScaleOptions?: HorizontalScaleOptions;
};
export type Options = {
    worker: WorkerFunction;
    mode: Mode;
    port: number;
    host: string | null;
    logger: Logger;
    wsPath: string;
    workers: number;
    brokers: number;
    autoPing: boolean;
    brokersPorts: number[];
    tlsOptions: SecureContextOptions | null;
    pingInterval: number;
    restartWorkerOnFail: boolean;
    horizontalScaleOptions: HorizontalScaleOptions | null;
};
export type Logger = {
    [keys: string]: any;
    info: (data: any) => any;
    error: (data: any) => any;
    debug: (prefix: string, data: any) => any;
    warning: (data: any) => any;
};

