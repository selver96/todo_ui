import { ITaskGroup, ITask } from '../../../models/ITask';

export interface TaskState {
    taskGroup: ITaskGroup[];
    isLoading: boolean;
    error: string;
}

export enum TaskActionEnum {
    SET_TASKS = "SET_TASK",
    SET_ERROR = "SET_ERROR",
    SET_IS_LOADING = "SET_IS_LOADING"
}

export interface SetErrorAction {
    type: TaskActionEnum.SET_ERROR,
    payload: string
}

export interface SetTaskGroupAction {
    type: TaskActionEnum.SET_TASKS,
    payload: ITaskGroup[]
}


export interface SetIsLoadingAction {
    type: TaskActionEnum.SET_IS_LOADING,
    payload: boolean
}

export type TaskAction =
    SetErrorAction |
    SetTaskGroupAction |
    SetIsLoadingAction;
