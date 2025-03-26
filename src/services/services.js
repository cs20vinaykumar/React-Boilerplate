import axios from "axios";
import Swal from "sweetalert2";

const authToken = () => localStorage.getItem("token");

export const create = async (url, postData) => {
  console.log("Request URL:", url);

  // Check Internet Connection
  if (!navigator.onLine) {
    Swal.fire({
      title: "No Internet",
      text: "Please check your connection.",
      icon: "error",
      timer: 2000,
      showConfirmButton: false,
    });

    return {
      success: false,
      message: "No internet connection",
      statusCode: 401,
    };
  }

  try {
    const response = await axios.post(url, postData, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`, 
      },
    });

    // Success response handling
    Swal.fire({
      title: "Success!",
      text: response.data.message || "Request successful.",
      icon: "success",
      timer: 2000,
      showConfirmButton: false,
    });

    return response.data;
  } catch (error) {
    console.error("Error:", error);

    // Handle cases where error.response is undefined
    const errorMessage = error.response?.data?.message || "Something went wrong!";
    
    Swal.fire({
      title: "Error",
      text: errorMessage,
      icon: "error",
      showConfirmButton: true,
    });

    return {
      success: false,
      message: errorMessage,
      statusCode: error.response?.status || 500,
    };
  }
};

export const getAll = async (url) => {
  if (!navigator.onLine) {
    Swal.fire({
      title: "No Internet",
      text: "Please check your connection.",
      icon: "error",
      timer: 2000,
      showConfirmButton: false,
    });

    return {
      success: false,
      message: "No internet connection",
    };
  }

  try {
    const response = await axios.get(url);

    return response.data;
  } catch (error) {
    console.error("Error:", error);

    const errorMessage = error.response?.data?.message || "Something went wrong!";

    Swal.fire({
      title: "Error",
      text: errorMessage,
      icon: "error",
      showConfirmButton: true,
    });

    return {
      success: false,
      message: errorMessage,
      statusCode: error.response?.status || 500,
    };
  }
};

export const update = async (url, updateData) => {
  if (!navigator.onLine) {
    Swal.fire({
      title: "No Internet",
      text: "Please check your connection.",
      icon: "error",
      timer: 2000,
      showConfirmButton: false,
    });

    return {
      success: false,
      message: "No internet connection",
      statusCode: 401,
    };
  }

  try {
    const response = await axios.put(url, updateData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    Swal.fire({
      title: "Success!",
      text: response.data.message || "Updated successfully.",
      icon: "success",
      timer: 2000,
      showConfirmButton: false,
    });

    return response.data;
  } catch (error) {
    console.error("Error:", error);

    const errorMessage = error.response?.data?.message || "Update failed!";

    Swal.fire({
      title: "Error",
      text: errorMessage,
      icon: "error",
      showConfirmButton: true,
    });

    return {
      success: false,
      message: errorMessage,
      statusCode: error.response?.status || 500,
    };
  }
};

export const remove = async (url) => {
  if (!navigator.onLine) {
    Swal.fire({
      title: "No Internet",
      text: "Please check your connection.",
      icon: "error",
      timer: 2000,
      showConfirmButton: false,
    });

    return {
      success: false,
      message: "No internet connection",
      statusCode: 401,
    };
  }

  try {
    const response = await axios.delete(url, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    Swal.fire({
      title: "Deleted!",
      text: response.data.message || "Deleted successfully.",
      icon: "success",
      timer: 2000,
      showConfirmButton: false,
    });

    return response.data;
  } catch (error) {
    console.error("Error:", error);

    const errorMessage = error.response?.data?.message || "Delete failed!";

    Swal.fire({
      title: "Error",
      text: errorMessage,
      icon: "error",
      showConfirmButton: true,
    });

    return {
      success: false,
      message: errorMessage,
      statusCode: error.response?.status || 500,
    };
  }
};

