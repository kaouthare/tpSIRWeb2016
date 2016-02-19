
// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.


Rectangle.prototype.paint = function(ctx) {
    
    ctx.lineWidth=this.epaisseur;
    ctx.strokeStyle=this.couleur;
    ctx.rect(this.orgX, this.orgY, this.larg, this.haut);
    ctx.stroke();
};

Line.prototype.paint = function(ctx) {
    ctx.lineWidth=this.epaisseur;
    ctx.strokeStyle=this.couleur;
    ctx.beginPath();
    ctx.moveTo(this.xA, this.yA);
    ctx.lineTo(this.xB, this.yB);
    ctx.stroke();
};

Drawing.prototype.paint = function(ctx) {
    ctx.fillStyle = '#F0F0F0'; // changer la couleur du background 
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.forme.forEach(function(eltDuTableau) {
        
        eltDuTableau.paint(ctx);
    });
};

Drawing.prototype.updateShapeList = function(forme){
    // Obtenir la liste des formes :shapes
    var myShapeList = document.getElementById('shapeList');
    // Creation d'un li element de la lite
	var li = document.createElement('li');

	var id = myShapeList.childNodes.length;
	// le bouton pour supprimer les formes
	var bouton = document.createElement('button');
	//Creation d'un span
	var span = document.createElement('span');

    // obtenir les coordonées de la position des formes ligne ou rectangle
    var butRect= document.getElementById('butRect');
    var butLine= document.getElementById('butLine');
    //si c'est une ligne
    if(butLine.checked){
        var rx = forme.xA;
    	var ry = forme.xB;
    	var rl = forme.yA;
        var rh = forme.yB;
    } else { //si c'est un rectangle
        var rx = forme.orgX;
    	var ry = forme.orgY;
    	var rl = forme.larg;
        var rh = forme.haut;
    }
    //Changer l'id du bouton
	bouton.setAttribute('id', id);

    bouton.setAttribute('class','btn btn-default');
    //ajouter la croix pour supprimer
    span.setAttribute('class','glyphicon glyphicon-remove-sign');
    //ajouter le span au bouton
    bouton.appendChild(span);

     bouton.setAttribute('onClick', 'drawing.deleteShape('+id+')');
    //ajouter le bouto à li
    li.appendChild(bouton);



    	if (forme instanceof Rectangle){
    		li.appendChild(document.createTextNode('Rectangle' +'('+ rx+','+ry+','+rl+','+rh+')'));

    	} else if(forme instanceof Line){

    		li.appendChild(document.createTextNode('Line' +'('+ rx+','+ry+','+rl+','+rh+')'));
    	}

    	li.setAttribute('id', 'li'+id);
    	li.setAttribute('class', 'list-group-item');
    	//ajouter l'element li a note liste myshape
    	myShapeList.appendChild(li);


};

Drawing.prototype.deleteShape = function(id){
//obetenir l'id
	var li = document.getElementById('li'+id);
	var index= $(li).index();
    //supprimer l'element qui contient le bouton et les informations de la forme
    li.remove();
    this.removeForme(index);
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	drawing.paint(ctx);

    /*

    Drawing.prototype.removeShapeFromList = function(index) {

        this.removeForm(index);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawing.paint(ctx, canvas);
        var shapeList = document.getElementById('myTable').getElementsByTagName('tbody')[0];
        while( shapeList.firstChild) {
            shapeList.removeChild( shapeList.firstChild);
        }
        for(var x= 0, nb=drawing.forms.length;x<nb;x++){
            drawing.updateShapeList(drawing.forms[x]);
        }
    }

    */

};