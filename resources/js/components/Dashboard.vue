<template>
   <h1>Welcome {username}, <a @click="logout" class="primary">Logout</a>
   </h1>
</template>
<script>
export default {
    data(){
        return {
            username: "Ali"
        }
    },
    methods: {
        logout(){
            axios
          .get("/logout")
          .then((res) => {
            console.log(res);
          // this.$router.push("/");
          
          })
          .catch((err) => {
           console.log("login error", err);
          });
        }
    }
}
</script>