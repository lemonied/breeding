import{_ as w}from"./bg-08db9a08.js";import{j as B,G as D,A as m,H as S,s as x,u as I,r as j,o as i,c as C,b as t,B as f,f as g,e as M,g as L,t as n,I as h,E as T,p as V,i as Y,a as y,J as v}from"./index-3b786813.js";import{h as H}from"./moment-fbc5633a.js";import{S as R,B as $}from"./BreadCrumb-b39beab1.js";import{_ as E}from"./_plugin-vue_export-helper-c27b6911.js";import"./nav-7b3f8086.js";const K=s=>(V("data-v-7ee88477"),s=s(),Y(),s),q={class:"news-detail"},A=K(()=>t("img",{class:"bg",src:w},null,-1)),G={class:"content"},J={class:"con"},z={class:"date"},F=["innerHTML"],O=B({__name:"NewsDetail",setup(s){const r=D(),o=m(()=>Number(r.params.id)),c=m(()=>r.query.key),a=S({loading:!1,data:null}),b=async()=>{a.loading=!0;try{const e=await y(`/ngapi/article/${o.value}`);a.data=e.data.data}catch(e){e!=null&&e.message&&v.error(e.message)}a.loading=!1},k=async()=>{a.loading=!0;try{const e=await y(`/ngapi/article/articleByKey/${c.value}`);a.data=e.data.data}catch(e){e!=null&&e.message&&v.error(e.message)}a.loading=!1},l=()=>{c.value?k():o.value&&b()};return x([o,c],()=>{l()},{flush:"post"}),I(()=>{l()}),(e,P)=>{var d,u,_;const N=j("RouterLink");return i(),C("div",q,[A,t("div",G,[a.data?(i(),f(R,{key:0,id:a.data.articleSubject,class:"sub-navs"},{default:g(({nav:p})=>[M(N,{to:`/list/${p.id}`},{default:g(()=>[L(n(p.subjectName),1)]),_:2},1032,["to"])]),_:1},8,["id"])):h("",!0),t("div",J,[a.data?(i(),f($,{key:0,id:a.data.articleSubject},null,8,["id"])):h("",!0),t("article",null,[t("h1",null,n((d=a.data)==null?void 0:d.title),1),t("p",z,"发布时间："+n(T(H)((u=a.data)==null?void 0:u.publishTime).format("YYYY-MM-DD")),1),t("div",{innerHTML:(_=a.data)==null?void 0:_.content},null,8,F)])])])])}}});const ae=E(O,[["__scopeId","data-v-7ee88477"]]);export{ae as default};
