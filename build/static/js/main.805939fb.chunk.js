(this["webpackJsonplights-fe"]=this["webpackJsonplights-fe"]||[]).push([[0],{115:function(t,e,n){t.exports=n(304)},120:function(t,e,n){},304:function(t,e,n){"use strict";n.r(e);var o=n(0),c=n.n(o),a=n(110),l=n.n(a),r=n(61),i=(n(120),n(16)),u=n(29),s=n(17),g=n(41),h=n.n(g),f=n(111);function m(){var t=Object(i.a)(["\n    text-transform:bold;\n    "]);return m=function(){return t},t}function d(){var t=Object(i.a)(["\n    background: black;\n    color: ",";\n    \n    "]);return d=function(){return t},t}function p(){var t=Object(i.a)(["\n    width: 50vw;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background: ",";\n    \n    "]);return p=function(){return t},t}function v(t){var e=Object(o.useState)("#e8e8e8"),n=Object(u.a)(e,2),a=n[0],l=n[1],r=Object(o.useState)(""),i=Object(u.a)(r,2),g=i[0],v=i[1],E=s.a.div(p(),a),b=s.a.button(d(),a),j=s.a.h3(m());return c.a.createElement(E,null,c.a.createElement(j,null,g),c.a.createElement("h3",null,"Change ",t.lightLocation," Color"),c.a.createElement(f.SketchPicker,{color:a,onChange:function(t){console.log("Changing color to ".concat(t)),console.log(),l(t.hex)}}),c.a.createElement(b,{onClick:function(){return e=a.split("").filter((function(t){return"#"!==t})).join(""),console.log("REQUEST URL: ","".concat(t.requestUrl,"/").concat(e)),void h.a.get("".concat(t.requestUrl,"/").concat(e)).then((function(t){console.log(t),v("Successfully Updated Lights to ".concat(a))})).catch((function(t){console.log(t),v("Failed to update lights because of ".concat(t.message))}));var e}},"Update ",t.lightLocation))}function E(){var t=Object(i.a)(["\n  text-align:center;\n  background:#e8e8e8;\n  "]);return E=function(){return t},t}function b(){var t=Object(i.a)(['\n  color:"#4A90E2";\n  margin:0;\n  ']);return b=function(){return t},t}function j(){var t=Object(i.a)(["\n    background: ",";\n  "]);return j=function(){return t},t}function O(){var t=Object(i.a)(["\n    display: flex;\n    justify-content: space-around;\n  "]);return O=function(){return t},t}var k=function(){var t=Object(o.useState)({color:"#808080",isToggled:!1}),e=Object(u.a)(t,2),n=e[0],a=e[1],l=s.a.div(O()),r=s.a.button(j(),n.color),i=s.a.h1(b()),g=s.a.div(E());return c.a.createElement("div",null,c.a.createElement(g,null,c.a.createElement(i,null,"Living Room Lights")),c.a.createElement(l,null,c.a.createElement(v,{requestUrl:"http://localhost:5555/api/v1/lights/couch",lightLocation:"Couch"}),c.a.createElement(v,{requestUrl:"http://localhost:5555/api/v1/lights/stairs",lightLocation:"Stairs"})),c.a.createElement(l,null,c.a.createElement(v,{requestUrl:"http://localhost:5555/api/v1/lights/ceiling",lightLocation:"Ceiling"}),c.a.createElement(v,{requestUrl:"http://localhost:5555/api/v1/lights/floor",lightLocation:"Floor"})),c.a.createElement("div",null,c.a.createElement("h3",null,"Toggle on the music"),c.a.createElement(r,{onClick:function(){h.a.post("http://localhost:5000/musictoggle",{}).then((function(t){!1===n.isToggled?a({color:"#7fff7f",isToggled:!0}):a({color:"#808080",isToggled:!1})})).catch((function(t){a({color:"#808080",isToggled:!1})}))}},"Toggle Music"," ")))},L=n(3);var U=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(L.a,{exact:!0,path:"/",component:k}))};l.a.render(c.a.createElement(r.a,null,c.a.createElement(U,null)),document.getElementById("root"))}},[[115,1,2]]]);
//# sourceMappingURL=main.805939fb.chunk.js.map