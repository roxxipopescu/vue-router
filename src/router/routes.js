import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Profile from "../views/Profile.vue";
import ProfileID from "../components/ProfileID.vue";
import Categories from "../components/Categories.vue";

export default [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    children: [
      {
        path: ":id",
        component: ProfileID,
        name: "ProfileID",
        children: [
          {
            path: "categories/:categId",
            component: Categories,
            name: "Categories",
          },
        ],
      },
    ],
  },
];
