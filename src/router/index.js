import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";
import Profile from "../views/Profile.vue";
import Groups from "../views/Groups.vue";
import GroupsIndex from "../views/GroupsIndex.vue";
import GroupsEdit from "../views/GroupsEdit.vue";
import GroupsCreate from "../views/GroupsCreate.vue";
import GroupsNotification from "../views/GroupsNotification.vue";


import Notifications from "../views/Notifications.vue";


import { authGuard } from "../auth";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile,
      beforeEnter: authGuard
    },
    {
      path: "/groups",
      component: GroupsIndex,
      beforeEnter: authGuard
    },
    {
      path: "/groups/list",
      component: Groups,
      beforeEnter: authGuard
    },
    {
      path: "/groups/create",
      component: GroupsCreate,
      beforeEnter: authGuard
    },
    {
      path: "/groups/edit/:id",
      component: GroupsEdit,
      beforeEnter: authGuard
    },
    {
      path: "/groups/notification/:id",
      component: GroupsNotification,
      beforeEnter: authGuard
    },
    {
      path: "/notification",
      component: Notifications,
      beforeEnter: authGuard
    }
  ]
});

export default router;
