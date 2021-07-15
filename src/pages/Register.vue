<template>
  <div class="app">
    <div id="page-register">
      <div class="container">
        <div class="card card-container">
          <img
            id="profile-img"
            alt=""
            class="profile-img-card"
            src="https://ssl.gstatic.com/accounts/ui/avatar_2x.png"
          />
          <p id="profile-name" class="profile-name-card"></p>

          <form
            id="form-signup"
            class="form-signin"
            @submit.prevent="handleRegister"
          >
            <div class="form-group">
              <!-- <label>Email</label> -->
              <input
                v-model="email"
                type="text"
                class="form-control"
                placeholder="Địa chỉ email"
              />
            </div>
            <div class="form-group">
              <!-- <label>Mật khẩu</label> -->
              <input
                v-model="password"
                type="password"
                class="form-control"
                placeholder="Mật khẩu"
              />
            </div>
            <div class="form-group">
              <!-- <label>Nhập lại mật khẩu</label> -->
              <input
                v-model="repassword"
                type="password"
                class="form-control"
                placeholder="Nhập lại mật khẩu"
              />
            </div>
            <button
              class="btn btn-lg btn-primary btn-block btn-signin"
              type="submit"
            >
              Đăng ký
            </button>
          </form>

          <router-link to="login" class="register">Đăng nhập</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app-register",
  data() {
    return {
      email: "",
      password: "",
      repassword: ""
    };
  },
  methods: {
    handleRegister() {
      if(this.email && this.password && this.repassword){
        if(this.password !== this.repassword){
          alert('Nhập lại mật khẩu không đúng')
        }else{
          let data = {
            email: this.email,
            password: this.password
          }
          this.$store.dispatch('register',data).then(res => {
            if(res.ok){
              alert('Đăng ký thành công')
              this.$router.push('/')

            }else{
              alert(res.error)
            }
          })
        }

      }else{
        alert('Vui lòng nhập đầy đủ thông tin')
      }
    }
  }
};
</script>

<style></style>
