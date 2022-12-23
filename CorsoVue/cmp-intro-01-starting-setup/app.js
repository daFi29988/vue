const app = Vue.createApp({
  data() {
    return {
      friends: [
        
        {
            id: "julie",
            name: "Julie Jones",
            phone: "3464445343",
            email: "julie@localhost.com",
          },
        {
          id: "paolo",
          name: "Paolo Gomez",
          phone: "34644454443",
          email: "paolo.gomez@localhost.com",
        },
      ],
    };
  },
});

app.component("friend-contact", {
  template: `
    <li>
          <h2>{{ friend.name }}</h2>
          <button @click="toogleDetails()">
            {{ detailsAreVisibile ? 'Hide' : 'Show' }} Details
          </button>
        <ul v-if="detailsAreVisibile">
            <li><strong>Phone:</strong> {{ friend.phone }}</li>
            <li><strong>Email:</strong> {{ friend.email }}</li>
        </ul>
    </li>
    `,
  data() {
    return { 
        detailsAreVisibile: false,
        friend: {
            id: "manuel",
            name: "Manuel Lorenz",
            phone: "1234556654",
            email: "manuel@localhost.com",
          },
    };
  },
  methods: {
    toogleDetails() {
      this.detailsAreVisibile = !this.detailsAreVisibile;
    },
  },
});

app.mount("#app");
