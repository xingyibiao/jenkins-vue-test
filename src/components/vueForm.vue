<template>
  <div class="vue-form">
    <vue-form :state="formState" @submit.prevent="onSubmit">
      <validate tag="label">
        <span>用户名</span>
        <input v-model="model.username" required name="username" />
        <field-messages name="username">
          <span>Success</span>
          <template slot="required" slot-scope="state">
            <span v-if="state.$dirty || state.$submitted">请输入用户名</span>
          </template>
        </field-messages>
      </validate>
      <validate tag="label">
        <span>密码</span>
        <input v-model="model.password" required name="password" />
        <field-messages name="password">
          <div>Success!</div>
          <template slot="required" slot-scope="state">
            <span v-if="state.$dirty || state.$submitted">请输入密码</span>
          </template>
        </field-messages>
      </validate>
      <validate tag="label">
        <span>用户名</span>
        <input v-model="model.repassword" required name="repassword" />

        <field-messages name="repassword">
          <div>Success!</div>
          <template slot="required" slot-scope="state">
            <span v-if="state.$dirty || state.$submitted">请确认密码</span>
          </template>
        </field-messages>
      </validate>
      <button type="submit">Submit</button>
    </vue-form>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import VueForm from 'vue-form'

@Component
export default class VueFormVal extends mixins(VueForm) {
  // 表单状态
  public formState: any = {}

  // 表单值
  public model = {
    username: '',
    password: '',
    repassword: '',
  }

  public onSubmit() {
    if (!this.formState.$invalid) { // 表单验证通过
      // TODO xxx
    } else { // 表单验证不通过
      // console.log(this.formState)
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
