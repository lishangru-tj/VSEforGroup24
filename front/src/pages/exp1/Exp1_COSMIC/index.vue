<template>

  <h1 class="title">实验1 基于COSMIC的小型软件项目规模度量实验

    <span> <el-button class="guidance" type="primary" text @click="pdfHandle"><el-icon size="25px">
          <Document />
        </el-icon>实验指导书下载</el-button></span>
  </h1>
  <hr />
  <!-- <span> {{ test }}</span> -->
  <h2>一、实验目的 </h2>
  <p class="content">理解软件项目规模度量功能点法原理，通过实验操作掌握功能点法。 学生应以小组为单位，根据本小组“软件工程管理与经济”课程设计项目架构及组件等设计成果，以功能点方法测量该项目的规模(功能点数量)。 建议选用某一种功能点方法度量课程设计项目的功能点，并采用另外一种功能点方法或其他的软件规模度量方法对前一种方法的度量结果进行验证。
    本实验为课内设计性实验项目，实验学时 1 学时，完成实验报告 1 学时。
  </p>
  <h2>二、实验参数 </h2>

  <el-table :data="tableData" border style="width: 100%" :summary-method="data=>getSummaries(data,index)" show-summary ref="detailTable">
    <el-table-column prop="component" label="组件" width="80" />
    <el-table-column prop="number" label="数量" width="80" />
    <el-table-column label="复杂度">
      <el-table-column label="简单">
        <el-table-column label="计数">
          <el-table-column prop="A" label="A" />\
        </el-table-column>
        <el-table-column label="权重">
          <el-table-column prop="B" label="B" />
        </el-table-column>
        <el-table-column label="功能点数">
          <el-table-column prop="C" label="C=A*B" />
        </el-table-column>
      </el-table-column>
      <el-table-column label="平均">
        <el-table-column label="计数">
          <el-table-column prop="D" label="D" />
        </el-table-column>
        <el-table-column label="权重">
          <el-table-column prop="E" label="E" />
        </el-table-column>
        <el-table-column label="功能点数">
          <el-table-column prop="F" label="F=D*E" />
        </el-table-column>
      </el-table-column>
      <el-table-column label="复杂">
        <el-table-column label="计数">
          <el-table-column prop="G" label="G" />
        </el-table-column>
        <el-table-column label="权重">
          <el-table-column prop="H" label="H" />
        </el-table-column>
        <el-table-column label="功能点数">
          <el-table-column prop="I" label="I=G*H" />
        </el-table-column>
      </el-table-column>
    </el-table-column>
    <el-table-column prop="nonum" label="未调整功能点数" width="80" />
    <!-- <el-table-column prop="name" label="Name" width="180" />
    <el-table-column prop="address" label="Address" /> -->
  </el-table>

</template>

<script>
[object Promise]</script>

<style scoped>
.title {
  text-align: center;
  font-family: sans-serif;
  font-size: 30px;
}
.secondtitle {
  text-indent: 2em;
  font-weight: bold;
  margin-left: 30px;
  margin-right: 30px;
}
.content {
  text-indent: 2em;
  margin-left: 20px;
  margin-right: 20px;
}
.guidance {
  position: absolute;
  right: 50px;
  font-weight: bold;
}
</style>