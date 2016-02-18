
// Impl√©menter ici les 4 classes du mod√®le.
// N'oubliez pas l'h√©ritage !

//Class Drawing
function Drawing() {
    //DÈclarer un array
    this.forme = new Array();
};


//Classe forme d'ou va hÈriter les formes : rÈctangle et ligne
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