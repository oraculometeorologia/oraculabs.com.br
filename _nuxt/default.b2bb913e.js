import{_ as f}from"./nuxt-link.441fb92c.js";import{_ as p,o as a,c as e,a as t,b as s,w as n,M as d,d as u,p as h,e as g,s as k,N as x,F as C}from"./entry.752a81f1.js";const y=""+globalThis.__publicAssetsURL("images/logos_oraculabs/logo-oraculabs.png");const w={data(){return{containsPrivacyOrForm:!1}},mounted(){this.updateCurrentUrl(),window.addEventListener("popstate",this.updateCurrentUrl)},beforeDestroy(){window.removeEventListener("popstate",this.updateCurrentUrl)},methods:{updateCurrentUrl(){const o=window.location.href;this.containsPrivacyOrForm=o.includes("privacidade")||o.includes("termos")},navigation0(){document.title="Oraculabs ::"},navigation1(){document.title="Oraculabs :: Produtos e Serviços"},navigation2(){document.title="Oraculabs :: Quem Somos"},navigation3(){document.title="Oraculabs :: Clientes e parceiros"}}},l=o=>(h("data-v-60145cc8"),o=o(),g(),o),P={class:"navbar navbar-expand-lg bg-light navbar-light sticky-top shadow"},O={class:"container"},$=l(()=>t("img",{id:"navbar-logo",src:y},null,-1)),F=l(()=>t("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navmenu"},[t("span",{class:"navbar-toggler-icon"})],-1)),S={class:"collapse navbar-collapse pt-2 pt-md-0",id:"navmenu"},N={class:"navbar-nav ms-auto"},L={key:0,class:"nav-item"},U=l(()=>t("a",{class:"nav-link",hef:"/#produtos-servicos","aria-label":"Produtos e serviços"},"Produtos e serviços ",-1)),A={key:1,class:"nav-item"},I=l(()=>t("a",{class:"nav-link","aria-label":"Quem somos"},"Quem somos",-1)),V={key:2,class:"nav-item"},E=l(()=>t("a",{class:"nav-link","aria-label":"Clientes e parceiros"},"Clientes e parceiros",-1)),T={key:3,class:"nav-item","aria-label":" Voltar"};function M(o,v,c,m,r,_){const i=f;return a(),e("nav",P,[t("div",O,[s(i,{onClick:_.navigation0,to:"#hero",class:"navbar-brand",id:"logo"},{default:n(()=>[$]),_:1},8,["onClick"]),F,t("div",S,[t("ul",N,[r.containsPrivacyOrForm?d("",!0):(a(),e("li",L,[s(i,{onClick:_.navigation1,to:"/#projetos"},{default:n(()=>[U]),_:1},8,["onClick"])])),r.containsPrivacyOrForm?d("",!0):(a(),e("li",A,[s(i,{onClick:_.navigation2,to:"/#quem-somos"},{default:n(()=>[I]),_:1},8,["onClick"])])),r.containsPrivacyOrForm?d("",!0):(a(),e("li",V,[s(i,{onClick:_.navigation3,to:"/#clientes"},{default:n(()=>[E]),_:1},8,["onClick"])])),r.containsPrivacyOrForm?(a(),e("li",T,[s(i,{class:"nav-link",to:"/"},{default:n(()=>[u("Voltar")]),_:1})])):d("",!0)])])])])}const R=p(w,[["render",M],["__scopeId","data-v-60145cc8"]]),B=""+globalThis.__publicAssetsURL("images/icon/fundacao.png");const Q={},b=o=>(h("data-v-921788ff"),o=o(),g(),o),D={class:"text-white pt-5 bg-dark-blue-1"},G={class:"container"},j={class:"row mt-3"},q=b(()=>t("div",{class:"col-lg-1 col-sm-2 col-md-1 text-left"},[t("img",{src:B,alt:"Fundação","aria-label":"Fundação"})],-1)),z=b(()=>t("div",{class:"col-lg-7 col-sm-8 col-md-8 text-left"},[t("ul",null,[t("li",null,[t("b",null,"UMA EMPRESA DO GRUPO:")]),t("li",null,"IGAM4 Consultoria Científica e Tecnológica Ltda"),t("li",null,"São Paulo / SP")])],-1)),H={class:"col-lg-4 col-sm-12 col-md-12 mt-3"},J={class:"pb-3 text-right"},K={class:"pb-3 text-right"},W=k('<hr data-v-921788ff><div class="row" data-v-921788ff><div class="col-12" data-v-921788ff><p class="text-center" data-v-921788ff><span class="copyright" data-v-921788ff>©</span><span class="direitos-reservados" data-v-921788ff>OracuLabs</span> - 2024</p></div></div>',2);function X(o,v){const c=f;return a(),e("footer",D,[t("div",G,[t("div",j,[q,z,t("div",H,[t("ul",null,[t("li",J,[s(c,{to:"/politica-de-privacidade"},{default:n(()=>[u("Política de privacidade")]),_:1})]),t("li",K,[s(c,{to:"/termos-de-uso"},{default:n(()=>[u("Termos de uso")]),_:1})])])])]),W])])}const Y=p(Q,[["render",X],["__scopeId","data-v-921788ff"]]),Z={};function tt(o,v){const c=R,m=Y;return a(),e(C,null,[s(c,{id:"top"}),x(o.$slots,"default"),s(m)],64)}const at=p(Z,[["render",tt]]);export{at as default};