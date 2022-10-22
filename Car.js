AFRAME.registerComponent("car-model", {
  schema: {
      model: { type: "string", default: "../assests/lam.glb" },
      clickCounter:{type:"number", default:0}
  },
  init: function () {
      this.el.setAttribute("gltf-model", this.data.model)
      const position = { x: 0, y: -01, z: 0 };
      const rotation = { x: 0, y: -100, z: 0 };
      const scale ={x:0.02, y:0.02, z:0.02}
      this.el.setAttribute("position", position);
      this.el.setAttribute("rotation", rotation);
      this.el.setAttribute("scale", scale)
  },
  update:function(){
      window.addEventListener("click", e=>{
          this.data.clickCounter=this.data.clickCounter+1;
          if(this.data.clickCounter === 1){
              const rotation={x:0, y:90, z:1};
              this.el.setAttribute("rotation", rotation)
          }
          else if(this.data.clickCounter === 2){
              const rotation={x:0, y:180, z:0};
              this.el.setAttribute("rotation", rotation)
          }
          else if(this.data.clickCounter === 3){
              const rotation={x:0, y:270, z:0};
              this.el.setAttribute("rotation", rotation)
          }
          else if(this.data.clickCounter === 4){
              const rotation={x:0, y:360, z:0};
              this.el.setAttribute("rotation", rotation)
          }
      })
  }
})