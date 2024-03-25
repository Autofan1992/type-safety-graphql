import { createPubSub } from 'graphql-yoga';
import { Message, User } from '@prisma/client'

export enum MutationType {
    CREATED = 'CREATED',
    UPDATED = 'UPDATED',
    DELETED = 'DELETED',
}

export interface PubSubEvent {

}

export interface PubSubUserEvent extends PubSubEvent {
    user: User;
}

export interface PubSubMessageEvent extends PubSubEvent {
    message: Message;
}

export interface PuSubEvents
    extends Record<string, [number | string, PubSubEvent] | [PubSubEvent]> {
    user: [number | string, PubSubUserEvent];
    message: [number | string, PubSubMessageEvent];
    users: [PubSubUserEvent];
    messages: [PubSubMessageEvent];
}

export const pubsub = createPubSub<PuSubEvents>({});