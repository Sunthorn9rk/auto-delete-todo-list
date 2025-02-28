import {User} from "@/types";

interface DepartmentStats {
  male: number;
  female: number;
  ageRange: string;
  hair: Record<string, number>; // Hair color counts
  addressUser: Record<string, string>; // Full name to postal code
}

export const transformUsers = (
  users: User[]
): Record<string, DepartmentStats> => {
  const departmentMap: Record<string, DepartmentStats> = {};

  users.forEach((user) => {
    const {firstName, lastName, age, gender, hair, address, company} = user;
    const department = company.department;
    const fullName = firstName + lastName;

    if (!departmentMap[department]) {
      departmentMap[department] = {
        male: 0,
        female: 0,
        ageRange: "",
        hair: {},
        addressUser: {},
      };
    }

    // Update male/female count
    departmentMap[department][gender]++;

    // Update age range
    const currentAges = (
      departmentMap[department].ageRange.match(/\d+/g) || []
    ).map(Number);
    const minAge = Math.min(...currentAges, age);
    const maxAge = Math.max(...currentAges, age);
    departmentMap[department].ageRange = `${minAge}-${maxAge}`;

    // Update hair color count
    departmentMap[department].hair[hair.color] =
      (departmentMap[department].hair[hair.color] || 0) + 1;

    // Add full name → postal code mapping
    departmentMap[department].addressUser[fullName] = address.postalCode;
  });

  return departmentMap;
};
