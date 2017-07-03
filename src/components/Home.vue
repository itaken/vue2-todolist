<template>
  <div class="container">
      <div class="todo-head">
          <span></span>
          <input autofocus autocomplete="off" title="ENTER健保存" placeholder="今天, 想干点啥呢?" v-model="todoItem" @keyup.enter="createTodo">
      </div>
      <div class="todo-list">
          <ul>
              <li v-for="(item, index) in items" :class="{finished: item.isFinish}" @click="toggleFinish(item)" @dblclick="delTodo(index, item)">
                  {{ item.name }}
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
import Storage from "../storage"  // 加载存储方法
export default {
    data () {
        return {
            todoItem: "",
            items: Storage.fetch()  // 通过 localstorage 获取数据
        }
    },
    methods:{
        createTodo(){
            var name = this.todoItem.trim();  // 去除空格
            if(name == ""){
                this.todoItem = "";
                return;
            }
            // 将新TODO添加到数组
            this.items.unshift({
                name: name,
                isFinish: false
            });
            this.todoItem = "";  // 清空 输入框
        },
        toggleFinish(item){
            // 已完成 -> 未完成,  未完成 -> 已完成
            item.isFinish = !item.isFinish;
        },
        delTodo(index, item){
            var text = "确定删除该待完成项?";
            if(typeof(item) === "object"){
                if(item.isFinish === false){
                    text = "该项未完成, 是否确定删除?";
                }else{
                    text = "该项已完成, 是否确定删除?";
                }
            }
            if(confirm(text)){  // 确定删除
                this.items.splice(index, 1);
            }
        }
    },
    watch:{  // 监控 数据
        items:{
            handler: function(items){
                Storage.save(items);
            },
            deep: true  // 深度
        }
    }
}
</script>
<style lang="scss" scoped>
    .container{
        // padding: 2em 1em 0;
        font-family: 微软雅黑,arial;
    }
    .todo-head{
        padding: 25px 10px 15px 12px;
        border-bottom: 1px solid #ccc;
        margin: 0 0 15px 0;
        box-shadow: 0 2px 7px rgba(0, 0, 0, 0.3);
        background: #f6f6f6;
        span{
            color: #3d4f5d;
            font-size: 1.6em;
        }
        input{
            width: 90%;
            border-radius: 4px;
            color: #00BCD4;
            border: 1px solid #607D8B;
            padding: 2px 6px;
            font-size: 1.5em;
            height: 38px;
            &:hover, &:focus, &:active{
                border: 1px solid #00BCD4;
            }
        }
    }
    // 任务列表 样式
    .todo-list{
        user-select:none;
        ul{
            margin: 0;
            padding: 0;
            li{
                border: 1px solid rgba(0, 0, 0, 0.3);
                border-radius: 6px;
                box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
                cursor: pointer;
                list-style: none;
                color: #3d4f5d;
                font-size: 2.2em;
                margin: 4px 8px 10px 10px;
                padding: 1px 15px 10px 15px;
                &:hover{
                    background-color: #f6f6f6;
                    color: #E91E63;
                }
            }
        }
        .finished{
            text-decoration: line-through;
            color: #ccc;
            &:hover{
                color: #ffb9b9;
            }
        }
    }
</style>
