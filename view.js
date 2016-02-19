
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
    var myShapeList = document.getElementById('shapeList');
	var li = document.createElement('li');
	var id = myShapeList.childNodes.length;
	var bouton = document.createElement('button');
	var span = document.createElement('span');


    var butRect= document.getElementById('butRect');
    var butLine= document.getElementById('butLine');
    if(butLine.checked){
        var rx = forme.xA;
    	var ry = forme.xB;
    	var rl = forme.yA;
        var rh = forme.yB;
    } else {
        var rx = forme.orgX;
    	var ry = forme.orgY;
    	var rl = forme.larg;
        var rh = forme.haut;
    }
	bouton.setAttribute('id', id);
    bouton.setAttribute('class','btn btn-default');
    span.setAttribute('class','glyphicon glyphicon-remove-sign');
    bouton.appendChild(span);
    li.appendChild(bouton);

    bouton.setAttribute('onClick', 'drawing.deleteShape('+id+','+rx+','+ry+','+rl+','+rh+')');

    	if (forme instanceof Rectangle){
    		li.appendChild(document.createTextNode('Rectangle' +'('+ rx+','+ry+','+rl+','+rh+')'));

    	} else if(forme instanceof Line){

    		li.appendChild(document.createTextNode('Line' +'('+ rx+','+ry+','+rl+','+rh+')'));
    	}

    	li.setAttribute('id', 'li'+id);
    	li.setAttribute('class', 'list-group-item');
    	myShapeList.appendChild(li);


};

Drawing.prototype.deleteShape = function(id,rx,ry,rl,rh){
	var li = document.getElementById('li'+id);

	ctx.clearRect(rx, ry, rl, rh);


    li.remove();

};