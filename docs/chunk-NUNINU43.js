import{a as pe}from"./chunk-SRJRGLMG.js";import{b as ue,c as fe}from"./chunk-KE34UVXE.js";import{a as X,b as x,c as Z,d as ee,e as te,f as C,g as ie,i as ne,j as oe,k as re,l as ae,m as le,n as se,o as me,p as ce,q as de}from"./chunk-HYY5DU64.js";import{$a as G,A as N,B as n,C as b,Ga as R,J as f,M as a,Pa as U,T as t,U as i,V as u,W as w,Xa as q,Y as S,Ya as A,Z as p,_ as z,_a as B,bb as $,cb as H,db as J,ea as l,eb as Q,fa as F,fb as Y,ga as _,hb as K,la as j,m as T,mb as W,r as h,s as g,t as I,ta as L,ua as V,wa as k,z as D}from"./chunk-YUHIDNIN.js";import"./chunk-Z6EQZUNN.js";var M=class{constructor(m,e,s,r,d,c){this.id=m,this.pedido,this.descripcion=s,this.cantidad=r,this.precio=d,this.producto=c}};var P=class{constructor(m,e,s,r,d,c,E,v,y,O){this.id=m,this.estado=e,this.nombres=s,this.apellidos=r,this.telefono=d,this.departamento=c,this.sucursal=E,this.metodoPago=v,this.detallePedido=y,this.total=O}};function Se(o,m){if(o&1){let e=w();t(0,"tr")(1,"td",16),u(2,"img",17),i(),t(3,"td",16),l(4),i(),u(5,"td",18),t(6,"td",16),l(7),i(),t(8,"td",16),l(9),i(),t(10,"td",16),l(11),i(),t(12,"td",16)(13,"button",19),S("click",function(){let r=h(e).$implicit,d=p(2);return g(d.eliminar(r.producto.id))}),I(),u(14,"svg",20),i()()()}if(o&2){let e=m.$implicit,s=p(2);n(2),a("src",e.producto.imagen,N),n(2),F(e.producto.nombre),n(),a("innerHTML",e.descripcion,D),n(2),F(e.cantidad),n(2),_("Q",s.functionsUtils.formatPrice(e.producto.precio),""),n(2),_("Q",s.functionsUtils.formatPrice(e.producto.precio*e.cantidad),"")}}function _e(o,m){if(o&1&&(t(0,"c-alert",40),l(1),i()),o&2){let e=p(3);z("color",e.type),n(),F(e.mensaje)}}function Ce(o,m){o&1&&(t(0,"c-form-feedback",27),l(1,"Campo requerido."),i()),o&2&&a("valid",!1)}function ve(o,m){o&1&&(t(0,"c-form-feedback",27),l(1,"Solo se permiten valores num\xE9ricos del 0 al 9 con longitud m\xE1xima de 8 car\xE1cteres"),i()),o&2&&a("valid",!1)}function be(o,m){if(o&1&&(t(0,"option",41),l(1),i()),o&2){let e=m.$implicit,s=p(3);a("value",e.codigo),n(),_(" ",s.dataUtils.descripcionPorCodigo(e.codigo)," ")}}function Ee(o,m){if(o&1&&(t(0,"option",41),l(1),i()),o&2){let e=m.$implicit;a("value",e.id),n(),_(" ",e.nombre," ")}}function ye(o,m){if(o&1&&(t(0,"option",41),l(1),i()),o&2){let e=m.$implicit;a("value",e.id),n(),_(" ",e.nombre," ")}}function we(o,m){if(o&1){let e=w();t(0,"form",21),f(1,_e,2,2,"c-alert",22),t(2,"div",3)(3,"span",4),l(4,"Datos personales"),i()(),u(5,"br"),t(6,"c-input-group",23)(7,"div",24)(8,"input",25),S("blur",function(){h(e);let r=p(2);return g(r.functionsUtils.removeSpaces("nombres",r.form))}),i(),t(9,"label",26),l(10,"Nombres*"),i(),t(11,"c-form-feedback",27),l(12,"Campo requerido."),i()()(),t(13,"c-input-group",23)(14,"div",24)(15,"input",28),S("blur",function(){h(e);let r=p(2);return g(r.functionsUtils.removeSpaces("apellidos",r.form))}),i(),t(16,"label",29),l(17,"Apellidos*"),i(),t(18,"c-form-feedback",27),l(19,"Campo requerido."),i()()(),t(20,"c-input-group",23)(21,"div",24)(22,"input",30),S("blur",function(){h(e);let r=p(2);return g(r.functionsUtils.removeSpaces("telefono",r.form))}),i(),t(23,"label",31),l(24,"Tel\xE9fono*"),i(),f(25,Ce,2,1,"c-form-feedback",32)(26,ve,2,1,"c-form-feedback",32),i()(),t(27,"div",3)(28,"span",4),l(29,"Datos de env\xEDo"),i()(),u(30,"br"),t(31,"c-input-group",23)(32,"div",24)(33,"select",33),S("change",function(){h(e);let r=p(2);return g(r.filtrarLista())}),f(34,be,2,2,"option",34),i(),t(35,"label",35),l(36,"Departamento*"),i(),t(37,"c-form-feedback",27),l(38,"Campo requerido."),i()()(),t(39,"c-input-group",23)(40,"div",24)(41,"select",36),f(42,Ee,2,2,"option",34),i(),t(43,"label",37),l(44,"Sucursal*"),i(),t(45,"c-form-feedback",27),l(46,"Campo requerido."),i()()(),t(47,"c-input-group",23)(48,"div",24)(49,"select",38),f(50,ye,2,2,"option",34),i(),t(51,"label",39),l(52,"M\xE9todo de pago*"),i(),t(53,"c-form-feedback",27),l(54,"Campo requerido."),i()()()()}if(o&2){let e=p(2);a("formGroup",e.form),n(),a("ngIf",e.mostrarMensaje),n(6),a("cFormFloating",!0),n(),a("valid",e.functionsUtils.campoRequerido(e.form,"nombres","CR")==1?!1:null)("maxLength",70),n(3),a("valid",!1),n(3),a("cFormFloating",!0),n(),a("valid",e.functionsUtils.campoRequerido(e.form,"apellidos","CR")==1?!1:null)("maxLength",60),n(3),a("valid",!1),n(3),a("cFormFloating",!0),n(),a("valid",e.functionsUtils.campoRequerido(e.form,"telefono","CR")==1||e.functionsUtils.campoRequerido(e.form,"telefono","TI")==3?!1:null)("maxLength",8),n(3),a("ngIf",e.functionsUtils.getValueMap("telefono")==1),n(),a("ngIf",e.functionsUtils.getValueMap("telefono")==3),n(6),a("cFormFloating",!0),n(2),a("ngForOf",e.dataUtils.listaDepartamentos),n(3),a("valid",!1),n(3),a("cFormFloating",!0),n(2),a("ngForOf",e.listaSucursalesFiltrada),n(3),a("valid",!1),n(3),a("cFormFloating",!0),n(2),a("ngForOf",e.listaMetodoPago),n(3),a("valid",!1)}}function Fe(o,m){if(o&1){let e=w();t(0,"c-card",2)(1,"div",3)(2,"span",4),l(3,"Carrito"),i()(),t(4,"c-card-body")(5,"c-container")(6,"div",5)(7,"table",6)(8,"thead")(9,"tr"),u(10,"th",7),t(11,"th",7),l(12,"Nombre de producto"),i(),t(13,"th",7),l(14,"Descripci\xF3n"),i(),t(15,"th",7),l(16,"Cantidad"),i(),t(17,"th",7),l(18,"Precio"),i(),t(19,"th",7),l(20,"Total"),i(),u(21,"th",7),i()(),t(22,"tbody"),f(23,Se,15,6,"tr",8),u(24,"td")(25,"td")(26,"td")(27,"td"),t(28,"td",9),l(29,"Total de compra: "),i(),t(30,"td",10),l(31),i()()()()()(),t(32,"c-card-body",11)(33,"div",12),f(34,we,55,24,"form",13),i()(),t(35,"div",14)(36,"button",15),S("click",function(){h(e);let r=p();return g(r.realizarCompra())}),l(37," Finalizar Compra "),i()()()}if(o&2){let e=p();n(7),a("striped",!0),n(16),a("ngForOf",e.listResponse),n(8),_("Q",e.functionsUtils.formatPrice(e.totalCompra),""),n(3),a("ngIf",e.form),n(2),a("disabled",!e.form||e.form&&e.form.invalid||e.deshabilitarBotones)}}function Me(o,m){o&1&&(t(0,"c-card",2)(1,"c-card-body",42)(2,"h4"),l(3,"No existen productos en el carrito de compras"),i()()())}function Pe(o){let m=o.value;return/^[0-9\s]+$/.test(m)?null:{onlyNumbersAndSpaces:!0}}var et=(()=>{let m=class m{constructor(s,r,d,c){this.functionsUtils=s,this.services=r,this.dataUtils=d,this.router=c,this.mapaProductos={},this.listaMetodoPago=[{id:"E",nombre:"Efectivo"},{id:"T",nombre:"Tarjeta"}],this.deshabilitarBotones=!1,this.mostrarMensaje=!1,this.listResponse=[],this.type="",this.mensaje="",this.mostrarMensaje=!1,this.deshabilitarBotones=!1}ngOnInit(){this.totalCompra=0,this.cargarMapaDesdeLocalStorage(),this.services.mostrarSpinner=!1,this.form=new te({nombres:new C("",x.required),apellidos:new C("",x.required),telefono:new C("",[x.required,Pe,x.minLength(8)]),departamento:new C("",x.required),sucursal:new C("",x.required),metodoPago:new C("E",x.required)}),this.form.controls.departamento.setValue("1"),this.services.getAllItemsFromEntity("sucursales").subscribe(s=>{this.listaSucursales=s,this.filtrarLista()},s=>{console.error(s)})}realizarCompra(){this.services.mostrarSpinner=!0,this.form.controls.metodoPago.value==="E"?this.finalizarCompra():this.form.controls.metodoPago.value}mostrarModalMetodoPago(){}finalizarCompra(){this.deshabilitarBotones=!0;let s=this.listaSucursalesFiltrada&&this.listaSucursalesFiltrada.length>0?this.listaSucursalesFiltrada.find(c=>c.id===Number(this.form.controls.sucursal.value)):null,r=JSON.parse(JSON.stringify(this.listResponse));r&&r.forEach(c=>{c.producto.imagen="",c.producto.imageSrc=""});let d=new P(null,"N",this.form.controls.nombres.value,this.form.controls.apellidos.value,this.form.controls.telefono.value,this.form.controls.departamento.value,s,this.form.controls.metodoPago.value,r,this.totalCompra);this.services.saveEntity("pedidos",d).subscribe(c=>{this.type=c.error?"danger":"success",this.mensaje=c.mensaje,this.mostrarMensaje=!0,setTimeout(()=>{this.mostrarMensaje=!1,this.deshabilitarBotones=!c.error,this.services.mostrarSpinner=!1,c.error||(localStorage.removeItem("mapaProductos"),this.cargarMapaDesdeLocalStorage(),this.functionsUtils.navigateOption(this.router,"",new class{}))},2e3)},c=>{this.deshabilitarBotones=!1,this.services.mostrarSpinner=!1,this.type="danger",this.mensaje="Ha ocurrido un error al insertar los datos",this.mostrarMensaje=!0,setTimeout(()=>{this.mostrarMensaje=!1},1500),console.error("Error al consumir Post")})}eliminar(s){this.mapaProductos[s]&&(delete this.mapaProductos[s],this.guardarMapaEnLocalStorage())}guardarMapaEnLocalStorage(){localStorage.setItem("mapaProductos",JSON.stringify(this.mapaProductos)),this.cargarMapaDesdeLocalStorage()}cargarMapaDesdeLocalStorage(){this.services.cantidadProductosCarrito=0,this.totalCompra=0,this.listResponse=[];let s=localStorage.getItem("mapaProductos");if(s){this.mapaProductos=JSON.parse(s);let d=Object.keys(this.mapaProductos).length;this.services.cantidadProductosCarrito=d;for(let c in this.mapaProductos)if(this.mapaProductos.hasOwnProperty(c)){let E=this.mapaProductos[c].cantidad,v=this.mapaProductos[c].producto,y=this.mapaProductos[c].caracteristicas;var r=v.descripcion;y&&(r+='<br><span class="fw-bold"> Caracter\xEDsticas:</span> ',Object.entries(y).forEach(([he,ge])=>{r+=' <br><span class="fw-semibold">'+he+": </span>"+ge+","}),r=r.substring(0,r.length-1));let xe=new M(null,null,r,E,v.precio,v);this.listResponse.push(xe),this.totalCompra+=Number(E*v.precio)}}}filtrarLista(){this.form.controls.sucursal.setValue(null),this.listaSucursalesFiltrada=this.listaSucursales.filter(s=>s.departamento===this.form.controls.departamento.value),this.listaSucursalesFiltrada&&this.listaSucursalesFiltrada.length>0&&this.form.controls.sucursal.setValue(this.listaSucursalesFiltrada[0].id)}closeModalMetodoPago(){this.mostrarModal=!1}resetFormMetodoPago(){}};m.\u0275fac=function(r){return new(r||m)(b(ce),b(de),b(pe),b(R))},m.\u0275cmp=T({type:m,selectors:[["app-carrito-compras"]],standalone:!0,features:[j],decls:4,vars:2,consts:[[1,"d-flex","justify-content-center","flex-column","align-items-center"],["class","my-5 ancho-personalizado",4,"ngIf"],[1,"my-5","ancho-personalizado"],[1,"d-flex","justify-content-center","mt-3"],[1,"tittle"],[1,"text-center","scroll"],["cTable","",3,"striped"],["scope","col"],[4,"ngFor","ngForOf"],[1,"fw-bold"],[1,"align-center","fw-bold"],[1,"d-flex","justify-content-center"],[1,"col-6"],["cForm","",3,"formGroup",4,"ngIf"],[1,"justify-content-center","d-flex","mt-2",2,"padding-bottom","20px"],["cButton","","color","primary",3,"click","disabled"],[1,"align-center"],["cCardImg","top",1,"fixed-size-img",3,"src"],[1,"text-start",3,"innerHTML"],["cButton","","color","danger","variant","outline","size","sm",3,"click"],["cIcon","","name","cilTrash"],["cForm","",3,"formGroup"],[3,"color",4,"ngIf"],[1,"mb-2"],[3,"cFormFloating"],["id","nombres","autoComplete","name","cFormControl","","placeholder","Nombres","formControlName","nombres",3,"blur","valid","maxLength"],["cLabel","","for","nombres"],[3,"valid"],["id","apellidos","autoComplete","name","cFormControl","","placeholder","Apellidos","formControlName","apellidos",3,"blur","valid","maxLength"],["cLabel","","for","apellidos"],["id","telefono","autoComplete","telefono","cFormControl","","placeholder","Tel\xE9fono","formControlName","telefono",3,"blur","valid","maxLength"],["cLabel","","for","telefono"],[3,"valid",4,"ngIf"],["id","departamento","cSelect","","formControlName","departamento",3,"change"],[3,"value",4,"ngFor","ngForOf"],["cLabel","","for","departamento",2,"margin-top","-5px"],["id","sucursal","cSelect","","formControlName","sucursal"],["cLabel","","for","sucursal",2,"margin-top","-5px"],["id","metodoPago","cSelect","","formControlName","metodoPago"],["cLabel","","for","metodoPago",2,"margin-top","-5px"],[3,"color"],[3,"value"],[1,"d-flex","justify-content-center","flex-column","align-items-center","align-content-center"]],template:function(r,d){r&1&&(t(0,"div",0),f(1,Fe,38,5,"c-card",1)(2,Me,4,0,"c-card",1),i(),u(3,"app-custom-spinner")),r&2&&(n(),a("ngIf",d.listResponse&&d.listResponse.length>0),n(),a("ngIf",!d.listResponse||d.listResponse&&d.listResponse.length===0))},dependencies:[B,G,q,fe,ue,k,L,V,Q,me,ie,ae,le,X,re,Z,ee,ne,oe,U,A,K,$,Y,se,W,H,J],styles:['@charset "UTF-8";button[_ngcontent-%COMP%]    {background-color:#00b3ba!important;border-color:#00b3ba!important}.ancho-personalizado[_ngcontent-%COMP%]{width:70%}.tittle[_ngcontent-%COMP%]{color:#0009;font-size:25px;margin-bottom:55px}.fixed-size-img[_ngcontent-%COMP%]{width:12vw;height:20vh}.align-center[_ngcontent-%COMP%]{text-align:center!important;vertical-align:middle!important}.col-2[_ngcontent-%COMP%], .col-4[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.scroll[_ngcontent-%COMP%]{max-height:70vh;overflow:scroll}@media only screen and (max-width: 767px){.tittle[_ngcontent-%COMP%]{color:#0009;font-size:25px;margin-bottom:0}td[_ngcontent-%COMP%]{word-wrap:break-word;min-width:35vw;max-width:80vw}.fixed-size-img[_ngcontent-%COMP%]{width:30vw;height:20vh}}@media only screen and (min-width: 768px) and (max-width: 1023px){.tittle[_ngcontent-%COMP%]{color:#0009;font-size:25px;margin-bottom:0}td[_ngcontent-%COMP%]{word-wrap:break-word;min-width:15vw;width:auto;max-width:28vw}.fixed-size-img[_ngcontent-%COMP%]{width:25vw;height:18vh}}@media only screen and (min-width: 1024px){.tittle[_ngcontent-%COMP%]{color:#0009;font-size:25px;margin-bottom:0}td[_ngcontent-%COMP%]{word-wrap:break-word;min-width:10vw;width:auto;max-width:15vw}.fixed-size-img[_ngcontent-%COMP%]{width:13vw;height:15vh}}']});let o=m;return o})();export{et as CarritoComprasComponent};