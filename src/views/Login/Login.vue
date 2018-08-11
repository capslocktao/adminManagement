<template>
  <div id="login">
    <div class="login-box">
      <h3>登录账户</h3>
      <el-form :model="loginForm" status-icon label-width="100px" ref="loginForm" class="login-form" :rules="rules">
        <el-form-item label="用户名" prop="name">
          <el-input type="text" v-model="loginForm.name"/>
        </el-form-item>
        <el-form-item label="登录密码"prop="password">
          <el-input v-model="loginForm.password" type="password"/>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login('loginForm')">登录</el-button>
          <el-button @click="reset('loginForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      loginForm: {
        name: '',
        password: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ],
      }
    }
  },
  methods: {
    login(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$message({message: '用户登录成功', type: 'success', duration: 1000})
          this.$router.push(`${this.$host}/`)
        } else {
          return false
        }
      })
    },
    reset(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style scoped lang="less">
@import "style/Login.less";
</style>
