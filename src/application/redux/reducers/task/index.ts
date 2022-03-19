import { TaskAction, TaskActionEnum, TaskState } from './types';
import { ITaskGroup } from '../../../models/ITask';


const initialState: TaskState = {
    taskGroup: [] as unknown as ITaskGroup[],
    isLoading: false,
    error: '',
}

export default function categoryReducer(state = initialState, action: TaskAction): TaskState {
    switch (action.type) {
        case TaskActionEnum.SET_TASKS:
            return { ...state, taskGroup: action.payload }
        case TaskActionEnum.SET_IS_LOADING:
            return { ...state, isLoading: action.payload }
        case TaskActionEnum.SET_ERROR:
            return { ...state, error: action.payload, isLoading: false }
        default:
            return state;
    }
} 