
var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape = 0;

	// Liez ici les widgets Ã  la classe pour modifier les attributs prÃ©sents ci-dessus.

	new DnD(canvas, this);

	// ImplÃ©mentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd
 this.onInteractionStart=function(DnD){
 	//recuperer les boutons depuis canvas.html afin de verifier l'état des boutons
 	var butRect= document.getElementById('butRect');
 	var butLine= document.getElementById('butLine');
 	var spinnerWidth= document.getElementById('spinnerWidth');
 	var colour= document.getElementById('colour');
 	
 	// leur donner les valeurs définie dans canvs.html
 	this.currLineWidth=spinnerWidth.value;
 	this.currColour= colour.value;
 	
 	//selon le bouton checker rectangle ou encore ligne edditer le mode
 	if(butRect.checked){
 		this.currEditingMode=editingMode.rect;
	}else if(butLine.checked){
	
		this.currEditingMode=editingMode.line;
 	}else{
 	console.log('la selection n'est pas valide');
 	}
 	
 	// selon la frome selectionnée on va créer les formes
 	switch(this.currEditingMode){
 		case editingMode.rect:{
 		//si c'est un rectangle : en créer un 
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
				console.log("la forme n'existe pas.");
 	}
 	
 
 }.bind(this);
 
 this.onInteractionUpdate= function(DnD) {
		if(butRect.checked) {
			//Rectangle
			var larg = DnD.xF-DnD.xI;
			var haut = DnD.yF-DnD.yI;
			this.currentShape = new Rectangle(DnD.xI, DnD.yI, larg, haut, this.currLineWidth, this.currColour);
		}else if(butLine.checked){
			//Ligne
			this.currentShape = new Line(DnD.xI, DnD.yI, DnD.xF, DnD.yF, this.currLineWidth, this.currColour);
		
		}else{
			console.log('La sélection est invalide');
		}
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		drawing.paint(ctx);
		this.currentShape.paint(ctx);
 	}.bind(this) ;
 	
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
			console.log('La sélection est invalide');
		}
		// reinitialiser le canvas
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		//Ajout de la forme à la liste de dessins du canvas
		drawing.addForm(this.currentShape);
		//la liste de dessins du canvas
		drawing.paint(ctx, canvas);
        //Mise à jour de la liste de formes 
        drawing.updateShapeList(this.currentShape);
	}.bind(this);


};


