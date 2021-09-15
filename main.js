var name_of_people=[];
function submit()
{
var Guestname = document.getElementById("name1").value;
name_of_people.push(Guestname);
console.log(Guestname);
console.log(name_of_people);
var lengh_of_name=name_of_people.length;
console.log(lengh_of_name);
document.getElementById("display_name").innerHTML=name_of_people.toString();
}
function sorting(){
   name_of_people.sort()
   var i=name_of_people.join("<br>");
   console.log(name_of_people);
   document.getElementById("sorted").innerHTML=i.toString();

}
function show()
{
    var i=name_of_people.join("<br>");
    console.log(name_of_people);
    document.getElementById("p1").innerHTML=i.toString();
    document.getElementById("sort_button").style.display="block";

}
function searching()
{
    var s= document.getElementById("s1").value;
    var found=0;
    var j;
    for(j=0; j<name_of_people.length; j++)
    {
        if(s==name_of_people[j]){
            found=found+1;

        }
    }
    document.getElementById("p2").innerHTML="name found "+found+" time/s";
    console.log("found name "+found+" time/s");
}
