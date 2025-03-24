import axios from "axios";
import Swal from "sweetalert2";

export const create = async (url, postData) => {
  console.log("url", url);

  if (!navigator.onLine) {
    Swal.fire({
      text: "Error..",
      icon: "error",
      timer: 2000,
      showCancelButton: false,
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
        // Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    return error.response?.data;
  }
};

export const getAll = async (url) => {
  if (!navigator.onLine) {
    return {
      success: false,
      message: "No internet connection",
    };
  }

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    if (error.response?.data?.statusCode === 401) {
      Swal.fire({
        text: error.response.data.message,
        icon: "error",
        showConfirmButton: true,
      });
    } else {
      return error.response?.data;
    }
  }
};

export const update = async (url, updateData) => {
  if (!navigator.onLine) {
    Swal.fire({
      text: "Error..",
      icon: "error",
      timer: 2000,
      showCancelButton: false,
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

    return response.data;
  } catch (error) {
    return error.response?.data;
  }
};

export const remove = async (url) => {
  if (!navigator.onLine) {
    Swal.fire({
      text: "Error..",
      icon: "error",
      timer: 2000,
      showCancelButton: false,
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

    return response.data;
  } catch (error) {
    return error.response?.data;
  }
};
