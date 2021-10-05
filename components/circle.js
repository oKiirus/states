AFRAME.registerComponent('circle', {
    init: function(){
        for(let i = 0; i < 100; i++){
            var id = 'ring' + i
            var posX =(Math.random() * 3000 + (-1000));      
            var posY = (Math.random() * 2 + (-1));
            var posZ = (Math.random() * 3000 + -1000);

            var pos = { x: posX, y: posY, z: posZ };
            this.createRing(id, pos)
        }
    },

    createRing: function(id, pos){
        var terrainE = document.querySelector('#terrain')
        var ringE = document.createElement('a-entity')
        ringE.setAttribute('id', id)
        ringE.setAttribute('position', pos)
        ringE.setAttribute("material",'color', 'yellow')
        ringE.setAttribute('geometry', {primitive : 'torus', radius : 7})
        terrainE.appendChild(ringE)
    }
    
})

AFRAME.registerComponent('bird', {
    init: function(){
        for(let i = 0; i < 100; i++){
            var id = 'bird' + i
            var posX =(Math.random() * 3000 + (-1000));      
            var posY = (Math.random() * 2 + (-1));
            var posZ = (Math.random() * 3000 + -1000);

            var pos = { x: posX, y: posY, z: posZ };
            this.createBird(id, pos)
        }
    },

    createBird: function(id, pos){
        var terrainE = document.querySelector('#terrain')
        var ringE = document.createElement('a-entity')
        ringE.setAttribute('id', id)
        ringE.setAttribute('position', pos)
        ringE.setAttribute("gltf-model",'./assets/models/bird/scene.gltf')
      
        terrainE.appendChild(ringE)
    }
    
})