const data = [
  
  /** ---------STUDENT-------- */
  {
    id: "Student_Dashboard",
    icon: "iconsminds-newspaper",
    label: "Dashboard",
    to: "/user/colleges/login",
    role: "STUDENT",
    subs: [
      {
        icon: "simple-icon-paper-plane",
        label: "How To's",
        to: "/app",
      },
      {
        icon: "simple-icon-paper-plane",
        label: "Latest Announcements",
        to: "#",
      },
      {
        icon: "simple-icon-paper-plane",
        label: "Latest News",
        to: "#",
      },
      {
        icon: "simple-icon-paper-plane",
        label: "Latest Notifications",
        to: "#",
      },
    ],
  },
  {
    id: "Student_College",
    icon: "iconsminds-museum",
    label: "College",
    to: "/user/colleges/login",
    role: "STUDENT",
    subs: [
      {
        icon: "simple-icon-paper-plane",
        label: "About College",
        to: "#",
      },
      {
        icon: "simple-icon-paper-plane",
        label: "Profile",
        to: "#",
      },
      {
        icon: "simple-icon-paper-plane",
        label: "Announcements",
        to: "#",
      },
      {
        icon: "simple-icon-paper-plane",
        label: "News",
        to: "#",
      },
    ],
  },
  {
    id: "Student_Profile",
    icon: "iconsminds-profile",
    label: "Profile",
    to: "/user/colleges/login",
    role: "STUDENT",
    subs: [
      {
        icon: "simple-icon-paper-plane",
        label: "My Profile",
        to: `/app/students/profile/:${sessionStorage.getItem("user_id")}`,
      },
      {
        icon: "simple-icon-paper-plane",
        label: "My Resume",
        to: "#",
      },
      {
        icon: "simple-icon-paper-plane",
        label: "Skills",
        to: "#",
      },
      {
        icon: "simple-icon-paper-plane",
        label: "Evaluation",
        to: "#",
      },
      {
        icon: "simple-icon-paper-plane",
        label: "Badges",
        to: "#",
      },
    ],
  },
  {
    id: "Student_Jobs",
    icon: "iconsminds-file-edit",
    label: "Jobs",
    to: "/user/colleges/login",
    role: "STUDENT",
    subs: [
      {
        icon: "simple-icon-paper-plane",
        label: "New Job/Internships",
        to: "#",
      },
      {
        icon: "simple-icon-paper-plane",
        label: "Applied Jobs/Internships",
        to: "#",
      },
      {
        icon: "simple-icon-paper-plane",
        label: "Shortlisted Jobs/Internships",
        to: "#",
      },
      {
        icon: "simple-icon-paper-plane",
        label: "Selected Jobs/Internships",
        to: "#",
      },
      {
        icon: "simple-icon-paper-plane",
        label: "Rejected",
        to: "#",
      },
      {
        icon: "simple-icon-paper-plane",
        label: "Reports",
        to: "#",
      },
    ],
  },
  {
    id: "Student_Assessment",
    icon: "iconsminds-books",
    label: "Assessment",
    to: "/user/colleges/login",
    role: "STUDENT",
    subs: [
      {
        icon: "simple-icon-paper-plane",
        label: "Assess",
        to: "#",
        sub: [
          {
            icon: "simple-icon-paper-plane",
            label: "Aptitude Assessment",
            to: "#",
          },
          {
            icon: "simple-icon-paper-plane",
            label: "Technical Assessment",
            to: "#",
          },
          {
            icon: "simple-icon-paper-plane",
            label: "Coding Assessment",
            to: "#",
          },
          {
            icon: "simple-icon-paper-plane",
            label: "Project Oriented Assessment",
            to: "#",
          },
        ],
      },
      {
        icon: "simple-icon-paper-plane",
        label: "Interviews",
        to: "#",
        sub: [
          {
            icon: "simple-icon-paper-plane",
            label: "Technical Interview",
            to: "#",
          },
          {
            icon: "simple-icon-paper-plane",
            label: "HR Interview",
            to: "#",
          },
        ],
      },
      {
        icon: "simple-icon-paper-plane",
        label: "Feedbacks",
        to: "#",
      },
    ],
  },
  {
    id: "Student_E-learning",
    icon: "iconsminds-blackboard",
    label: "E-Learning",
    to: "/user/colleges/login",
    role: "STUDENT",
    subs: [
      {
        icon: "simple-icon-paper-plane",
        label: "Learning Paths",
        to: "#",
      },
      {
        icon: "simple-icon-paper-plane",
        label: "Webinars",
        to: "#",
      },
    ],
  },
  {
    id: "Student_Reports",
    icon: "iconsminds-statistic",
    label: "Reports",
    to: "/user/colleges/login",
    role: "STUDENT",
    subs: [
      {
        icon: "simple-icon-paper-plane",
        label: "Full Performance Report",
        to: "#",
      },
      {
        icon: "simple-icon-paper-plane",
        label: "Assessment Report",
        to: "#",
      },
      {
        icon: "simple-icon-paper-plane",
        label: "Evaluation Report",
        to: "#",
      },
      {
        icon: "simple-icon-paper-plane",
        label: "Interview Feedback Report",
        to: "#",
      },
    ],
  },
  /** EMPLOYER */
  {
    id: "EMPLOYER_Dashboard",
    icon: "iconsminds-newspaper",
    label: "Dashboard",
    to: "/user/colleges/login",
    role: "EMPLOYER",
    subs: [
      {
        icon: "simple-icon-paper-plane",
        label: "How To's",
        to: "#",
      },
      {
        icon: "simple-icon-paper-plane",
        label: "Latest Announcements",
        to: "#",
      },
      {
        icon: "simple-icon-paper-plane",
        label: "Latest Jobs on Platform",
        to: "#",
      },
      {
        icon: "simple-icon-paper-plane",
        label: "Subscriptions & Billing",
        to: "#",
      },
    ],
  },

  {
    id: "EMPLOYER_Profile",
    icon: "iconsminds-profile",
    label: "Profile",
    to: "/user/colleges/login",
    role: "EMPLOYER",
    subs: [
      {
        icon: "simple-icon-paper-plane",
        label: "Company Profile",
        to: "#",
      },
      {
        icon: "simple-icon-paper-plane",
        label: "Video Tours",
        to: "#",
      },
      {
        icon: "simple-icon-paper-plane",
        label: "Documents",
        to: "#",
      },
    ],
  },
  {
    id: "EMPLOYER_Team",
    icon: "iconsminds-conference",
    label: "Teams",
    to: "/user/colleges/login",
    role: "EMPLOYER",
    subs: [
      {
        icon: "simple-icon-paper-plane",
        label: "Add/Manage Team",
        to: "/user/employer-team/add-team",
      },
      {
        icon: "simple-icon-paper-plane",
        label: "Assign Roles",
        to: "#",
      },
    ],
  },
  {
    id: "EMPLOYER_job",
    icon: "iconsminds-file-edit",
    label: "Jobs",
    to: "/user/colleges/login",
    role: "EMPLOYER",
    subs: [
      {
        icon: "simple-icon-paper-plane",
        label: "Post Job",
        to: "#",
      },
      {
        icon: "simple-icon-paper-plane",
        label: "Applicants",
        to: "#",
      },
    ],
  },

  {
    id: "EMPLOYER_Assessment",
    icon: "iconsminds-books",
    label: "Assessment",
    to: "/user/colleges/login",
    role: "EMPLOYER",
    subs: [
      {
        icon: "simple-icon-paper-plane",
        label: "Assess",
        to: "#",
        subs: [
          {
            icon: "simple-icon-paper-plane",
            label: "Add Assessment",
            to: "#",
          },
          {
            icon: "simple-icon-paper-plane",
            label: "Manage Assessment",
            to: "#",
          },
        ],
      },
      {
        icon: "simple-icon-paper-plane",
        label: "Interviews",
        to: "#",
        subs: [
          {
            icon: "simple-icon-paper-plane",
            label: "Schedule Interview",
            to: "#",
          },
          {
            icon: "simple-icon-paper-plane",
            label: "Manage Interview",
            to: "#",
          },
        ],
      },
      {
        icon: "simple-icon-paper-plane",
        label: "Feedbacks",
        to: "#",
      },
    ],
  },

  {
    id: "EMPLOYER_Reports",
    icon: "iconsminds-statistic",
    label: "Reports",
    to: "/user/colleges/login",
    role: "EMPLOYER",
    subs: [
      {
        icon: "simple-icon-paper-plane",
        label: "Candidates Performance Report",
        to: "#",
      },
      {
        icon: "simple-icon-paper-plane",
        label: "Team Feedback Reports",
        to: "#",
      },
      {
        icon: "simple-icon-paper-plane",
        label: "Job Analysis Reports",
        to: "#",
      },
    ],
  },
  {
    id: "EMPLOYER_E-learning",
    icon: "iconsminds-video",
    label: "Webinar",
    to: "/user/colleges/login",
    role: "EMPLOYER",
    subs: [
      {
        icon: "simple-icon-paper-plane",
        label: "Create/Manage Webinars",
        to: "#",
      },
      {
        icon: "simple-icon-paper-plane",
        label: "Attend Webinars",
        to: "#",
      },
    ],
  },
  /** EMPLOYER_TEAM */
  {
    id: "EMPLOYER_TEAM_Dashboard",
    icon: "iconsminds-newspaper",
    label: "Dashboard",
    to: "/user/colleges/login",
    role: "EMPLOYER_TEAM",
    subs: [
      {
        icon: "simple-icon-paper-plane",
        label: "How To's",
        to: "#",
      },
      {
        icon: "simple-icon-paper-plane",
        label: "Latest Announcements",
        to: "#",
      },
      {
        icon: "simple-icon-paper-plane",
        label: "Latest Jobs on Platform",
        to: "#",
      },
    ],
  },

  {
    id: "EMPLOYER_TEAM_Profile",
    icon: "iconsminds-profile",
    label: "Profile",
    to: "/user/colleges/login",
    role: "EMPLOYER_TEAM",
    subs: [
      {
        icon: "simple-icon-paper-plane",
        label: "Company Profile",
        to: "#",
      },
      {
        icon: "simple-icon-paper-plane",
        label: "Video Tours",
        to: "#",
      },
      {
        icon: "simple-icon-paper-plane",
        label: "Documents",
        to: "#",
      },
    ],
  },
  {
    id: "EMPLOYER_TEAM_Teams",
    icon: "iconsminds-conference",
    label: "Teams",
    to: "/user/colleges/login",
    role: "EMPLOYER_TEAM",
    subs: [
      {
        icon: "simple-icon-paper-plane",
        label: "Post Job",
        to: "#",
      },
      {
        icon: "simple-icon-paper-plane",
        label: "Applicants",
        to: "#",
      },
    ],
  },
  {
    id: "EMPLOYER_TEAM_Job",
    icon: "iconsminds-file-edit",
    label: "Jobs",
    to: "/user/colleges/login",
    role: "EMPLOYER_TEAM",
    subs: [
      {
        icon: "simple-icon-paper-plane",
        label: "Add/Manage Team",
        to: "#",
      },
      {
        icon: "simple-icon-paper-plane",
        label: "Assign Roles",
        to: "#",
      },
    ],
  },

  {
    id: "EMPLOYER_TEAM_Assessment",
    icon: "iconsminds-books",
    label: "Assessment",
    to: "/user/colleges/login",
    role: "EMPLOYER_TEAM",
    subs: [
      {
        icon: "simple-icon-paper-plane",
        label: "Assess",
        to: "#",
        subs: [
          {
            icon: "simple-icon-paper-plane",
            label: "Add Assessment",
            to: "#",
          },
          {
            icon: "simple-icon-paper-plane",
            label: "Manage Assessment",
            to: "#",
          },
        ],
      },
      {
        icon: "simple-icon-paper-plane",
        label: "Interviews",
        to: "#",
        subs: [
          {
            icon: "simple-icon-paper-plane",
            label: "Schedule Interview",
            to: "#",
          },
          {
            icon: "simple-icon-paper-plane",
            label: "Manage Interview",
            to: "#",
          },
        ],
      },
      {
        icon: "simple-icon-paper-plane",
        label: "Feedbacks",
        to: "#",
      },
    ],
  },

  {
    id: "EMPLOYER_TEAM_Reports",
    icon: "iconsminds-statistic",
    label: "Reports",
    to: "/user/colleges/login",
    role: "EMPLOYER_TEAM",
    subs: [
      {
        icon: "simple-icon-paper-plane",
        label: "Candidates Performance Report",
        to: "#",
      },
      {
        icon: "simple-icon-paper-plane",
        label: "Team Feedback Reports",
        to: "#",
      },
      {
        icon: "simple-icon-paper-plane",
        label: "Job Analysis Reports",
        to: "#",
      },
    ],
  },
  {
    id: "EMPLOYER_TEAM_Webinar",
    icon: "iconsminds-video",
    label: "Webinar",
    to: "/user/colleges/login",
    role: "EMPLOYER_TEAM",
    subs: [
      {
        icon: "simple-icon-paper-plane",
        label: "Create/Manage Webinars",
        to: "#",
      },
      {
        icon: "simple-icon-paper-plane",
        label: "Attend Webinars",
        to: "#",
      },
    ],
  },
  /** COLLEGE */
  {
    id: "COLLEGE_Dashboard",
    icon: "iconsminds-newspaper",
    label: "Dashboard",
    to: "/user/colleges/login",
    role: "COLLEGE",
    subs: [
      {
        icon: "simple-icon-paper-plane",
        label: "Latest Notifications",
        to: "#",
      },
      {
        icon: "simple-icon-paper-plane",
        label: "Latest Announcements",
        to: "#",
      },
      {
        icon: "simple-icon-paper-plane",
        label: "Latest Jobs on Platform",
        to: "#",
      },
      {
        icon: "simple-icon-paper-plane",
        label: "Subscriptions & Billing",
        to: "#",
      },
    ],
  },

  {
    id: "COLLEGE_Profile",
    icon: "iconsminds-profile",
    label: "Profile",
    to: "/user/colleges/login",
    role: "COLLEGE",
    subs: [
      {
        icon: "simple-icon-paper-plane",
        label: "College Profile",
        to: "#",
      },
      {
        icon: "simple-icon-paper-plane",
        label: "Video Tours",
        to: "#",
      },
      {
        icon: "simple-icon-paper-plane",
        label: "Documents",
        to: "#",
      },
      {
        icon: "simple-icon-paper-plane",
        label: "Previous Placement Records",
        to: "#",
      },
      {
        icon: "simple-icon-paper-plane",
        label: "Manage Students",
        to: "#",
      },
    ],
  },
  {
    id: "COLLEGE_Teams",
    icon: "iconsminds-conference",
    label: "Teams",
    to: "/user/colleges/login",
    role: "COLLEGE",
    subs: [
      {
        icon: "simple-icon-paper-plane",
        label: "Add/Manage Staff",
        to: "#",
      },
      {
        icon: "simple-icon-paper-plane",
        label: "Assign Roles",
        to: "#",
      },
    ],
  },
  {
    id: "COLLEGE_Job",
    icon: "iconsminds-file-edit",
    label: "Jobs",
    to: "/user/colleges/login",
    role: "COLLEGE",
    subs: [
      {
        icon: "simple-icon-paper-plane",
        label: "Offline Placements",
        to: "#",
      },
    ],
  },

  {
    id: "COLLEGE_Assessment",
    icon: "iconsminds-books",
    label: "Assessment",
    to: "/user/colleges/login",
    role: "COLLEGE",
    subs: [
      {
        icon: "simple-icon-paper-plane",
        label: "Reports of Students",
        to: "#",
      },
      {
        icon: "simple-icon-paper-plane",
        label: "Feedback of Students",
        to: "#",
      },
    ],
  },

  {
    id: "COLLEGE_Reports",
    icon: "iconsminds-statistic",
    label: "Reports",
    to: "/user/colleges/login",
    role: "COLLEGE",
    subs: [
      {
        icon: "simple-icon-paper-plane",
        label: "Candidates Performance Reports",
        to: "#",
      },
      {
        icon: "simple-icon-paper-plane",
        label: "Staff Feedback Reports",
        to: "#",
      },
    ],
  },
  {
    id: "COLLEGE_Webinar",
    icon: "iconsminds-video",
    label: "Webinar",
    to: "/user/colleges/login",
    role: "COLLEGE",
    subs: [
      {
        icon: "simple-icon-paper-plane",
        label: "Create/Manage Webinars",
        to: "#",
      },
      {
        icon: "simple-icon-paper-plane",
        label: "Attend Webinars",
        to: "#",
      },
    ],
  },
];
export default data;
