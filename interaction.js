
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, Pencil) {

	// Définir ici les attributs de la 'classe'
	this.xI = 0; //le X initial
	this.yI= 0; //le Y initial
	this.xF= 0; //le X final
	this.yF= 0; //le Y final
	this.boutonPressee=false; //un boolean pour savoir si le bouton est pressed ou pas

	// Developper les 3 fonctions gérant les événements
	this.maFctGerantLaPression= function(evt) {
        if(this.boutonPressee==false) {
            this.boutonPressee=true;
            this.xI = getMousePosition(canvas,evt).x;
            this.yI = getMousePosition(canvas,evt).y;
            this.xF = getMousePosition(canvas,evt).x;
            this.yF = getMousePosition(canvas,evt).y;
            
            /*  console.log("********Pression**********"); affichage dela valeur des points de la pression sur la console*/
            /*console.log("x initial"+this.xI);
            console.log("y initial"+this.yI);
            console.log("x final"+this.xF);
            console.log("y final"+this.yF);*/
          Pencil.onInteractionStart(this);
        }
    }.bind(this) ;

    this.maFctGerantLeDeplacement=function(evt) {
      if(this.boutonPressee==true){
          this.xF=getMousePosition(canvas,evt).x;
          this.yF=getMousePosition(canvas,evt).y;

          /*console.log("********Mouvement**********");*/

          /*console.log("x initial"+this.xI);
          console.log("y initial"+this.yI);
          console.log("x final"+this.xF);
          console.log("y final"+this.yF);*/
         Pencil.onInteractionUpdate(this);
      }
    }.bind(this);

    this.maFctGerantLeRelachement=function(evt) {
    
        /*console.log("********Relachement**********");*/
      /*  console.log("x initial"+this.xI);
        console.log("y initial"+this.yI);
        console.log("x final"+this.xF);
        console.log("y final"+this.yF);*/
        if(this.boutonPressee==true){
            this.boutonPressee=false;
          Pencil.onInteractionEnd(this);
            //R�initialisation des coordonn�es pour le drop 
            this.xI = 0;
            this.yI =0;
            this.xF = 0;
            this.yF =0;
      }
    }.bind(this) ;
	// Associer les fonctions précédentes aux évènements du canvas.
	
	 canvas.addEventListener('mousedown', this.maFctGerantLaPression, false);
 	 canvas.addEventListener('mousemove', this.maFctGerantLeDeplacement, false);
  	 canvas.addEventListener('mouseup', this.maFctGerantLeRelachement, false);
};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};



