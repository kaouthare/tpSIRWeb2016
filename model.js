
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !

//Class Drawing
function Drawing() {
    //D�clarer un array
    this.forme = new Array();
    
    this.addForme = function(forme){
    this.forme.push(forme);
    };
    
    this.removeForme = function(index){
    this.forme.splice(index,1);
    };
    /*
    this.removeForme = function(forme){
        this.forme.pop(forme);*/
};


//Classe forme d'ou va h�riter les formes : r�ctangle et ligne
function forme(epaisseur, couleur) {
    this.epaisseur=epaisseur;
    this.couleur=couleur;
};

//Classe Rectangle
function Rectangle(orgX, orgY, larg, haut, epaisseur, couleur) {
    forme.call(this, epaisseur, couleur);
    this.orgX=orgX;
    this.orgY=orgY;
    this.larg=larg;
    this.haut=haut;
};
Rectangle.prototype = new forme();


//Classe Line
function Line(xA, yA, xB, yB, epaisseur, couleur) {
    forme.call(this, epaisseur, couleur);
    this.xA=xA;
    this.yA=yA;
    this.xB=xB;
    this.yB=yB;
};
Line.prototype = new forme();