var card=document.getElementById('card_div');
var div = document.createElement("div");
var div2 = document.createElement("div");
var btn=document.createElement("button");
var btn2=document.createElement("button");
var all=document.getElementById('play_container');
var footer=document.getElementsByClassName('footer');
var loading=document.getElementById('loading');
loading_text=document.getElementById('loading_text');
var random;
var body=()=>{

	all.style.display='none';
	div2.classList.add('card-footer','footer')
   setTimeout(()=>{
         loading.style.display='none';
         loading_text.style.display='none';

         all.style.display= 'block';
         div.classList.add('card-body','text-center');
         div.innerHTML=`<h1>What people think You wants:</h1>
                 <img src="Image/gthk-${randomImage()}.jpg"width="300"height="300"class="img-fluid">
                 <h1>What he really wants</h1>
                 <img src="Image/greal-${randomImage()}.jpg"width="300"height="300" class="img-fluid">`;
        
         btn.innerHTML=`Share`;
         btn2.innerHTML=`Try Again`;
         btn2.onclick=()=>{
         	location.reload();
         }
         btn.classList.add('btn','btn-primary','share');
         btn2.classList.add('btn','btn-danger','try');
         card.appendChild(div);
         div2.appendChild(btn);
         div2.appendChild(btn2);
         card.appendChild(div2);
   },2000);
   
}
var randomImage =function(){
    random= Math.floor(Math.random()*5)+1;
    return random;
}
body();

//var btn =document.getElementById('')
