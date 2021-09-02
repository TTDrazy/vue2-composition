<!--
 * @Author: Drazy
 * @Date: 2021-09-01 16:23:32
 * @LastEditors: Drazy
 * @LastEditTime: 2021-09-02 11:08:03
 * @Description: 封装的组件
-->

<script>
import { defineComponent, onMounted } from "@vue/composition-api";
import { useElButton } from "../components/particles/MyElButton";
export default defineComponent({
  setup() {
    const primaryButton = useElButton({
      text: "默认按钮",
      onClick: () => {
        alert("我被触发了~");
      },
    });
    onMounted(() => {
      console.log("mounted");
    });
    return () => (
      <div>
        <primaryButton.template></primaryButton.template>
      </div>
    );
  },
});
</script>
