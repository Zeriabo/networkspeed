
// the distance equation is :Math.sqrt(Math.pow((X2-X1),2)+Math.pow((Y2-Y1),2)))
// speed = (reach - device's distance from network station)^2
//if distance > reach, speed = 0
/*
network stations:
x       y     reach
0       0       9
20      20      16
10      0       12
5       5       13
99      25      2
*/

/*
Networks:

(0, 0), (100, 100), (15, 10), (18, 18), (13, 13) (25, 99)

Output 

● Best station found, output station location and speed
● No station within reach found, output error message
*/

interface point {
    x: number;
    y: number;
    print?:string;
  }
  interface networkStation {
      p : point;
      reach: number;
      name:string;
  }
  interface network {
      x:number;
      y:number;
  }
  interface result {
    p:point;
    speed:number;
}
  
  const point1:point ={
      x: 0,
      y: 0,
      
  }
  const point2:point ={
    x: 20,
    y: 20
}
const point3:point ={
    x: 10,
    y: 0
}
const point4:point ={
    x: 5,
    y: 5
}
const point5:point ={
    x: 99,
    y: 25
}
  const network1:networkStation={
      p: point1,
      reach: 9,
      name:"Network1"
  };
  const network2:networkStation={
    p: point2,
    reach: 16,
      name:"Network2"
};
const network3:networkStation={
    p: point3,
    reach: 12,
      name:"Network3"
};
const network4:networkStation={
    p: point4,
    reach: 13,
      name:"Network4"
};
const network5:networkStation={
    p: point5,
    reach: 2,
      name:"Network5"
};

const p1:point={
    x: 0,
    y: 0
};
const p2:point={
    x: 100,
    y: 100
};
const p3:point={
    x: 15,
    y: 10
};
const p4:point={
    x: 18,
    y: 18
};
const p5:point={
    x: 13,
    y: 13
};
const p6:point={
    x: 25,
    y: 99
};
var arrayNetwordpoints:point[]=[];

arrayNetwordpoints.push(network1.p)
arrayNetwordpoints.push(network2.p)
arrayNetwordpoints.push(network3.p)
arrayNetwordpoints.push(network4.p)
arrayNetwordpoints.push(network5.p)


function calculateDistance(p1:point,p2:point){ //calculates distance between two points
   
    return Math.sqrt(Math.pow((p2.x-p1.x),2)+Math.pow((p2.y-p1.y),2));
}


function calculateSpeed(reach:number,distance:number)
{
  
    if(distance>reach)
    {
        return 0 // no network
    }else
    {
     return  Math.pow(reach-distance,2)
    }
}   

var pointsArray:Array<point>=[]; //points
pointsArray.push(p1)
pointsArray.push(p2)
pointsArray.push(p3)
pointsArray.push(p4)
pointsArray.push(p5)
pointsArray.push(p6)

var networksArray:Array<networkStation>=[]; //existance networks
networksArray.push(network1);
networksArray.push(network2);
networksArray.push(network3);
networksArray.push(network4);
networksArray.push(network5);

function calculateBestNetwork(p: point, array: any[])
     {
         var highestspeed=0;
         var speedArray=[];
          array.forEach((network: networkStation)=>{

         speedArray.push({
             speed:calculateSpeed(network.reach,calculateDistance(p,network.p)),
             network:network.p,
             name:network.name
         })
          highestspeed= Math.max.apply(Math, speedArray.map(function(network) { return network.speed; }))
         
           });
          var filteredArray = speedArray.filter(x=>x.speed>0);
          
           if(filteredArray.length==0)
           {
               console.log("No network station within reach for point "+p.x+','+p.y)
           }else {

              filteredArray.map((n)=>{
                   if(n.speed==highestspeed)
                   {
                       console.log("Best network station for point "+ p.x,p.y+" is "+ n.network.x+','+n.network.y+" with speed "+n.speed);
                   }
               })
               
              
           }

     }


function calculateBestStation()
{

     
     pointsArray.forEach((point)=>
    { 
        calculateBestNetwork(point,networksArray)
    });

}

calculateBestStation();