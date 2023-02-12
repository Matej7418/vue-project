export interface Room {
    roomId: number,
    roomName: string,
    users: number[],
    avatar?: string,
    tasks: Task[],
    messages: Message[]
}

export class User {
    id: number;
    username: string;
    avatar: string;
    constructor(id: number, username: string, avatar?: string) {
        this.id = id;
        this.username = username;
        this.avatar = avatar || `https://avatar.oxro.io/avatar.svg?name=${username}&background=random&length=2`;
    }
}
export interface Task {
    title: string,
    users: number[],
    author?: number,
    dates: Date | Date[],
    completed: boolean
}
export type TaskType = "once" | "weekly" | "yearly"
export interface Message {
    sender: number,
    content: string,
    timestamp: number
    reactions?: Reaction[]
}
export interface Reaction  { emoji: string, users: number[] }

export enum TWColor {

}