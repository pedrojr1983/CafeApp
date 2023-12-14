/**
* retorna o valor de uma propriede contida em properties
* @param {*} p 
* @param {*} midia 
* @returns 
*/
export const getPropertyValue=(p, midia)=>{
   var r = 0;
   midia.properties.forEach(e => {
       if(e.name == p){
           r=e.value;
           console.log(e);            
           return r;
       }
   });        
   return r;
}