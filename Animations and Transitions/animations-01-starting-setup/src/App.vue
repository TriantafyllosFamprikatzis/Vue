<template>
  <div class="container">
    <users-list></users-list>
  </div>
  <div class="container">
    <div class="block" :class="{ animate: animatedBlock }"></div>
    <button @click="animateBlock">Animate</button>
  </div>
  <div class="container">
    <!-- Total custom class naming -->
    <!-- <transition enter-to-class="" enter-active-class="" enter-from-class=""> -->

    <!-- Replaces the v- with para- on the classes -->
    <!-- <transition name="para"> -->

    <!-- By default class names start with v-  -->

    <!-- css false tells vue that we will not use css inside css code for this transition but with JS and improves performance -->
    <transition
      :css="false"
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
      @entered-cancelled="enterCancelled"
      @leave-cancelled="leaveCancelled"
    >
      <p v-if="paragraphIsVisible">This is only somethimes visible</p>
    </transition>
    <button @click="toggleParagraph">Toggle Paragraph</button>
  </div>

  <!-- Transition needs to have only one child element otherwise it does not -->
  <!-- Work, below base-model has 2 thus it doesnt and  -->
  <!-- This is why we add the transition inside the component -->
  <!-- <transition name="modal"> -->
  <base-modal @close="hideDialog" :open="dialogIsVisible">
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </base-modal>
  <!-- </transition> -->
  <div class="container">
    <!-- this is an exception transition can have 2 childs cause only one is active at a time -->
    <transition name="fade-button" mode="out-in">
      <button v-if="!usersAreVisible" @click="showUsers">Show Users</button>
      <button v-else-if="usersAreVisible" @click="hideUsers">Hide Users</button>
    </transition>
  </div>
  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div>
</template>  

<script>
import UsersList from './components/UsersList.vue';

export default {
  components: { UsersList },
  data() {
    return {
      dialogIsVisible: false,
      animatedBlock: false,
      paragraphIsVisible: false,
      usersAreVisible: false,
      enterInterval: null,
      leaveInterval: null,
    };
  },
  methods: {
    enterCancelled() {
      clearInterval(this.enterInterval);
    },
    leaveCancelled() {
      clearInterval(this.leaveInterval);
    },
    beforeEnter(el) {
      console.log('beforeEnter()');
      console.log(el);
      el.style.opacity = 0;
    },
    enter(el, done) {
      console.log('enter');
      console.log(el);

      let round = 1;
      this.enterInterval = setInterval(() => {
        el.style.opacity = round * 0.01; //Adds 10% each round
        round++;
        if (round > 100) {
          //Check if reaches 100% opacity
          clearInterval(this.enterInterval);
          done(); //Tell vue when this is done in order to proceed to the next
        }
      }, 20); // 20 miliseconds
    },
    afterEnter(el) {
      console.log('after enter');
      console.log(el);
    },
    beforeLeave(el) {
      console.log('beforeLeave()');
      console.log(el);
      el.style.opacity = 1;
    },
    leave(el, done) {
      console.log('Leave()');
      console.log(el);

      let round = 1;
      this.leaveInterval = setInterval(() => {
        el.style.opacity = 1 - round * 0.01;
        round++;
        if (round > 100) {
          clearInterval(this.leaveInterval);
          done();
        }
      }, 20);

      // let round = 1;
      // const interval = setInterval(function() {
      //   el.style.opacity = 1 - round * 0.01;
      //   round++;
      //   if (round > 100) {
      //     clearInterval(interval);
      //     done();
      //   }
      // }, 20);
    },
    afterLeave(el) {
      console.log('afterLeave()');
      console.log(el);
    },
    showUsers() {
      this.usersAreVisible = true;
    },
    hideUsers() {
      this.usersAreVisible = false;
    },
    toggleParagraph() {
      this.paragraphIsVisible = !this.paragraphIsVisible;
    },
    animateBlock() {
      this.animatedBlock = true;
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  /* transition: transform 0.3s ease-out; */
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}
.animate {
  /* transform: translateX(-150px); */
  animation: slide-fade 0.3s ease-out forwards;
}

/* Vue Utility transition classes for Adding */

/* The start of animation
.v-enter-from {
  /* opacity: 0; */
/* transform: translateY(-30px); */
/* } */

/* Tell vue to watch for all aniations */
/* .v-enter-active { */
/* transition: all 0.3s ease-out; */
/* animation: slide-fade 2s ease-out; */
/* } */

/* End of animation */
/* .v-enter-to { */
/* opacity: 1;
  transform: translateY(0); */
/* } */

/* Vue Utility transition classes for Removing */
/* .v-leave-from { */
/* opacity: 1;
  transform: translateY(0); */
/* } */

/* .v-leave-active { */
/* transition: all 0.3s ease-in; */
/* animation: slide-fade 0.3s ease-out; */
/* } */

/* .v-leave-to { */
/* opacity: 0;
  transform: translateY(-30px); */
/* } */

.fade-button-enter-from,
.fade-button-leave-to {
  opacity: 1;
}
.fade-button-enter-active {
  transition: opacity 0.3s ease-out;
}
.fade-button-leave-active {
  transition: opacity 0.3s ease-in;
}
.fade-button-enter-to,
.fade-button-leave-from {
  opacity: 0;
}

@keyframes slide-fade {
  0% {
    transform: translateX(0) scale(1);
  }

  70% {
    transform: translateX(-120px) scale(1.1);
  }

  100% {
    transform: translateX(-150px) scale(1);
  }
}
</style>