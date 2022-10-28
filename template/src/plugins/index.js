import Example from "../component/Example.vue";

const components = [Example];

//注册组件
const install = function (Vue, options) {
    components.forEach((component) => { 
        Vue.component(component.name, component);
    });
};

/* 支持使用标签的方式引入 Vue是全局变量时，自动install */
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  install,  //用于全局注册组件时，vue.use使用
  ...components, //用于局部使用
};
