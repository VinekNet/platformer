class Tableau08 extends Tableau{

    preload() {
        super.preload();
        this.load.image('platforms', 'assets/platforms.png');
        this.load.image('star', 'assets/herisson.png');
        this.load.image('ground', 'assets/groundpt.png');
        this.load.image('sky-2', 'assets/Front-three.png');
        this.load.image('sky-3', 'assets/Back_three.png');
        this.load.image('tarsal', 'assets/Monstre2.png');
        this.load.audio('back', 'assets/SongGame.ogg');
        this.load.image('spoink', 'assets/MonstreR.png');
        this.load.image('deoxys', 'assets/monstreV.png');
    }
    create() {
        super.create();
        this.sound.add('back');
        //on définit la taille du tableau
        let largeurDuTableau=2500;
        let hauteurDuTableau=448; //la hauteur est identique au cadre du jeu
        this.cameras.main.setBounds(0, 0, largeurDuTableau, hauteurDuTableau);
        this.physics.world.setBounds(0, 0, largeurDuTableau,  hauteurDuTableau);

        this.cameras.main.startFollow(this.player, false, 0.05, 0.05);
        this.sound.play('back');

        for(let i=0 ;i<=2;i++){
            let ground=this.physics.add.sprite(i*896,384,"ground");
            ground.setDisplaySize(896,64)//taille de l'objet
            ground.setOrigin(0,0);//pour positionner plus facilement
            ground.body.allowGravity=0; //la gravité n'a pas d'effet ici
            ground.setImmovable(true); //ne bouge pas quand on rentre dedans
            this.physics.add.collider(this.player, ground);//le joueur rebondit dessus*/*
            ground.setScrollFactor(1);
            ground.setDepth(1);
            ground.tilePositionX=this.cameras.main.scrollX*0.6;
        }
        
        this.stars=this.physics.add.group();
        this.stars.create(860,255,"star");
        this.stars.create(1320,105,"star");
        this.stars.create(2550,55,"star");
       
        this.stars.children.iterate(function (child) {
            child.setCollideWorldBounds(true);
            child.setBounce(0);
            child.setDisplaySize(32,40)
            child.setDepth(10)
        });
        //si le joueur touche une étoile dans le groupe...
        this.physics.add.overlap(this.player, this.stars, this.ramasserEtoile, null, this);

        this.platforms = this.physics.add.group();
        this.platforms.create(850, 300, 'platforms');
        this.platforms.create(1300, 150, 'platforms');
        this.platforms.create(1420 , 280, 'platforms');
        this.platforms.create(1800 , 280, 'platforms');
        this.platforms.create(2100 , 280, 'platforms');
        this.platforms.create(2250 , 200, 'platforms');
        this.platforms.create(2450 , 100, 'platforms');

        this.platforms.children.iterate(function (child) {
            child.setImmovable(true);
            child.body.allowGravity=false;
            child.setVelocityX(0);
            child.setBounceX(1);
            child.setDisplaySize(140, 50);
            child.setCollideWorldBounds(true);
            child.setDepth(10);
            child.setFriction(1); //les éléments ne glissent pas dessus cette plateforme
        });

        // ground.setBounce(0);
        new Return(this,400,height-80);
        new Spoink(this,1200,100);
        new Speed(this,2200,height-80);

        this.physics.add.collider(this.platforms, this.stars);
        //quelques étoiles et plateformes qui vont avec
        // this.stars=this.physics.add.group();
        // this.platforms=this.physics.add.staticGroup();
        // for(let posX=20;posX<largeurDuTableau;posX+=100){
        //     let etoileY=350+Math.sin(posX)*100;
        //     let star=this.stars.create(posX ,etoileY,"star");
        //     star.body.allowGravity=false;
        //     let plate=this.platforms.create(posX ,etoileY+50,"ground");
        //     plate.setDisplaySize(60,10);
        //     plate.refreshBody();
        // }

        this.physics.add.overlap(this.player, this.stars, this.ramasserEtoile, null, this);
        this.physics.add.collider(this.player,this.platforms);
        this.sky2=this.add.tileSprite(
                    0,
                    30,
                    this.sys.canvas.width,
                    this.sys.canvas.height,
                    'sky-3'
                );
                this.sky2.setScrollFactor(0);
                this.sky2.setOrigin(0,0);
                this.sky2.setDepth(0);
                //this.sky2.alpha=0.2;
                //this.sky.tileScaleX=this.sky.tileScaleY=0.8;

        //on change de ciel, on fait une tileSprite ce qui permet d'avoir une image qui se répète
        this.sky=this.add.tileSprite(
            0,
            30,
            this.sys.canvas.width,
            this.sys.canvas.height,
            'sky-2'
        );
        this.sky.setOrigin(0,0);
        this.sky.setScrollFactor(0);//fait en sorte que le ciel ne suive pas la caméra
        //on ajoute une deuxième couche de ciel
        



        this.player.setDepth(10);
        this.sky.setDepth(20);
    }

    update(){
        super.update();
        //le ciel se déplace moins vite que la caméra pour donner un effet paralax
        this.sky.tilePositionX=this.cameras.main.scrollX*1.05;
        this.sky.tilePositionY=this.cameras.main.scrollY*0.2;
        //le deuxième ciel se déplace moins vite pour accentuer l'effet
        this.sky2.tilePositionX=this.cameras.main.scrollX*0.1+500;
        this.sky2.tilePositionY=this.cameras.main.scrollY*0.1+30;
    }
    



}

