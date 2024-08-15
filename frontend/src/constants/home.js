const data = [
  {
    id: "College",
    icon: "iconsminds-city-hall",
    label: "Colleges",
    to: "/user/colleges/login",
    subs: [
      {
        icon: "iconsminds-administrator",
        label: "Login",
        to: "/user/colleges/login",
      },
      {
        icon: "iconsminds-add-user",
        label: "Register",
        to: "/user/colleges/register",
      },
    ],
  },
  {
    id: "Staff",
    icon: "iconsminds-business-man",
    label: "Staff",
    to: "/user/colleges/login",
    subs: [
      {
        icon: "iconsminds-administrator",
        label: "Login",
        to: "/user/colleges/staffLogin",
      },
      {
        icon: "iconsminds-add-user",
        label: "Register",
        to: "/user/colleges/staffRegister",
      },
    ],
  },
  {
    id: "student",
    icon: "iconsminds-student-male",
    label: "Students",
    to: "/user/students/login",
    role: "STUDENT",
    subs: [
      {
        icon: "iconsminds-administrator",
        label: "Login",
        to: "/user/colleges/studentLogin",
      },
      {
        icon: "iconsminds-add-user",
        label: "Register",
        to: "/user/colleges/studentRegister",
      },
    ],
  }
  
];
export default data;
