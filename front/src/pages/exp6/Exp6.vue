<!-- 6.软件项目/产品的风险影响与评价实验(大类)
包括:加权平均实验、蒙特卡洛实验、决策树实验;以及博弈论实验项目: 纳什均衡实验、不完美信息下的博弈实验. -->

<template>
  <h1 class="title">实验6 使用决策树法进行项目的风险分析与评价
    <span> <el-button class="guidance" style="margin-left: 200px;">实验指导书下载</el-button></span>
  </h1>
  <hr />

  <h2>一、实验目的 </h2>
  <p>本实验旨在通过利用决策树进行风险分析与评价的实践操作，掌握决策树算法在软件项目管理中的应用。具体目的包括：</p>
  <p>理解决策树算法的基本原理，了解其在风险分析与评价中的应用。</p>
  <p>学习使用决策树算法进行软件项目风险分析与评价的实际操作，掌握决策树的建立和应用过程。</p>
  <p>掌握决策树的评价指标和方法，了解如何对决策树模型进行评价和选择。</p>
  <p>通过实验操作，提高学生在软件项目管理与经济领域的实际应用能力，培养学生的数据分析和决策能力。
  </p>
  <hr />

  <h2>二、实验设备 </h2>
  <p>每位学生需要一台配备了数据分析软件（如Python、R等）的计算机，用于实验操作和数据分析。</p>
  <hr />

  <h2>三、实验原理 </h2>
  <p>决策树是一种常用的算法，可以用于分类和回归问题。在软件项目管理中，决策树可以用于风险分析与评价，帮助项目团队在项目执行过程中识别和评估各种可能的风险，并作出相应的决策。在构建决策树时，通常采用自顶向下的递归划分方法，从根节点开始，依次选择最佳的属性作为节点进行划分，直到生成叶节点。决策树的节点和分支表示项目风险的不同属性和决策规则。
  </p>
  <hr />

  <h2>四、实验步骤 </h2>
  <p>1.确定特征节点：根据项目的目标和需求，选择适合的属性作为决策树的节点。这需要对项目数据进行特征选择，选择那些对于预测项目风险具有重要影响的属性作为决策树的划分属性。</p>
  <p>2.决策树的构建：采用自顶向下的递归划分方法，根据选定的划分准则，选择最佳的属性作为节点进行划分，直到生成叶节点。可以使用常见的决策树算法，如ID3、C4.5、CART等进行决策树的构建。请将构建的二叉树的信息填入以下表格。</p>
  <table border="1" class="custom-table">
    <thead>
      <tr>
        <th>索引</th>
        <th>父节点</th>
        <th>子节点</th>
        <th>划分属性</th>
        <th>划分值</th>
        <th>风险类型</th>
        <th>备注</th>
        <th>操作</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(node, index) in nodes" :key="index">
        <td>{{ index + 1 }}</td>
        <td contenteditable @input="updateNodeData(node, 'parent', $event.target.innerText)">{{ node.parent }}</td>
        <td contenteditable @input="updateNodeData(node, 'child', $event.target.innerText)">{{ node.child }}</td>
        <td contenteditable @input="updateNodeData(node, 'attribute', $event.target.innerText)">{{ node.attribute }}</td>
        <td contenteditable @input="updateNodeData(node, 'divider', $event.target.innerText)">{{ node.divider }}</td>
        <td contenteditable @input="updateNodeData(node, 'riskType', $event.target.innerText)">{{ node.riskType }}</td>
        <td contenteditable @input="updateNodeData(node, 'data', $event.target.innerText)">{{ node.data }}</td>
        <td>
          <button @click="addRow(index)">添加行</button>
          <button style="margin-left: 5px;" @click="deleteRow(index)">删除行</button>
        </td>
      </tr>
    </tbody>
  </table>
  <br />
  <p>3.风险评估：在以下区域填入分析结果：</p>
  <textarea style="width:100%;height:100px;padding:10px" v-model="analysis" />
  <hr />

  <h2>五、实验心得 </h2>
  <div class="input-row" v-for="(input, index) in inputs" :key="index" style="margin-top: 10px;">
    <label>段落{{ index + 1 }}：</label>
    <input v-model="input.value" style="width:80%" @input="updateInputData(input, 'value', $event.target.value)" />
    <button style="margin-left:10px" @click="deleteInput(index)">删除</button>
    <button style="margin-left:10px" @click="addInput">另起一段</button>
  </div>

  <hr />
</template>
  
  <script lang="ts">
export default {
  name: 'Exp6',
  data() {
    return {
      nodes: [
        { parent: '根节点', child: '节点A', attribute: '', divider: '', riskType: '', data: '' },
        { parent: '根节点', child: '节点B', attribute: '', divider: '', riskType: '', data: '' },
        { parent: '节点A', child: '叶节点1', attribute: '-', divider: '-', riskType: '', data: '' },
        { parent: '节点A', child: '叶节点2', attribute: '-', divider: '-', riskType: '', data: '' },
        { parent: '节点B', child: '叶节点3', attribute: '-', divider: '-', riskType: '', data: '' },
        { parent: '节点B', child: '叶节点4', attribute: '-', divider: '-', riskType: '', data: '' },
      ],
      inputs: [
        { value: '' }, // 输入项的数据结构，可以根据实际需求进行调整
      ],
      analysis: '',
    };
  },
  methods: {
    updateNodeData(node, field, value) {
      // 更新节点数据
      node[field] = value;
    },
    updateInputData(input, field, value) {
      // 更新输入项数据
      input[field] = value;
    },
    addInput() {
      // 添加输入项
      this.inputs.push({ value: '' });
    },
    deleteInput(index) {
      // 删除输入项
      this.inputs.splice(index, 1);
    },
    addRow(index) {
      // 在指定位置添加一行
      this.nodes.splice(index + 1, 0, {
        parent: '',
        child: '',
        attribute: '',
        divider: '',
        riskType: '',
        data: '',
      });
    },
    deleteRow(index) {
      // 删除指定位置的一行
      this.nodes.splice(index, 1);
    },
  },
};
</script>
  
<style scoped>
.custom-table {
  width: 100%;
  table-layout: fixed;
}
.custom-table th,
.custom-table td {
  padding: 10px;
  text-align: left;
}
.custom-table th {
  background-color: #f0f0f0;
}
.custom-table tbody tr:nth-child(even) {
  background-color: #f9f9f9;
}
</style>