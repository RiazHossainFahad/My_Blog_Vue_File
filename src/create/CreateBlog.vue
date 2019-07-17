<template>
    <div class="container">
        <div class="form-section">
            <h4 class="add-blog">Add Blog</h4>
            <form class="form" id="myForm" method="POST" enctype="multipart/form">
                Title
                <input type="text" id="title" v-model="title" placeholder="Title">
                Body
                <textarea id="body" v-model="body" cols="30" rows="5"></textarea>
                Banner
                <input type="file" id="file" ref="file" @change="processFile($event)">
                <div class="btn-right">
                    <button @click.prevent="sendData" class="btn">Add Blog</button>
                </div>
            </form>
        </div>
        <div class="preview-section">
            <h3 class="add-blog">Preview Of Your Post</h3>
            <div class="preview">
                <div class="image">
                    <img v-if="img" :src="img" alt="ImageOfPost" width="120px" height="100px">
                </div>
                <div class="text">
                    <h3>{{ title }}</h3>
                    <p>{{ body }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'CreateBlog',
  data() {
    return {
      title: '',
      body: '',
      img: '',
      file: '',
    };
  },
  methods: {
    handleFileUpload() {
      // {this.file} = this.$refs.file.files[0];
    },
    processFile(event) {
      this.img = URL.createObjectURL(event.target.files[0]);
      this.file = this.$refs.file.files[0];
    },
    sendData() {
      if (this.img === '' || this.title === '' || this.body === '') {
        console.log('Ooppss!! Empty Post!!');
      } else {
        // const data = document.getElementById('myForm');
        const formData = new FormData();
        formData.append('url', this.file);
        formData.append('title', this.title);
        formData.append('body', this.body);
        // const obj = {
        //   title: this.title,
        //   body: this.body,
        //   url: this.imgUrl,
        // };
        this.$store.dispatch('setPosts', formData);
      }
    },
  },
};
</script>

<style scoped>
.container{
box-sizing: border-box;
}
.form-section{
    margin: 15px 10px;
    background: rgb(241, 232, 232) ;
}
.preview-section{
    margin: 15px 10px;
    background: rgb(241, 232, 232) ;
    padding: 20px;
}

.preview{
    display:flex;
}

.add-blog{
    padding-top: 10px;
    text-align:center;
    color: rgb(33, 184, 33);
}
.form{
    margin: 0 0 20px 30px;
}
input, textarea{
    display: block;
    width: 90%;
    border-radius: 6px;
    padding: 10px;
    margin-bottom: 5px;
    outline: none;
}
.btn-right{
    width: 95%;
    display: flex;
    justify-content: flex-end;
}
.btn{
    background: #00FFFF;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-bottom: 20px
}
.text{
    margin-left: 20px;
    word-wrap: break-word;
    overflow: auto;
}
</style>
