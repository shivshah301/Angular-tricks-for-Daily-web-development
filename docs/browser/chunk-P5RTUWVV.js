import{a as v,b as y,i as s}from"./chunk-AUWDFFU4.js";import{$ as m,Ja as l,aa as r,ib as d,ja as a,jb as u,jc as g,ka as n,r as c,ta as f,yb as h}from"./chunk-XTIEY7YL.js";var k="https://pokeapi.co/api/v2/pokemon/",j=(()=>{let t=class t{constructor(e){this.http=e}getListOfPokemonUrls(){return this.http.get(k).pipe(c(e=>e.results))}};t.\u0275fac=function(i){return new(i||t)(f(v))},t.\u0275prov=a({token:t,factory:t.\u0275fac,providedIn:"root"});let o=t;return o})();var I=(()=>{let t=class t{constructor(e){this.apiService=e}ngOnInit(){this.apiService.getListOfPokemonUrls().subscribe(e=>{console.log(e)})}};t.\u0275fac=function(i){return new(i||t)(l(j))},t.\u0275cmp=m({type:t,selectors:[["app-generating-type-of-data-automatically"]],decls:2,vars:0,template:function(i,w){i&1&&(d(0,"p"),h(1,"generating-type-of-data-automatically works!"),u())}});let o=t;return o})();var M=[{path:"",component:I}],C=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=r({type:t}),t.\u0275inj=n({imports:[s.forChild(M),s]});let o=t;return o})();var H=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=r({type:t}),t.\u0275inj=n({imports:[g,C,y]});let o=t;return o})();export{H as GeneratingTypeDataAutomaticallyModule};
