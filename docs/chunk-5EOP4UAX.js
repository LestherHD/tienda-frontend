import{a as T,b as U}from"./chunk-G3OQY22M.js";import{$ as v,Aa as P,Ca as y,D as C,E as c,F as g,M as u,Ma as z,Na as k,P as l,W as n,X as i,Y as r,Z as _,aa as p,cb as j,eb as S,hb as E,ib as F,ja as m,jb as I,ka as b,kb as R,la as M,lb as D,mb as q,nb as V,p as x,qa as w,u as h,v as f,za as O}from"./chunk-L4M4Q24E.js";import"./chunk-Z6EQZUNN.js";function B(o,a){if(o&1){let s=_();n(0,"c-carousel-item")(1,"c-card-body",16)(2,"c-card",17)(3,"div",18),v("click",function(){let t=h(s).$implicit,d=p(2);return f(d.viajarADetalle(t))}),r(4,"br"),n(5,"div",19),r(6,"img",20),i(),r(7,"br"),n(8,"div",19)(9,"span",21),m(10),i()(),n(11,"div",22)(12,"button",23),m(13),i()()()()()()}if(o&2){let s=a.$implicit,e=p(2);c(6),l("src",s.producto.imagen,C),c(4),b(s.producto.nombre),c(3),M("Q",e.functionsUtils.formatPrice(s.producto.precio),"")}}function A(o,a){if(o&1&&(n(0,"div",11)(1,"c-carousel",12),r(2,"c-carousel-indicators"),n(3,"c-carousel-inner"),u(4,B,14,3,"c-carousel-item",13),i(),r(5,"c-carousel-control",14)(6,"c-carousel-control",15),i()()),o&2){let s=p();c(),l("interval",0),c(3),l("ngForOf",s.listResponse)}}var Y=(()=>{let a=class a{constructor(e,t,d){this.services=e,this.functionsUtils=t,this.router=d,this.services.isDashboardUrl=!1,this.listResponse=[]}ngOnInit(){this.services.getAllItemsFromEntity("productosFavoritos").subscribe(e=>{this.listResponse=e,this.listResponse.forEach(t=>{t.producto.imagen="data:image/jpeg;base64,"+t.producto.imagen})},e=>{console.error(e)})}viajarADetalle(e){this.services.mostrarSpinner=!0,this.services.activeButtonHeader="";let t={queryParams:{idProduct:e.producto.id}};this.functionsUtils.navigateOption(this.router,"product-detail",t)}};a.\u0275fac=function(t){return new(t||a)(g(U),g(T),g(z))},a.\u0275cmp=x({type:a,selectors:[["app-dashboard-main"]],standalone:!0,features:[w],decls:18,vars:1,consts:[[1,"image-container"],["src","/assets/images/header.png",1,"image"],[1,"textos-grandes","col-12","row","d-flex","justify-content-center","mt-5"],[1,"col-auto"],[1,"texto-izquierda"],[1,"col-5","mt-2"],[1,"texto-derecha","justify-content-start","d-flex"],[1,"textos-pequenios","col-12","row","d-flex","justify-content-center","mt-5",2,"margin","0 auto"],[1,"col-8","mt-2"],[1,"texto-derecha","justify-content-start","d-flex","text-center"],["class","carousel-custom d-flex justify-content-center mt-lg-4",4,"ngIf"],[1,"carousel-custom","d-flex","justify-content-center","mt-lg-4"],["dark","true",3,"interval"],[4,"ngFor","ngForOf"],["caption","Previous","direction","prev",1,"carousel-control-custom",3,"routerLink"],["caption","Next","direction","next",1,"carousel-control-custom",3,"routerLink"],[1,"card-container"],[1,"card-item"],[3,"click"],[1,"justify-content-center","d-flex"],["cCardImg","top",1,"fixed-size-img",2,"border-radius","3px",3,"src"],["cCardTitle","",1,"mb-2","card-title-custom"],[1,"justify-content-center","d-flex",2,"padding-bottom","50px"],["cButton","","color","primary"]],template:function(t,d){t&1&&(n(0,"div",0),r(1,"img",1),i(),n(2,"div",2)(3,"div",3)(4,"span",4),m(5,"Somos Familia"),i()(),n(6,"div",5)(7,"span",6),m(8,"So\xF1amos con ganarnos la confianza de m\xE1s hogares guatemaltecos. Compartiendo momentos inolvidables, llenos de alegr\xEDa junto a los tuyos."),i()()(),n(9,"div",7)(10,"div",3)(11,"span",4),m(12,"Somos Familia"),i()(),n(13,"div",8)(14,"span",9),m(15,"So\xF1amos con ganarnos la confianza de m\xE1s hogares guatemaltecos. Compartiendo momentos inolvidables, llenos de alegr\xEDa junto a los tuyos."),i()()(),r(16,"br"),u(17,A,7,2,"div",10)),t&2&&(c(17),l("ngIf",d.listResponse&&d.listResponse.length>0))},dependencies:[O,k,I,D,V,q,R,F,E,y,P,S,j],styles:['@charset "UTF-8";button[_ngcontent-%COMP%]    {background-color:#00b3ba!important;border-color:#00b3ba!important}.image-container[_ngcontent-%COMP%]{position:relative;width:50vw;margin:0 auto}.image[_ngcontent-%COMP%]{margin-top:-1px;height:35vh;width:100%;display:block;-webkit-mask-image:linear-gradient(to right,rgba(0,0,0,0) 0%,rgb(0,0,0) 20%,rgb(0,0,0) 80%,rgba(0,0,0,0) 100%);mask-image:linear-gradient(to right,#0000,#000 20% 80%,#0000)}.texto-izquierda[_ngcontent-%COMP%]{font-size:95px;font-family:Varela Round;color:#00b3ba}.texto-derecha[_ngcontent-%COMP%]{font-size:18px;font-family:Varela Round;color:#00b3ba99;line-height:2}.carousel-custom[_ngcontent-%COMP%]{width:500px;margin:auto auto 50px}.card-container[_ngcontent-%COMP%]{display:grid}.card-item[_ngcontent-%COMP%]{border-color:#0000001a;background:#fff;color:#00b3ba;width:500px;max-height:600px;box-shadow:0 0 6px #0003;transition:transform .3s ease,box-shadow 1ms ease}.card-title-custom[_ngcontent-%COMP%]{font-size:18px;font-family:Varela Round;font-weight:400}.card-body-custom[_ngcontent-%COMP%]{height:100px}.card-body-custom[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:12px;max-width:17vw;height:100px;overflow-y:scroll;text-align:center;margin:0 auto}.fixed-size-img[_ngcontent-%COMP%]{width:300px;height:250px}@media (min-width: 1351px){.textos-grandes[_ngcontent-%COMP%]{display:flex!important}.textos-pequenios[_ngcontent-%COMP%]{display:none!important}.fixed-size-img[_ngcontent-%COMP%]{width:300px;height:250px}.image-container[_ngcontent-%COMP%]{position:relative;width:55vw;margin:0 auto}.carousel-custom[_ngcontent-%COMP%]{width:650px;margin:auto auto 50px}.card-item[_ngcontent-%COMP%]{width:650px;max-height:600px}}@media (max-width: 1350px){.textos-grandes[_ngcontent-%COMP%]{display:flex!important}.textos-pequenios[_ngcontent-%COMP%]{display:none!important}.fixed-size-img[_ngcontent-%COMP%]{width:300px;height:250px}.image-container[_ngcontent-%COMP%]{position:relative;width:60vw;margin:0 auto}.carousel-custom[_ngcontent-%COMP%]{width:650px;margin:auto auto 50px}.card-item[_ngcontent-%COMP%]{width:650px;max-height:600px}}@media (max-width: 992px){.textos-grandes[_ngcontent-%COMP%]{display:flex!important}.textos-pequenios[_ngcontent-%COMP%]{display:none!important}.fixed-size-img[_ngcontent-%COMP%]{width:300px;height:250px}.image-container[_ngcontent-%COMP%]{position:relative;width:75vw;margin:0 auto}.carousel-custom[_ngcontent-%COMP%]{width:650px;margin:auto auto 50px}.card-item[_ngcontent-%COMP%]{width:650px;max-height:600px}}@media (max-width: 768px){.textos-grandes[_ngcontent-%COMP%]{display:none!important}.textos-pequenios[_ngcontent-%COMP%]{display:flex!important}.texto-izquierda[_ngcontent-%COMP%]{font-size:65px;font-family:Varela Round;color:#00b3ba}.texto-derecha[_ngcontent-%COMP%]{font-size:17px;line-height:2}.fixed-size-img[_ngcontent-%COMP%]{width:250px;height:200px}.carousel-custom[_ngcontent-%COMP%]{width:500px;margin:auto auto 50px}.card-item[_ngcontent-%COMP%]{width:500px;max-height:600px}.image-container[_ngcontent-%COMP%]{position:relative;width:80vw;margin:0 auto}.image[_ngcontent-%COMP%]{margin-top:-1px;height:32vh;width:100%;display:block;-webkit-mask-image:linear-gradient(to right,rgba(0,0,0,0) 0%,rgb(0,0,0) 20%,rgb(0,0,0) 80%,rgba(0,0,0,0) 100%);mask-image:linear-gradient(to right,#0000,#000 20% 80%,#0000)}}@media (max-width: 576px){.textos-grandes[_ngcontent-%COMP%]{display:none!important}.textos-pequenios[_ngcontent-%COMP%]{display:flex!important}.texto-izquierda[_ngcontent-%COMP%]{font-size:45px;font-family:Varela Round;color:#00b3ba}.texto-derecha[_ngcontent-%COMP%]{font-size:15px;line-height:1.5}.fixed-size-img[_ngcontent-%COMP%]{width:200px;height:150px}.carousel-custom[_ngcontent-%COMP%]{width:350px;margin:auto auto 50px}.card-item[_ngcontent-%COMP%]{width:350px;max-height:600px}.image-container[_ngcontent-%COMP%]{position:relative;width:85vw;margin:0 auto}.image[_ngcontent-%COMP%]{margin-top:-1px;height:25vh;width:100%;display:block;-webkit-mask-image:linear-gradient(to right,rgba(0,0,0,0) 0%,rgb(0,0,0) 20%,rgb(0,0,0) 80%,rgba(0,0,0,0) 100%);mask-image:linear-gradient(to right,#0000,#000 20% 80%,#0000)}}']});let o=a;return o})();export{Y as DashboardMainComponent};
