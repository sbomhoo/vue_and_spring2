<template>
  <div id="WriteForm">
      <h3>글쓰기 페이지 입니다.</h3>
         <div id="innerdiv">
          <datepicker placeholder="날짜를 선택하세요!" v-model="date"  
              :format="customFormatter"></datepicker>
            
        </div>
        <br>
        <textarea cols="30" rows="10" v-model="contents"></textarea> <br>
        <button @click="writeSubmit" >글입력</button>
        <hr>

        <h3 v-for="write in writes" v-bind:key="write.id">
            {{write.date}} : {{write.contents}}
        </h3>

  </div>
</template>

<script>
import moment from 'moment';
import Datepicker from 'vuejs-datepicker';

export default {
  components: {
    Datepicker
  },
  data(){
    return{
      date: '',
      writes:[],
      contents: '',
      
    }
  },
  //write 정보 가져오기
  beforeCreate () {
    this.$axios.get('/api/writes')
    .then((resp)=>{
      this.writes = resp.data.response
    })
  },
  updated () {
    this.$axios.get('/api/writes')
    .then((resp)=> {
      this.writes = resp.data.response
    })
  },

  methods: {
    
    //날짜 포맷
    customFormatter(date) {
      var formattingDate = moment(date).format('YYYY/MM/DD ddd');

      return formattingDate;
    },

    writeSubmit(){
      if(this.date !=="" && this.contents !==""){
        this.$axios.post('/api/writes',{date:this.date, contents:this.contents})
        .then((resp) => {

        })
        this.clearInput();
        created();
      }else{
        alert("입력하세요!")
      }
    },
    clearInput(){
      this.date='';
      this.contents='';
    }
  }
}
</script>

<style scoped>
#innerdiv {
  padding-left: 45%
 
}
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
