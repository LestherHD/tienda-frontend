import{a as oe}from"./chunk-NTVUTZPD.js";import{ea as se}from"./chunk-JTIIEVEG.js";import{$b as L,Ab as R,Bc as te,Db as M,Dc as ie,Eb as N,Ec as ne,Gb as c,Lb as m,Nb as b,Ob as v,Pb as y,Qb as P,R as U,Rb as ee,S as z,Sa as l,Ta as k,U as Y,Va as g,X as _,Xb as F,Zb as B,_b as A,aa as I,ba as W,ca as f,cc as T,jb as u,ka as Q,la as O,lb as w,ma as S,mb as p,nb as E,pb as q,qb as C,rb as Z,sb as K,tb as X,ub as d,va as J,vb as h,wb as x}from"./chunk-AL5TOAVB.js";var ce=(t,e,n)=>({$implicit:t,pages:e,disabled:n}),de=t=>({disabled:!0,currentPage:t}),he=(t,e,n)=>({disabled:t,$implicit:e,currentPage:n}),H=(t,e)=>({disabled:t,currentPage:e}),ue=t=>({disabled:t});function pe(t,e){t&1&&(d(0,"span",13),M(1,7),h())}function _e(t,e){t&1&&(d(0,"span",13),M(1,8),h())}function fe(t,e){t&1&&(d(0,"span",13),M(1,9),h())}function ge(t,e){t&1&&(d(0,"span",13),M(1,10),h())}function me(t,e){t&1&&P(0,"...")}function be(t,e){if(t&1&&P(0),t&2){let n=e.$implicit;ee(n)}}function ve(t,e){}function ye(t,e){if(t&1&&(d(0,"a",16),u(1,ve,0,0,"ng-template",12),h()),t&2){let n=c(2).$implicit,s=c(),i=y(9);l(),p("ngTemplateOutlet",(s.tplEllipsis==null?null:s.tplEllipsis.templateRef)||i)("ngTemplateOutletContext",B(2,de,n))}}function Te(t,e){}function De(t,e){if(t&1){let n=R();d(0,"a",17),N("click",function(i){O(n);let o=c().$implicit;return c(2).selectPage(o),S(i.preventDefault())}),u(1,Te,0,0,"ng-template",12),h()}if(t&2){let n=c().$implicit,s=c(),i=s.$implicit,o=s.disabled,a=c(),r=y(11);w("tabindex",o?"-1":null)("aria-disabled",o?"true":null),l(),p("ngTemplateOutlet",(a.tplNumber==null?null:a.tplNumber.templateRef)||r)("ngTemplateOutletContext",L(4,he,o,n,i))}}function we(t,e){if(t&1&&(d(0,"li",15),u(1,ye,2,4,"a",16)(2,De,2,8),h()),t&2){let n=e.$implicit,s=c(),i=s.$implicit,o=s.disabled,a=c();E("active",n===i)("disabled",a.isEllipsis(n)||o),w("aria-current",n===i?"page":null),l(),C(1,a.isEllipsis(n)?1:2)}}function Oe(t,e){if(t&1&&K(0,we,3,6,"li",14,Z),t&2){let n=e.pages;X(n)}}function Se(t,e){}function Ee(t,e){if(t&1){let n=R();d(0,"li",15)(1,"a",18),N("click",function(i){return O(n),c().selectPage(1),S(i.preventDefault())}),u(2,Se,0,0,"ng-template",12),h()()}if(t&2){let n=c(),s=y(1);E("disabled",n.previousDisabled()),l(),w("tabindex",n.previousDisabled()?"-1":null)("aria-disabled",n.previousDisabled()?"true":null),l(),p("ngTemplateOutlet",(n.tplFirst==null?null:n.tplFirst.templateRef)||s)("ngTemplateOutletContext",A(6,H,n.previousDisabled(),n.page))}}function Ce(t,e){}function Re(t,e){if(t&1){let n=R();d(0,"li",15)(1,"a",19),N("click",function(i){O(n);let o=c();return o.selectPage(o.page-1),S(i.preventDefault())}),u(2,Ce,0,0,"ng-template",12),h()()}if(t&2){let n=c(),s=y(3);E("disabled",n.previousDisabled()),l(),w("tabindex",n.previousDisabled()?"-1":null)("aria-disabled",n.previousDisabled()?"true":null),l(),p("ngTemplateOutlet",(n.tplPrevious==null?null:n.tplPrevious.templateRef)||s)("ngTemplateOutletContext",B(6,ue,n.previousDisabled()))}}function Ne(t,e){}function Me(t,e){}function Ie(t,e){if(t&1){let n=R();d(0,"li",15)(1,"a",20),N("click",function(i){O(n);let o=c();return o.selectPage(o.page+1),S(i.preventDefault())}),u(2,Me,0,0,"ng-template",12),h()()}if(t&2){let n=c(),s=y(5);E("disabled",n.nextDisabled()),l(),w("tabindex",n.nextDisabled()?"-1":null)("aria-disabled",n.nextDisabled()?"true":null),l(),p("ngTemplateOutlet",(n.tplNext==null?null:n.tplNext.templateRef)||s)("ngTemplateOutletContext",A(6,H,n.nextDisabled(),n.page))}}function Fe(t,e){}function Ae(t,e){if(t&1){let n=R();d(0,"li",15)(1,"a",21),N("click",function(i){O(n);let o=c();return o.selectPage(o.pageCount),S(i.preventDefault())}),u(2,Fe,0,0,"ng-template",12),h()()}if(t&2){let n=c(),s=y(7);E("disabled",n.nextDisabled()),l(),w("tabindex",n.nextDisabled()?"-1":null)("aria-disabled",n.nextDisabled()?"true":null),l(),p("ngTemplateOutlet",(n.tplLast==null?null:n.tplLast.templateRef)||s)("ngTemplateOutletContext",A(6,H,n.nextDisabled(),n.page))}}var ke={animation:!0,transitionTimerDelayMs:5};function xe(t){return parseInt(`${t}`,10)}function Pe(t,e,n=0){return Math.max(Math.min(t,e),n)}function ae(t){return!isNaN(xe(t))}var{transitionTimerDelayMs:Zt}=ke;var Kt=(()=>{let t=()=>/iPad|iPhone|iPod/.test(navigator.userAgent)||/Macintosh/.test(navigator.userAgent)&&navigator.maxTouchPoints&&navigator.maxTouchPoints>2,e=()=>/Android/.test(navigator.userAgent);return typeof navigator<"u"?!!navigator.userAgent&&(t()||e()):!1})();var Xt=["a[href]","button:not([disabled])",'input:not([disabled]):not([type="hidden"])',"select:not([disabled])","textarea:not([disabled])","[contenteditable]",'[tabindex]:not([tabindex="-1"])'].join(", ");var ei=new Date(1882,10,12),ti=new Date(2174,10,25);var ii=1e3*60*60*24;var V=1080,Be=24*V,Le=12*V+793,ni=29*Be+Le,si=11*V+204;var He=(()=>{let e=class e{constructor(){this.disabled=!1,this.boundaryLinks=!1,this.directionLinks=!0,this.ellipses=!0,this.maxSize=0,this.pageSize=10,this.rotate=!1}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=U({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})(),Ve=(()=>{let e=class e{constructor(){this.templateRef=_(g)}};e.\u0275fac=function(i){return new(i||e)},e.\u0275dir=f({type:e,selectors:[["ng-template","ngbPaginationEllipsis",""]],standalone:!0});let t=e;return t})(),Ge=(()=>{let e=class e{constructor(){this.templateRef=_(g)}};e.\u0275fac=function(i){return new(i||e)},e.\u0275dir=f({type:e,selectors:[["ng-template","ngbPaginationFirst",""]],standalone:!0});let t=e;return t})(),$e=(()=>{let e=class e{constructor(){this.templateRef=_(g)}};e.\u0275fac=function(i){return new(i||e)},e.\u0275dir=f({type:e,selectors:[["ng-template","ngbPaginationLast",""]],standalone:!0});let t=e;return t})(),je=(()=>{let e=class e{constructor(){this.templateRef=_(g)}};e.\u0275fac=function(i){return new(i||e)},e.\u0275dir=f({type:e,selectors:[["ng-template","ngbPaginationNext",""]],standalone:!0});let t=e;return t})(),Ue=(()=>{let e=class e{constructor(){this.templateRef=_(g)}};e.\u0275fac=function(i){return new(i||e)},e.\u0275dir=f({type:e,selectors:[["ng-template","ngbPaginationNumber",""]],standalone:!0});let t=e;return t})(),ze=(()=>{let e=class e{constructor(){this.templateRef=_(g)}};e.\u0275fac=function(i){return new(i||e)},e.\u0275dir=f({type:e,selectors:[["ng-template","ngbPaginationPrevious",""]],standalone:!0});let t=e;return t})(),Ye=(()=>{let e=class e{constructor(){this.templateRef=_(g)}};e.\u0275fac=function(i){return new(i||e)},e.\u0275dir=f({type:e,selectors:[["ng-template","ngbPaginationPages",""]],standalone:!0});let t=e;return t})(),oi=(()=>{let e=class e{constructor(){this._config=_(He),this.pageCount=0,this.pages=[],this.disabled=this._config.disabled,this.boundaryLinks=this._config.boundaryLinks,this.directionLinks=this._config.directionLinks,this.ellipses=this._config.ellipses,this.rotate=this._config.rotate,this.maxSize=this._config.maxSize,this.page=1,this.pageSize=this._config.pageSize,this.pageChange=new J(!0),this.size=this._config.size}hasPrevious(){return this.page>1}hasNext(){return this.page<this.pageCount}nextDisabled(){return!this.hasNext()||this.disabled}previousDisabled(){return!this.hasPrevious()||this.disabled}selectPage(s){this._updatePages(s)}ngOnChanges(s){this._updatePages(this.page)}isEllipsis(s){return s===-1}_applyEllipses(s,i){this.ellipses&&(s>0&&(s>2?this.pages.unshift(-1):s===2&&this.pages.unshift(2),this.pages.unshift(1)),i<this.pageCount&&(i<this.pageCount-2?this.pages.push(-1):i===this.pageCount-2&&this.pages.push(this.pageCount-1),this.pages.push(this.pageCount)))}_applyRotation(){let s=0,i=this.pageCount,o=Math.floor(this.maxSize/2),a=this.maxSize%2===0?o-1:o;return this.page<=o?i=this.maxSize:this.pageCount-this.page<o?s=this.pageCount-this.maxSize:(s=this.page-o-1,i=this.page+a),[s,i]}_applyPagination(){let i=(Math.ceil(this.page/this.maxSize)-1)*this.maxSize,o=i+this.maxSize;return[i,o]}_setPageInRange(s){let i=this.page;this.page=Pe(s,this.pageCount,1),this.page!==i&&ae(this.collectionSize)&&this.pageChange.emit(this.page)}_updatePages(s){this.pageCount=Math.ceil(this.collectionSize/this.pageSize),ae(this.pageCount)||(this.pageCount=0),this.pages.length=0;for(let i=1;i<=this.pageCount;i++)this.pages.push(i);if(this._setPageInRange(s),this.maxSize>0&&this.pageCount>this.maxSize){let i=0,o=this.pageCount;this.rotate?[i,o]=this._applyRotation():[i,o]=this._applyPagination(),this.pages=this.pages.slice(i,o),this._applyEllipses(i,o)}}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=I({type:e,selectors:[["ngb-pagination"]],contentQueries:function(i,o,a){if(i&1&&(m(a,Ve,5),m(a,Ge,5),m(a,$e,5),m(a,je,5),m(a,Ue,5),m(a,ze,5),m(a,Ye,5)),i&2){let r;b(r=v())&&(o.tplEllipsis=r.first),b(r=v())&&(o.tplFirst=r.first),b(r=v())&&(o.tplLast=r.first),b(r=v())&&(o.tplNext=r.first),b(r=v())&&(o.tplNumber=r.first),b(r=v())&&(o.tplPrevious=r.first),b(r=v())&&(o.tplPages=r.first)}},hostAttrs:["role","navigation"],inputs:{disabled:"disabled",boundaryLinks:"boundaryLinks",directionLinks:"directionLinks",ellipses:"ellipses",rotate:"rotate",collectionSize:"collectionSize",maxSize:"maxSize",page:"page",pageSize:"pageSize",size:"size"},outputs:{pageChange:"pageChange"},standalone:!0,features:[Q,F],decls:20,vars:12,consts:()=>{let s;s=$localize`:@@ngb.pagination.first:««`;let i;i=$localize`:@@ngb.pagination.previous:«`;let o;o=$localize`:@@ngb.pagination.next:»`;let a;a=$localize`:@@ngb.pagination.last:»»`;let r;r=$localize`:@@ngb.pagination.first-aria:First`;let G;G=$localize`:@@ngb.pagination.previous-aria:Previous`;let $;$=$localize`:@@ngb.pagination.next-aria:Next`;let j;return j=$localize`:@@ngb.pagination.last-aria:Last`,[["first",""],["previous",""],["next",""],["last",""],["ellipsis",""],["defaultNumber",""],["defaultPages",""],s,i,o,a,[1,"page-item",3,"disabled"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],["aria-hidden","true"],[1,"page-item",3,"active","disabled"],[1,"page-item"],["tabindex","-1","aria-disabled","true",1,"page-link"],["href","",1,"page-link",3,"click"],["aria-label",r,"href","",1,"page-link",3,"click"],["aria-label",G,"href","",1,"page-link",3,"click"],["aria-label",$,"href","",1,"page-link",3,"click"],["aria-label",j,"href","",1,"page-link",3,"click"]]},template:function(i,o){if(i&1&&(u(0,pe,2,0,"ng-template",null,0,T)(2,_e,2,0,"ng-template",null,1,T)(4,fe,2,0,"ng-template",null,2,T)(6,ge,2,0,"ng-template",null,3,T)(8,me,1,0,"ng-template",null,4,T)(10,be,1,1,"ng-template",null,5,T)(12,Oe,2,0,"ng-template",null,6,T),d(14,"ul"),u(15,Ee,3,9,"li",11)(16,Re,3,8,"li",11)(17,Ne,0,0,"ng-template",12)(18,Ie,3,9,"li",11)(19,Ae,3,9,"li",11),h()),i&2){let a=y(13);l(14),q("pagination"+(o.size?" pagination-"+o.size:"")),l(),C(15,o.boundaryLinks?15:-1),l(),C(16,o.directionLinks?16:-1),l(),p("ngTemplateOutlet",(o.tplPages==null?null:o.tplPages.templateRef)||a)("ngTemplateOutletContext",L(8,ce,o.page,o.pages,o.disabled)),l(),C(18,o.directionLinks?18:-1),l(),C(19,o.boundaryLinks?19:-1)}},dependencies:[ie],encapsulation:2,changeDetection:0});let t=e;return t})();var ai=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=W({type:e}),e.\u0275inj=z({});let t=e;return t})();var ri=new Y("live announcer delay",{providedIn:"root",factory:()=>100});function We(t,e){t&1&&(d(0,"div",1)(1,"div",2),x(2,"c-spinner",3),h()())}var _i=(()=>{let e=class e{constructor(s){this.services=s}};e.\u0275fac=function(i){return new(i||e)(k(oe))},e.\u0275cmp=I({type:e,selectors:[["app-custom-spinner"]],standalone:!0,features:[F],decls:1,vars:1,consts:[["style",`position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(128, 128, 128, 0.4);
  z-index: 1099;
`,4,"ngIf"],[2,"position","fixed","top","0","left","0","height","100vh","width","100vw","background","rgba(128, 128, 128, 0.4)","z-index","1099"],[2,"position","fixed","top","50%","left","50%","transform","translate(-50%, -50%)","padding","20px","border-radius","8px"],[2,"height","50px","width","50px"]],template:function(i,o){i&1&&u(0,We,3,0,"div",0),i&2&&p("ngIf",o.services.mostrarSpinner)},dependencies:[se,ne,te]});let t=e;return t})();export{oi as a,ai as b,_i as c};
