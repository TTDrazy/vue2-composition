/*
 * @Author: Drazy
 * @Date: 2021-09-01 17:42:20
 * @LastEditors: Drazy
 * @LastEditTime: 2021-09-02 09:43:57
 * @Description: Button 组件
 */
import { defineComponent } from "@vue/composition-api";

const MyElButtonType = {
  Text: "text",
  Primary: "primary",
  Danger: "danger",
  Info: "info",
};

export const useElButton = ({
  text = "",
  type = MyElButtonType.Primary,
  onClick = () => {},
} = {}) => {
  const template = defineComponent({
    props: ["click"],
    setup(props, ctx) {
      return () => (
        <el-button type={type} onClick={props.click || onClick}>
          {ctx.slots.default ? ctx.slots.default() : text}
        </el-button>
      );
    },
  });
  return {
    template,
  };
};
