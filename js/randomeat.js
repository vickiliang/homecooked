

var randomlinks=new Array()

randomlinks[0]="recipes/chickpea cookies.html"
randomlinks[1]="https://www.instagram.com/home____cooked/"
randomlinks[2]="https://www.themodernhouse.com/"
randomlinks[3]="https://bread-on.earth/"
randomlinks[4]="https://greenkitchenstories.com/potato-pizza/"

function randomlink(){
window.location=randomlinks[Math.floor(Math.random()*randomlinks.length)]
alert ('randomlink')
}
