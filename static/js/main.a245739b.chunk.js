(this["webpackJsonparrange-game"]=this["webpackJsonparrange-game"]||[]).push([[0],{10:function(e,t,a){e.exports=a(17)},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);for(var c=a(1),n=a.n(c),b=a(9),l=(a(15),a(2)),s=a(0),o=a(7),O=a(19),j=a(20),r=a(21),i=(a(16),{top:"0px",left:"0px"}),m={top:"0px",left:"205px"},p={top:"0px",left:"410px"},u={top:"205px",left:"0px"},f={top:"205px",left:"205px"},x={top:"205px",left:"410px"},d={top:"410px",left:"0px"},v={top:"410px",left:"205px"},E={top:"410px",left:"410px"},h=[i,m,p,u,f,x,d,v,E],N=[],g=0;g<9;g++){var y=Math.floor(Math.random()*(9-g)),k=h.splice(y,1);N.push(k)}var w={one:N[0][0],two:N[1][0],three:N[2][0],four:N[3][0],five:N[4][0],six:N[5][0],seven:N[6][0],eight:N[7][0]},C={seconds:0,isActive:!1};var z=function(){var e=Object(c.useState)(w),t=Object(o.a)(e,2),a=t[0],b=t[1],h=Object(c.useState)(0),N=Object(o.a)(h,2),g=N[0],y=N[1],k=Object(c.useState)(C),z=Object(o.a)(k,2),A=z[0],M=z[1],I=a.one,S=a.two,J=a.three,B=a.four,G=a.five,T=a.six,q=a.seven,D=a.eight,F=function(e){var t=e.target.className.slice(4);K(a[t],b,t)},H=function(){A.isActive||setInterval((function(){M((function(e){return Object(s.a)(Object(s.a)({},e),{},{isActive:!0,seconds:e.seconds+1})}))}),1e3),y((function(e){return e+1}))},K=function(e,t,c){e===i?I!==m&&S!==m&&J!==m&&B!==m&&G!==m&&T!==m&&q!==m&&D!==m?(t(Object(s.a)(Object(s.a)({},a),{},Object(l.a)({},c,m))),H()):I!==u&&S!==u&&J!==u&&B!==u&&G!==u&&T!==u&&q!==u&&D!==u&&(t(Object(s.a)(Object(s.a)({},a),{},Object(l.a)({},c,u))),H()):e===m?I!==i&&S!==i&&J!==i&&B!==i&&G!==i&&T!==i&&q!==i&&D!==i?(t(Object(s.a)(Object(s.a)({},a),{},Object(l.a)({},c,i))),H()):I!==p&&S!==p&&J!==p&&B!==p&&G!==p&&T!==p&&q!==p&&D!==p?(t(Object(s.a)(Object(s.a)({},a),{},Object(l.a)({},c,p))),H()):I!==f&&S!==f&&J!==f&&B!==f&&G!==f&&T!==f&&q!==f&&D!==f&&(t(Object(s.a)(Object(s.a)({},a),{},Object(l.a)({},c,f))),H()):e===p?I!==m&&S!==m&&J!==m&&B!==m&&G!==m&&T!==m&&q!==m&&D!==m?(t(Object(s.a)(Object(s.a)({},a),{},Object(l.a)({},c,m))),H()):I!==x&&S!==x&&J!==x&&B!==x&&G!==x&&T!==x&&q!==x&&D!==x&&(t(Object(s.a)(Object(s.a)({},a),{},Object(l.a)({},c,x))),H()):e===u?I!==i&&S!==i&&J!==i&&B!==i&&G!==i&&T!==i&&q!==i&&D!==i?(t(Object(s.a)(Object(s.a)({},a),{},Object(l.a)({},c,i))),H()):I!==f&&S!==f&&J!==f&&B!==f&&G!==f&&T!==f&&q!==f&&D!==f?(t(Object(s.a)(Object(s.a)({},a),{},Object(l.a)({},c,f))),H()):I!==d&&S!==d&&J!==d&&B!==d&&G!==d&&T!==d&&q!==d&&D!==d&&(t(Object(s.a)(Object(s.a)({},a),{},Object(l.a)({},c,d))),H()):e===f?I!==m&&S!==m&&J!==m&&B!==m&&G!==m&&T!==m&&q!==m&&D!==m?(t(Object(s.a)(Object(s.a)({},a),{},Object(l.a)({},c,m))),H()):I!==x&&S!==x&&J!==x&&B!==x&&G!==x&&T!==x&&q!==x&&D!==x?(t(Object(s.a)(Object(s.a)({},a),{},Object(l.a)({},c,x))),H()):I!==v&&S!==v&&J!==v&&B!==v&&G!==v&&T!==v&&q!==v&&D!==v?(t(Object(s.a)(Object(s.a)({},a),{},Object(l.a)({},c,v))),H()):I!==u&&S!==u&&J!==u&&B!==u&&G!==u&&T!==u&&q!==u&&D!==u&&(t(Object(s.a)(Object(s.a)({},a),{},Object(l.a)({},c,u))),H()):e===x?I!==p&&S!==p&&J!==p&&B!==p&&G!==p&&T!==p&&q!==p&&D!==p?(t(Object(s.a)(Object(s.a)({},a),{},Object(l.a)({},c,p))),H()):I!==f&&S!==f&&J!==f&&B!==f&&G!==f&&T!==f&&q!==f&&D!==f?(t(Object(s.a)(Object(s.a)({},a),{},Object(l.a)({},c,f))),H()):I!==E&&S!==E&&J!==E&&B!==E&&G!==E&&T!==E&&q!==E&&D!==E&&(t(Object(s.a)(Object(s.a)({},a),{},Object(l.a)({},c,E))),H()):e===d?I!==u&&S!==u&&J!==u&&B!==u&&G!==u&&T!==u&&q!==u&&D!==u?(t(Object(s.a)(Object(s.a)({},a),{},Object(l.a)({},c,u))),H()):I!==v&&S!==v&&J!==v&&B!==v&&G!==v&&T!==v&&q!==v&&D!==v&&(t(Object(s.a)(Object(s.a)({},a),{},Object(l.a)({},c,v))),H()):e===v?I!==d&&S!==d&&J!==d&&B!==d&&G!==d&&T!==d&&q!==d&&D!==d?(t(Object(s.a)(Object(s.a)({},a),{},Object(l.a)({},c,d))),H()):I!==f&&S!==f&&J!==f&&B!==f&&G!==f&&T!==f&&q!==f&&D!==f?(t(Object(s.a)(Object(s.a)({},a),{},Object(l.a)({},c,f))),H()):I!==E&&S!==E&&J!==E&&B!==E&&G!==E&&T!==E&&q!==E&&D!==E&&(t(Object(s.a)(Object(s.a)({},a),{},Object(l.a)({},c,E))),H()):e===E&&(I!==x&&S!==x&&J!==x&&B!==x&&G!==x&&T!==x&&q!==x&&D!==x?(t(Object(s.a)(Object(s.a)({},a),{},Object(l.a)({},c,x))),y((function(e){return e+1}))):I!==v&&S!==v&&J!==v&&B!==v&&G!==v&&T!==v&&q!==v&&D!==v&&(t(Object(s.a)(Object(s.a)({},a),{},Object(l.a)({},c,v))),y((function(e){return e+1}))))};return n.a.createElement("div",{className:"my-5"},n.a.createElement(O.a,{fluid:!0},n.a.createElement("h1",{className:"text-center font-weight-bold py-5"},"Arrange Game"),n.a.createElement(j.a,null,n.a.createElement(r.a,{className:"text-center"},n.a.createElement(j.a,{className:"bg"},n.a.createElement(r.a,{md:6,className:"move font-weight-bold my-2"},"Number of Moves = ",g),n.a.createElement(r.a,{md:6,className:"time font-weight-bold my-2"},"Timer = ",(A.seconds,Math.floor(A.seconds/60)),":",(A.seconds,"0".concat(A.seconds%60).slice(-2)))),n.a.createElement(j.a,null,n.a.createElement("div",{className:"orginal"},n.a.createElement("h2",null,"Original Image"),n.a.createElement("img",{src:"https://picsum.photos/600",alt:"random picsum.photos website"})))),n.a.createElement(r.a,null,n.a.createElement("div",{className:"puzzel-container"},n.a.createElement("div",{className:"puzzel"},n.a.createElement("div",{className:"box one",onClick:F,style:I}),n.a.createElement("div",{className:"box two",onClick:F,style:S}),n.a.createElement("div",{className:"box three",onClick:F,style:J}),n.a.createElement("div",{className:"box four",onClick:F,style:B}),n.a.createElement("div",{className:"box five",onClick:F,style:G}),n.a.createElement("div",{className:"box six",onClick:F,style:T}),n.a.createElement("div",{className:"box seven",onClick:F,style:q}),n.a.createElement("div",{className:"box eight",onClick:F,style:D})))))))};Object(b.render)(n.a.createElement(z,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.a245739b.chunk.js.map