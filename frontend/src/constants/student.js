const data = [
  {
    id: "dashboard",
    icon: "iconsminds-dashboard",
    label: "Dasdghboard",
    to: "/user/colleges/"
  },
  {
    id: "college-details",
    icon: "iconsminds-city-hall",
    label: "Classes",
    to: "/app/second-menu",
    subs: [
      
      {
        icon: "iconsminds-video-5",
        label: "View classes",
        to: "/app/student_classes"
      }
    ]
  },
  
  
  {
    id: "assessments",
    icon: "iconsminds-receipt-4",
    label: "Assesments",
    to: "/app/second-menu",
    subs: [
      {
        icon: "iconsminds-books",
        label: "View Reports",
        to: "/app/student_classes"
      }     
    ]
  }
  
];
export default data;
