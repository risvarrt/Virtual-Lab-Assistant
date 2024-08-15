const data = [
  {
    id: "dashboard",
    icon: "iconsminds-dashboard",
    label: "Dashboard",
    to: "/user/colleges/dashboard"
  },
  {
    id: "college-details",
    icon: "iconsminds-city-hall",
    label: "College Details",
    to: "/app/second-menu",
    subs: [
      {
        icon: "iconsminds-male-2",
        label: "Profile",
        to: "/app/second-menu/second"
      },
      {
        icon: "iconsminds-video",
        label: "Video Tour",
        to: "/app/second-menu/second"
      },
      {
        icon: "iconsminds-video-5",
        label: "Webinar",
        to: "/app/second-menu/second"
      }
    ]
  },
  {
    id: "staffs",
    icon: "iconsminds-business-man",
    label: "Staffs",
    to: "/app/second-menu",
    subs: [
      {
        icon: "iconsminds-add-user",
        label: "Add Staffs",
        to: "/user/colleges/addStaff"
      },
      {
        icon: "iconsminds-mens",
        label: "Manage Staffs",
        to: "/app/manageStaff"
      }
    ]
  },
  {
    id: "students",
    icon: "iconsminds-student-male",
    label: "Students",
    to: "/app/second-menu",
    subs: [
      {
        icon: "iconsminds-add-user",
        label: "Add Students",
        to: "/user/colleges/addStudent"
      },
      {
        icon: "iconsminds-mens",
        label: "Manage Students",
        to: "/app/manageStudents"
      }
    ]
  }
];
export default data;
