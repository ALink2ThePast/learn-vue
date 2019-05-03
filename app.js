new Vue ({
  el: '#app',
  data: {
    name: 'Brian',
    age: 30,
    text: 'Hello Vue!',
    linkTo: 'https://www.duckduckgo.com',
  },
  methods: {
    addToAge: function(n) {
      return this.age + n;
    },
    increaseAge: function() {
      this.age++;
    },
  }
});
