# networkspeed

program that solves the most suitable (with highest non-zero speed) network station for a device at a given point (x, y).
This problem can be solved in 2-dimensional space. Network stations have reach and speed that depends on the distance to the station.
A network station’s speed can be calculated as follows:
     speed = (reach - device's distance from network station)^2
     if distance > reach, speed = 0
Network stations are located at points (x, y) and have reach r:

network stations:
x       y     reach
0       0       9
20      20      16
10      0       12
5       5       13
99      25      2


Print out the most suitable network station and the network speed from devices (x, y): (0, 0), (100, 100), (15, 10), (18, 18), (13, 13) and (25, 99)
Program should output the solution to these two cases:
● Best station found, output station location and speed
● No station within reach found, output error message
It can be in the form of:
“Best network station for point x,y is x,y with speed z” “No network station within reach for point x,y”

the code is on the master branch written by typescript can be run by: 

copy paste the code on https://www.mycompiler.io/new/typescript and run it


