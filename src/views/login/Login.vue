<template>
  <div id="box">
    <div class="position-content">
      <div class="login-cont">
        <div class="login-title">扫码点餐商户端</div>
        <div class="login-user">
          <p>账号</p>
          <el-input v-model="account" clearable class="input-flex" placeholder="请输入账号"/>
        </div>
        <div class="login-user">
          <p>密码</p>
          <el-input v-model="password" show-password class="input-flex" placeholder="请输入密码"/>
        </div>
        <!-- 登录和注册按钮的切换 -->
        <div class="reg-view"
             @click="registerText = registerText === '登录' ? '注册' : '登录'"
        ><p>{{ registerText }}</p></div>
        <!-- 登录或注册按钮提交 -->
        <el-button v-if="registerText === '注册'" @click="signIn" class="login-btn">登录</el-button>
        <el-button v-else @click="register" class="login-btn">注册</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
  name: 'Login',
  setup () {
    const user = reactive({
      account: '',
      password: '',
      registerText: '注册'
    })
    // 登录
    const signIn = () => {
      console.log(user.account)
    }

    // 注册
    const register = () => {
      console.log(user.password)
    }

    return {
      ...toRefs(user), signIn, register
    }
  }
}
</script>

<style scoped lang="scss">
#box {
  height: 100%;
  background: linear-gradient(120deg, rgb(6, 129, 140) 0%, rgb(16, 70, 115) 100%) no-repeat;
  background-size: cover;
  /*设置沾满整个屏幕*/
  min-height: 100vh;
}

.position-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.login-cont {
  width: 500px;
  height: 300px;
  border-radius: 5px;
}

.login-title {
  text-align: center;
  color: white;
  font-size: 30px;
  padding-top: 30px;
  font-family: Arial, Helvetica, sans-serif;
}

.login-user {
  width: 400px;
  margin: 0 auto;
  padding-top: 30px;
  height: 40px;
  display: flex;
  align-items: center;

  p {
    width: 50px;
    color: white;
    font-size: 16px;
  }
}

.input-flex {
  flex: 1;
}

.reg-view {
  width: 400px;
  display: flex;
  justify-content: flex-end;
  margin: 0 auto;
  padding-top: 10px;

  p {
    color: white;
    cursor: pointer;
    display: contents;
  }
}

.login-btn {
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px auto 0 auto;
  font-size: 16px;
}

</style>
