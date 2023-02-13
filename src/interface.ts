export class Room {
    roomId: number;
    roomName: string;
    users: number[];
    avatar?: string;
    tasks: Task[];
    messages: Message[];
    constructor(roomId: number, roomName: string, users: number[], tasks: Task[], messages: Message[], avatar?: string) {
        this.roomId = roomId;
        this.roomName = roomName;
        this.users = users;
        this.tasks = tasks;
        this.messages = messages;
        this.avatar = avatar || `https://avatar.oxro.io/avatar.svg?name=${roomName}&background=random&length=2`;
    }
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
    users: number | number[],
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

export interface Session {
    //token: string,
    userId: number
}