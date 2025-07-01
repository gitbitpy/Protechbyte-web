import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about-us",
    newTab: false,
  },
  {
    id: 3,
    title: "Contact",
    path: "/contact-us",
    newTab: false,
  },
  {
    id: 4,
    title: "Services",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Backup & Disaster Recovery",
        path: "/services/backups-and-disaster-recovery",
        newTab: false,
      },
      {
        id: 42,
        title: "Server Administrator",
        path: "/services/server-administration",
        newTab: false,
      },
      {
        id: 43,
        title: "Cloud Managed Services",
        path: "/services/cloud-managed-services",
        newTab: false,
      },
      {
        id: 44,
        title: "Digital Transformation",
        path: "/services/web-development",
        newTab: false,
      },
      {
        id: 45,
        title: "Storage Solutions",
        path: "/services/storage",
        newTab: false,
      },
      {
        id: 46,
        title: "Cloud Migrations",
        path: "/services/cloud-managed-services",
        newTab: false,
      },
      {
        id: 47,
        title: "Virtualization",
        path: "/services/virtualization",
        newTab: false,
      },
      {
        id: 48,
        title: "Cybersecurity",
        path: "/services/server-administration",
        newTab: false,
      },
    ],
  },
];
export default menuData;
