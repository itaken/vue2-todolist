<template>
  <div class="container">
      <div class="todo-head">
          <span></span>
          <input autofocus autocomplete="off" title="ENTER健保存" placeholder="今天, 想干点啥呢?" v-model="todoItem" @keyup.enter="createTodo">
      </div>
      <div class="todo-list">
          <ul>
              <li v-for="(item, index) in items" :class="{finished: item.isFinish}" @click="toggleFinish(item)" @dblclick="delTodo(index, item)">
                  &nbsp;{{ item.name }}&nbsp;
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
            items: Storage.fetch()
        }
    },
    methods:{
        createTodo(){
            var name = this.todoItem.trim();
            if(name == ""){
                this.todoItem = "";
                return;
            }
            // 将新TODO添加到数组
            this.items.unshift({
                name: name,
                isFinish: false
            });
            this.todoItem = "";
        },
        toggleFinish(item){
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
    watch:{
        items:{
            handler: function(items){
                Storage.save(items);
            },
            deep: true
        }
    }
}
</script>
<style lang="scss" scoped>
    .container{
        // padding: 2em 1em 0;
        font-family: yahei;
    }
    .todo-head{
        background-color: #f1ffff;
        padding: 35px 20px 15px 20px;
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
            &:hover, &:focus, &:active{
                border: 1px solid #00BCD4;
            }
        }
    }
    .todo-list{
        user-select:none;
        ul{
            margin: 0;
            padding: 0;
            li{
                cursor: pointer;
                list-style: none;
                color: #E91E63;
                font-size: 1.2em;
                margin-bottom: 3px;
                padding: 1px 15px 1px 15px;
                &:hover{
                    background-color: #E91E63;
                    color: #fff;
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
