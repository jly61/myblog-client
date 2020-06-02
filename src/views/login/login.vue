<template>
    <div class="login-wrapper">
      <div class="form-wrapper">
        <h1>jly 的博客</h1>
        <div class="login-form">
          <div class="form-header">
            <h2>登陆</h2>
            <div class="header-right">
              没有账号 <span @click="toRegister">注册</span>
            </div>
          </div>
          <div class="form-content">
            <div>
              <input type="text" placeholder="邮箱" class="input" v-model="email">
            </div>
            <div>
              <input type="password" placeholder="密码" class="input" maxlength="16" v-model="pwd">
            </div>
            <div class="forget">
              <span class="error" v-if="isShowError">用户名或密码错误</span>
              <span>忘记密码?</span>
            </div>
            <div>
              <button @click="onLogin">登录</button>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import { login } from '../../api'

  export default {
    name: 'login',
    data  () {
      return {
        email: '',
        pwd: '',
        isShowError: false
      }
    },
    methods: {
      toRegister () {
        this.$router.push('/register')
      },
      onLogin () {
        const params = {
          email: this.email,
          pwd: this.pwd
        }
        login(params).then(res => {
          const data = res.data
          if (data.status === 0) {
            localStorage.setItem('nickname', data.result.nickname)
            localStorage.setItem('nickname', data.result.avatar)
            this.$router.push('/')
          } else {
            this.isShowError = true
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
            display: flex;
            justify-content: space-between;
            text-align: right;
            font-size: 14px;
            .error {
              color: red;
            }
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
