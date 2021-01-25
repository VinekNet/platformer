class Tableau00b extends Tableau{

    preload() {
        super.preload();
        this.load.image('star', 'assets/star2.png');
        this.load.image('monster-violet', 'assets/monster-violet.png');
        this.load.image('monster-horrible', 'assets/monster-horrible.png');
        this.load.image('demon2000', 'assets/demon2000.png');
        this.load.image('monstre-oskour', 'assets/monstre-oskour.png');
        this.load.image('ombre', 'assets/ombre.png');
        this.load.image('monster-fly', 'assets/air.png');
        this.load.image('twomp', 'assets/twomp.png');
    }
    create() {
        super.create();

        //des étoiles
        this.star1=this.physics.add.sprite(width-50,100,"star");
        this.star1.setCollideWorldBounds(true);
        this.star1.setBounce(0);

        //quand le joueur touche une étoile on appelle la fonction ramasserEtoile
        this.physics.add.overlap(this.player, this.star1, this.ramasserEtoile, null, this);

        //notre monstre
        this.monstre=this.physics.add.sprite(300,this.sys.canvas.height-70,"monster-violet");
        this.monstre.setOrigin(0,0);
        this.monstre.setDisplaySize(64,64);
        this.monstre.setCollideWorldBounds(true);
        this.monstre.setBounce(1);
        this.monstre.setVelocityX(50);
        this.physics.add.overlap(this.player, this.monstre, this.hitSpike, null, this);

        //2 : plus rapide
        this.monstre=this.physics.add.sprite(300,this.sys.canvas.height-70,"monster-horrible");
        this.monstre.setOrigin(-2,0);
        this.monstre.setDisplaySize(64,64);
        this.monstre.setCollideWorldBounds(true);
        this.monstre.setBounce(1);
        this.monstre.setVelocityX(60);
        this.physics.add.overlap(this.player, this.monstre, this.hitSpike, null, this);
        //3 : immobile, saute haut
        this.monstre=this.physics.add.sprite(300,this.sys.canvas.height-70,"demon2000");
        this.monstre.setOrigin(-2,2);
        this.monstre.setDisplaySize(64,64);
        this.monstre.setCollideWorldBounds(true);
        this.monstre.setBounce(1);
        this.monstre.setVelocityX(0);
        this.physics.add.overlap(this.player, this.monstre, this.hitSpike, null, this);
        //4 : plus petit, plus plus rapide
        this.monstre=this.physics.add.sprite(300,this.sys.canvas.height-70,"monstre-oskour");
        this.monstre.setOrigin(-3,-0.5);
        this.monstre.setDisplaySize(64,32);
        this.monstre.setCollideWorldBounds(true);
        this.monstre.setBounce(1);
        this.monstre.setVelocityX(100);
        this.physics.add.overlap(this.player, this.monstre, this.hitSpike, null, this);
        //5 : tombe du ciel puis disparait
        this.monstre=this.physics.add.sprite(300,this.sys.canvas.height-70,"ombre");
        this.monstre.setOrigin(3,7);
        this.monstre.setDisplaySize(72,72);
        this.monstre.setCollideWorldBounds(false);
        this.monstre.setBounce(0);
        this.monstre.setVelocityX(10);
        this.monstre.setVelocityY(-100);
        this.physics.add.overlap(this.player, this.monstre, this.hitSpike, null, this);
        //6: se retourne avant le mur
        new MonsterTest(this,400,height-25);
        //7:
        new Twomp(this,400,200)
    }


}

