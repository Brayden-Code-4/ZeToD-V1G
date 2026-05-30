import axios from "axios";

const BACKEND_URL = "https://zetod-backend.onrender.com";

// Create custom axios instance for the ZeToD Backend
const api = axios.create({
  baseURL: BACKEND_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 15000, // Safe timeout for backend wakeups on Render
});

// Auto-inject jwt token if saved
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("zetod_auth_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// High-fidelity API calls helper
export const authService = {
  login: async (email, password) => {
    try {
      const response = await api.post("/api/auth/login", { email, password });
      if (response.data?.token) {
        localStorage.setItem("zetod_auth_token", response.data.token);
      }
      return response.data;
    } catch (error) {
      console.error("Login API error:", error);
      throw error;
    }
  },

  register: async (name, email, password, githubUrl) => {
    try {
      const response = await api.post("/api/auth/register", { name, email, password, githubUrl });
      if (response.data?.token) {
        localStorage.setItem("zetod_auth_token", response.data.token);
      }
      return response.data;
    } catch (error) {
      console.error("Register API error:", error);
      throw error;
    }
  },

  getProfile: async () => {
    try {
      const response = await api.get("/api/users/profile");
      return response.data;
    } catch (error) {
      console.error("Get Profile API error:", error);
      throw error;
    }
  },

  startAssessment: async (assessmentId) => {
    try {
      const response = await api.post(`/api/assessments/${assessmentId}/start`);
      return response.data;
    } catch (error) {
      console.error("Start Assessment API error:", error);
      throw error;
    }
  }
};

export default api;
