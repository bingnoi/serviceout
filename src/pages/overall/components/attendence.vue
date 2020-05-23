<template>
  <div>
    <a-row type="flex">
      <div class="left">
        <a-row>
          <div class="box1">
            <ve-liquidfill
              :data="waterchartData"
              :title="chart1Title"
              :style="{width:'100%'}"
              height="250px"
            ></ve-liquidfill>
          </div>
        </a-row>
        <a-row>
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
        </a-row>
      </div>
      <div>
        <a-col>
          <div class="prop1">
            <a-popover title="车间1">
              <template slot="content">
                <p>工作状态：正常</p>
                <p>负责人：李菲菲 1874525363627</p>
              </template>
              <a-button type="primary">车间1</a-button>
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
                <p>负责人：高任 1874525363627</p>
              </template>
              <a-button type="primary">车间2</a-button>
            </a-popover>
          </div>
        </a-col>
      </div>
    </a-row>

    <a-row>
      <div class="box2">
        <a-col>
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
        </a-col>
        <a-col>
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
        </a-col>
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
    wsID: "2020.1.10 12:00",
    vioTime: "未佩戴安全帽",
    entryTime: "2018 1 1"
  },
  {
    key: "2",
    name: "2",
    age: "车间2",
    wsID: "2020.1.10 12:00",
    vioTime: "未佩戴安全帽",
    workDay: 31,
    showDay: 30,
    entryTime: "2018 1 1"
  },
  {
    key: "3",
    name: "3",
    age: "车间3",
    wsID: "2020.1.10 12:00",
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
    }
  },
  mounted() {
    window.addEventListener("resize", this.alter);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.alter);
  }
};
</script>
<style scoped>
.prop1 {
  padding-left: 200px;
  padding-top: 200px;
}
.prop2 {
  padding-left: 200px;
  padding-top: 450px;
}
.box1 {
  background-color: rgb(225, 240, 255);
  opacity: 0.8;
  margin-bottom: 2px;
}
.left {
  width: 30%;
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
