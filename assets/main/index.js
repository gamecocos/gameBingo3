System.register("chunks:///_virtual/audioScript.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(i){"use strict";var e,t,r,c,o;return{setters:[function(i){e=i.applyDecoratedDescriptor,t=i.initializerDefineProperty},function(i){r=i.cclegacy,c=i._decorator,o=i.AudioClip}],execute:function(){var n,u,a,l,p,s,d;r._RF.push({},"ca0b8cycFhJmrxLkSnmcZRp","audioScript",void 0);var f=c.ccclass,b=c.property;i("default",(n=f("./audioScript"),u=b(String),a=b(o),n((s=e((p=function(){t(this,"Name",s,this),t(this,"AudioClip",d,this)}).prototype,"Name",[u],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),d=e(p.prototype,"AudioClip",[a],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),l=p))||l));r._RF.pop()}}}));

System.register("chunks:///_virtual/debug-view-runtime-control.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var e,o,i,n,s,l,r,a,g,h,c,p,C,d,m,u,T;return{setters:[function(t){e=t.applyDecoratedDescriptor,o=t.inheritsLoose,i=t.initializerDefineProperty,n=t.assertThisInitialized},function(t){s=t.cclegacy,l=t._decorator,r=t.Node,a=t.Canvas,g=t.UITransform,h=t.instantiate,c=t.Label,p=t.Color,C=t.RichText,d=t.Toggle,m=t.Button,u=t.director,T=t.Component}],execute:function(){var L,f,M,b,v,x,E,S,I;s._RF.push({},"b2bd1+njXxJxaFY3ymm06WU","debug-view-runtime-control",void 0);var A=l.ccclass,y=l.property;t("DebugViewRuntimeControl",(L=A("internal.DebugViewRuntimeControl"),f=y(r),M=y(r),b=y(r),L((E=e((x=function(t){function e(){for(var e,o=arguments.length,s=new Array(o),l=0;l<o;l++)s[l]=arguments[l];return e=t.call.apply(t,[this].concat(s))||this,i(e,"compositeModeToggle",E,n(e)),i(e,"singleModeToggle",S,n(e)),i(e,"EnableAllCompositeModeButton",I,n(e)),e._single=0,e.strSingle=["No Single Debug","Vertex Color","Vertex Normal","Vertex Tangent","World Position","Vertex Mirror","Face Side","UV0","UV1","UV Lightmap","Project Depth","Linear Depth","Fragment Normal","Fragment Tangent","Fragment Binormal","Base Color","Diffuse Color","Specular Color","Transparency","Metallic","Roughness","Specular Intensity","IOR","Direct Diffuse","Direct Specular","Direct All","Env Diffuse","Env Specular","Env All","Emissive","Light Map","Shadow","AO","Fresnel","Direct Transmit Diffuse","Direct Transmit Specular","Env Transmit Diffuse","Env Transmit Specular","Transmit All","Direct TRT","Env TRT","TRT All","Fog"],e.strComposite=["Direct Diffuse","Direct Specular","Env Diffuse","Env Specular","Emissive","Light Map","Shadow","AO","Normal Map","Fog","Tone Mapping","Gamma Correction","Fresnel","Transmit Diffuse","Transmit Specular","TRT","TT"],e.strMisc=["CSM Layer Coloration","Lighting With Albedo"],e.compositeModeToggleList=[],e.singleModeToggleList=[],e.miscModeToggleList=[],e.textComponentList=[],e.labelComponentList=[],e.textContentList=[],e.hideButtonLabel=void 0,e._currentColorIndex=0,e.strColor=["<color=#ffffff>","<color=#000000>","<color=#ff0000>","<color=#00ff00>","<color=#0000ff>"],e.color=[p.WHITE,p.BLACK,p.RED,p.GREEN,p.BLUE],e}o(e,t);var s=e.prototype;return s.start=function(){if(this.node.parent.getComponent(a)){var t=this.node.parent.getComponent(g),e=.5*t.width,o=.5*t.height,i=.1*e-e,n=o-.1*o,s=this.node.getChildByName("MiscMode"),l=h(s);l.parent=this.node,l.name="Buttons";var r=h(s);r.parent=this.node,r.name="Titles";for(var u=0;u<2;u++){var T=h(this.EnableAllCompositeModeButton.getChildByName("Label"));T.setPosition(i+(u>0?450:150),n,0),T.setScale(.75,.75,.75),T.parent=r;var L=T.getComponent(c);L.string=u?"----------Composite Mode----------":"----------Single Mode----------",L.color=p.WHITE,L.overflow=0,this.labelComponentList[this.labelComponentList.length]=L}n-=20;for(var f=0,M=0;M<this.strSingle.length;M++,f++){M===this.strSingle.length>>1&&(i+=200,f=0);var b=M?h(this.singleModeToggle):this.singleModeToggle;b.setPosition(i,n-20*f,0),b.setScale(.5,.5,.5),b.parent=this.singleModeToggle.parent;var v=b.getComponentInChildren(C);v.string=this.strSingle[M],this.textComponentList[this.textComponentList.length]=v,this.textContentList[this.textContentList.length]=v.string,b.on(d.EventType.TOGGLE,this.toggleSingleMode,this),this.singleModeToggleList[M]=b}i+=200,this.EnableAllCompositeModeButton.setPosition(i+15,n,0),this.EnableAllCompositeModeButton.setScale(.5,.5,.5),this.EnableAllCompositeModeButton.on(m.EventType.CLICK,this.enableAllCompositeMode,this),this.EnableAllCompositeModeButton.parent=l;var x=this.EnableAllCompositeModeButton.getComponentInChildren(c);this.labelComponentList[this.labelComponentList.length]=x;var E=h(this.EnableAllCompositeModeButton);E.setPosition(i+90,n,0),E.setScale(.5,.5,.5),E.on(m.EventType.CLICK,this.changeTextColor,this),E.parent=l,(x=E.getComponentInChildren(c)).string="TextColor",this.labelComponentList[this.labelComponentList.length]=x;var S=h(this.EnableAllCompositeModeButton);S.setPosition(i+200,n,0),S.setScale(.5,.5,.5),S.on(m.EventType.CLICK,this.hideUI,this),S.parent=this.node.parent,(x=S.getComponentInChildren(c)).string="Hide UI",this.labelComponentList[this.labelComponentList.length]=x,this.hideButtonLabel=x,n-=40;for(var I=0;I<this.strMisc.length;I++){var A=h(this.compositeModeToggle);A.setPosition(i,n-20*I,0),A.setScale(.5,.5,.5),A.parent=s;var y=A.getComponentInChildren(C);y.string=this.strMisc[I],this.textComponentList[this.textComponentList.length]=y,this.textContentList[this.textContentList.length]=y.string,A.getComponent(d).isChecked=!!I,A.on(d.EventType.TOGGLE,I?this.toggleLightingWithAlbedo:this.toggleCSMColoration,this),this.miscModeToggleList[I]=A}n-=150;for(var D=0;D<this.strComposite.length;D++){var B=D?h(this.compositeModeToggle):this.compositeModeToggle;B.setPosition(i,n-20*D,0),B.setScale(.5,.5,.5),B.parent=this.compositeModeToggle.parent;var w=B.getComponentInChildren(C);w.string=this.strComposite[D],this.textComponentList[this.textComponentList.length]=w,this.textContentList[this.textContentList.length]=w.string,B.on(d.EventType.TOGGLE,this.toggleCompositeMode,this),this.compositeModeToggleList[D]=B}}else console.error("debug-view-runtime-control should be child of Canvas")},s.isTextMatched=function(t,e){var o=new String(t),i=o.search(">");return-1===i?t===e:(o=(o=o.substr(i+1)).substr(0,o.search("<")))===e},s.toggleSingleMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strSingle.length;i++)this.isTextMatched(o.string,this.strSingle[i])&&(e.singleMode=i)},s.toggleCompositeMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strComposite.length;i++)this.isTextMatched(o.string,this.strComposite[i])&&e.enableCompositeMode(i,t.isChecked)},s.toggleLightingWithAlbedo=function(t){u.root.debugView.lightingWithAlbedo=t.isChecked},s.toggleCSMColoration=function(t){u.root.debugView.csmLayerColoration=t.isChecked},s.enableAllCompositeMode=function(t){var e=u.root.debugView;e.enableAllCompositeMode(!0);for(var o=0;o<this.compositeModeToggleList.length;o++){this.compositeModeToggleList[o].getComponent(d).isChecked=!0}var i=this.miscModeToggleList[0].getComponent(d);i.isChecked=!1,e.csmLayerColoration=!1,(i=this.miscModeToggleList[1].getComponent(d)).isChecked=!0,e.lightingWithAlbedo=!0},s.hideUI=function(t){var e=this.node.getChildByName("Titles"),o=!e.active;this.singleModeToggleList[0].parent.active=o,this.miscModeToggleList[0].parent.active=o,this.compositeModeToggleList[0].parent.active=o,this.EnableAllCompositeModeButton.parent.active=o,e.active=o,this.hideButtonLabel.string=o?"Hide UI":"Show UI"},s.changeTextColor=function(t){this._currentColorIndex++,this._currentColorIndex>=this.strColor.length&&(this._currentColorIndex=0);for(var e=0;e<this.textComponentList.length;e++)this.textComponentList[e].string=this.strColor[this._currentColorIndex]+this.textContentList[e]+"</color>";for(var o=0;o<this.labelComponentList.length;o++)this.labelComponentList[o].color=this.color[this._currentColorIndex]},s.onLoad=function(){},s.update=function(t){},e}(T)).prototype,"compositeModeToggle",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),S=e(x.prototype,"singleModeToggle",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),I=e(x.prototype,"EnableAllCompositeModeButton",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),v=x))||v));s._RF.pop()}}}));

System.register("chunks:///_virtual/gameScript.ts",["./rollupPluginModLoBabelHelpers.js","cc","./audioScript.ts"],(function(i){"use strict";var t,s,n,e,u,o,r,h,l,a,m,c,N,b,d,B,f;return{setters:[function(i){t=i.applyDecoratedDescriptor,s=i.inheritsLoose,n=i.initializerDefineProperty,e=i.assertThisInitialized},function(i){u=i.cclegacy,o=i._decorator,r=i.Label,h=i.Animation,l=i.SpriteFrame,a=i.Node,m=i.Button,c=i.Sprite,N=i.AudioSource,b=i.director,d=i.game,B=i.Component},function(i){f=i.default}],execute:function(){var p,S,g,C,k,O,R,L,y,G,I,P,w,v,M,D,x,z,F,_,T,W,A,E,H,Y,j,Q,V,q,J,K,U,X,Z,$,ii,ti,si,ni,ei,ui,oi,ri,hi,li,ai,mi,ci,Ni,bi,di,Bi,fi,pi,Si,gi,Ci,ki,Oi,Ri,Li,yi,Gi;u._RF.push({},"af69bLzH39BIYvBD7H8NH0O","gameScript",void 0);var Ii=o.ccclass,Pi=o.property;i("gameScript",(p=Ii("gameScript"),S=Pi(r),g=Pi(h),C=Pi(l),k=Pi(a),O=Pi(m),R=Pi(h),L=Pi(h),y=Pi(r),G=Pi(r),I=Pi(r),P=Pi(r),w=Pi(r),v=Pi(m),M=Pi(c),D=Pi(l),x=Pi(c),z=Pi(a),F=Pi(r),_=Pi(a),T=Pi(a),W=Pi(f),A=Pi(f),E=Pi(c),H=Pi(c),Y=Pi(l),j=Pi(l),Q=Pi(l),V=Pi(l),q=Pi(N),J=Pi(N),p(((Gi=function(i){function t(){for(var t,s=arguments.length,u=new Array(s),o=0;o<s;o++)u[o]=arguments[o];return t=i.call.apply(i,[this].concat(u))||this,n(t,"TimeLabel",X,e(t)),n(t,"ADropBall",Z,e(t)),n(t,"SpriteStar",$,e(t)),n(t,"NWinEffect",ii,e(t)),n(t,"BBingo",ti,e(t)),n(t,"AWinEffect",si,e(t)),n(t,"ABingoBtn",ni,e(t)),n(t,"LabelB",ei,e(t)),n(t,"LabelI",ui,e(t)),n(t,"LabelN",oi,e(t)),n(t,"LabelG",ri,e(t)),n(t,"LabelO",hi,e(t)),n(t,"ButtonBetButton",li,e(t)),n(t,"SpriteBetButton",ai,e(t)),n(t,"SFBallDrop",mi,e(t)),n(t,"SBallDrop",ci,e(t)),n(t,"NBallRandom",Ni,e(t)),n(t,"LBallRandom",bi,e(t)),t.nullVal=null,t.NumB=[],t.NumI=[],t.NumN=[],t.NumG=[],t.NumO=[],t.Time=5,t.index=0,t.isClick=[!1],t.randomNumbers=[],t.randomNumber=void 0,t.ballRandoms=[],t.ballRandom=void 0,t.One=!0,t.Two=!0,n(t,"LoadingScene",di,e(t)),n(t,"GameScene",Bi,e(t)),n(t,"Music",fi,e(t)),n(t,"Sound",pi,e(t)),n(t,"MusicSprite",Si,e(t)),n(t,"SoundSprite",gi,e(t)),n(t,"MusicOn",Ci,e(t)),n(t,"MusicOff",ki,e(t)),n(t,"SoundOn",Oi,e(t)),n(t,"SoundOff",Ri,e(t)),n(t,"MusicSource",Li,e(t)),n(t,"SoundSource",yi,e(t)),t}s(t,i);var u=t.prototype;return u.start=function(){this.MusicPlay("Bg"),this.LoadingScene.active=!0,this.GameScene.active=!1,this.NWinEffect.active=!1,this.ABingoBtn.play(),this.NBallRandom[0].active=!1,this.NBallRandom[1].active=!1,this.NBallRandom[2].active=!1,this.NBallRandom[3].active=!1,this.NBallRandom[4].active=!1},u.RandomNumber=function(i,t){return Math.floor(Math.random()*(t-i+1))+i},u.OnClickProcess=function(i,t,s){this.BBingo.interactable=!1,this.ABingoBtn.stop();for(var n=0;n<this.randomNumbers.length;n++)this.randomNumbers[n]==s?(this.isClick[t]=!0,this.SpriteBetButton[t].spriteFrame=this.SpriteStar,this.ButtonBetButton[t].interactable=!1,s>=1&&s<=12?this.LabelB[i].string="":s>=13&&s<=24?this.LabelI[i].string="":s>=25&&s<=36?this.LabelN[i].string="":s>=38&&s<=48?this.LabelG[i].string="":this.LabelO[i].string="",this.CheckWin(),this.SoundPlay("Correct")):this.randomNumbers[n]!=s&&this.SoundPlay("Wrong")},u.ButtonB_01=function(){this.OnClickProcess(0,0,this.NumB[0])},u.ButtonB_02=function(){this.OnClickProcess(1,1,this.NumB[1])},u.ButtonB_03=function(){this.OnClickProcess(2,2,this.NumB[2])},u.ButtonB_04=function(){this.OnClickProcess(3,3,this.NumB[3])},u.ButtonB_05=function(){this.OnClickProcess(4,4,this.NumB[4])},u.ButtonI_01=function(){this.OnClickProcess(0,5,this.NumI[0])},u.ButtonI_02=function(){this.OnClickProcess(1,6,this.NumI[1])},u.ButtonI_03=function(){this.OnClickProcess(2,7,this.NumI[2])},u.ButtonI_04=function(){this.OnClickProcess(3,8,this.NumI[3])},u.ButtonI_05=function(){this.OnClickProcess(4,9,this.NumI[4])},u.ButtonN_01=function(){this.OnClickProcess(0,10,this.NumN[0])},u.ButtonN_02=function(){this.OnClickProcess(1,11,this.NumN[1])},u.ButtonN_03=function(){this.OnClickProcess(2,12,this.NumN[2])},u.ButtonN_04=function(){this.OnClickProcess(3,13,this.NumN[3])},u.ButtonN_05=function(){this.OnClickProcess(4,14,this.NumN[4])},u.ButtonG_01=function(){this.OnClickProcess(0,15,this.NumG[0])},u.ButtonG_02=function(){this.OnClickProcess(1,16,this.NumG[1])},u.ButtonG_03=function(){this.OnClickProcess(2,17,this.NumG[2])},u.ButtonG_04=function(){this.OnClickProcess(3,18,this.NumG[3])},u.ButtonG_05=function(){this.OnClickProcess(4,19,this.NumG[4])},u.ButtonO_01=function(){this.OnClickProcess(0,20,this.NumO[0])},u.ButtonO_02=function(){this.OnClickProcess(1,21,this.NumO[1])},u.ButtonO_03=function(){this.OnClickProcess(2,22,this.NumO[2])},u.ButtonO_04=function(){this.OnClickProcess(3,23,this.NumO[3])},u.ButtonO_05=function(){this.OnClickProcess(4,24,this.NumO[4])},u.CheckWin=function(){var i=this;this.isClick[0]==this.isClick[1]==this.isClick[2]==this.isClick[3]==this.isClick[4]==1||this.isClick[5]==this.isClick[6]==this.isClick[7]==this.isClick[8]==this.isClick[9]==1||this.isClick[10]==this.isClick[11]==this.isClick[12]==this.isClick[13]==this.isClick[14]==1||this.isClick[15]==this.isClick[16]==this.isClick[17]==this.isClick[18]==this.isClick[19]==1||this.isClick[20]==this.isClick[21]==this.isClick[12]==this.isClick[23]==this.isClick[24]==1||this.isClick[0]==this.isClick[6]==this.isClick[12]==this.isClick[18]==this.isClick[24]==1||this.isClick[4]==this.isClick[8]==this.isClick[12]==this.isClick[16]==this.isClick[20]==1||this.isClick[0]==this.isClick[20]==this.isClick[12]==this.isClick[4]==this.isClick[24]==1?(console.log("You're win."),this.unschedule(this.OnTimeCount),this.SoundPlay("Win"),this.NWinEffect.active=!0,this.AWinEffect.play("ShowWin"),setTimeout((function(){i.AWinEffect.play("WinEffect")}),200),setTimeout((function(){b.loadScene("MainScene")}),4e3)):this.isClick[0]==this.isClick[5]==this.isClick[10]==this.isClick[15]==this.isClick[20]!=1&&this.isClick[1]==this.isClick[6]==this.isClick[11]==this.isClick[16]==this.isClick[21]!=1&&this.isClick[2]==this.isClick[7]==this.isClick[12]==this.isClick[17]==this.isClick[22]!=1&&this.isClick[3]==this.isClick[8]==this.isClick[13]==this.isClick[18]==this.isClick[23]!=1&&this.isClick[4]==this.isClick[9]==this.isClick[14]==this.isClick[19]==this.isClick[24]!=1||(this.unschedule(this.OnTimeCount),this.SoundPlay("Win"),this.NWinEffect.active=!0,this.AWinEffect.play("ShowWin"),setTimeout((function(){i.AWinEffect.play("WinEffect")}),200),setTimeout((function(){b.loadScene("MainScene")}),4e3))},u.Random=function(){this.NumB[0]=this.RandomNumber(1,12),this.NumB[1]=this.RandomNumber(1,12),this.NumB[2]=this.RandomNumber(1,12),this.NumB[3]=this.RandomNumber(1,12),this.NumB[4]=this.RandomNumber(1,12),this.NumI[0]=this.RandomNumber(13,24),this.NumI[1]=this.RandomNumber(13,24),this.NumI[2]=this.RandomNumber(13,24),this.NumI[3]=this.RandomNumber(13,24),this.NumI[4]=this.RandomNumber(13,24),this.NumN[0]=this.RandomNumber(25,36),this.NumN[1]=this.RandomNumber(25,36),this.NumN[2]=this.RandomNumber(25,36),this.NumN[3]=this.RandomNumber(25,36),this.NumN[4]=this.RandomNumber(25,36),this.NumG[0]=this.RandomNumber(37,48),this.NumG[1]=this.RandomNumber(37,48),this.NumG[2]=this.RandomNumber(37,48),this.NumG[3]=this.RandomNumber(37,48),this.NumG[4]=this.RandomNumber(37,48),this.NumO[0]=this.RandomNumber(49,60),this.NumO[1]=this.RandomNumber(49,60),this.NumO[2]=this.RandomNumber(49,60),this.NumO[3]=this.RandomNumber(49,60),this.NumO[4]=this.RandomNumber(49,60),this.LabelB[0].string=this.NumB[0].toString(),this.LabelB[1].string=this.NumB[1].toString(),this.LabelB[2].string=this.NumB[2].toString(),this.LabelB[3].string=this.NumB[3].toString(),this.LabelB[4].string=this.NumB[4].toString(),this.LabelI[0].string=this.NumI[0].toString(),this.LabelI[1].string=this.NumI[1].toString(),this.LabelI[2].string=this.NumI[2].toString(),this.LabelI[3].string=this.NumI[3].toString(),this.LabelI[4].string=this.NumI[4].toString(),this.LabelN[0].string=this.NumN[0].toString(),this.LabelN[1].string=this.NumN[1].toString(),this.LabelN[2].string=this.NumN[2].toString(),this.LabelN[3].string=this.NumN[3].toString(),this.LabelN[4].string=this.NumN[4].toString(),this.LabelG[0].string=this.NumG[0].toString(),this.LabelG[1].string=this.NumG[1].toString(),this.LabelG[2].string=this.NumG[2].toString(),this.LabelG[3].string=this.NumG[3].toString(),this.LabelG[4].string=this.NumG[4].toString(),this.LabelO[0].string=this.NumO[0].toString(),this.LabelO[1].string=this.NumO[1].toString(),this.LabelO[2].string=this.NumO[2].toString(),this.LabelO[3].string=this.NumO[3].toString(),this.LabelO[4].string=this.NumO[4].toString()},u.isSameNumber=function(){this.NumB[0]!=this.NumB[1]&&this.NumB[0]!=this.NumB[2]&&this.NumB[0]!=this.NumB[3]&&this.NumB[0]!=this.NumB[4]&&this.NumB[1]!=this.NumB[2]&&this.NumB[1]!=this.NumB[3]&&this.NumB[1]!=this.NumB[4]&&this.NumB[2]!=this.NumB[3]&&this.NumB[2]!=this.NumB[4]&&this.NumB[3]!=this.NumB[4]&&this.NumI[0]!=this.NumI[1]&&this.NumI[0]!=this.NumI[2]&&this.NumI[0]!=this.NumI[3]&&this.NumI[0]!=this.NumI[4]&&this.NumI[1]!=this.NumI[2]&&this.NumI[1]!=this.NumI[3]&&this.NumI[1]!=this.NumI[4]&&this.NumI[2]!=this.NumI[3]&&this.NumI[2]!=this.NumI[4]&&this.NumI[3]!=this.NumI[4]&&this.NumN[0]!=this.NumN[1]&&this.NumN[0]!=this.NumN[2]&&this.NumN[0]!=this.NumN[3]&&this.NumN[0]!=this.NumN[4]&&this.NumN[1]!=this.NumN[2]&&this.NumN[1]!=this.NumN[3]&&this.NumN[1]!=this.NumN[4]&&this.NumN[2]!=this.NumN[3]&&this.NumN[2]!=this.NumN[4]&&this.NumN[3]!=this.NumN[4]&&this.NumG[0]!=this.NumG[1]&&this.NumG[0]!=this.NumG[2]&&this.NumG[0]!=this.NumG[3]&&this.NumG[0]!=this.NumG[4]&&this.NumG[1]!=this.NumG[2]&&this.NumG[1]!=this.NumG[3]&&this.NumG[1]!=this.NumG[4]&&this.NumG[2]!=this.NumG[3]&&this.NumG[2]!=this.NumG[4]&&this.NumG[3]!=this.NumG[4]&&this.NumO[0]!=this.NumO[1]&&this.NumO[0]!=this.NumO[2]&&this.NumO[0]!=this.NumO[3]&&this.NumO[0]!=this.NumO[4]&&this.NumO[1]!=this.NumO[2]&&this.NumO[1]!=this.NumO[3]&&this.NumO[1]!=this.NumO[4]&&this.NumO[2]!=this.NumO[3]&&this.NumO[2]!=this.NumO[4]&&this.NumO[3]!=this.NumO[4]||(this.Random(),this.isSameNumber())},u.BingoButton=function(){this.Random(),this.isSameNumber(),this.SoundPlay("Correct")},u.OnTimeCount=function(){this.Time--,this.SoundPlay("Time"),this.TimeLabel.string=this.Time.toString(),0==this.Time&&this.RandomBall()},u.isRandomNumberExist=function(){-1!==this.randomNumbers.indexOf(this.randomNumber)?(this.randomNumber=Math.floor(60*Math.random())+1,this.isRandomNumberExist()):this.randomNumbers.push(this.randomNumber),console.log(this.randomNumbers)},u.BallChange=function(){this.ballRandoms.length<30&&(this.ballRandom=Math.floor(4*Math.random()),this.ballRandoms.push(this.ballRandom)),this.ADropBall.play("Drop"),this.SoundPlay("Drop"),this.NBallRandom[0].active=!0,this.SBallDrop[0].spriteFrame=this.SFBallDrop[this.ballRandoms[this.index]],this.LBallRandom[0].string=this.randomNumbers[this.index].toString(),1==this.index?(this.NBallRandom[1].active=!0,this.SBallDrop[1].spriteFrame=this.SFBallDrop[this.ballRandoms[this.index-1]],this.LBallRandom[1].string=this.randomNumbers[this.index-1].toString()):2==this.index?(this.NBallRandom[2].active=!0,this.SBallDrop[1].spriteFrame=this.SFBallDrop[this.ballRandoms[this.index-1]],this.SBallDrop[2].spriteFrame=this.SFBallDrop[this.ballRandoms[this.index-2]],this.LBallRandom[1].string=this.randomNumbers[this.index-1].toString(),this.LBallRandom[2].string=this.randomNumbers[this.index-2].toString()):3==this.index?(this.NBallRandom[3].active=!0,this.SBallDrop[1].spriteFrame=this.SFBallDrop[this.ballRandoms[this.index-1]],this.SBallDrop[2].spriteFrame=this.SFBallDrop[this.ballRandoms[this.index-2]],this.SBallDrop[3].spriteFrame=this.SFBallDrop[this.ballRandoms[this.index-3]],this.LBallRandom[1].string=this.randomNumbers[this.index-1].toString(),this.LBallRandom[2].string=this.randomNumbers[this.index-2].toString(),this.LBallRandom[3].string=this.randomNumbers[this.index-3].toString()):this.index>=4&&(this.NBallRandom[4].active=!0,this.LBallRandom[1].string=this.randomNumbers[this.index-1].toString(),this.LBallRandom[2].string=this.randomNumbers[this.index-2].toString(),this.LBallRandom[3].string=this.randomNumbers[this.index-3].toString(),this.LBallRandom[4].string=this.randomNumbers[this.index-4].toString(),this.SBallDrop[1].spriteFrame=this.SFBallDrop[this.ballRandoms[this.index-1]],this.SBallDrop[2].spriteFrame=this.SFBallDrop[this.ballRandoms[this.index-2]],this.SBallDrop[3].spriteFrame=this.SFBallDrop[this.ballRandoms[this.index-3]],this.SBallDrop[4].spriteFrame=this.SFBallDrop[this.ballRandoms[this.index-4]]),console.log(this.ballRandoms[this.index]),this.index++},u.RandomBall=function(){this.Time=3,this.schedule(this.OnTimeCount,1),this.randomNumbers.length<30?(this.randomNumber=Math.floor(60*Math.random())+1,this.isRandomNumberExist(),this.BallChange()):(this.unschedule(this.OnTimeCount),this.SoundPlay("Lose"),setTimeout((function(){b.loadScene("MainScene")}),2e3))},u.StartBtn=function(){this.SoundPlay("Click"),this.Time=3,this.schedule(this.OnTimeCount,1),this.BingoButton(),this.LoadingScene.active=!1,this.GameScene.active=!0},u.BackHome=function(){this.SoundPlay("Click"),this.unschedule(this.OnTimeCount),b.loadScene("MainScene")},u.QuitBtn=function(){d.end()},u.MusicPlay=function(i){var t=this.Music.find((function(t){return t.Name==i}));null==t?console.log("Music not found please check...!"):(this.MusicSource.clip=t.AudioClip,this.MusicSource.play())},u.SoundPlay=function(i){var t=this.Sound.find((function(t){return t.Name==i}));null==t?console.log("Sound not found please check...!"):(this.SoundSource.clip=t.AudioClip,this.SoundSource.play())},u.MusicButton=function(){this.SoundPlay("Click"),this.One=!this.One,this.One?this.One&&(this.MusicSource.volume=1,this.MusicSprite.spriteFrame=this.MusicOn):(this.MusicSource.volume=0,this.MusicSprite.spriteFrame=this.MusicOff)},u.SoundButton=function(){this.SoundPlay("Click"),this.Two=!this.Two,this.Two?this.Two&&(this.SoundSource.volume=1,this.SoundSprite.spriteFrame=this.SoundOn):(this.SoundSource.volume=0,this.SoundSprite.spriteFrame=this.SoundOff)},t}(B)).instance=void 0,X=t((U=Gi).prototype,"TimeLabel",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),Z=t(U.prototype,"ADropBall",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),$=t(U.prototype,"SpriteStar",[C],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),ii=t(U.prototype,"NWinEffect",[k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),ti=t(U.prototype,"BBingo",[O],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),si=t(U.prototype,"AWinEffect",[R],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),ni=t(U.prototype,"ABingoBtn",[L],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),ei=t(U.prototype,"LabelB",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),ui=t(U.prototype,"LabelI",[G],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),oi=t(U.prototype,"LabelN",[I],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),ri=t(U.prototype,"LabelG",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),hi=t(U.prototype,"LabelO",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),li=t(U.prototype,"ButtonBetButton",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),ai=t(U.prototype,"SpriteBetButton",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),mi=t(U.prototype,"SFBallDrop",[D],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),ci=t(U.prototype,"SBallDrop",[x],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),Ni=t(U.prototype,"NBallRandom",[z],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),bi=t(U.prototype,"LBallRandom",[F],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),di=t(U.prototype,"LoadingScene",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),Bi=t(U.prototype,"GameScene",[T],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),fi=t(U.prototype,"Music",[W],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),pi=t(U.prototype,"Sound",[A],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),Si=t(U.prototype,"MusicSprite",[E],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),gi=t(U.prototype,"SoundSprite",[H],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),Ci=t(U.prototype,"MusicOn",[Y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),ki=t(U.prototype,"MusicOff",[j],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),Oi=t(U.prototype,"SoundOn",[Q],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),Ri=t(U.prototype,"SoundOff",[V],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),Li=t(U.prototype,"MusicSource",[q],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),yi=t(U.prototype,"SoundSource",[J],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),K=U))||K));u._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./audioScript.ts","./gameScript.ts","./debug-view-runtime-control.ts"],(function(){"use strict";return{setters:[null,null,null],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});