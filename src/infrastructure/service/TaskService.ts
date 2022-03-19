import $api from "../api";
import { IRequestMove, IRequestTask, IRequestTaskGroup, ITaskGroup } from '../../application/models/ITask';
export default class TaskService {

    static async getList() {
        return await $api.get<ITaskGroup[]>('api/tasks-with-group');
    }

    static async addTask(body: IRequestTask) {
        return await $api.post('api/create-tasks', body);
    }

    static async addTaskGroup(body: IRequestTaskGroup) {
        return await $api.post('api/create-task-group', body);
    }

    static async updateTask(id: number, body: IRequestMove) {
        return await $api.patch('api/update-task/'+id, body);
    }

    static async completedTask(id: number) {
        return await $api.get('api/completed-task/'+id);
    }

    static async removeTask(id: number) {
        return await $api.delete('api/delete-task/'+id);
    }

    static async removeTaskGroup(id: number) {
        return await $api.delete('api/delete-task-group/'+id);
    }

}