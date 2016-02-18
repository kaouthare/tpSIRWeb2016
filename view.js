
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

