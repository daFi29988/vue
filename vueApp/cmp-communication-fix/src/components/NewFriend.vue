<template>
  <form @submit.prevent="submitData">
    <div>
      <labe>Name </labe>
      <input type="text" v-model="enteredName" />
    </div>
    <div>
      <labe>Phone </labe>
      <input type="tel" v-model="enteredPhone" />
    </div>
    <div>
      <labe>Email </labe>
      <input type="email" v-model="enteredEmail" />
    </div>
    <button>Add Contact</button>
  </form>
</template>

<script>
export default {
  emits: ["add-contact"],
  data() {
    return {
      enteredName: "",
      enteredPhone: "",
      enteredEmail: "",
    };
  },
  methods: {
    submitData() {
      this.$emit(
        "add-contact",
        this.enteredName,
        this.enteredPhone,
        this.enteredPhone
      );
    },
  },
};
</script>
