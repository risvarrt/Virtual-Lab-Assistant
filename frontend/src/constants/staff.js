const data = [
  {
    id: "dashboard",
    icon: "iconsminds-dashboard",
    label: "Dashboard",
    to: "/user/staff/dashboard"
  },
  {
    id: "assessments",
    icon: "iconsminds-receipt-4",
    label: "Assesments",
    to: "/app/second-menu",
    subs: [
      {
        icon: "iconsminds-books",
        label: "Create Assessments",
        to: "/app/create_assessment"
      },
      {
        icon: "iconsminds-book",
        label: "View Reports",
        to: "/app/classes"
      }
    ]
  },
  {
    id: "college-details",
    icon: "iconsminds-blackboard",
    label: "Classes",
    to: "/app/second-menu",
    subs: [
      {
        icon: "iconsminds-video",
        label: "Create class",
        to: "/user/staff/create_class"
      },
      {
        icon: "iconsminds-video-5",
        label: "Manage classes",
        to: "/app/classes"
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
        icon: "iconsminds-mens",
        label: "My Students",
        to: "/app/classes"
      }
    ]
  }
];
export default data;
