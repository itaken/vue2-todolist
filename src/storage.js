/**
* 重新定义 存储 方法
*
* @author willike<regelhh@gmail.com>
* @since 2017-03-19
*/
const STORAGE_KEY = "TODOList-ITEMS";

// 引入 本地存储方法
import "./assets/js/store.modern.min.js";
import Vue from 'vue'
Vue.use(store);

export default {
    save(items){
        if(items == null){
            return;
        }
        return store.set(STORAGE_KEY, items);
    },
    fetch(){
        var items = store.get(STORAGE_KEY);
        if(typeof(items) !== "object"){
            items = [];
        }
        return items;
    }
}
