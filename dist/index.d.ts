// Generated by dts-bundle v0.7.3
// Dependencies for this module:
//   ../../../clusterws-uws
//   ../../../http
//   ../../../https
//   ../../../tls

import { WebSocket } from 'clusterws-uws';
import * as HTTP from 'http';
import * as HTTPS from 'https';
import { SecureContextOptions } from 'tls';

export default class ClusterWS {
    constructor(configurations: Configurations);
}

export class BrokerClient {
    constructor(url: string);
    publish(message: string | Buffer): boolean;
}

export class ClientManager {
    constructor(urls: string[]);
}



export class Room {
    constructor(roomName: string);
    publish(userId: string, message: string): void;
    subscribe(user: any): void;
    unsubscribe(): void;
    broadcast(): void;
}

export class Channel {
    channelName: string;
    subs: {
        [key: string]: Listener;
    };
    subsIds: string[];
    constructor(channelName: string, userId: string, listener: Listener);
    publish(id: string, message: Message): void;
    subscribe(userId: string, listener: Listener): void;
    unsubscribe(userId: string): void;
    flush(): void;
    unfilteredFlush(message: Message): void;
    action(event: string, channel: string, data?: Message): void;
}

export class Room {
    roomName: string;
    usersIds: string[];
    usersListeners: {
        [key: string]: Listener;
    };
    constructor(roomName: string, userId: string, listener: Listener);
    publish(id: string, message: Message): void;
    subscribe(userId: string, listener: Listener): void;
    unsubscribe(userId: string): void;
    flush(): void;
    unfilteredFlush(message: Message): void;
    action(event: string, channel: string): void;
}

export class Socket {
    id: string;
    constructor(worker: Worker, socket: WebSocket);
    on(event: string, listener: Listener): void;
    send(event: string, message: Message, eventType?: string): void;
    disconnect(code?: number, reason?: string): void;
    terminate(): void;
}

export class WSServer extends EventEmitter {
    channels: {
        [key: string]: Channel;
    };
    middleware: {
        [key: string]: Listener;
    };
    constructor(options: Options, internalSecurityKey: string);
    setMiddleware(name: string, listener: Listener): void;
    publish(channelName: string, message: Message, id?: string): void;
    subscribe(channelName: string, id: string, listener: Listener): void;
    unsubscribe(channelName: string, id: string): void;
}

export class Worker {
    options: Options;
    wss: WSServer;
    server: HTTP.Server | HTTPS.Server;
    constructor(options: Options, internalSecurityKey: string);
}

export function masterProcess(options: Options): void;
export function workerProcess(options: Options): void;

export class EventEmitter {
    on(event: 'connection', listener: (socket: Socket) => void): void;
    on(event: string, listener: Listener): void;
    emit(event: string, message: Message): void;
    emit(event: string, ...args: any[]): void;
    exist(event: string): boolean;
    removeEvent(event: string): void;
    removeEvents(): void;
}

export function random(min: number, max: number): number;
export function logError<T>(data: T): any;
export function logReady<T>(data: T): any;
export function logWarning<T>(data: T): any;
export function isFunction<T>(fn: T): boolean;
export function generateKey(length: number): string;

export type Message = any;
export type Listener = (...args: any[]) => void;
export type ListenerMany = (eventName: string, ...args: any[]) => void;
export type WorkerFunction = () => void;
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
    port?: number;
    host?: string;
    workers?: number;
    brokers?: number;
    useBinary?: boolean;
    brokersPorts?: number[];
    tlsOptions?: SecureContextOptions;
    pingInterval?: number;
    restartWorkerOnFail?: boolean;
    horizontalScaleOptions?: HorizontalScaleOptions;
    encodeDecodeEngine?: EncodeDecodeEngine;
};
export type Options = {
    worker: WorkerFunction;
    port: number;
    host: string | null;
    workers: number;
    brokers: number;
    useBinary: boolean;
    brokersPorts: number[];
    tlsOptions: SecureContextOptions | null;
    pingInterval: number;
    restartWorkerOnFail: boolean;
    horizontalScaleOptions: HorizontalScaleOptions | null;
    encodeDecodeEngine: EncodeDecodeEngine | null;
};
export type EncodeDecodeEngine = {
    encode: (message: Message) => Message;
    decode: (message: Message) => Message;
};

