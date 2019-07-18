<template>
  <div id="aboutUser">
    <h3>연락처를 입력해주세요!</h3>
    <div id="newUser">
      <input type="text" v-model="name" placeholder="이름" v-on:keyup.enter="addUser">
      <input type="text" v-model="phone" placeholder="전화번호" v-on:keyup.enter="addUser">
      <button @click="addUser">등록</button>
      <h3>{{name}} : {{phone}} </h3>
    </div>

    <h3 v-for="(user,index) in users" v-bind:key="user.id">
        <router-link :to="{name: 'DetailUser', params: {id: index}}">{{user.name}} : {{user.phone}}</router-link> 
    </h3>
  </div>
</template>

<script>
export default {
  name: 'aboutUser',
  data() {
    return {
      users:[],
      name:'',
      phone:''
    }
  },

  //처음에 유저정보 가져오기
  beforeCreate () {   
    this.$axios.get('/api/users')
    .then((resp) => {
      this.users = resp.data.response
    })
  },
  //유저정보 추가시 화면에 바로 적용
  updated () {
    this.$axios.get('/api/users')
    .then((resp) => {
      this.users = resp.data.response
    })
  },
  methods: {
    addUser(){
      if(this.name !== "" && this.phone !== ""){
        this.$axios.post('/api/users', {name:this.name, phone:this.phone})
          .then((resp) => {
            //this.name = resp.data.respose.name;
            //this.phone = resp.data.respose.phone;
          })
        this.clearInput(); 
        created();
      }else{
        alert("입력하세요!");
      }
    },
    clearInput(){
            this.name='';
            this.phone='';
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
