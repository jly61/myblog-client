<template>
  <div class="login-wrapper">
    <div class="form-wrapper">
      <h1>jly 的博客</h1>
      <div class="login-form">
        <div class="form-header">
          <h2>注册</h2>
          <div class="header-right">
            已有账号 <span @click="toLogin">登录</span>
          </div>
        </div>
        <div class="form-content">
          <div>
            <input type="text" placeholder="用户名" class="input" v-model="nickname">
          </div>
          <div>
            <input type="password" placeholder="密码" class="input" v-model="pwd">
          </div>
          <div>
            <input type="text" placeholder="邮箱" class="input" v-model="email">
          </div>
          <div class="code">
            <input type="text" placeholder="验证码" class="input code-input" v-model="code">
            <div class="send-code">发送验证码</div>
          </div>
          <div>
            <button @click="onRegister">注册</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { register } from '../../api'

  export default {
    name: 'register',
    data () {
      return {
        nickname: '',
        email: '',
        pwd: '',
        code: ''
      }
    },
    methods: {
      toLogin () {
        this.$router.push('/login')
      },
      onRegister () {
        if ((this.nickname || this.email || this.pwd || this.code) === '') {
          return false
        }
        const params = {
          nickname: this.nickname,
          email: this.email,
          pwd: this.pwd
        }
        register(params).then(res => {
          const data = res.data
          if (data.status === 2) {
            // console.log('用户名已存在')
          } else if (data.status === 0) {
            // console.log('注册成功')
            this.$router.push('/login')
          }
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .login-wrapper {
    background: #efefef;
    display: flex;
    justify-content: center;
    height: 100vh;
    color: #555;
    .form-wrapper {
      margin-top: 80px;
      text-align: center;
      h1 {
        font-size: 24px;
      }
      .login-form {
        width: 400px;
        height: 400px;
        margin-top: 10px;
        background: #fff;
        padding: 40px;
        box-sizing: border-box;
        .form-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          .header-right {
            font-size: 12px;
            span {
              color: #3399ff;
              &:hover {
                text-decoration: underline;
                cursor: pointer;
              }
            }
          }

        }
        .form-content {
          margin-top: 15px;
          .code {
            display: flex;
            .send-code {
              padding: 0 5px;
              width: 80px;
              height: 34px;
              line-height: 36px;
              margin-top: 0;
              font-size: 12px;
              border: 1px solid #eee;
              border-radius: 5px;
              background: #3399ff;
              color: #fff;
            }
          }
          div {
            margin-top: 20px;
            input {
              outline: none;
              width: 100%;
              height: 36px;
              box-sizing: border-box;
              border: 1px solid #ddd;
              border-radius: 5px;
              padding: 0 10px;
            }
          }
          .forget {
            text-align: right;
            font-size: 14px;
          }
          button {
            height: 36px;
            width: 100%;
            outline: none;
            opacity: .8;
            border: 1px solid #eee;
            border-radius: 5px;
            background: #3399ff;
            color: #fff;
            &:hover {
              cursor: pointer;
            }
          }
        }
      }
    }
  }
</style>
