<template>
  <ve-gauge :data="chartData" :settings="chartSettings"></ve-gauge>
</template>

<script>
export default {
  name: "safetymap",
  data() {
    this.chartSettings = {
      dataName: {
        "实时安全状态": "Safety-indicator"
      },
      seriesMap: {
        "实时安全状态": {
          min: 0,
          max: 4,
          splitNumber: 4
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
          //标签样式
          textStyle: {
            fontWeight: "bolder",
            color: "#fff",
            shadowColor: "#fff",
            shadowBlur: 10
          },
          formatter: function(v) {
            console.log(v);
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
          detail: {
            show: false
          }
        }
      }
    };
    return {
      chartData: {
        columns: ["type", "value"],
        rows: [{ type: "实时安全状态", value: 2 }]
      }
    };
  }
};
</script>