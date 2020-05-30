<template>
  <div class="list-container">
    <h2>工人信息查询</h2>
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
        <a-button size="small" style="width: 90px" @click="() => handleReset(clearFilters)">Reset</a-button>
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
</template>

<script>
const data = [
  {
    key: "1",
    name: "张三",
    age: 32,
    wsID: "1000",
    vioTime: 2,
    entryTime: "2018.1.1"
  },
  {
    key: "2",
    name: "李四",
    age: 42,
    wsID: "1000",
    vioTime: 3,
    workDay: 31,
    showDay: 30,
    entryTime: "2019.3.21"
  },
  {
    key: "3",
    name: "王五",
    age: 32,
    wsID: "1001",
    vioTime: 8,
    workDay: 31,
    showDay: 30,
    entryTime: "2017.5.24"
  },
  {
    key: "4",
    name: "陈六",
    age: 32,
    wsID: "1003",
    vioTime: 0,
    workDay: 31,
    showDay: 30,
    entryTime: "2018.12.15"
  },
  {
    key: "5",
    name: "周七",
    age: 32,
    wsID: "1003",
    vioTime: 2,
    workDay: 31,
    showDay: 30,
    entryTime: "2015.5.5"
  },
  {
    key: "6",
    name: "徐八",
    age: 32,
    wsID: "1003",
    vioTime: 2,
    workDay: 31,
    showDay: 30,
    entryTime: "2016.8.12"
  },
  {
    key: "7",
    name: "丁九",
    age: 32,
    wsID: "1003",
    vioTime: 4,
    workDay: 31,
    showDay: 30,
    entryTime: "2020.2.3"
  },
  {
    key: "8",
    name: "程十",
    age: 32,
    wsID: "1003",
    vioTime: 3,
    workDay: 31,
    showDay: 30,
    entryTime: "2019.10.10"
  }
];
export default {
  name: 'worker_info',
  data () {
    return {
      data,
      searchText: '',
      searchInput: null,
      searchedColumn: '',
      columns: [
        {
          title: '姓名',
          dataIndex: 'name',
          key: 'name',
          scopedSlots: {
            filterDropdown: 'filterDropdown',
            filterIcon: 'filterIcon',
            customRender: 'customRender'
          },
          onFilter: (value, record) =>
            record.name
              .toString()
              .toLowerCase()
              .includes(value.toLowerCase()),
          onFilterDropdownVisibleChange: visible => {
            if (visible) {
              setTimeout(() => {
                this.searchInput.focus()
              }, 0)
            }
          }
        },
        {
          title: '年龄',
          dataIndex: 'age',
          key: 'age',
          scopedSlots: {
            filterDropdown: 'filterDropdown',
            filterIcon: 'filterIcon',
            customRender: 'customRender'
          },
          onFilter: (value, record) =>
            record.age
              .toString()
              .toLowerCase()
              .includes(value.toLowerCase()),
          onFilterDropdownVisibleChange: visible => {
            if (visible) {
              setTimeout(() => {
                this.searchInput.focus()
              })
            }
          }
        },
        {
          title: '车间ID',
          dataIndex: 'wsID',
          key: 'wsID',
          scopedSlots: {
            filterDropdown: 'filterDropdown',
            filterIcon: 'filterIcon',
            customRender: 'customRender'
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
          title: "违规次数",
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
        },
        {
          title: "入职时间",
          dataIndex: "entryTime",
          key: "entryTime",
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
      ]
    };
  },

  methods: {
    handleSearch(selectedKeys, confirm, dataIndex) {
      confirm();
      this.searchText = selectedKeys[0];
      this.searchedColumn = dataIndex;
    },

    handleReset(clearFilters) {
      clearFilters();
      this.searchText = "";
    }
  }
};
</script>

<style scoped>
.list-container {
  width: 80%;
  background-color: white;
  padding: 10px;
  border-radius: 5px;
  margin: 0 auto;
}
</style>
