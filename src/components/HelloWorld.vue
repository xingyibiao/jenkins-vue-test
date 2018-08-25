<template>
  <div class="hello">
    <p>elment-ui表单</p>
    <el-form :model="formState" :rules="rules" status-icon ref="eleForm">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="formState.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="formState.password"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="repassword">
        <el-input v-model="formState.repassword"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm()">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;

  private iname: string = ''

  // 表单状态
  public formState = {
    username: '',
    password: '',
    repassword: '',
  }

  // 表单校验规则
  public rules = {
    username: [
      {
        required: true,
        message: '请输入用户名',
        trigger: 'change',
      },
    ],
    password: [
      {
        required: true,
        message: '请输入密码',
        trigger: 'blur',
      },
    ],
    repassword: [
      {
        validator: this.passwordEqu,
        trigger: 'change',
      },
    ],
  }

  // 自定义校验规则
  private passwordEqu(rule: any, value: string, cb: (err?: Error) => void) {
    if (value === '') {
      cb(new Error('请再次输入密码'))
    } else if (value !== this.formState.password) {
      cb(new Error('两次密码不一致'))
    } else {
      cb()
    }
  }

  // 点击提交表单
  public submitForm() {
    (this.$refs.eleForm as any).validate((valid: boolean, msg: object) => {
      if (valid) {
        this.$message.success('验证通过')
      } else {
        // console.log(msg)
        this.$message.error('请检查表单数据')
      }
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
