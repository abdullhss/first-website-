let arr=[];
function addTocart(id){
arr.push(id);
localStorage.setItem('u_cart',JSON.stringify(arr));

let items=JSON.parse(localStorage.getItem('u_cart'));

$('#cart').html(items.length);

} 
function get_Price(){
let items=JSON.parse(localStorage.getItem('u_cart'));//جرب تلغي
   document.write("<table class='table' border='2' >");
	for(var count=0;count<items.length;count++)
	   {
      document.write("<tr>");
      document.write("<td>");
		document.write("price of product"+"("+count+")"+" :");
      document.write( items[count]);
		document.write("</td>");
	   }

   document.write("</table>");
}
function print(){
   alert("The process has been completed ")
}


