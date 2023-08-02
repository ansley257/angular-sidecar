import { Task } from '../interfaces/task.model';

export const TASKS: Task[] = [
  {
    id: 1,
    title: 'Doctors Appointment',
    startDate: new Date(2023, 8, 1),
    endDate: new Date(2023, 8, 4),
  },
  {
    id: 2,
    title: 'Meeting at School',
    startDate: new Date(2023, 7, 28),
    endDate: new Date(2023, 8, 2),
  },
  {
    id: 3,
    title: 'Food Shopping',
    startDate: new Date(2023, 7, 30),
    endDate: new Date(2023, 8, 1),
  },
];
