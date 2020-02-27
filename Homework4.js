// task 6

let n = 5 ; 
let res = " "; 
for (let i=1; i<=5; i++) {
   let row = " * "
   for (let j=1; j<=5; j++) {
     res += row
   }

   res+= " \n "


}
alert(res) ; 
 
// task 7

let n = 5 ; 
let res = ""; 
for (let i=1; i<=n; i++) {
   let row = " * "
   for (let j=1; j<=n; j++) {
      if (i==1 || i==n || j==1 || j==n) {
        res += row ;
      } else {
        res += "    " ; 
      }
    
   }

      res+= " \n "


}
alert(res) ; 
// I can not get a normal square 



// task 8
let n = 5; 
let res = " " ; 
for (let i=n-1 ; i>=(-5); i--) {
    let row = 0
    for (j=n-1; j>= Math.abs(i); j--){
      row++
      res+=row ; 
    }
     
     res+= "\n"

}
alert(res); 