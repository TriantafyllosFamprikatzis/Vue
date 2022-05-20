import { createRouter, createWebHistory } from 'vue-router'

import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './components/nav/NotFound.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue';
import UsersFooter from './components/users/UsersFooter.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/teams' },
    {
      path: '/teams', name: 'teams', meta: { needsAuth: true }, components: { default: TeamsList, footer: TeamsFooter }, children: [
        { path: ':teamId', name: 'team-members', component: TeamMembers, props: true }, //We pass the link param through a prop, /teams/someId
      ]
    },
    {
      path: '/users', components: { default: UsersList, footer: UsersFooter }, beforeEnter(to, from, next) {
        console.log("Users before each");
        next();
      }
    },
    { path: '/:notFound(.*)', component: NotFound },
  ],
  scrollBehavior(to, from, savedPosition) {
    console.log(to, from, savedPosition);
    if (savedPosition) {
      //If exists we jump to the saved posiiton (works on the BACK button)
      return savedPosition;
    }

    // if saved position does not exist we jump to the top
    return { left: 0, top: 0 }

  }
  // Change router link class 
  // linkActiveClass: 'active'
});

router.beforeEach(function (to, from, next) {
  // if (to.name === 'team-members') {
  //   next();
  // } else {
  //   next({ name: 'team-members', params: { teamId: 't2' } });
  // }

  if (to.meta.needsAuth) {
    console.log("Needs Auth");
    next();
  } else {
    next();
  }

  console.log("Global before each");
  next();
});

router.afterEach(function (to, from) {
  // sending analytics data
  console.log(to, from)
  console.log("Global after each");
});

export default router;