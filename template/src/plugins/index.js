//index.js
import Example from "../components/Example.vue"; // 引入封装好的组件
import Example2 from "../components/Example2.vue"; // 引入封装好的组件

import * as filters from "../filters"

export { Example, Example2, filters } //实现按需引入*
 
const components = [ Example, Example2 ];

const install = function(App, options) {
    // 全局添加组件
    components.forEach((component) => {
        App.component(component.name, component);
    });

    // 全局过滤器
    Object.keys(filters).map( item => {
      App.filter(item, filters[item])
    })
    
    // 全局指令

    // 全局混入

    // 扩展Vue原型
    App.prototype.$hello = () => { console.log('hello') }
};

export default { install } // 批量的引入*
