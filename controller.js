
var editingMode = { rect: 0, line: 1 };

//fonction pencil
function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	//coueur
	this.currColour = '#000000';
	//forme
	this.currentShape = 0;

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.

	new DnD(canvas, this);

	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd
 this.onInteractionStart=function(DnD){
 	//recuperer les boutons depuis canvas.html afin de verifier l'�tat des boutons
 	var butRect= document.getElementById('butRect');
 	//bouton line
 	var butLine= document.getElementById('butLine');
 	//recuperer la largeur
 	var spinnerWidth= document.getElementById('spinnerWidth');
 	//recuperer la couleur
 	var colour= document.getElementById('colour');
 	
 	// leur donner les valeurs definie dans canvs.html
 	this.currLineWidth=spinnerWidth.value;
 	this.currColour= colour.value;
 	
 	//selon le bouton checker rectangle ou encore ligne edditer le mode
 	if(butRect.checked){
 		this.currEditingMode=editingMode.rect;
	}else if(butLine.checked){
	
		this.currEditingMode=editingMode.line;
 	}else{
 	console.log('la selection nest pas valide');
 	}
 	
 	// selon la frome selectionnee on va creer les formes
 	switch(this.currEditingMode){
 		case editingMode.rect:{
 		//si c'est un rectangle : en cr�er un 
 		var larg = DnD.xF-DnD.xI;
 		var haut =DnD.yF-DnD.yI;
 		this.currentShape = new Rectangle(DnD.xI, DnD.yI, larg, haut, this.currLineWidth, this.currColour);
			break;
 		}
 		case editingMode.line: {
				//si c'est une ligne :
				this.currentShape = new Line(DnD.xI, DnD.yI, DnD.xF, DnD.yF, this.currLineWidth, this.currColour);
				break;
			}
		default:
				console.log("la forme nexiste pas.");
 	}
 	
 
 }.bind(this);

 
 this.onInteractionUpdate= function(DnD) {
		if(butRect.checked) {
			//Rectangle
			var larg = DnD.xF-DnD.xI;
			var haut = DnD.yF-DnD.yI;
			// la forme actuelle prend un rectangle avec les parametre suivant
			this.currentShape = new Rectangle(DnD.xI, DnD.yI, larg, haut, this.currLineWidth, this.currColour);
		}else if(butLine.checked){
			//Ligne
			//la forme actuelle prend une line
			this.currentShape = new Line(DnD.xI, DnD.yI, DnD.xF, DnD.yF, this.currLineWidth, this.currColour);
		
		}else{
			console.log('La selection est invalide');
		}
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		drawing.paint(ctx);
		//Dessiner
		this.currentShape.paint(ctx);
 	}.bind(this);
 	
 this.onInteractionEnd= function(DnD) {
		if(butRect.checked) {
			//Rectangle
			var larg = DnD.xF-DnD.xI;
			var haut = DnD.yF-DnD.yI;
			this.currentShape = new Rectangle(DnD.xI, DnD.yI, larg, haut, this.currLineWidth, this.currColour);
		}else if(butLine.checked){
			//Ligne
			this.currentShape = new Line(DnD.xI, DnD.yI, DnD.xF, DnD.yF, this.currLineWidth, this.currColour);
		
		}else{
			console.log('La selection est invalide');
		}
		// on vide le canvas
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		//Ajout de la forme dans la liste de dessins du canvas
		drawing.addForme(this.currentShape);
		//la liste de dessins du canvas
		drawing.paint(ctx, canvas);
        //Mise � jour de la liste de formes
         drawing.updateShapeList(this.currentShape);
	}.bind(this);


};


