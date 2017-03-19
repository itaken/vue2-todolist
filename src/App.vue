<template>
  <div id="app" class="pure-g">
      <div class="sidebar pure-u-1 pure-u-md-1-4">
            <div class="header">
                <h1 class="brand-title">TODOList</h1>
                <h2 class="brand-tagline">创建你的日程</h2>
                <ul class="nav-list">
                    <li class="nav-item">
                        <a class="pure-button" href="https://github.com/itaken/vue2-todolist">Github</a>
                    </li>
                </ul>
            </div>
            <div class="sidebar-footer">
                <label><a href="https//github.com/itaken">@itaken</a></label>
            </div>
      </div>
      <div class="content pure-u-1 pure-u-md-3-4">
          <router-view></router-view>
      </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
<style lang="scss">
    @import "./assets/pure-0.6.2/pure-min.css";
    @import "./assets/pure-0.6.2/grids-responsive-min.css";

    #app{
        width: 100%;
        height: 100%;
        font-family: Verdana, Georgia, "Cambria", serif;
    }
    .sidebar {
        background: rgb(61, 79, 93);
        color: #fff;
        height: 100%;
        user-select:none;
        cursor: default;

        .header {
            text-align: center;
            top: auto;
            margin: 1em auto;
            h1{
                margin: .67em 0 0 0;
            }
            h2{
                margin: .67em 0 0 0;
                font-size: 1.2em;
                color: #f0ffff;
            }

            @at-root{
                .nav-list {
                    margin: 0;
                    padding: 0;
                    list-style: none;
                }
                .nav-item {
                    display: inline-block;
                    *display: inline;
                    zoom: 1;

                    a {
                        background: transparent;
                        border: 2px solid rgb(176, 202, 219);
                        color: #fff;
                        margin-top: 1em;
                        letter-spacing: 0.05em;
                        text-transform: uppercase;
                        font-size: 85%;
                        &:hover, &:focus {
                            border: 2px solid rgb(61, 146, 201);
                            text-decoration: none;
                        }

                    }
                }
            }
        }
    }
    .sidebar-footer{
        // display: none;
        float: right;
        a{
            padding: 3px;
            font-size: 12px;
            color: #fff;
            text-decoration: none;
        }
    }
    @media (min-width: 48em) {
        .sidebar{
            position: fixed;
            top: 0;
            bottom: 0;

            .header{
                bottom: 0px;
                padding: .5em .5em;
                float: right;
                h1, h2, a{
                    float: right;
                    display: block;
                    margin-bottom: .5em;
                }
                .brand-title{
                    background: #fff;
                    color: #3d4f5d;
                    padding: .3em .1em;
                    width: 95%;
                    text-align: center;
                }
            }
            @at-root{
                .nav-list{
                    clear: both;
                    float: right;
                }
            }
        }
        .sidebar-footer{
            display: block;
            position: fixed;
            bottom: 0;
            padding: 0 .5em 1em .5em;
            color: #f5f5dc;
            font-size: 12px;
            a{
                color: #fff;
                text-decoration: none;
            }
        }
        .content{
            // padding: 2em 3em 0;
            margin-left: 25%;
        }
    }
</style>
