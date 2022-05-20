<template>
  <base-card>
    <Button
      @click="setSelectedTab('stored-resources')"
      :mode="storedResButtonMode"
      >Stored Resources</Button
    >
    <Button @click="setSelectedTab('add-resource')" :mode="addResButtonMode"
      >Add Resource</Button
    >
  </base-card>
  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
</template>

<script>
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';

export default {
  components: { StoredResources, AddResource },
  data() {
    return {
      selectedTab: 'stored-resources',
      storedResources: [
        {
          id: 'official-guide',
          title: 'Offical Guide',
          description: 'The Offical Vue.js Documentation',
          link: 'https://vuejs.org',
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn to Google...',
          link: 'https://google.org',
        },
      ],
    };
  },
  provide() {
    return {
      resources: this.storedResources,
      addResource: this.addResource,
    };
  },
  computed: {
    storedResButtonMode() {
      return this.selectedTab === 'stored-resources' ? null : 'flat';
    },
    addResButtonMode() {
      return this.selectedTab === 'add-resource' ? null : 'flat';
    },
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    addResource(title, description, link) {
      const newResource = {
        id: new Date().toISOString(),
        title: title,
        description: description,
        link: link,
      };
      this.storedResources.unshift(newResource); //push at the top
      this.selectedTab = 'stored-resources'; // Opens the tap with the resources
    },
  },
};
</script>