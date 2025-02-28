import {transformUsers} from "../utils/transform";
import {User} from "../src/types";

// Sample mock user data
const mockUsers: User[] = [
  {
    firstName: "John",
    lastName: "Doe",
    age: 25,
    gender: "male",
    hair: {color: "Brown"},
    address: {postalCode: "12345"},
    company: {department: "Engineering"},
  },
  {
    firstName: "Jane",
    lastName: "Smith",
    age: 30,
    gender: "female",
    hair: {color: "Black"},
    address: {postalCode: "67890"},
    company: {department: "Engineering"},
  },
  {
    firstName: "Job",
    lastName: "Doe",
    age: 32,
    gender: "male",
    hair: {color: "Black"},
    address: {postalCode: "56560"},
    company: {department: "Sales"},
  },
];

test("Transforms users by department correctly", () => {
  const result = transformUsers(mockUsers);

  expect(result).toEqual({
    Engineering: {
      male: 1,
      female: 1,
      ageRange: "25-30",
      hair: {Brown: 1, Black: 1},
      addressUser: {JohnDoe: "12345", JaneSmith: "67890"},
    },
    Sales: {
      male: 1,
      female: 0,
      ageRange: "32-32",
      hair: {Black: 1},
      addressUser: {JobDoe: "56560"},
    },
  });
});
