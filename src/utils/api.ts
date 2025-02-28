import axios from "axios";
import {User} from "@/types";

export const fetchUsers = async (): Promise<User[]> => {
  try {
    const response = await axios.get("https://dummyjson.com/users");
    return response.data.users; // Extract users array
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
};
