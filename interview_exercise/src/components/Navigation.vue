<template>
<div>
  <Menu mode="horizontal" :theme="theme1" active-name="1">
    <menu-item name="1" to="/">
      <Icon type="ios-paper" />
      首页
    </menu-item>
    <menu-item name="2">
      <Icon type="ios-people" />
      同左不做演示
    </menu-item>
    <Submenu name="3">
      <template slot="title">
        <Icon type="ios-stats" />
        含子页面
      </template>
      <MenuGroup title="子页面">
        <menu-item name="3-1" to="/DatatableExe">表格展示</menu-item>
        <menu-item name="3-2">子页面二</menu-item>
        <menu-item name="3-3">子页面三</menu-item>
      </MenuGroup>
      <MenuGroup title="同上不做演示">
        <menu-item name="3-4">未设链接</menu-item>
        <menu-item name="3-5">未设链接</menu-item>
      </MenuGroup>
    </Submenu>
    <menu-item name="4">
      <Icon type="ios-construct" />
      同左不做演示
    </menu-item>
  </Menu>
</div>
</template>

<script>
export default {
  name: 'Navigation',
  data () {
    return {
      theme1: 'primary'
    }
  }
}
</script>

<style scoped>
  
</style>
