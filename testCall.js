const axios = require("axios");

// Step 1: Register a user
const registerUser = async () => {
  try {
    const response = await axios.post(
      "http://localhost:3000/api/auth/register",
      {
        username: "testuser",
        password: "testpassword",
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("User registered:", response.data);
  } catch (error) {
    console.error(
      "Error registering user:",
      error.response ? error.response.data : error.message
    );
  }
};

// Step 2: Login to get a token
const loginUser = async () => {
  try {
    const response = await axios.post(
      "http://localhost:3000/api/auth/login",
      {
        username: "testuser",
        password: "testpassword",
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data.token;
  } catch (error) {
    console.error(
      "Error logging in:",
      error.response ? error.response.data : error.message
    );
    return null;
  }
};

// Step 3: Access the protected route
const accessProtectedRoute = async (token) => {
  try {
    const response = await axios.get(
      "http://localhost:3000/api/auth/protected",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log("Protected route data:", response.data);
  } catch (error) {
    console.error(
      "Error accessing protected route:",
      error.response ? error.response.data : error.message
    );
  }
};

// Main function to orchestrate the API calls
const main = async () => {
  await registerUser();
  const token = await loginUser();
  if (token) {
    await accessProtectedRoute(token);
  }
};

main();
