window.__require=function e(t,c,n){function i(r,l){if(!c[r]){if(!t[r]){var s=r.split("/");if(s=s[s.length-1],!t[s]){var a="function"==typeof __require&&__require;if(!l&&a)return a(s,!0);if(o)return o(s,!0);throw new Error("Cannot find module '"+r+"'")}r=s}var h=c[r]={exports:{}};t[r][0].call(h.exports,function(e){return i(t[r][1][e]||e)},h,h.exports,e,t,c,n)}return c[r].exports}for(var o="function"==typeof __require&&__require,r=0;r<n.length;r++)i(n[r]);return i}({Toggle1:[function(e,t){"use strict";cc._RF.push(t,"14585t0ZPZOpKKqK1GlmWe8","Toggle1"),cc.Class({extends:cc.Component,properties:{answer:{default:0,type:cc.Integer}},start:function(){}}),cc._RF.pop()},{}],falseScript:[function(e,t){"use strict";cc._RF.push(t,"c3782crmtdAb5UvZlxvwoHk","falseScript"),cc.Class({extends:cc.Component,properties:{level:{default:1,type:cc.Integer},button:cc.Button,word:cc.Label,next_level:cc.Sprite,next_level_button:cc.Button,false_button:cc.Button},onLoad:function(){var e=new cc.Component.EventHandler;e.target=this.node,e.component="falseScript",e.handler="callback_false",e.customEventData="Success!",this.false_button.getComponent(cc.Button).clickEvents.push(e)},start:function(){},callback_false:function(){this.next_level.node.active=!1,this.false_button.node.active=!1,this.button.node.active=!0}}),cc._RF.pop()},{}],pageScript:[function(e,t){"use strict";cc._RF.push(t,"e4cb3OUkqtOaZrI+s0daDdj","pageScript"),cc.Class({extends:cc.Component,properties:{level:1,start_back:cc.Sprite,start_button:cc.Button,start_label:cc.Label},onLoad:function(){},start:function(){this.start_button.node.on("click",this.callback,this)},callback:function(){cc.log("\u6e38\u620f\u5f00\u59cb\uff01"),this.start_back.node.active=!1,this.start_button.node.active=!1,this.start_label.node.active=!1}}),cc._RF.pop()},{}],resultbuttonScript:[function(e,t){"use strict";cc._RF.push(t,"12f47wEZIRFVLEaGWvsFH5m","resultbuttonScript"),cc.Class({extends:cc.Component,properties:{level:{default:1,type:cc.Integer},button:cc.Button,word:cc.Label,clock:cc.Sprite,time:cc.Label,words:cc.Label,next_level:cc.Sprite,next_level_button:cc.Button,false_button:cc.Button},onLoad(){this.next_level_button.node.on("click",this.callback_right,this)},start(){},callback_right(e){this.level+=1,cc.log(this.level),this.button.node.active=!0,this.next_level.node.active=!1,this.next_level_button.node.active=!1;let t=this;1==this.level?(this.next_level.node.active=!1,this.next_level_button.node.active=!1,this.false_button.node.active=!1,cc.log("level1"),cc.loader.loadRes("clock7",cc.SpriteFrame,function(e,c){t.clock.spriteFrame=c}),this.time.string="7:00",this.words.string="\u65e9\u4e0a\u4e03\u70b9\u5566\uff01\n\u592a\u9633\u516c\u516c\u6652\u5c41\u80a1\u4e86\uff0c\n\u5c0f\u670b\u53cb\u4eec\u8981\u5e72\u4ec0\u4e48\u5440\uff1f\n"):2==this.level?(this.word.string="",cc.log("level2"),cc.loader.loadRes("clock12",cc.SpriteFrame,function(e,c){t.clock.spriteFrame=c}),this.time.string="12:00",this.words.string="\u4e2d\u5348\u5341\u4e8c\u70b9\u5566\uff01\n\u592a\u9633\u516c\u516c\u5f53\u5934\u7167\u5566\uff0c\n\u5c0f\u670b\u53cb\u8981\u5e72\u4ec0\u4e48\uff1f",cc.log(this.right_num2)):3==this.level?(this.word.string="",cc.log("level3"),cc.loader.loadRes("clock12",cc.SpriteFrame,function(e,c){t.clock.spriteFrame=c}),this.time.string="12:00",this.words.string="\u4e2d\u5348\u5341\u4e8c\u70b9\u5566\uff01\n\u592a\u9633\u516c\u516c\u5f53\u5934\u7167\u5566\uff0c\n\u5c0f\u670b\u53cb\u8981\u600e\u4e48\u5403\uff1f"):4==this.level&&(this.word.string="",cc.log("level4"),cc.loader.loadRes("clock9",cc.SpriteFrame,function(e,c){t.clock.spriteFrame=c}),this.time.string="9:00",this.words.string="\u665a\u4e0a\u4e5d\u70b9\u5566\uff01\n\u6708\u4eae\u59d0\u59d0\u5df2\u7ecf\u51fa\u6765\u5566\uff0c\n\u5c0f\u670b\u53cb\u8981\u5e72\u4ec0\u4e48\uff1f")}}),cc._RF.pop()},{}],toggleScript:[function(e,t){"use strict";cc._RF.push(t,"33eaeoNvvVE3bM3ZsidEZzP","toggleScript"),cc.Class({extends:cc.Component,properties:{level:{default:1,type:cc.Integer},p1:cc.Toggle,p2:cc.Toggle,p3:cc.Toggle,p4:cc.Toggle,w1:cc.Label,w2:cc.Label,w3:cc.Label,w4:cc.Label,button:cc.Button,word:cc.Label,clock:cc.Sprite,time:cc.Label,words:cc.Label,next_level:cc.Sprite,next_level_button:cc.Button,false_button:cc.Button,right_num1:[cc.Integer],right_num2:[cc.Integer],right_num3:[cc.Integer],right_num4:[cc.Integer]},onLoad(){this.right_num1=[1,3],this.right_num2=[2],this.right_num3=[3],this.right_num4=[1],this.next_level.node.active=!1,this.next_level_button.node.active=!1,this.false_button.node.active=!1;let e=this.p1.getComponent(cc.Toggle).getComponentInChildren(cc.Sprite);cc.log(e),cc.loader.loadRes("1",cc.SpriteFrame,function(t,c){e.spriteFrame=c}),this.w1.string="\u73a9\u6e38\u620f";let t=this.p2.getComponent(cc.Toggle).getComponentInChildren(cc.Sprite);cc.loader.loadRes("2",cc.SpriteFrame,function(e,c){t.spriteFrame=c}),this.w2.string="\u7a7f\u8863\u670d";let c=this.p3.getComponent(cc.Toggle).getComponentInChildren(cc.Sprite);cc.loader.loadRes("5",cc.SpriteFrame,function(e,t){c.spriteFrame=t}),this.w3.string="\u5403\u96f6\u98df";let n=this.p4.getComponent(cc.Toggle).getComponentInChildren(cc.Sprite);cc.loader.loadRes("3",cc.SpriteFrame,function(e,t){n.spriteFrame=t}),this.w4.string="\u8d77\u5e8a"},start(){let e=this.node.children;for(let t=0;t<e.length;t++){let c=e[t];cc.log("num",t),cc.log("name",c.name)}this.button.node.on("click",this.callback,this)},callback(e){cc.log("callback");let t=0,c=[],n=this.node.children;for(let i=0;i<4;i++){let e=n[i].getComponent(cc.Toggle).isChecked;cc.log("isChecked"),cc.log(e),1==e&&(cc.log(i),c.push(i),t=1)}cc.log("\u6211\u7684\u591a\u9009\u7b54\u6848==",c),1==t&&this.checkAnswer(c)},checkAnswer(e){e=e.sort();let t=this;if(4==this.level&&(cc.log("answer"),cc.log(this.right_num4),JSON.stringify(e)==JSON.stringify(this.right_num4)?(cc.log("right"),this.word.string="\u7b54\u6848\u6b63\u786e",this.level+=1,this.next_level.node.active=!0,this.next_level.getComponentInChildren(cc.Label).string="",cc.loader.loadRes("pass",cc.SpriteFrame,function(e,c){t.next_level.spriteFrame=c}),this.next_level.node.height=180,this.button.node.active=!1):(cc.log(JSON.stringify(e)),cc.log("not right"),this.word.string="\u7b54\u6848\u9519\u8bef",this.next_level.node.active=!0,this.next_level.getComponentInChildren(cc.Label).string="\u518d\u4ed4\u7ec6\u60f3\u60f3\u54e6~",cc.loader.loadRes("next",cc.SpriteFrame,function(e,c){t.next_level.spriteFrame=c}),this.false_button.node.active=!0,this.button.node.active=!1)),3==this.level)if(cc.log("answer"),cc.log(this.right_num3),JSON.stringify(e)==JSON.stringify(this.right_num3)){this.word.string="\u7b54\u6848\u6b63\u786e",this.level+=1,this.next_level.node.active=!0,this.next_level.getComponentInChildren(cc.Label).string="\u7b54\u5bf9\u5566\uff01",this.next_level_button.node.active=!0,cc.loader.loadRes("next",cc.SpriteFrame,function(e,c){t.next_level.spriteFrame=c}),this.button.node.active=!1;let e=this.p1.getComponentInChildren(cc.Sprite);cc.loader.loadRes("1",cc.SpriteFrame,function(t,c){e.spriteFrame=c}),this.w1.string="\u73a9\u6e38\u620f";let c=this.p2.getComponentInChildren(cc.Sprite);cc.loader.loadRes("3",cc.SpriteFrame,function(e,t){c.spriteFrame=t}),this.w2.string="\u7761\u89c9";let n=this.p3.getComponentInChildren(cc.Sprite);cc.loader.loadRes("4",cc.SpriteFrame,function(e,t){n.spriteFrame=t}),this.w3.string="\u73a9\u73a9\u5177";let i=this.p4.getComponentInChildren(cc.Sprite);cc.loader.loadRes("6",cc.SpriteFrame,function(e,t){i.spriteFrame=t}),this.w4.string="\u5403\u51b0\u6dc7\u6dcb"}else cc.log(JSON.stringify(e)),cc.log("not right"),this.word.string="\u7b54\u6848\u9519\u8bef",this.next_level.node.active=!0,this.next_level.getComponentInChildren(cc.Label).string="\u518d\u4ed4\u7ec6\u60f3\u60f3\u54e6~",this.false_button.node.active=!0,this.button.node.active=!1,cc.loader.loadRes("next",cc.SpriteFrame,function(e,c){t.next_level.spriteFrame=c});if(2==this.level)if(cc.log("answer"),cc.log(this.right_num2),JSON.stringify(e)==JSON.stringify(this.right_num2)){this.word.string="\u7b54\u6848\u6b63\u786e",this.level+=1,this.next_level.node.active=!0,this.next_level.getComponentInChildren(cc.Label).string="\u7b54\u5bf9\u5566\uff01",cc.loader.loadRes("next",cc.SpriteFrame,function(e,c){t.next_level.spriteFrame=c}),this.next_level_button.node.active=!0,this.button.node.active=!1;let e=this.p1.getComponentInChildren(cc.Sprite);cc.loader.loadRes("5",cc.SpriteFrame,function(t,c){e.spriteFrame=c}),this.w1.string="\u96f6\u98df";let c=this.p2.getComponentInChildren(cc.Sprite);cc.loader.loadRes("6",cc.SpriteFrame,function(e,t){c.spriteFrame=t}),this.w2.string="\u51b0\u6dc7\u6dcb";let n=this.p3.getComponentInChildren(cc.Sprite);cc.loader.loadRes("7",cc.SpriteFrame,function(e,t){n.spriteFrame=t}),this.w3.string="\u8150\u70c2\u7684\u98df\u7269";let i=this.p4.getComponentInChildren(cc.Sprite);cc.loader.loadRes("8",cc.SpriteFrame,function(e,t){i.spriteFrame=t}),this.w4.string="\u7c73\u996d"}else cc.log("answer"),cc.log(e),cc.log("not right"),this.word.string="\u7b54\u6848\u9519\u8bef",this.next_level.node.active=!0,this.next_level.getComponentInChildren(cc.Label).string="\u518d\u4ed4\u7ec6\u60f3\u60f3\u54e6~",this.false_button.node.active=!0,this.button.node.active=!1,cc.loader.loadRes("next",cc.SpriteFrame,function(e,c){t.next_level.spriteFrame=c});if(1==this.level)if(cc.log("right_answer"),cc.log(this.right_num1),JSON.stringify(e)==JSON.stringify(this.right_num1)){this.word.string="\u7b54\u6848\u6b63\u786e",this.level+=1,this.next_level.node.active=!0,this.next_level.getComponentInChildren(cc.Label).string="\u7b54\u5bf9\u5566\uff01",this.next_level_button.node.active=!0,cc.loader.loadRes("next",cc.SpriteFrame,function(e,c){t.next_level.spriteFrame=c}),this.button.node.active=!1;let e=this.p1.getComponentInChildren(cc.Sprite);cc.loader.loadRes("4",cc.SpriteFrame,function(t,c){e.spriteFrame=c}),this.w1.string="\u73a9\u73a9\u5177";let c=this.p2.getComponentInChildren(cc.Sprite);cc.loader.loadRes("1",cc.SpriteFrame,function(e,t){c.spriteFrame=t}),this.w2.string="\u73a9\u6e38\u620f";let n=this.p3.getComponentInChildren(cc.Sprite);cc.loader.loadRes("8",cc.SpriteFrame,function(e,t){n.spriteFrame=t}),this.w3.string="\u5403\u996d";let i=this.p4.getComponentInChildren(cc.Sprite);cc.loader.loadRes("5",cc.SpriteFrame,function(e,t){i.spriteFrame=t}),this.w4.string="\u5403\u96f6\u98df"}else cc.log(JSON.stringify(e)),cc.log("not right"),this.word.string="\u7b54\u6848\u9519\u8bef",this.next_level.node.active=!0,this.next_level.getComponentInChildren(cc.Label).string="\u518d\u4ed4\u7ec6\u60f3\u60f3\u54e6~",this.false_button.node.active=!0,this.button.node.active=!1,cc.loader.loadRes("next",cc.SpriteFrame,function(e,c){t.next_level.spriteFrame=c});"\u7b54\u6848\u9519\u8bef"==this.word.string?(this.word.string="",this.p1.getComponent(cc.Toggle).isChecked=!1,this.p2.getComponent(cc.Toggle).isChecked=!1,this.p3.getComponent(cc.Toggle).isChecked=!1,this.p4.getComponent(cc.Toggle).isChecked=!1):"\u7b54\u6848\u6b63\u786e"==this.word.string&&this.next()},next(){this.p1.getComponent(cc.Toggle).isChecked=!1,this.p2.getComponent(cc.Toggle).isChecked=!1,this.p3.getComponent(cc.Toggle).isChecked=!1,this.p4.getComponent(cc.Toggle).isChecked=!1}}),cc._RF.pop()},{}]},{},["Toggle1","falseScript","pageScript","resultbuttonScript","toggleScript"]);