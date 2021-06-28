<template>
  <div>
    <a-row type="flex">
      <div class="left">

        <!-- 这是水滴图 -->
        <!-- <a-row>
          <div class="box1">
            <ve-liquidfill
              :data="waterchartData"
              :title="chart1Title"
              :style="{width:'100%'}"
              height="250px"
            ></ve-liquidfill>
          </div>
        </a-row> -->
        <a-row style="background-color:#D2E9FF;opacity:70%;margin-top:10px;margin-left:5px">
          <p style="font-size:15px;font-weight:bold">实时到岗人数</p>
          <dv-water-level-pond :config="waterconfig" style="width:200px;height:200px" />
        </a-row>

        <!-- 实时安全状态 -->
        <!-- <a-row>
          <div class="box1">
            <ve-gauge
              :title="chart2Title"
              :data="chartattenData"
              :settings="chartSettings"
              ref="chartEl"
              :style="{width:'100%'}"
              height="250px"
            ></ve-gauge>
          </div>
        </a-row> -->
        <a-row style="background-color:#D2E9FF;opacity:70%;margin-top:20px;margin-left:5px">
          <p style="font-size:15px;font-weight:bold">实时安全状态</p>
          <dv-decoration-9 style="width:200px;height:200px;" :dur="6" :color="['#130c0e','#102b6a']">
            <p style="font-size:25px;font-weight:bold">96%</p>
          </dv-decoration-9>
        </a-row>
      </div>

      <!-- 这里是pop-bar的信息 -->
      <div>
        <a-col>
          <div class="prop1">
            <a-popover title="车间1">
              <template slot="content">
                <p>工作状态：正常</p>
                <p>安全状态：中</p>
                <p>负责人：李菲菲 1874525363627</p>
              </template>
              <a-button type="primary">车间1</a-button>
            </a-popover>
          </div>
          <div class="prop3">
            <a-popover title="车间3">
              <template slot="content">
                <p>工作状态：正常</p>
                <p>安全状态：中</p>
                <p>负责人：杨于 1874525363627</p>
              </template>
              <a-button type="primary">车间3</a-button>
            </a-popover>
          </div>
          <div class="prop4">
            <a-popover title="车间4" v-model="visible">
              <template v-if="nsafe" slot="content">
                <p>工作状态：正常</p>
                <p>安全状态：中</p>
                <p>负责人：李赞 1874525363627</p>
              </template>
              <template v-if="!nsafe" slot="content">
                <p style="color:red">工作状态：危险</p>
                <p style="color:red">安全警告：检测到未佩戴安全帽</p>
                <p style="color:red">负责人：李赞 1874525363627</p>
              </template>
              <a-button :type=nsafeColor>车间4</a-button>
            </a-popover>
          </div>
        </a-col>
      </div>
      <div>
        <a-col>
          <div class="prop2">
            <a-popover title="车间2">
              <template slot="content">
                <p>工作状态：正常</p>
                <p>安全状态：优</p>
                <p>负责人：高任 1874525363627</p>
              </template>
              <a-button type="primary">车间2</a-button>
            </a-popover>
          </div>
          <div class="prop5">
            <a-popover title="车间5">
              <template slot="content">
                <p>工作状态：正常</p>
                <p>安全状态：中</p>
                <p>负责人：王欧 1874525363627</p>
              </template>
              <a-button type="primary">车间5</a-button>
            </a-popover>
          </div>
          <div class="prop6">
            <a-popover title="车间6">
              <template slot="content">
                <p>工作状态：正常</p>
                <p>安全状态：中</p>
                <p>负责人：丁计 1874525363627</p>
              </template>
              <a-button type='primary'>车间6</a-button>
            </a-popover>
          </div>
        </a-col>
      </div>
    </a-row>


    
    <a-row>
      <div class="box2">

        <!-- 出勤日志 -->
        <!-- <a-col>
          <div class="log">
            <ve-line
              :title="chart3Title"
              :legend-visible="false"
              :data="chartlogData"
              :settings="chartlogSettings"
              ref="chartE2"
              :style="{width:'100%'}"
              height="300px"
            ></ve-line>
          </div>
        </a-col> -->

        <!-- 要改成信息滚动栏 -->
        <a-col>
          <dv-scroll-board :config="config" style="width:1000px;height:200px;margin-top:100px" />
        </a-col>
        <!-- <a-col>
          <div class="list-container">
            <a-table :data-source="data" :columns="columns">
              <div
                slot="filterDropdown"
                slot-scope="{ setSelectedKeys, selectedKeys, confirm, clearFilters, column }"
                style="padding: 8px"
              >
                <a-input
                  v-ant-ref="c => (searchInput = c)"
                  :placeholder="`Search ${column.dataIndex}`"
                  :value="selectedKeys[0]"
                  style="width: 188px; margin-bottom: 8px; display: block;"
                  @change="e => setSelectedKeys(e.target.value ? [e.target.value] : [])"
                  @pressEnter="() => handleSearch(selectedKeys, confirm, column.dataIndex)"
                />
                <a-button
                  type="primary"
                  icon="search"
                  size="small"
                  style="width: 90px; margin-right: 8px"
                  @click="() => handleSearch(selectedKeys, confirm, column.dataIndex)"
                >Search</a-button>
                <a-button
                  size="small"
                  style="width: 90px"
                  @click="() => handleReset(clearFilters)"
                >Reset</a-button>
              </div>
              <a-icon
                slot="filterIcon"
                slot-scope="filtered"
                type="search"
                :style="{ color: filtered ? '#108ee9' : undefined }"
              />
              <template slot="customRender" slot-scope="text, record, index, column">
                <span v-if="searchText && searchedColumn === column.dataIndex">
                  <template
                    v-for="(fragment, i) in text
            .toString()
            .split(new RegExp(`(?<=${searchText})|(?=${searchText})`, 'i'))"
                  >
                    <mark
                      v-if="fragment.toLowerCase() === searchText.toLowerCase()"
                      :key="i"
                      class="highlight"
                    >{{ fragment }}</mark>
                    <template v-else>{{ fragment }}</template>
                  </template>
                </span>
                <template v-else>{{ text }}</template>
              </template>
            </a-table>
          </div>
        </a-col> -->
      </div>
    </a-row>
  </div>
</template>

<script>
import VeLine from "v-charts/lib/line";
import "echarts/lib/component/title";
const data = [
  {
    key: "1",
    name: "1",
    age: "车间1",
    wsID: "2021.4.10 12:00",
    vioTime: "检测到烟火",
    entryTime: "2018 1 1"
  },
  {
    key: "2",
    name: "2",
    age: "车间2",
    wsID: "2021.4.09 12:00",
    vioTime: "未佩戴安全帽",
    workDay: 31,
    showDay: 30,
    entryTime: "2018 1 1"
  },
  {
    key: "3",
    name: "3",
    age: "车间3",
    wsID: "2021.4.08 12:00",
    vioTime: "未佩戴安全帽",
    workDay: 31,
    showDay: 30,
    entryTime: "2018 1 1"
  }
];
export default {
  name: "attendence",
  data() {
    return {
      visible:false,
      nsafe:true,
      nsafeColor:'primary',
      config:{
        header: ['车间', '违规时间', '报警原因','车间主任'],
        headerBGC:'#009ad6',
        oddRowBGC:'#508a88',
        evenRowBGC:'#70a19f',	
        waitTime:1500,
        data: [
          ['10000', '2021.4.08 12:00', '未佩戴安全帽','李菲菲'],
          ['10001', '2021.4.07 12:00', '未佩戴安全帽','高任'],
          ['10002', '2021.4.06 12:00', '未佩戴安全帽','杨于'],
          ['10002', '2021.4.06 12:00', '未佩戴安全帽','杨于'],
          ['10000', '2021.4.08 12:00', '未佩戴安全帽','李菲菲'],
          ['10001', '2021.4.07 12:00', '未佩戴安全帽','高任'],
          ['10002', '2021.4.06 12:00', '未佩戴安全帽','杨于'],
          ['10000', '2021.4.08 12:00', '未佩戴安全帽','李菲菲'],
          ['10001', '2021.4.07 12:00', '未佩戴安全帽','高任'],
          ['10002', '2021.4.06 12:00', '未佩戴安全帽','杨于'],
        ],
      },
      waterconfig:{
        data: [95],
        shape: 'roundRect',
        colors:['black','black']
      },
      safeoption:{
        series: [
          {
            type: 'gauge',
            startAngle: -Math.PI / 2,
            endAngle: Math.PI * 1.5,
            arcLineWidth: 25,
            data: [
              { name: 'itemA', value: 89, gradient: ['#03c2fd', '#1ed3e5', '#2fded6'] }
            ],
            axisLabel: {
              show: false
            },
            axisTick: {
              show: false
            },
            pointer: {
              show: false
            },
            dataItemStyle: {
              lineCap: 'round'
            },
            details: {
              show: true,
              formatter: '{value}%',
              style: {
                  fill: '#1ed3e5',
                  fontSize: 35
              }
            }
          }
        ]
      },
      chart1Title: {
        text: "在岗人数"
      },
      chart2Title: {
        text: "实时安全状态"
      },
      chart3Title: {
        text: "工作日志"
      },
      data,
      searchText: "",
      searchInput: null,
      searchedColumn: "",
      columns: [
        {
          title: "序号",
          dataIndex: "name",
          key: "name",
          scopedSlots: {
            filterDropdown: "filterDropdown",
            filterIcon: "filterIcon",
            customRender: "customRender"
          },
          onFilter: (value, record) =>
            record.name
              .toString()
              .toLowerCase()
              .includes(value.toLowerCase()),
          onFilterDropdownVisibleChange: visible => {
            if (visible) {
              setTimeout(() => {
                this.searchInput.focus();
              }, 0);
            }
          }
        },
        {
          title: "车间名",
          dataIndex: "age",
          key: "age",
          scopedSlots: {
            filterDropdown: "filterDropdown",
            filterIcon: "filterIcon",
            customRender: "customRender"
          },
          onFilter: (value, record) =>
            record.age
              .toString()
              .toLowerCase()
              .includes(value.toLowerCase()),
          onFilterDropdownVisibleChange: visible => {
            if (visible) {
              setTimeout(() => {
                this.searchInput.focus();
              });
            }
          }
        },
        {
          title: "报警时间",
          dataIndex: "wsID",
          key: "wsID",
          scopedSlots: {
            filterDropdown: "filterDropdown",
            filterIcon: "filterIcon",
            customRender: "customRender"
          },
          onFilter: (value, record) =>
            record.wsID
              .toString()
              .toLowerCase()
              .includes(value.toLowerCase()),
          onFilterDropdownVisibleChange: visible => {
            if (visible) {
              setTimeout(() => {
                this.searchInput.focus();
              });
            }
          }
        },
        {
          title: "详情",
          dataIndex: "vioTime",
          key: "vioTime",
          scopedSlots: {
            filterDropdown: "filterDropdown",
            filterIcon: "filterIcon",
            customRender: "customRender"
          },
          onFilter: (value, record) =>
            record.vioTime
              .toString()
              .toLowerCase()
              .includes(value.toLowerCase()),
          onFilterDropdownVisibleChange: visible => {
            if (visible) {
              setTimeout(() => {
                this.searchInput.focus();
              });
            }
          }
        }
        // {
        //   title: '基础工资',
        //   dataIndex: 'salary',
        //   key: 'salary',
        //   scopedSlots: {
        //     filterDropdown: 'filterDropdown',
        //     filterIcon: 'filterIcon',
        //     customRender: 'customRender'
        //   },
        //   onFilter: (value, record) =>
        //     record.vioTime
        //       .toString()
        //       .toLowerCase()
        //       .includes(value.toLowerCase()),
        //   onFilterDropdownVisibleChange: visible => {
        //     if (visible) {
        //       setTimeout(() => {
        //         this.searchInput.focus()
        //       })
        //     }
        //   }
        // }
      ],
      waterchartData: {
        columns: ["name", "percent"],
        rows: [
          {
            name: "在岗人数",
            percent: 0.93
          }
        ]
      },
      chartSettings: {
        dataName: {
          实时安全状态: ""
        },
        seriesMap: {
          实时安全状态: {
            min: 0,
            max: 3,
            splitNumber: 3
          },
          axisLine: {
            //划分格子的样式
            lineStyle: {
              color: [
                [0.3, "green"],
                [0.7, "#1e90ff"],
                [1, "#ff4500"]
              ],
              width: 2,
              shadowColor: "#fff",
              shadowBlur: 10
            }
          },
          axisLabel: {
            textStyle: {
              // 属性lineStyle控制线条样式
              fontWeight: "bolder",
              color: "#fff",
              shadowColor: "#fff", //默认透明
              shadowBlur: 10
            },
            formatter: function(v) {
              switch (v + "") {
                case "0":
                  return "优";
                case "1":
                  return "良";
                case "2":
                  return "中";
                case "3":
                  return "差";
              }
            }
          },
          splitLine: {
            length: 15,
            lineStyle: {
              width: 3,
              color: "#fff",
              shadowColor: "#fff",
              shadowBlur: 10
            }
          },
          title: {
            show: false
          },
          detail: {
            show: false
          }
        }
      },
      chartattenData: {
        columns: ["type", "value"],
        rows: [{ type: "实时安全状态", value: 2 }]
      },
      chartlogSettings: {
        min: ["dataMin"],
        yAxisType: ["percent"],
        yAxisName: ["比率"]
      },
      chartlogData: {
        columns: ["日期", "出勤情况"],
        rows: [
          { 日期: "1/1", 出勤情况: 0.75 },
          { 日期: "1/2", 出勤情况: 0.85 },
          { 日期: "1/3", 出勤情况: 0.99 },
          { 日期: "1/4", 出勤情况: 0.88 },
          { 日期: "1/5", 出勤情况: 0.91 },
          { 日期: "1/6", 出勤情况: 0.99 }
        ]
      }
    };
  },
  methods: {
    alter() {
      this.$refs.chartEl.resize();
      this.$refs.chartE2.resize();
    },
    countDown(){
      let clock=window.setInterval(()=>{
        this.nsafe=false,
        this.nsafeColor='danger',
        this.visible=true
      },8000);
    }
  },
  mounted() {
    window.addEventListener("resize", this.alter);
    this.countDown();
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.alter);
  }
};
</script>
<style scoped>
.prop1 {
  padding-left: 100px;
  padding-top: 100px;
}
.prop2 {
  padding-left: 200px;
  padding-top: 140px;
}
.prop3 {
  padding-left: 2px;
  padding-top: 70px;
}
.prop4 {
  padding-left: 200px;
  padding-top: 50px;
}
.prop5 {
  padding-left: 200px;
  padding-top: 70px;
}
.prop6 {
  padding-left: 200px;
  padding-top: 180px;
}
.box1 {
  background-color: rgb(225, 240, 255);
  opacity: 0.8;
  margin-bottom: 2px;
}
.left {
  width: 20%;
}
.log {
  opacity: 0.8;
  background-color: rgb(225, 240, 255);
  width: 30%;
}
.list-container {
  opacity: 0.8;
  background-color: rgb(225, 240, 255);
  width: 66%;
  margin-left: 2%;
}
.list-container,
.log {
  float: left;
}
</style>
