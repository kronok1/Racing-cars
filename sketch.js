let a1
let fondo
let a1X = 250
let a1Y = 30
let b1X = 250
let b1Y = 60
let velocidad1
let velocidad2
let direccion = 1
let direccion2 = 1

let lap = 0
let lap2 = 0

let winP2= 0
let winP1= 0

let aux = 0

function preload(){

	fondo = loadImage(`img/pista.jpg`)
    flag = loadImage(`img/flag.jpg`)
    
	a1 = loadImage(`img/blanco.png`)
    a2 = loadImage(`img/blanco2.png`)
    a3 = loadImage(`img/blanco3.png`)
    a4 = loadImage(`img/blanco4.png`)
    
    b1 = loadImage(`img/rojo.png`)
    b2 = loadImage(`img/rojo2.png`)
    b3 = loadImage(`img/rojo3.png`)
    b4 = loadImage(`img/rojo4.png`)

}
	
 function setup() {
	createCanvas(windowWidth, windowHeight);
	frameRate(60)
}

function draw() {

	velocidades()
	background(fondo)
    image(flag, 42, 206, 165, 60)

	switch(direccion){

		case 1:
            console.log(`p1 entro al 1`)
			if(a1X<=windowWidth*0.9)image(a1,a1X+=velocidad1,a1Y)
			if(a1X>=windowWidth*0.9)direccion=2
            

		break;
		case 2:
            console.log(`p1 entro al 2`)
			if(a1Y<=windowHeight*0.9)image(a2,a1X,a1Y+=velocidad1)
			if(a1Y>=windowHeight*0.9)direccion=3
		break;
		case 3:
		console.log(`p1 entro al 3`)
			image(a3,a1X-=velocidad1,a1Y)
			if(a1X<=30)direccion=4
		break;
		case 4:
            console.log(`p1 entro al 4`)
            image(a4,a1X,a1Y-=velocidad1)
            if(a1X>=10 && a1Y<=30)direccion=1
			
		break;
	}
    
    switch(direccion2){

		case 1:
            console.log(`p2 entro al 1`)
			if(b1X<=windowWidth*0.85)image(b1,b1X+=velocidad2,b1Y)
			if(b1X>=windowWidth*0.85)direccion2=2
            

		break;
		case 2:
            console.log(`p2 entro al 2`)
			if(b1Y<=windowHeight*0.85)image(b2,b1X,b1Y+=velocidad2)
			if(b1Y>=windowHeight*0.85)direccion2=3
		break;
		case 3:
		    console.log(`p2 entro al 3`)
			image(b3,b1X-=velocidad2,b1Y)
			if(b1X<=60)direccion2=4
		break;
		case 4:
            console.log(`p2 entro al 4`)
            image(b4,b1X,b1Y-=velocidad2)
            if(b1X>=10 && b1Y<=60)direccion2=1
            
		break;
            
        if (lap == 3 || lap2 == 3){
            if(lap>lap2){
                textSize(100);
                text('p1 wins', 10, 30);
                fill(255, 0, 0);
            }else{
                textSize(100);
                text('p2 wins', 10, 30);
                fill(255, 0, 0);
            }
            
        }
	}
    
    if (b1X <= 60 && b1Y <= 206){
        if(lap2 <= 20){
            winP2=1
        }
        if(lap2 <= 40 && lap2 >= 31 ){
            winP2=2
        }
        if(lap2 <= 50 && lap2 >= 35){
            winP2=3
        }
        
        lap2++
    }
    
    if (a1X <= 60 && a1Y <= 206){
        console.log("p1 vuelta")
        if(lap <= 31){
            console.log("p1 vuelta")
            winP1=1
        }
        if(lap <= 40 && lap >= 31 ){
            winP1=2
        }
        if(lap <= 50 && lap >= 41){
            winP1=3
        }
        
        lap++
    }
        
    if (winP2 < 3){
        if(winP1 == 3){ 

            confirm("Blanco gana");
            console.log(lap)

        } 
    }else{
        if(winP2 == 3){ 

            confirm("Rojo gana");
            console.log(lap2)

        }
    }

        
}	

const velocidades = function(){

	velocidad1 = random(3,20)
	velocidad2 = random(1,20)
}
