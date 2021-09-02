/*
 * @Author: Drazy
 * @Date: 2021-09-01 16:23:32
 * @LastEditors: Drazy
 * @LastEditTime: 2021-09-02 11:07:22
 * @Description: 配置 jsx 的使用
 */
module.exports = {
  presets: [
    [
      "@vue/cli-plugin-babel/preset",
      {
        jsx: {
          compositionAPI: true,
          injectH: true,
        },
        module: false,
      },
    ],
  ],
};
