import axios from "axios";
//base url
axios.defaults.baseURL = "https://evangadi-forum-backend-wqf7.onrender.com";

export async function loginUser(creds) {
  try {
    const res = await axios.post("/api/users/login", creds);
    return res.data;
  } catch (error) {
    throw new Error(error.response.data.msg || "Login failed");
  }
}
export async function registerUser(creds) {
  try {
    const res = await axios.post("/api/users/register", creds);
    return res.data;
  } catch (error) {
    throw new Error(error.response.data.msg || "Login failed");
  }
}

//create question api
export async function createQuestion(question, token) {
  try {
    const res = await axios.post("/api/questions/create", question, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    throw new Error(error.response.data.msg || "Question creation failed");
  }
}
//get questions api
export async function getQuestions(token) {
  try {
    const res = await axios.get("/api/questions", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    throw new Error(error.response.data.msg || "Question creation failed");
  }
}
export async function createAnswer(answer, token, questionid) {
  try {
    const res = await axios.post(`/api/answers/${questionid}/create`, answer, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    throw new Error(error.response.data.msg || "Answer creation failed");
  }
}
//get answers api
export async function getAnswers(token, questionid) {
  try {
    const res = await axios.get(`/api/answers/${questionid}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    throw new Error(error.response.data.msg || "Answer creation failed");
  }
}
//user profile image upload api
export async function uploadImage(formData, token) {
  try {
    const res = await axios.post("/api/images/upload", formData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    throw new Error(error.response.data.msg || "Image upload failed");
  }
}
//get user profile image api

export async function getUserProfileImage(token) {
  try {
    const res = await axios.get("/api/images/profile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      responseType: "blob",
    });
    return res.data;
  } catch (error) {
    throw new Error(error.response.data.msg || "Image upload failed");
  }
}

//get all user images api
export async function getAllUserImages(token) {
  try {
    const res = await axios.get("/api/images", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    throw new Error(error.response.data.msg || "Image upload failed");
  }
}

