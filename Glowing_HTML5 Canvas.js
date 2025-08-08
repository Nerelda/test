(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Glowing_HTML5 Canvas_atlas_1", frames: [[0,0,92,77]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.Groupcopy3 = function() {
	this.initialize(img.Groupcopy3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,13812,720);


(lib.Menu = function() {
	this.initialize(ss["Glowing_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Menu();
	this.instance.setTransform(-46,-38.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-46,-38.5,92,77), null);


// stage content:
(lib.Glowing_HTML5Canvas = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		/* stop();
		
		import flash.display.DisplayObject;
		import flash.display.BitmapData;
		import flash.geom.Rectangle;
		import flash.geom.Matrix;
		import flash.filters.GlowFilter;
		import flash.utils.Dictionary;
		import flash.events.Event;
		
		var daftarEfekSorotan:Dictionary = new Dictionary();
		
		function beriEfekSorotan(objekNama:String):void {
		    var target:DisplayObject = this[objekNama] as DisplayObject;
		    if (!target) return;
		    if (daftarEfekSorotan[target]) return;
		
		    // Ambil warna rata-rata objek
		    var color:uint = ambilWarnaDominan(target);
		
		    var asalX:Number = target.scaleX;
		    var asalY:Number = target.scaleY;
		
		    var skalaMax:Number = asalX + 0.1;
		    var skalaMin:Number = asalX;
		    var skalaTujuan:Number = skalaMax;
		
		    var glowAlpha:Number = 1;
		    var glowBlur:Number = 30;
		    var arahAlpha:int = -1;
		    var easing:Number = 0.1;
		
		    daftarEfekSorotan[target] = function(e:Event):void {
		        if (!target.stage || !target.parent || !target.visible) {
		            target.removeEventListener(Event.ENTER_FRAME, arguments.callee);
		            delete daftarEfekSorotan[target];
		            target.filters = [];
		            return;
		        }
		
		        // Animasi skala halus
		        target.scaleX += (skalaTujuan - target.scaleX) * easing;
		        target.scaleY += (skalaTujuan - target.scaleY) * easing;
		        if (Math.abs(target.scaleX - skalaTujuan) < 0.005) {
		            skalaTujuan = (skalaTujuan == skalaMax) ? skalaMin : skalaMax;
		        }
		
		        // Pulse alpha
		        glowAlpha += arahAlpha * 0.05;
		        if (glowAlpha <= 0.4) {
		            glowAlpha = 0.4;
		            arahAlpha = 1;
		        } else if (glowAlpha >= 1) {
		            glowAlpha = 1;
		            arahAlpha = -1;
		        }
		
		        var glow:GlowFilter = new GlowFilter(color, glowAlpha, glowBlur, glowBlur, 2, 1, false, false);
		        target.filters = [glow];
		    };
		
		    target.addEventListener(Event.ENTER_FRAME, daftarEfekSorotan[target]);
		}
		
		// Fungsi untuk ambil warna dominan dari objek
		function ambilWarnaDominan(objek:DisplayObject):uint {
		    // Tangkap objek sebagai bitmap kecil
		    var bounds:Rectangle = objek.getBounds(objek);
		    var bmpd:BitmapData = new BitmapData(1, 1, false, 0x000000);
		    var matriks:Matrix = new Matrix();
		    matriks.scale(1 / bounds.width, 1 / bounds.height);
		    matriks.translate(-bounds.x / bounds.width, -bounds.y / bounds.height);
		    bmpd.draw(objek, matriks);
		    return bmpd.getPixel(0, 0);
		}
		
		function hapusEfekSorotan(objekNama:String):void {
		    var target:DisplayObject = this[objekNama] as DisplayObject;
		    if (!target) return;
		    if (!daftarEfekSorotan[target]) return;
		
		    target.removeEventListener(Event.ENTER_FRAME, daftarEfekSorotan[target]);
		    delete daftarEfekSorotan[target];
		    target.filters = [];
		
		    // Opsional: kembalikan ke skala asli (jika diperlukan)
		    // target.scaleX = 1;
		    // target.scaleY = 1;
		}
		
		
		beriEfekSorotan("sample");*/
		/* import flash.display.Sprite;
		import flash.display.BlendMode;
		import flash.display.Graphics;
		import flash.filters.GlowFilter;
		import flash.events.MouseEvent;
		import flash.events.Event;
		
		var bintang:BintangPartikel = new BintangPartikel();
		
		
		stage.addEventListener(MouseEvent.CLICK, efekTap);
		
		function efekTap(e:MouseEvent):void {
		    // Circle putih tengah
		    var circle:Sprite = new Sprite();
		    circle.graphics.beginFill(0xFFFFFF, 0.5);
		    circle.graphics.drawCircle(0, 0, 15);
		    circle.graphics.endFill();
		    circle.x = e.stageX;
		    circle.y = e.stageY;
		    circle.blendMode = BlendMode.ADD;
		    circle.filters = [new GlowFilter(0xFFFFFF, 1, 16, 16, 2, 1)];
		    addChild(circle);
		
		    circle.scaleX = circle.scaleY = 0.5;
		    circle.alpha = 1;
		    circle.addEventListener(Event.ENTER_FRAME, function(ev:Event):void {
		        circle.scaleX += 0.3;
		        circle.scaleY += 0.3;
		        circle.alpha -= 0.15;
		        if (circle.alpha <= 0) {
		            circle.removeEventListener(Event.ENTER_FRAME, arguments.callee);
		            if (circle.parent) circle.parent.removeChild(circle);
		        }
		    });
		
		    // Bintang warna-warni
		    var jumlahBintang:int = 10;
		    for (var i:int = 0; i < jumlahBintang; i++) {
		        var bintang:BintangPartikel = new BintangPartikel();
		
		        var warnaList:Array = [0xFFFFFF, 0xFFCC00, 0xFF66CC, 0x99CCFF];
		        var warna:uint = warnaList[int(Math.random() * warnaList.length)];
		
		        bintang.graphics.beginFill(warna, 1);
		
		        var shapeTipe:int = int(Math.random() * 3); // jenis shape bintang
		        var scale:Number = 0.4 + Math.random() * 0.6;
		        var outerR:Number = 4 + Math.random() * 4;
		        var innerR:Number = outerR * 0.5;
		
		        switch(shapeTipe) {
		            case 0: gambarBintang(bintang.graphics, 0, 0, innerR, outerR, 5); break;
		            case 1: gambarBintang(bintang.graphics, 0, 0, innerR, outerR, 6); break;
		            case 2: gambarBintang(bintang.graphics, 0, 0, innerR * 0.6, outerR * 1.4, 4); break;
		        }
		
		        bintang.graphics.endFill();
		        bintang.x = e.stageX;
		        bintang.y = e.stageY;
		        bintang.blendMode = BlendMode.ADD;
		        bintang.filters = [new GlowFilter(warna, 1, 6, 6, 2, 1)];
		        bintang.scaleX = bintang.scaleY = scale;
		        addChild(bintang);
		
		        var angle:Number = Math.random() * Math.PI * 2;
		        var speed:Number = 3 + Math.random() * 2;
		        bintang.dx = Math.cos(angle) * speed;
		        bintang.dy = Math.sin(angle) * speed;
		        bintang.dr = (Math.random() - 0.5) * 20;
		
		        bintang.addEventListener(Event.ENTER_FRAME, gerakBintang);
		    }
		}
		
		function gerakBintang(e:Event):void {
		    var b:BintangPartikel = e.currentTarget as BintangPartikel;
		    b.x += b.dx;
		    b.y += b.dy;
		    b.rotation += b.dr;
		    b.alpha -= 0.07;
		    b.scaleX += 0.015;
		    b.scaleY += 0.015;
		
		    if (b.alpha <= 0) {
		        b.removeEventListener(Event.ENTER_FRAME, gerakBintang);
		        if (b.parent) b.parent.removeChild(b);
		    }
		}
		
		function gambarBintang(g:Graphics, cx:Number, cy:Number, innerR:Number, outerR:Number, points:int):void {
		    var angle:Number = Math.PI / points;
		    g.moveTo(cx + Math.cos(0) * outerR, cy + Math.sin(0) * outerR);
		    for (var i:int = 0; i < points * 2; i++) {
		        var radius:Number = (i % 2 == 0) ? outerR : innerR;
		        var x:Number = cx + Math.cos(i * angle) * radius;
		        var y:Number = cy + Math.sin(i * angle) * radius;
		        g.lineTo(x, y);
		    }
		    g.lineTo(cx + Math.cos(0) * outerR, cy + Math.sin(0) * outerR);
		}*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.sample = new lib.Symbol1();
	this.sample.name = "sample";
	this.sample.setTransform(1015,294.5);
	new cjs.ButtonHelper(this.sample, 0, 1, 1);

	this.instance = new lib.Groupcopy3();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.sample}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(806,360,13006,360);
// library properties:
lib.properties = {
	id: 'D00EC57CF6208A45B1EAFB4638460A88',
	width: 1612,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Groupcopy3.jpg", id:"Groupcopy3"},
		{src:"images/Glowing_HTML5 Canvas_atlas_1.png", id:"Glowing_HTML5 Canvas_atlas_1"},
		{src:"sounds/Ost_clickrandom.mp3", id:"Ost_clickrandom"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['D00EC57CF6208A45B1EAFB4638460A88'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;