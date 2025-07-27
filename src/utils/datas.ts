// Stack Icons
import htmlIcon from "@icons/html.svg";
import cssIcon from "@icons/css.svg";
import jsIcon from "@icons/js.svg";
import phpIcon from "@icons/php.svg";
import sassIcon from "@icons/sass.svg";
import bootstrapIcon from "@icons/bootstrap.svg";
import tailwindIcon from "@icons/tailwind.svg";
import reactIcon from "@icons/react.svg";
import nextjsIcon from "@icons/nextjs.svg";
import laravelIcon from "@icons/laravel.svg";
import npmIcon from "@icons/npm.svg";
import yarnIcon from "@icons/yarn.svg";
import blenderIcon from "@icons/blender.svg";
import figmaIcon from "@icons/figma.svg";
import gitIcon from "@icons/git.svg";
import githubIcon from "@icons/github.svg";
import mysqlIcon from "@icons/mysql.svg";
import vscodeIcon from "@icons/vscode.svg";
import vite from "@icons/vite.svg";
import python from "@icons/python.svg";
import flutter from "@icons/flutter.svg";
import unity from "@icons/unity.svg";
import canva from "@icons/canva.svg";

// Project Images
import jadwal from "@images/jadwal.png";
import treede from "@images/3d.webp";
import hot from "@images/hot.png";
import inpoums from "@images/inpoums.webp";
import learns from "@images/learn.png";
import kitchens from "@images/kitchen.png";
import brick from "@images/brick.png";
import SOS from "@images/SOS.png";
import food from "@images/Food.png";
import luxor from "@images/luxor.png";
import stargius from "@images/stargius.png";
import postgresql from "@icons/postgresql.svg";

// Gif Images
import sos from "@gif/sos.gif";
import coffebeanGif from "@gif/coffe-bean.gif";
import learn from "@gif/learn.gif";
import abinawaGif from "@gif/abinawa.gif";
import foods from "@gif/food.gif";
import luxorGif from "@gif/luxor.gif";
import stargiusGif from "@gif/stargius.gif";
import bricks from "@gif/brick.gif";

const tools = {
  Git: { name: "Git", src: gitIcon, level: "Version control" },
  Github: { name: "Github", src: githubIcon, level: "Git hosting" },
  NPM: { name: "NPM", src: npmIcon, level: "Package manager" },
  Yarn: { name: "Yarn", src: yarnIcon, level: "Package manager" },
  Vite: { name: "Vite", src: vite, level: "Build tool" },
  VSCode: { name: "VSCode", src: vscodeIcon, level: "Code editor" },
  Figma: { name: "Figma", src: figmaIcon, level: "UIUX Design tool" },
  Blender: { name: "Blender", src: blenderIcon, level: "3D software" },
  Canva: { name: "Canva", src: canva, level: "Design" },
};

const stacks = {
  HTML: { name: "HTML", src: htmlIcon, level: "Advanced" },
  CSS: { name: "CSS", src: cssIcon, level: "Advanced" },
  SASS: { name: "SASS", src: sassIcon, level: "Intermediate" },
  PHP: { name: "PHP", src: phpIcon, level: "Intermediate" },
  JS: { name: "Javascript", src: jsIcon, level: "Intermediate" },
  React: { name: "ReactJS", src: reactIcon, level: "Intermediate" },
  NextJS: { name: "NextJS", src: nextjsIcon, level: "Beginner" },
  Laravel: { name: "Laravel", src: laravelIcon, level: "Advanced" },
  Flutter: { name: "Flutter", src: flutter, level: "Beginner" },
  Bootstrap: { name: "Bootstrap", src: bootstrapIcon, level: "Intermediate" },
  Tailwind: { name: "TailwindCSS", src: tailwindIcon, level: "Intermediate" },
  MySQL: { name: "MySQL", src: mysqlIcon, level: "Intermediate" },
  Python: { name: "Python", src: python, level: "Beginer" },
  Unity: { name: "Unity", src: unity, level: "Beginer" },
  PostgreSQL: { name: "PostgreSQL", src: postgresql, level: "Beginer" }
};

const projects = [
    {
    id: 3,
    name: "Video Promosi",
    desc: "Learning process using spline with react for Interactive 3D Object Web projects",
    image: treede,
    web: "https://ulinnaja-3-d-apps-intective.vercel.app",
    repo: "https://github.com/ulinnajaaldi/React-3D-Object-Intective",
    stack: "#Youtube",
    gif: "",
  },
  {
    id: 4,
    name: "API Quran",
    desc: "Learning process using spline with react for Interactive 3D Object Web projects",
    image: treede,
    web: "https://ulinnaja-3-d-apps-intective.vercel.app",
    repo: "https://github.com/ulinnajaaldi/React-3D-Object-Intective",
    stack: "#Flutter",
    gif: "",
  },
  {
    id: 5,
    name: "Newsite",
    desc: "This website is designed as a digital learning tool to introduce the art of wayang kulit to the public. The website features interactive 3D models of wayang kulit.",
    image: hot,
    web: "https://www.figma.com/design/PT1jw39eNVm5rp9ZZzmyqy/anwork?node-id=73-2&t=V2RYUSyRXdvLBAgG-1",
    repo: "https://github.com/Dinstyy/Newsite.git",
    stack: "#PHP, #Laravel, #Bootstrap",
    gif: abinawaGif,
  },
  {
    id: 6,
    name: "Sisfo Sarpras",
    desc: "The purpose of this platform is to provide students with a medium to share information about the latest events or news happening in the UMS community.",
    image: inpoums,
    web: "",
    repo: "https://github.com/ulinnajaaldi/laravel-react-inpo-ums",
    stack: "#Laravel, #Flutter",
    gif: "",
  },
  {
    id: 7,
    name: "Jadwal Mapel",
    desc: "Welcome to Notes app! With this app, you can create, edit, delete and organize your notes. You can also sign up and log in to access your notes. This app I made for complete the Dicoding React Fundamental course ⭐5.",
    image: jadwal,
    web: "https://notes-app-api-db-dicoding.vercel.app",
    repo: "https://github.com/ulinnajaaldi/Notes",
    stack: "#HTML, #CSS, #JavaScript",
  },
  {
    id: 8,
    name: "Learn Tag",
    desc: "My first personal portfolio!! I designed it by combining different ideas from various sources. It also has a secret game that you can play on your desktop. Can you find it? 🛸",
    image: learns,
    repo: "https://github.com/ulinnajaaldi/portofolio",
    stack: "#HTML, #CSS, #JavaScript",
    gif: learn,
  },
  {
    id: 9,
    name: "Kitchen Chaos",
    desc: "Trying to slice from Figma correctly to create a responsive website, and actually, it is already very good for being responsive (can be checked through inspect), but sometimes on certain screens, the margin is not read properly.",
    image: kitchens,
    repo: "https://bertumbuh.vercel.app/",
    stack: "#Unity",
    gif: "",
  },
  {
    id: 10,
    name: "Brick Breaker",
    desc: "Brick Breaker 🧱 merupakan permainan klasik memantulkan bola untuk menghancurkan balok 💥, lengkap dengan kontrol halus, efek suara seru dll.",
    image: brick,
    repo: "https://github.com/Dinstyy/Brick-Breaker.git",
    stack: "#Flutter",
    gif: bricks,
  },
  {
    id: 11,
    name: "Game SOS",
    desc: "Game SOS 🎮 dilengkapi fitur pergantian pemain, perhitungan skor, sound effect, deteksi menang & kalah 🏆 — seru buat adu strategi bareng teman! 🤝🔥",
    image: SOS,
    web: "https://youtu.be/PVticZtTvcQ?si=-TemRpjzsnhDyeSj",
    repo: "https://github.com/Dinstyy/SOS.git",
    stack: "#Unity",
    gif: sos,
  },
  {
    id: 12,
    name: "Food App",
    desc: "Food App 🍔 dengan fitur keranjang 🛒, order, dan halaman profil 👤 — semua dibungkus dalam tampilan yang simpel & responsif! 📱✨",
    image: food,
    repo: "https://github.com/Dinstyy/slicing-mobile.git",
    stack: "#Flutter",
    gif: foods,
  },
  {
    id: 13,
    name: "Luxor",
    desc: "Luxor 🏠 aplikasi jual beli properti lengkap dengan kalkulator KPR, fitur canggih berbasis AI 🤖, dan tools lain buat bantu kamu cari rumah impian dengan mudah.ᐟ",
    image: luxor,
    web: "https://www.figma.com/design/qoMcpc2KnQn6PMB0NfN093/Luxor?node-id=0-1&t=CVimVbwUQCl3CXrc-1",
    stack: "#Figma",
    gif: luxorGif,
  },
  {
    id: 14,
    name: "Stargius",
    desc: "Aplikasi Islam all-in-one 📿 buat cek jadwal sholat, baca Qur’an, dzikir, arah kiblat, tasbih, seru-seruan bareng komunitas muslim 🌙✨. dan masih banyak fitur seru lainnya✮⋆˙",
    image: stargius,
    web: "https://www.figma.com/design/GCSHeJ3i9layAlCAyzBAv6/Stargius?node-id=0-1&t=yMm609vvkdj4YoR3-1",
    stack: "#Figma",
    gif: stargiusGif,
  },
];

export { tools, stacks, projects };
