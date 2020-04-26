export default {
  data() {
    return {
      loading: false,
      activeLoading: [],
    };
  },
  methods: {
    setLoading(tag) {
      this.activeLoading.push(tag);
      this.loading = true;
    },
    finishedLoading(tag) {
      if (!this.activeLoading.includes(tag)) {
        console.error('Tried to remove tag not in active loading, error?');
      } else {
        this.activeLoading.splice(this.activeLoading.indexOf(tag), 1);
        if (this.activeLoading.length === 0) this.loading = false;
      }
    },
  },
};
