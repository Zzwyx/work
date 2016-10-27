
 	   var nav = document.getElementById('show-nav');
       var show= document.getElementById('hidden-show');
       var hclose = document.getElementById('h-close');
       var shadow = document.getElementById('shadow');
       var h = document.body.scrollHeight;
       
      

       function navshow () {
         show.style.display = 'block';
       }

       function navhidden () {
       	  show.style.display = 'none';
       }

       
       function share () {
       	  shadow.style.display = 'block';
       	  shadow.style.height = h+'px';
       }
       var que = document.getElementById('que');
       function console () {
       	  shadow.style.display = 'none';

       }


      
