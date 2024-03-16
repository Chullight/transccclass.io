<script>
export default {
  name: "Home",
  methods:{


  },
  mounted() {


  }
}
</script>

<template>
  <div id="container">

  <div id="mainbody">

    <div id="introduction">
      <div id="uptitle">
        <div id="title1">
          自然
        </div>
        <div id="title2">
          线上课程
        </div>
        <div id="title3">
          线下课程
        </div>

      </div>
      <font-awesome-icon :icon="['fas', 'leaf']" style="transform:translate(711px,86px);font-size:25px;color:green;"/>
      <h1>
        互联网<div style="color:green;">+</div>城乡教育兴
      </h1>
      <p id="description">
        基于乡村振兴、人才强国战略、“双减”政策，以及当下素质教育相对缺失的现状，本组拟推出一个在农村搭建、面向城市的“网课平台”

        介绍妙趣横生的农村特色项目（如农家小吃、传统手工等），讲授有实物呈现的趣味生物地理课，并定期安排城市小学生去乡下亲身体验农家风情，亲自观察地质地貌、特殊气候、瓜果蔬菜......

        城市小学生能在此过程中拓宽视野、体验劳动、增强体质与心理素质、懂得热爱大自然与感恩。 与此同时，城市小学的教师也能借助同行去农村的机会，给乡村的小学生开设课堂，优化乡村教育水平，交流教育经验。农村也能凭此平台创造收益，实现乡村振兴。 城乡双向联动，破除壁垒，协同发展。
      </p>
    </div>
    <div id="window"></div>
    <div id="bottom">
      <p >
            以自然生物模块为例，我们细分了可爱小动物、家禽类、昆虫类以及顽强小植物等多个子模块，每个子模块下都有丰富的教学资源和互动内容。通过生动的图片、视频和讲解，让用户深入了解各种生物的特点和习性，激发他们对自然世界的兴趣和热爱。
        自然地理模块则涵盖了气候、物候、地形地貌和水文水系等多个方面，通过实例分析和互动探究，帮助用户了解地球的自然环境和变化规律，培养他们的地理素养和环保意识。
        劳动技能模块注重实践性和操作性，通过认识农具、种植演示和荒野求生等内容，让用户掌握基本的劳动技能和生活常识，培养他们的实践能力和创新精神。
        素质素养模块则通过古诗中的乡野人家、生态环境保护意识和生态问题治理意识等内容，提升用户的文化素养和社会责任感，引导他们关注社会热点和生态问题，积极参与社会公益事业。
        同时，带队老师还会在参观过程中积极引导同学挖掘诗词文化以及自然科学的美，培养同学日后学习的兴趣与动力。

      </p>
      <div id="deco">
        <div id="left">

        </div>
        <div id="right">
          <h2>
            报名参加线下课程！
          </h2>

        </div>
      </div>

      <div id="advertise">
        <h3>
          课程
        </h3>
<div id="classes">
        <div id="onlineclass">
          <div class="title">
            线上课程
          </div>


        </div>
        <div id="offlineclass">
          <div class="title">
            线下课程
          </div>

        </div>
  </div>


      </div>

    </div>



  </div>
  </div>

</template>

<style scoped>
#container{
  width:100%;
  height:3000px;
}
#window{
  width:80%;
  height:600px;
  background-color:transparent;
  position:fixed;
  margin-top:100px;
  background-image:url("/xiangyun.png");
  background-size:cover;
  transform:translate(0,-100px);
}
#bottom{
  height:2500px;
  width:100%;
  background-color:white;
  z-index:30;
  position:relative;
  margin-top:500px;
  font-size:25px;
}
#deco{
  width:100%;
  height:400px;
  margin-top:100px;
  display:flex;
  flex-direction: row;
  background-color:#FFFD55;
  border-radius:20px;
}
#left{
  width:650px;
  height:400px;
  background-image: url("/duck.png");
  background-size:cover;
  margin-bottom:100px;
  border-radius:20px 0 0 20px;
}
h2{
  color: darkgreen;
  margin-left:50px;

}
.title{
  margin-left:50px;
  margin-top:30px;
  font-size:25px;
  font-weight:600;

}
.hidden-image {
  position: fixed;
  top: 0;
  left: 0;
  width: 80%;
  height: 1000px;
  /* 替换为你的图片路径 */
  background-size: cover;
  border:1px solid black;
  margin-left:10%;
  margin-top:50px;
  z-index:1;
}
#introduction{
  z-index:20;
  background-color:white;

}

#mainbody{
  height:2500px;
  width:80%;
  margin-left:10%;
  margin-top:30px;
  border-radius:3px;
  margin-bottom:500px;
  background-color:white;
  display:flex;
  flex-direction:column;
}
h1{
  font-size:100px;
  font-weight:200;
  margin-top:50px;
}
h3{
  margin-bottom:0;
  margin-left:200px;
  transform:translateY(60px);
  color:white;
}
#onlineclass,#offlineclass{
  height:250px;
  width:400px;
  border:1px solid white;
  border-radius:5px;
  margin-top:100px;
  margin-left:50px;
  background-color:white;
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.6);
}
#onlineclass{
  margin-left:200px;


}
#classes{
  display:flex;
  flex-direction:row;
}
#advertise{
  width:100%;
  height:500px;
  background:linear-gradient(to top right,#399974,#A9FF37);
  margin-top:100px;
  display:flex;
  flex-direction:column;
  margin-bottom:1000px;
}
#uptitle{
  display:flex;
  flex-direction:row;
  transform:translateX(-50px);

}
#title1,#title2,#title3{
  font-size:15px;
  margin-left:50px;
  margin-top:200px;
  font-weight:200;
}
#arrow{
  position: relative;
  margin-top: -40px; /* 调整箭头位置 */
  width: 0;
  height: 0;
  transform:translate(213px,30px);
  border-left: 11px solid transparent; /* 左边的三角形 */
  border-right: 11px solid transparent; /* 右边的三角形 */
  border-bottom: 11px solid #C2C2C2; /* 底部的三角形，可以改变颜色以匹配导航栏 */
  border-top: 11px solid transparent;
}
h1{
  display:flex;
  flex-direction:row;
}
#description{
  margin-right:100px;
  height:200px;
  font-size:20px;
  width:1000px;
}
p{
  text-indent:40px;
}
</style>