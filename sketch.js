const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;



function setup(){
    var canvas = createCanvas(410,600);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(250,570,500,10)
    divisions1 = new Divisions(10,465,5,200)
    divisions2 = new Divisions(80,465,5,200)
    divisions3 = new Divisions(150,465,5,200)
    divisions4 = new Divisions(210,465,5,200)
    divisions5 = new Divisions(280,465,5,200)
    divisions6 = new Divisions(330,465,5,200)
    divisions7 = new Divisions(380,465,5,200)





   plinko1  = new plinko(300,200,10,10)
   plinko2  = new plinko(350,200,10,10)
   plinko3  = new plinko(100,200,10,10)
   plinko4  = new plinko(250,200,10,10)
   plinko5  = new plinko(200,200,10,10)
   plinko6  = new plinko(150,200,10,10)
   plinko7  = new plinko(50,200,10,10)

   plinko8  = new plinko(110,100,10,10)   
   plinko9  = new plinko(160,100,10,10)
   plinko10  = new plinko(210,100,10,10)
   plinko11  = new plinko(260,100,10,10)
   plinko12  = new plinko(310,100,10,10)
   plinko13  = new plinko(360,100,10,10)
   plinko14  = new plinko(50,100,10,10)
   plinko15  = new plinko(390,100,10,10)
   plinko16  = new plinko(20,100,10,10)

   plinko17  = new plinko(300,150,10,10)
   plinko18  = new plinko(350,150,10,10)
   plinko19  = new plinko(100,150,10,10)
   plinko20  = new plinko(250,150,10,10)
   plinko21  = new plinko(200,150,10,10)
   plinko22  = new plinko(150,150,10,10)
   plinko23  = new plinko(50,150,10,10)

   plinko24  = new plinko(300,50,10,10)
   plinko25  = new plinko(350,50,10,10)
   plinko26  = new plinko(100,50,10,10)
   plinko27  = new plinko(250,50,10,10)
   plinko28  = new plinko(200,50,10,10)
   plinko29  = new plinko(150,50,10,10)
   plinko30  = new plinko(50,50,10,10)








   particles = new Particles(300,1,8,8)
   particles1 = new Particles(300,1,8,8)
   particles2 = new Particles(60,2,8,8)

   particles3 = new Particles(160,2,8,8)
   particles4 = new Particles(160,2,8,8)
   particles5 = new Particles(160,2,8,8)
   particles6 = new Particles(160,2,8,8)
   particles7 = new Particles(160,2,8,8)
   particles8 = new Particles(160,2,8,8)
   particles9 = new Particles(160,2,8,8)
   particles10 = new Particles(160,2,8,8)
   particles11 = new Particles(160,2,8,8)
   particles12 = new Particles(160,2,8,8)
   particles13 = new Particles(160,2,8,8)
   particles14 = new Particles(160,2,8,8)
   particles15 = new Particles(160,2,8,8)
   particles16 = new Particles(160,2,8,8)
   particles17 = new Particles(160,2,8,8)
   particles18 = new Particles(160,2,8,8)
   particles19 = new Particles(160,2,8,8)
   particles20 = new Particles(160,2,8,8)
   particles21 = new Particles(160,2,8,8)
   particles22 = new Particles(160,2,8,8)
   particles23 = new Particles(160,2,8,8)
   particles24 = new Particles(160,2,8,8)
 



}


function draw(){
    background(0);
    Engine.update(engine);
    ground.display();
    divisions1.display();
    divisions2.display();
    divisions3.display();
    divisions4.display();
    divisions5.display();
    divisions6.display();
    divisions7.display();
    
    particles.display();
    particles1.display();
    particles2.display();
    particles3.display();
    particles4.display();
    particles5.display();
    particles6.display();
    particles7.display();
    particles8.display();
    particles9.display();
    particles10.display();
    particles11.display();
    particles12.display();
    particles13.display();
    particles14.display();
    particles15.display();
    particles16.display();
    particles17.display();
    particles18.display();
    particles19.display();
    particles20.display();
    particles21.display();
    particles22.display();
    particles23.display();
    particles24.display();
     
   


    plinko1 .display();
    plinko2 .display();
    plinko3 .display();
    plinko4 .display();
    plinko5 .display();
    plinko6 .display();
    plinko7 .display();
    plinko8 .display();
    plinko9 .display();
    plinko10 .display();
    plinko11 .display();
    plinko12 .display();
    plinko13 .display();
    plinko14 .display();
    plinko15 .display();
    plinko16 .display();
    plinko17 .display();
    plinko18 .display();
    plinko19 .display();
    plinko20 .display();
    plinko21 .display();
    plinko22 .display();
    plinko23 .display();
    plinko24 .display();
    plinko25 .display();
    plinko26 .display();
    plinko27 .display();
    plinko28 .display();
    plinko29 .display();
    plinko30 .display();

    

   
   
    


}
