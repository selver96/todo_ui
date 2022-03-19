import { SetTaskGroupAction, SetIsLoadingAction, SetErrorAction, TaskActionEnum } from './types';
import { ITaskGroup, IRequestTaskGroup, IRequestTask, IRequestMove } from '../../../models/ITask';
import { AppDispatch } from '../../index';
import TaskService from '../../../../infrastructure/service/TaskService';


export const TaskActionCreators = {
    setTask: (tasks: ITaskGroup[]): SetTaskGroupAction => ({ type: TaskActionEnum.SET_TASKS, payload: tasks }),
    setIsLoading: (payload: boolean): SetIsLoadingAction => ({ type: TaskActionEnum.SET_IS_LOADING, payload: payload }),
    setError: (payload: string): SetErrorAction => ({ type: TaskActionEnum.SET_ERROR, payload: payload }),
    getTask: () => (dispatch: AppDispatch) => {
        try {
            
            dispatch(TaskActionCreators.setIsLoading(true));
            TaskService.getList().then((res: any) => {
                dispatch(TaskActionCreators.setTask(res.data));
            })
            dispatch(TaskActionCreators.setIsLoading(false));
        } catch (e: any) {
            dispatch(TaskActionCreators.setError(e.message));
        }
    },
    addTaskGroup: (body: IRequestTaskGroup) => (dispatch: AppDispatch) => {
        try {
            dispatch(TaskActionCreators.setIsLoading(true));
            TaskService.addTaskGroup(body).then((res) => {
                console.log(res.data)
                
            })
            dispatch(TaskActionCreators.setIsLoading(false));
        } catch (e: any) {
            dispatch(TaskActionCreators.setError(e.message));
        }
    },
    addTask: (body: IRequestTask) => (dispatch: AppDispatch) => {
        try {
            dispatch(TaskActionCreators.setIsLoading(true));
            TaskService.addTask(body).then((res) => {
                console.log(res.data)
                
            })
            dispatch(TaskActionCreators.setIsLoading(false));
        } catch (e: any) {
            dispatch(TaskActionCreators.setError(e.message));
        }
    },
    removeTask: (id: number) => (dispatch: AppDispatch) => {
        try {
            dispatch(TaskActionCreators.setIsLoading(true));
            TaskService.removeTask(id).then((res) => {
                console.log(res.data)
            })
            dispatch(TaskActionCreators.setIsLoading(false));
        } catch (e: any) {
            dispatch(TaskActionCreators.setError(e.message));
        }
    },
    removeTaskGroup: (id: number) => (dispatch: AppDispatch) => {
        try {
            dispatch(TaskActionCreators.setIsLoading(true));
            TaskService.removeTaskGroup(id).then((res) => {
                console.log(res.data)
            })
            dispatch(TaskActionCreators.setIsLoading(false));
        } catch (e: any) {
            dispatch(TaskActionCreators.setError(e.message));
        }
    },
    moveTask: (id: number, body: IRequestMove) => (dispatch: AppDispatch) => {
        try {
            dispatch(TaskActionCreators.setIsLoading(true));
            TaskService.updateTask( id, body ).then((res) => {
                console.log(res.data)
            })
            dispatch(TaskActionCreators.setIsLoading(false));
        } catch (e: any) {
            dispatch(TaskActionCreators.setError(e.message));
        }
    },
    completedTask: (id: number) => (dispatch: AppDispatch) => {
        try {
            dispatch(TaskActionCreators.setIsLoading(true));
            TaskService.completedTask(id).then((res) => {
                console.log(res.data)
            })
            dispatch(TaskActionCreators.setIsLoading(false));
        } catch (e: any) {
            dispatch(TaskActionCreators.setError(e.message));
        }
    },
};