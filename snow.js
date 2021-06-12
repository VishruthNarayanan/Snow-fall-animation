class Snow{
    constructor(){
        var option = {
            isStatic: false
        }
        this.snow = Bodies.rectangle(random(1,800),10,10,10,option);
        World.add(world,this.snow)
    }
    display(){
        imageMode(CENTER)
        image(snowImage,this.snow.position.x,this.snow.position.y,10,10);
    }
}
   