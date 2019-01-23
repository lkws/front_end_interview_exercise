<template>
<div>
  <div>
    <Row type="flex" justify="space-between" class="code-row-bg">
      <i-col span="2"> </i-col>
      <i-col span="20" align="center">
        <Table border ref="selection" :columns="columns4" :data="data1"></Table><br></i-col>
      <i-col span="2"> </i-col> </Row>
    <Row type="flex" justify="space-between" class="code-row-bg">
      <i-col span="2"> </i-col>
      <i-col span="2" align="center"> <Button @click="handleSelectAll(true)" type="primary">设置全选</Button> </i-col>
      <i-col span="2" align="center"> <Button @click="handleSelectAll(false)" type="primary">取消全选</Button> </i-col>
      <i-col span="2" align="center"> <Button  to="/">返回首页</Button></i-col>
      <i-col span="16"> </i-col> </Row>

  </div>
  <br><br><br>

</div>
</template>

<script>
export default {
  name: 'DatatableExe',
  data () {
    return {
      columns4: [
        {
          type: 'selection',
          width: 60,
          align: 'center'
        },
        {
          title: 'Name',
          key: 'name'
        },
        {
          title: 'Age',
          key: 'age'
        },
        {
          title: 'Address',
          key: 'address'
        }
      ],
      data1: [
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park',
          date: '2016-10-03'
        },
        {
          name: 'Jim Green',
          age: 24,
          address: 'London No. 1 Lake Park',
          date: '2016-10-01'
        },
        {
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park',
          date: '2016-10-02'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        }
      ]
    }
  },
  methods: {
    handleSelectAll (status) {
      this.$refs.selection.selectAll(status)
    }
  }
}
</script>

<style scoped>

</style>
