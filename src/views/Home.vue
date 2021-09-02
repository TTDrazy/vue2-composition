<!--
 * @Author: Drazy
 * @Date: 2021-09-01 16:23:32
 * @LastEditors: Drazy
 * @LastEditTime: 2021-09-01 18:00:32
 * @Description: 封装的组件
-->

<script>
import { defineComponent, onMounted } from "@vue/composition-api";
export default defineComponent({
  setup() {
    onMounted(() => {
      console.log("mounted");
    });
  },
  render() {
    return (
      <div>
        <div>123</div>
        
      </div>
    );
  },
});
</script>
