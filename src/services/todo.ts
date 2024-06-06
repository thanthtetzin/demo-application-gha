import axios from 'axios';

export type Task = {
	id?: string;
	title: string;
	isDone: boolean;
	createdAt?: Date;
	updatedAt?: Date;
};

const path = 'http://localhost:4000/todo';

export const getTodos = async (): Promise<Task[]> => {
	const response = await axios.get<Task[]>(path);
	return response.data;
};

export const getCompleted = async (): Promise<Task[]> => {
	const response = await axios.get<Task[]>(`${path}/completed`);
	return response.data;
};

export const addTodo = async (task: Task): Promise<Task> => {
	const response = await axios.post<Task>(path, task);
	return response.data;
};

export const updateTodo = async (task: Task): Promise<Task> => {
	const response = await axios.put<Task>(`${path}/${task.id}`, task);
	return response.data;
};

export const deleteTodo = async (task: Task): Promise<Task> => {
	const response = await axios.delete<Task>(`${path}/${task.id}`);
	return response.data;
};
