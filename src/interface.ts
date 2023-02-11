export interface Room {
    roomId: number,
    roomName: string,
    users: number[],
    avatar?: string,
    tasks: Task[],
    messages: Message[]
}

export interface User {

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
    reactions: {

    }
}
