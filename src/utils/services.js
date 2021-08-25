import axios from 'axios';
import { API_ROOT, EVENT_NAMES } from './constants';

const urlCreator = (slug) => new URL(slug, API_ROOT);

// tasks
export const getAllTasks = (socket) =>
  new Promise((resolve) => {
    socket.emit(EVENT_NAMES.TASKS_STATUS);
    socket.on(EVENT_NAMES.TASKS_STATUS, (tasks) => {
      resolve(tasks);
    });
  });

export const startOneTask = (id) =>
  new Promise((resolve, reject) => {
    window
      .fetch(urlCreator(`v1/tasks/${id}/start`))
      .then((res) => res.json())
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  });

export const stopOneTask = (id) =>
  new Promise((resolve, reject) => {
    window
      .fetch(urlCreator(`v1/tasks/${id}/stop`), {
        method: 'get'
      })
      .then((res) => res.json())
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  });

export const downloadOneTask = (id) =>
  new Promise((resolve, reject) => {
    window
      .fetch(urlCreator(`v1/tasks/${id}/download`), {
        method: 'GET',
        'Content-Type': 'text/csv'
      })
      .then((res) => res.text())
      .then((data) => {
        resolve(data);
      })
      .catch((err) => reject(err));
  });

export const deleteOneTask = (id) =>
  new Promise((resolve, reject) => {
    window
      .fetch(urlCreator(`v1/tasks/${id}`), {
        method: 'delete'
      })
      .then((res) => res.json())
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  });

export const createOneTask = (api, data) =>
  new Promise((resolve, reject) => {
    axios({
      url: urlCreator(api),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      data
    })
      .then((res) => resolve(res.data))
      .catch((err) => reject(err));
  });
