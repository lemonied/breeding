import{u as k}from"./nav-7b3f8086.js";import{m as E,a as N,r as g,o,c as n,b as e,w as D,v as I,d as b,e as a,f as d,g as i,F as v,h as f,t as y,p as w,i as C,j as L}from"./index-3b786813.js";import{_ as l}from"./_plugin-vue_export-helper-c27b6911.js";const V={data(){return{keywords:String(this.$route.query.keywords||"")}},computed:{...E(k)},methods:{async getNavs(){const s=((await N.get("/ngapi/column/allList?site=hndx")).data.data||[]).map(r=>({...r,show:r.isShow==="1"}));this.navsStore.set(s)},onSearch(){this.keywords&&this.$router.push(`/search?keywords=${encodeURIComponent(this.keywords)}`)}},mounted(){this.getNavs()}},F="/news/assets/logo-a3aeb5a1.png";const c=t=>(w("data-v-ff2ed36e"),t=t(),C(),t),R={class:"header"},j=c(()=>e("div",{class:"top"},[e("span",null,"欢迎访问育种平台数据分析展示系统")],-1)),A={class:"central"},q=c(()=>e("img",{src:F,alt:"logo"},null,-1)),H=c(()=>e("h1",{class:"title"},"育种平台数据分析展示系统",-1)),K={class:"search-box"},M=c(()=>e("button",null,"搜索",-1)),T={class:"list"},U={class:"submenus"};function P(t,s,r,p,h,$){const _=g("RouterLink");return o(),n("header",R,[j,e("div",A,[q,H,e("div",K,[D(e("input",{type:"text",placeholder:"请输入关键字点击搜索","onUpdate:modelValue":s[0]||(s[0]=u=>h.keywords=u),onKeydown:s[1]||(s[1]=b(u=>$.onSearch(),["enter"]))},null,544),[[I,h.keywords]]),M])]),e("nav",null,[e("ul",T,[e("li",null,[a(_,{to:"/"},{default:d(()=>[i("网站首页")]),_:1})]),(o(!0),n(v,null,f(t.navsStore.tops,(u,S)=>(o(),n("li",{key:S},[a(_,{to:`/list/${u.id}`},{default:d(()=>[i(y(u.subjectName),1)]),_:2},1032,["to"]),e("ul",U,[(o(!0),n(v,null,f(t.navsStore.getMenusByPid(u.id),(m,x)=>(o(),n("li",{key:x},[a(_,{to:`/list/${m.id}`},{default:d(()=>[i(y(m.subjectName),1)]),_:2},1032,["to"])]))),128))])]))),128))])])])}const z=l(V,[["render",P],["__scopeId","data-v-ff2ed36e"]]);const G={},B=t=>(w("data-v-ae060e9c"),t=t(),C(),t),J=B(()=>e("div",{class:"top"},[e("img",{src:F,alt:"logo"}),e("h1",null,"育种平台数据分析展示系统"),e("div",{class:"address"},[e("p",null,"地址 : 河南省开封市河南大学金明校区"),e("p",null,"邮箱 : lvqi@henu.edu.cn"),e("p",null,"电话 : 86-0371-22656010")])],-1)),O=B(()=>e("div",{class:"copyright"},"Copyright © 2021 河南大学农学院 版权所有",-1)),Q=[J,O];function W(t,s){return o(),n("footer",null,Q)}const X=l(G,[["render",W],["__scopeId","data-v-ae060e9c"]]),Y={class:"root-layout"},Z=L({__name:"CommonLayout",setup(t){return(s,r)=>{const p=g("RouterView");return o(),n("div",Y,[a(z),a(p),a(X)])}}});const oe=l(Z,[["__scopeId","data-v-c0f9fc09"]]);export{oe as default};
