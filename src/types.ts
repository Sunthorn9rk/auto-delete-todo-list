//Define type for the todo item
export type TodoItem = {
  type: "Fruit" | "Vegetable";
  name: string;
};

// Define type for the user
export interface User {
  firstName: string;
  lastName: string;
  age: number;
  gender: "male" | "female";
  hair: {color: string};
  address: {postalCode: string};
  company: {department: string};
}
