import axios from "axios";

const API = "http://localhost:7000";

export const fetchBoards = () => axios.get(`${API}/book/board`);
export const fetchMediums = () => axios.get(`${API}/book/medium`);
export const fetchClasses = () => axios.get(`${API}/book/class`);
export const fetchYears = () => axios.get(`${API}/book/academic`);
export const fetchBooks = () => axios.get(`${API}/book/book`);

export const createBookSet = (data) =>
  axios.post(`${API}/book-set/create`, data);
export const getBookSets = (params) => axios.get(`${API}/book-set`, { params });
export const getBookSetById = (id) => axios.get(`${API}/book-set/${id}`);
export const updateBookSet = (id, data) =>
  axios.put(`${API}/book-set/${id}`, data);
export const deleteBookSet = (id) => axios.delete(`${API}/book-set/${id}`);
