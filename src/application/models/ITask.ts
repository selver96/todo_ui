export interface ITaskGroup {
    id: number;
    title: string;
    for_completed: boolean;
    tasks: ITask[];
}

export interface ITask {
    id: number;
    title: string;
    is_completed: boolean;
    end_at: string;
}


export interface IRequestTaskGroup {
    title: string;
    for_completed?: boolean;
}

export interface IRequestTask {
    title: string,
    end_at: string,
    user_id: number,
    group_id: number,
}

export interface IRequestMove {
    group_id: number; 
}