//Terrain Rotation
AFRAME.registerComponent("terrain-rotation-reader", {
  schema: {
    speedOfRotation: { type: "number", default: 0 }    
  },
  init: function () {
    window.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") {
        if (this.data.speedOfRotation < 0.1) {
          this.data.speedOfRotation += 0.01;
        }
      }
      if (e.key === "ArrowLeft") {
        if (this.data.speedOfRotation > -0.1) {
          this.data.speedOfRotation -= 0.01;
        }
      }
    });
  },
  tick: function () {
    var mapRotation = this.el.getAttribute("rotation");

    mapRotation.y += this.data.speedOfRotation;

    this.el.setAttribute("rotation", {
      x: mapRotation.x,
      y: mapRotation.y,
      z: mapRotation.z
    });
  }
});

AFRAME.registerComponent("move", {
  schema: {
    speedOfRotation: { type: "number", default: 0 },  
    speedZ: {type: 'number', default: 0} 
  },
  init: function () {
    window.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") {
        if (this.data.speedOfRotation < 10) {
          this.data.speedOfRotation += 1;
        }
      }
      if (e.key === "ArrowLeft") {
        if (this.data.speedOfRotation > -10) {
          this.data.speedOfRotation -= 1;
        }
      }

      if (e.key === "ArrowDown") {
        if (this.data.speedZ > -10) {
          this.data.speedZ -= 1;
        }
      }
      if (e.key === "ArrowUp") {
        if (this.data.speedZ < 10) {
          this.data.speedZ += 1;
        }
      }
    });
  },
  tick: function () {
    var mapRotation = this.el.getAttribute("rotation");

    mapRotation.x = this.data.speedOfRotation;
    mapRotation.z = this.data.speedZ;
    
    this.el.setAttribute("rotation", {
      x: mapRotation.x,
      y: mapRotation.y,
      z: mapRotation.z
    });
  }
});




