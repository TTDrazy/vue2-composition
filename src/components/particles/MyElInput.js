/*
 * @Author: Drazy
 * @Date: 2021-09-01 17:42:44
 * @LastEditors: Drazy
 * @LastEditTime: 2021-09-02 14:31:10
 * @Description: Input 组件
 */
import { defineComponent, ref } from "@vue/composition-api";
// import style from '../style/common.module.scss'
export const useElInput = ({ value = "", pleaceholder = "" } = {}) => {
  const elInputValue = ref(value);
  const elInputPleaceholder = ref(pleaceholder);
  const isRequire = ref(false);
  const template = defineComponent({
    props: ["validators"],
    setup(props) {
      let validators = props.validators;
      const validatorInput = () => {
        if(validators && validators.required){
          isRequire.value = !elInputValue.value
        }
        // 2021/09/02
        // 菜菜马抄不明白了 o(╥﹏╥)o
        // 先去补一补相关设计模式和知识
        // 菜菜死了
      };
      return () => (
        <div>
          <el-input></el-input>
        </div>
      );
    },
  });
};
