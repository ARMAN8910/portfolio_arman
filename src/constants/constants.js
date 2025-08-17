const words = [
    { text: "CODE", imgPath: "/images/code.svg" },
    { text: "PROG", imgPath: "/images/designs.svg" },
    { text: "BUILD", imgPath: "/images/concepts.svg" },
    { text: "DATA", imgPath: "/images/code.svg" },
    { text: "TECH", imgPath: "/images/ideas.svg" },

  ];

const counterItems=[{value:1.5,suffix:"+",label:"Total Developing Experience"},
  {value:400,suffix:"+",label:"Coding Problems Solved On Different Platforms"}
];

const navLinks=[
  {name:"Work",
  link:"#work",
  },

  {name:"Skills",
  link:"#skills",
},
{name:"Education",
  link:"#Education",
},
{name:"Contact",
  link:"#contact",
}



]

const logoIconList = [
  { imgPath: "/images/logos/java.png" },
  { imgPath: "/images/logos/html-5.png" },
  { imgPath: "/images/logos/css.png" },
  { imgPath: "/images/logos/java-script.png" },
  { imgPath: "/images/logos/react.png" },
  { imgPath: "/images/logos/node.png" },
  { imgPath: "/images/logos/mysql.png" },
  { imgPath: "/images/logos/bootstrap.png" },
  { imgPath: "/images/logos/git.svg" },
  { imgPath: "/images/logos/database-storage.png" },
  { imgPath: "/images/logos/github.png" },
  { imgPath: "/images/logos/three.png" },
  { imgPath: "/images/logos/idea.png" },
  { imgPath: "/images/logos/mui.png" },
  { imgPath: "/images/logos/ml.png" },
];

const abilities = [
  {
    imgPath: "/images/skill.png",
    title: "Strong Tech SkillSet",
    desc: "Proficient in Java, JavaScript, React, Node.js, MySQL, MongoDB, and modern web frameworks.",
    urls: [] // 0 links
  },
  {
    imgPath: "/images/task-management.png",
    title: "Task-Management",
    desc: "Built scalable, high-availability web apps with secure authentication, responsive UI, and API integrations.",
    urls: [
      { label: "Project Link", link: "https://github.com/ARMAN8910" }
    ] // 1 link
  },
  {
    imgPath: "/images/research.png",
    title: "Research & Publication",
    desc: "Published IEEE research on real-time ASL recognition achieving 95% accuracy using CNN models.",
    urls: [
      { label: "IEEE Paper", link: "https://ieeexplore.ieee.org/document/10985419" }
    ] // 1 link
  },
  {
    imgPath: "/images/communication-skills.png",
    title: "Communication Skills",
    desc: "Strong communication, negotiation, and collaboration skills honed through Model United Nations",
    urls: [] // 0 links
  },
  {
    imgPath: "/images/certification.png",
    title: "Certifications",
    desc: "Certified in Cloud, IoT, Edge, Machine Learning (NPTEL) and Data Structures & Algorithms (TUF).",
    urls: [
      { label: "NPTEL Certificate", link: "https://drive.google.com/file/d/11k8vQ62ZBy6pZ3CaZ51BFowneG-5Kpvb/view" },
      { label: "TUF Certificate", link: "https://drive.google.com/file/d/1uf8bHPoKwBBVuC8uGss51mX61uiXP_WK/view" },
       { label: "IEEE Certificate", link: "https://drive.google.com/file/d/1XnmqY4UbGhh5zNNnNWnjbVZN9UNkeeqg/view" }
    ] // 2 links
  },
  {
    imgPath: "/images/programming.png",
    title: "Problem Solving & DSA",
    desc: "Solved numerous DSA problems across platforms with a HackerRank 5⭐ problem-solving badge.",
    urls: [
      { label: "LeetCode Profile", link: "https://leetcode.com/u/ARMAN__/" },
      { label: "TUF Problems", link: "https://takeuforward.org/plus/profile/arman_ahmad" },
      { label: "HackerRank Badge", link: "https://www.hackerrank.com/profile/armanahmad7318" },
      { label: "GFG Profile", link: "https://www.geeksforgeeks.org/user/armanahmad7318/?ref=header_profile" }
    ] // 4 links
  }
];




const EducationCard = [
   {
    degree: "Science MPC",
    educationType: "High School",
    institution: "Kendriya Vidyalaya No.2, Afa Dundigal",
    location: "Hyderabad, Telangana, India",
    from: "June 2019",
    to: "May 2021",
    grade: "Percentage: 81%",
    imgPath:"/images/school.png"
  },
  {
    degree: "Bachelor of Technology in Information Technology",
    educationType: "Undergraduate",
    institution: "MLR Institute of Technology",
    location: "Hyderabad, Telangana, India",
    from: "Aug 2021",
    to: "July 2025",
    grade: "CGPA: 7.1/10",
    imgPath:"/images/college.png"
  }
 
];


export{words,counterItems,navLinks,logoIconList,abilities,EducationCard};