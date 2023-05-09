import axios from "axios";

const MockAPI = axios.create({
  baseURL: "https://64356968537112453fd59b07.mockapi.io/relation",
});
const Testimonials = axios.create({
  baseURL: "https://64528811bce0b0a0f74981ab.mockapi.io",
});

export { MockAPI, Testimonials };
