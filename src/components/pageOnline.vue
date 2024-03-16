<script>
export default {
  name: "pageOnline",
  data(){
    return{
      showelem:[false],
      showrightelem:[false],
    }
  },
  methods:{
    elembarshow(index){
      this.showelem[index]=true;
      for(let i=0;i<this.showelem.length;i++){
        if(i!==index)this.showelem[i]=false;
      }
    },
    rightelemshow(index){
      this.showrightelem[index]=true;
      for(let i=0;i<this.showrightelem.length;i++){
        if(i!==index)this.showrightelem[i]=false;
      }

    }
  },
  mounted(){
    this.showelem=new Array(4).fill(false);
    this.showrightelem=new Array(11).fill(false);

  }
}
</script>

<template>
  <div id="arrow">

  </div>
  <div id="mainpage">
    <div id="leftbar">
      <button class="leftelem" id="elem1" @mouseover="elembarshow(0)" >
        自然生物
      </button>
      <button class="leftelem" id="elem2" @mouseover="elembarshow(1)" >
        自然地理
      </button>
      <button class="leftelem" id="elem3" @mouseover="elembarshow(2)" >
        劳动技能
      </button>
      <button class="leftelem" id="elem4" @mouseover="elembarshow(3)" >
        素质培养
      </button>

    </div>

    <div id="rightbar">
      <div v-if="this.showelem[0]" class="rightelem" id="rightelem1">
        <button @mouseover="rightelemshow(0)">
          可爱小动物
        </button>
        <button @mouseover="rightelemshow(1)">
          顽强小动物
        </button>


      </div>
      <div v-if="this.showelem[1]" class="rightelem" id="rightelem2">
        <button @mouseover="rightelemshow(2)">
          气
        </button>
        <button @mouseover="rightelemshow(3)">
          地
        </button>
        <button @mouseover="rightelemshow(4)">
          水
        </button>

      </div>
      <div v-if="this.showelem[2]" class="rightelem" id="rightelem3">
        <button @mouseover="rightelemshow(5)">
          认识农具
        </button>
        <button @mouseover="rightelemshow(6)">
          种植演示
        </button>
        <button @mouseover="rightelemshow(7)">
          荒野求生
        </button>

      </div>
      <div v-if="this.showelem[3]" class="rightelem" id="rightelem4">
        <button @mouseover="rightelemshow(8)">
          古诗中的乡野人家
        </button >
        <button @mouseover="rightelemshow(9)">
          生态环境保护意识
        </button>
        <button @mouseover="rightelemshow(10)">
          生态问题治理意识
        </button>

      </div>
    </div>
    <div id="rightrightbar">
      <div v-if="this.showrightelem[0]" class="rightelem" id="rightelem1">
        <button >
          家禽类
        </button>
        <button >
          昆虫类
        </button>


      </div>
      <div v-if="this.showrightelem[1]" class="rightelem" id="rightelem2">
        <button >
          花草树木
        </button>
        <button >
          粒粒皆辛苦
        </button>

      </div>
      <div v-if="this.showrightelem[2]" class="rightelem" id="rightelem3">
        <button >
          多变的气候
        </button>
        <button >
          神奇的物候
        </button>
        <button >
          臣夜观天象
        </button>

      </div>
      <div v-if="this.showrightelem[3]" class="rightelem" id="rightelem4">
        <button >
          带你看丘陵
        </button >
        <button >
          带你看冰山
        </button>
        <button >
          带你看冰原
        </button>
        <button>
          带你看草原
        </button>
        <button>
          带你看平原
        </button>

      </div>
      <div v-if="this.showrightelem[4]" class="rightelem" id="rightelem4">
        <button >
          水文水系
        </button >
        <button >
          大禹治水
        </button>

      </div>

    </div>

  </div>

</template>

<style scoped>
#arrow {
  position: relative;
  width: 0;
  height: 0;
  transform:translate(295px,-10px);
   /* 调整位置 */
  border-left: 11px solid transparent; /* 左边的三角形 */
  border-right: 11px solid transparent; /* 右边的三角形 */
  border-bottom: 11px solid green; /* 底部的三角形，可以改变颜色以匹配导航栏 */
  border-top: 11px solid transparent; /* 顶部的透明三角形 */
}
#mainpage{
  width:80%;
  margin-left:10%;
  height:1500px;
  border:1px solid green;
  transform:translateY(-10px);
  display:flex;
  flex-direction:row;
}
#leftbar{
  display:flex;
  flex-direction:column;
  margin-left:110px;
  margin-top:50px;
}
button{
  margin-bottom:30px;
  color:darkgreen;
  font-size:20px;
  font-weight:400;
  border:none;
  border-bottom:1px solid green;
  padding-bottom:3px;
  background-color:transparent;
}
button:hover{
  color:lightgreen;
}
#elem1:hover{
}
.rightelem{
  width:200px;
  height:500px;
  margin-top:50px;
  margin-left:100px;
  display:flex;
  flex-direction:column;
}
#rightelem1{
  margin-top:50px;
}
#rightelem2{
  margin-top:110px;
}
#rightelem3{
  margin-top:170px;
}
#rightelem4{
  margin-top:230px;
}
#rightbar button{
  font-size:20px;
}


</style>