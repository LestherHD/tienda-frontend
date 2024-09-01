import{b as Ee,c as we}from"./chunk-YYS6QCS7.js";import{a as se,b as S,c as me,d as ce,e as de,f as v,g as pe,i as ue,j as fe,k as xe,l as he,m as ge,n as Se,o as _e}from"./chunk-3N7NB6A4.js";import{a as Ce}from"./chunk-4L43VRKW.js";import{a as ve}from"./chunk-MJ7HZ4W6.js";import{a as be}from"./chunk-NTVUTZPD.js";import{$ as ne,C as I,D as J,F as Q,H as Y,I as K,S as W,T as X,U as Z,V as ee,W as te,Y as ie,aa as oe,ba as re,ca as ae,fa as le,g as H,q as $}from"./chunk-JTIIEVEG.js";import{Ab as _,Ac as G,Bc as P,Eb as u,Ec as T,Gb as p,Hb as R,Ib as q,Jb as A,Na as L,Oa as U,Qb as l,Rb as C,Sa as o,Sb as b,Ta as M,Xb as O,aa as F,jb as h,la as f,ma as x,mb as a,na as B,ub as t,va as N,vb as i,wb as g}from"./chunk-AL5TOAVB.js";import"./chunk-Z6EQZUNN.js";var k=class{constructor(c,e,s,n,m,d){this.id=c,this.pedido,this.descripcion=s,this.cantidad=n,this.precio=m,this.producto=d}};var D=class{constructor(c,e,s,n,m,d,E,w,y,V){this.id=c,this.estado=e,this.nombres=s,this.apellidos=n,this.telefono=m,this.departamento=d,this.sucursal=E,this.metodoPago=w,this.detallePedido=y,this.total=V}};var Pe=["*"];function Te(r,c){if(r&1){let e=_();t(0,"button",7),u("click",function(){f(e);let n=p();return x(n.onSubmit())}),l(1,"Aceptar"),i()}if(r&2){let e=p();a("disabled",e.disabledSubmit)}}var ye=(()=>{let c=class c{constructor(){this.close=new N,this.submit=new N}ngOnInit(){}onSubmit(){this.submit.emit()}onClose(){this.close.emit()}};c.\u0275fac=function(n){return new(n||c)},c.\u0275cmp=F({type:c,selectors:[["app-modal-crud"]],inputs:{showModal:"showModal",showSubmit:"showSubmit",tittle:"tittle",disabledSubmit:"disabledSubmit",disabledOthersButtons:"disabledOthersButtons"},outputs:{close:"close",submit:"submit"},standalone:!0,features:[O],ngContentSelectors:Pe,decls:12,vars:5,consts:[["staticBackdropModal",""],["backdrop","static","alignment","center",3,"visible"],["backdrop","static","id","staticBackdropModal"],["cModalTitle",""],["cButtonClose","",3,"click","disabled"],["cButton","","color","secondary",3,"click","disabled"],["cButton","","style","background-color: rgb(0, 179, 186); border: none;",3,"disabled","click",4,"ngIf"],["cButton","",2,"background-color","rgb(0, 179, 186)","border","none",3,"click","disabled"]],template:function(n,m){if(n&1){let d=_();R(),t(0,"c-modal",1)(1,"c-modal-header",2,0)(3,"h5",3),l(4),i(),t(5,"button",4),u("click",function(){return f(d),x(m.onClose())}),i()(),t(6,"c-modal-body"),q(7),i(),t(8,"c-modal-footer")(9,"button",5),u("click",function(){return f(d),x(m.onClose())}),l(10," Cancelar "),i(),h(11,Te,2,1,"button",6),i()()}n&2&&(a("visible",m.showModal),o(4),C(m.tittle),o(),a("disabled",m.disabledOthersButtons),o(4),a("disabled",m.disabledOthersButtons),o(2),a("ngIf",m.showSubmit))},dependencies:[T,P,ae,re,ne,oe,I,J]});let r=c;return r})();function Ie(r,c){if(r&1){let e=_();t(0,"tr")(1,"td",20),g(2,"img",21),i(),t(3,"td",20),l(4),i(),g(5,"td",22),t(6,"td",20),l(7),i(),t(8,"td",20),l(9),i(),t(10,"td",20),l(11),i(),t(12,"td",20)(13,"button",23),u("click",function(){let n=f(e).$implicit,m=p(2);return x(m.eliminar(n))}),B(),g(14,"svg",24),i()()()}if(r&2){let e=c.$implicit,s=p(2);o(2),a("src",e.producto.imagen,U),o(2),C(e.producto.nombre),o(),a("innerHTML",e.descripcion,L),o(2),C(e.cantidad),o(2),b("Q",s.functionsUtils.formatPrice(e.producto.precio),""),o(2),b("Q",s.functionsUtils.formatPrice(e.producto.precio*e.cantidad),"")}}function ke(r,c){r&1&&(t(0,"c-form-feedback",30),l(1,"Campo requerido."),i()),r&2&&a("valid",!1)}function De(r,c){r&1&&(t(0,"c-form-feedback",30),l(1,"Solo se permiten valores num\xE9ricos del 0 al 9 con longitud m\xE1xima de 8 car\xE1cteres"),i()),r&2&&a("valid",!1)}function Ne(r,c){if(r&1&&(t(0,"option",43),l(1),i()),r&2){let e=c.$implicit,s=p(3);a("value",e.codigo),o(),b(" ",s.dataUtils.descripcionPorCodigo(e.codigo)," ")}}function Ve(r,c){if(r&1&&(t(0,"option",43),l(1),i()),r&2){let e=c.$implicit;a("value",e.id),o(),b(" ",e.nombre," ")}}function je(r,c){if(r&1&&(t(0,"option",43),l(1),i()),r&2){let e=c.$implicit;a("value",e.id),o(),b(" ",e.nombre," ")}}function ze(r,c){if(r&1){let e=_();t(0,"form",25)(1,"div",9)(2,"span",10),l(3,"Datos personales"),i()(),g(4,"br"),t(5,"c-input-group",26)(6,"div",27)(7,"input",28),u("blur",function(){f(e);let n=p(2);return x(n.functionsUtils.removeSpaces("nombres",n.form))}),i(),t(8,"label",29),l(9,"Nombres*"),i(),t(10,"c-form-feedback",30),l(11,"Campo requerido."),i()()(),t(12,"c-input-group",26)(13,"div",27)(14,"input",31),u("blur",function(){f(e);let n=p(2);return x(n.functionsUtils.removeSpaces("apellidos",n.form))}),i(),t(15,"label",32),l(16,"Apellidos*"),i(),t(17,"c-form-feedback",30),l(18,"Campo requerido."),i()()(),t(19,"c-input-group",26)(20,"div",27)(21,"input",33),u("blur",function(){f(e);let n=p(2);return x(n.functionsUtils.removeSpaces("telefono",n.form))}),i(),t(22,"label",34),l(23,"Tel\xE9fono*"),i(),h(24,ke,2,1,"c-form-feedback",35)(25,De,2,1,"c-form-feedback",35),i()(),t(26,"div",9)(27,"span",10),l(28,"Datos de env\xEDo"),i()(),g(29,"br"),t(30,"c-input-group",26)(31,"div",27)(32,"select",36),u("change",function(){f(e);let n=p(2);return x(n.filtrarLista())}),h(33,Ne,2,2,"option",37),i(),t(34,"label",38),l(35,"Departamento*"),i(),t(36,"c-form-feedback",30),l(37,"Campo requerido."),i()()(),t(38,"c-input-group",26)(39,"div",27)(40,"select",39),h(41,Ve,2,2,"option",37),i(),t(42,"label",40),l(43,"Sucursal*"),i(),t(44,"c-form-feedback",30),l(45,"Campo requerido."),i()()(),t(46,"c-input-group",26)(47,"div",27)(48,"select",41),h(49,je,2,2,"option",37),i(),t(50,"label",42),l(51,"M\xE9todo de pago*"),i(),t(52,"c-form-feedback",30),l(53,"Campo requerido."),i()()()()}if(r&2){let e=p(2);a("formGroup",e.form),o(6),a("cFormFloating",!0),o(),a("valid",e.functionsUtils.campoRequerido(e.form,"nombres","CR")==1?!1:null)("maxLength",70),o(3),a("valid",!1),o(3),a("cFormFloating",!0),o(),a("valid",e.functionsUtils.campoRequerido(e.form,"apellidos","CR")==1?!1:null)("maxLength",60),o(3),a("valid",!1),o(3),a("cFormFloating",!0),o(),a("valid",e.functionsUtils.campoRequerido(e.form,"telefono","CR")==1||e.functionsUtils.campoRequerido(e.form,"telefono","TI")==3?!1:null)("maxLength",8),o(3),a("ngIf",e.functionsUtils.getValueMap("telefono")==1),o(),a("ngIf",e.functionsUtils.getValueMap("telefono")==3),o(6),a("cFormFloating",!0),o(2),a("ngForOf",e.dataUtils.listaDepartamentos),o(3),a("valid",!1),o(3),a("cFormFloating",!0),o(2),a("ngForOf",e.listaSucursalesFiltrada),o(3),a("valid",!1),o(3),a("cFormFloating",!0),o(2),a("ngForOf",e.listaMetodoPago),o(3),a("valid",!1)}}function Be(r,c){if(r&1){let e=_();t(0,"c-card",8)(1,"div",9)(2,"span",10),l(3,"Carrito"),i()(),t(4,"c-card-body")(5,"c-container")(6,"div",11)(7,"table",12)(8,"thead")(9,"tr"),g(10,"th",13),t(11,"th",13),l(12,"Nombre de producto"),i(),t(13,"th",13),l(14,"Descripci\xF3n"),i(),t(15,"th",13),l(16,"Cantidad"),i(),t(17,"th",13),l(18,"Precio"),i(),t(19,"th",13),l(20,"Total"),i(),g(21,"th",13),i()(),t(22,"tbody"),h(23,Ie,15,6,"tr",14),g(24,"td")(25,"td")(26,"td")(27,"td"),t(28,"td",7),l(29,"Total de compra: "),i(),t(30,"td",15),l(31),i()()()()()(),t(32,"c-card-body",3)(33,"div",16),h(34,ze,54,23,"form",17),i()(),t(35,"div",18)(36,"button",19),u("click",function(){f(e);let n=p();return x(n.realizarCompra())}),l(37," Finalizar Compra "),i()()()}if(r&2){let e=p();o(7),a("striped",!0),o(16),a("ngForOf",e.listResponse),o(8),b("Q",e.functionsUtils.formatPrice(e.totalCompra),""),o(3),a("ngIf",e.form),o(2),a("disabled",!e.form||e.form&&e.form.invalid||e.deshabilitarBotones)}}function Le(r,c){r&1&&(t(0,"c-card",8)(1,"c-card-body",44)(2,"h4"),l(3,"No existen productos en el carrito de compras"),i()()())}function Ue(r,c){if(r&1&&(t(0,"c-alert",45),l(1),i()),r&2){let e=p();A("color",e.type),o(),C(e.mensaje)}}function Re(r){let c=r.value;return/^[0-9\s]+$/.test(c)?null:{onlyNumbersAndSpaces:!0}}var vt=(()=>{let c=class c{constructor(s,n,m,d){this.functionsUtils=s,this.services=n,this.dataUtils=m,this.router=d,this.mapaProductos={},this.listaMetodoPago=[{id:"E",nombre:"Pago contra entrega"}],this.deshabilitarBotones=!1,this.mostrarMensaje=!1,this.listResponse=[],this.type="",this.mensaje="",this.mostrarMensaje=!1,this.deshabilitarBotones=!1}ngOnInit(){this.services.isDashboardUrl=!1,this.totalCompra=0,this.cargarMapaDesdeLocalStorage(),this.services.mostrarSpinner=!1,this.form=new de({nombres:new v("",S.required),apellidos:new v("",S.required),telefono:new v("",[S.required,Re,S.minLength(8)]),departamento:new v("",S.required),sucursal:new v("",S.required),metodoPago:new v("E",S.required)}),this.form.controls.departamento.setValue("1"),this.services.getAllItemsFromEntity("sucursales").subscribe(s=>{this.listaSucursales=s,this.filtrarLista()},s=>{console.error(s)})}realizarCompra(){this.services.mostrarSpinner=!0,this.form.controls.metodoPago.value==="E"?(this.mostrarModal=!0,this.services.mostrarSpinner=!1):this.form.controls.metodoPago.value}mostrarModalMetodoPago(){}finalizarCompra(){this.deshabilitarBotones=!0;let s=this.listaSucursalesFiltrada&&this.listaSucursalesFiltrada.length>0?this.listaSucursalesFiltrada.find(d=>d.id===Number(this.form.controls.sucursal.value)):null,n=JSON.parse(JSON.stringify(this.listResponse));n&&n.forEach(d=>{d.producto.imagen="",d.producto.imageSrc=""});let m=new D(null,"N",this.form.controls.nombres.value,this.form.controls.apellidos.value,this.form.controls.telefono.value,this.form.controls.departamento.value,s,this.form.controls.metodoPago.value,n,this.totalCompra);this.services.saveEntity("pedidos",m).subscribe(d=>{this.type=d.error?"danger":"success",this.mensaje=d.mensaje,this.mostrarMensaje=!0,this.services.mostrarSpinner=!1,setTimeout(()=>{this.mostrarMensaje=!1,this.deshabilitarBotones=!d.error,d.error||(localStorage.removeItem("mapaProductos"),this.cargarMapaDesdeLocalStorage(),this.functionsUtils.navigateOption(this.router,"",new class{}))},2e3)},d=>{this.deshabilitarBotones=!1,this.services.mostrarSpinner=!1,this.type="danger",this.mensaje="Ha ocurrido un error al insertar los datos",this.mostrarMensaje=!0,setTimeout(()=>{this.mostrarMensaje=!1},1500),console.error("Error al consumir Post")})}eliminar(s){let n=s.producto.id+JSON.stringify(s.caracteristicas);this.mapaProductos[n]&&(delete this.mapaProductos[n],this.guardarMapaEnLocalStorage())}ordenarPorLlave(s){let n=Object.keys(s).sort(),m={};return n.forEach(d=>{m[d]=s[d]}),m}guardarMapaEnLocalStorage(){localStorage.setItem("mapaProductos",JSON.stringify(this.mapaProductos)),this.cargarMapaDesdeLocalStorage()}cargarMapaDesdeLocalStorage(){this.services.cantidadProductosCarrito=0,this.totalCompra=0,this.listResponse=[];let s=localStorage.getItem("mapaProductos");if(s){this.mapaProductos=JSON.parse(s);let m=Object.keys(this.mapaProductos).length;this.services.cantidadProductosCarrito=m;for(let d in this.mapaProductos)if(this.mapaProductos.hasOwnProperty(d)){let E=this.mapaProductos[d].cantidad,w=this.mapaProductos[d].producto,y=this.mapaProductos[d].caracteristicas;var n=w.descripcion;y&&Object.keys(y).length>0&&(n+='<br><span class="fw-bold"> Caracter\xEDsticas:</span> ',Object.entries(y).forEach(([Me,z])=>{n+=' <br><span class="fw-semibold">'+Me+": </span>"+(z||"N/A")+","}),n=n.substring(0,n.length-1));let j=new k(null,null,n,E,w.precio,w);j.caracteristicas=y,this.listResponse.push(j),this.totalCompra+=Number(E*w.precio)}}}filtrarLista(){this.form.controls.sucursal.setValue(null),this.listaSucursalesFiltrada=this.listaSucursales.filter(s=>s.departamento===this.form.controls.departamento.value),this.listaSucursalesFiltrada&&this.listaSucursalesFiltrada.length>0&&this.form.controls.sucursal.setValue(this.listaSucursalesFiltrada[0].id)}closeModal(){this.mostrarModal=!1}resetFormMetodoPago(){}confirmarCompra(){this.services.mostrarSpinner=!0,this.deshabilitarBotones=!0,this.finalizarCompra()}};c.\u0275fac=function(n){return new(n||c)(M(Ce),M(be),M(ve),M(H))},c.\u0275cmp=F({type:c,selectors:[["app-carrito-compras"]],standalone:!0,features:[O],decls:12,vars:9,consts:[[1,"d-flex","justify-content-center","flex-column","align-items-center"],["class","my-5 ancho-personalizado",4,"ngIf"],[3,"close","submit","showModal","tittle","disabledSubmit","disabledOthersButtons","showSubmit"],[1,"d-flex","justify-content-center"],[1,"col-10"],[3,"color",4,"ngIf"],["color","warning"],[1,"fw-bold"],[1,"my-5","ancho-personalizado"],[1,"d-flex","justify-content-center","mt-3"],[1,"tittle"],[1,"text-center","scroll"],["cTable","",3,"striped"],["scope","col"],[4,"ngFor","ngForOf"],[1,"align-center","fw-bold"],[1,"col-6"],["cForm","",3,"formGroup",4,"ngIf"],[1,"justify-content-center","d-flex","mt-2",2,"padding-bottom","20px"],["cButton","","color","primary",1,"boton-comprar",3,"click","disabled"],[1,"align-center"],["cCardImg","top",1,"fixed-size-img",3,"src"],[1,"text-start",3,"innerHTML"],["cButton","","color","danger","variant","outline","size","sm",3,"click"],["cIcon","","name","cilTrash"],["cForm","",3,"formGroup"],[1,"mb-2"],[3,"cFormFloating"],["id","nombres","autoComplete","name","cFormControl","","placeholder","Nombres","formControlName","nombres",3,"blur","valid","maxLength"],["cLabel","","for","nombres"],[3,"valid"],["id","apellidos","autoComplete","name","cFormControl","","placeholder","Apellidos","formControlName","apellidos",3,"blur","valid","maxLength"],["cLabel","","for","apellidos"],["id","telefono","autoComplete","telefono","cFormControl","","placeholder","Tel\xE9fono","formControlName","telefono",3,"blur","valid","maxLength"],["cLabel","","for","telefono"],[3,"valid",4,"ngIf"],["id","departamento","cSelect","","formControlName","departamento",3,"change"],[3,"value",4,"ngFor","ngForOf"],["cLabel","","for","departamento",2,"margin-top","-5px"],["id","sucursal","cSelect","","formControlName","sucursal"],["cLabel","","for","sucursal",2,"margin-top","-5px"],["id","metodoPago","cSelect","","formControlName","metodoPago"],["cLabel","","for","metodoPago",2,"margin-top","-5px"],[3,"value"],[1,"d-flex","justify-content-center","flex-column","align-items-center","align-content-center"],[3,"color"]],template:function(n,m){n&1&&(t(0,"div",0),h(1,Be,38,5,"c-card",1)(2,Le,4,0,"c-card",1),i(),t(3,"app-modal-crud",2),u("close",function(){return m.closeModal()})("submit",function(){return m.confirmarCompra()}),t(4,"div",3)(5,"div",4),h(6,Ue,2,2,"c-alert",5),t(7,"c-alert",6)(8,"span",7),l(9,"Nota: "),i(),l(10),i()()()(),g(11,"app-custom-spinner")),n&2&&(o(),a("ngIf",m.listResponse&&m.listResponse.length>0),o(),a("ngIf",!m.listResponse||m.listResponse&&m.listResponse.length===0),o(),a("showModal",m.mostrarModal)("tittle","Confirmar compra")("disabledSubmit",m.form.invalid||m.deshabilitarBotones)("disabledOthersButtons",m.deshabilitarBotones)("showSubmit",!0),o(3),a("ngIf",m.mostrarMensaje),o(4),C("Los pedidos realizados tardan de 2 a 3 d\xEDas en ser entregados"))},dependencies:[Y,K,I,we,Ee,T,G,P,ee,_e,pe,he,ge,se,xe,me,ce,ue,fe,$,Q,ie,W,te,Se,le,X,Z,ye],styles:['@charset "UTF-8";.boton-comprar[_ngcontent-%COMP%]{background-color:#00b3ba!important;border-color:#00b3ba!important}.ancho-personalizado[_ngcontent-%COMP%]{width:70%}.tittle[_ngcontent-%COMP%]{color:#0009;font-size:25px;margin-bottom:55px}.fixed-size-img[_ngcontent-%COMP%]{width:12vw;height:20vh}.align-center[_ngcontent-%COMP%]{text-align:center!important;vertical-align:middle!important}.col-2[_ngcontent-%COMP%], .col-4[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.scroll[_ngcontent-%COMP%]{max-height:70vh;overflow:scroll}@media only screen and (max-width: 767px){.tittle[_ngcontent-%COMP%]{color:#0009;font-size:25px;margin-bottom:0}td[_ngcontent-%COMP%]{word-wrap:break-word;min-width:35vw;max-width:80vw}.fixed-size-img[_ngcontent-%COMP%]{width:30vw;height:20vh}}@media only screen and (min-width: 768px) and (max-width: 1023px){.tittle[_ngcontent-%COMP%]{color:#0009;font-size:25px;margin-bottom:0}td[_ngcontent-%COMP%]{word-wrap:break-word;min-width:15vw;width:auto;max-width:28vw}.fixed-size-img[_ngcontent-%COMP%]{width:25vw;height:18vh}}@media only screen and (min-width: 1024px){.tittle[_ngcontent-%COMP%]{color:#0009;font-size:25px;margin-bottom:0}td[_ngcontent-%COMP%]{word-wrap:break-word;min-width:10vw;width:auto;max-width:15vw}.fixed-size-img[_ngcontent-%COMP%]{width:13vw;height:15vh}}']});let r=c;return r})();export{vt as CarritoComprasComponent};
