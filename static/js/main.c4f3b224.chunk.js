(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{126:function(e,a,t){e.exports=t.p+"static/media/cryptocurrency.88532732.png"},139:function(e,a,t){e.exports=t(240)},236:function(e,a,t){},240:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(37),r=t.n(c),m=t(31),o=t(35),s=t(5),i=t(244),u=t(245),E=t(252),p=t(247),d=t(248),h=t(253),v=t(254),g=t(255),y=t(256),b=t(126),f=t.n(b),N=function(){return l.a.createElement("div",{className:"nav-container"},l.a.createElement("div",{className:"logo-container"},l.a.createElement(p.a,{src:f.a,size:"large"}),l.a.createElement(u.a.Title,{level:2,className:"logo"},l.a.createElement(m.b,{to:"/"},"CryptoVerse"))),l.a.createElement(d.a,{theme:"dark"},l.a.createElement(d.a.Item,{icon:l.a.createElement(h.a,null)},l.a.createElement(m.b,{to:"/"},"Home")),l.a.createElement(d.a.Item,{icon:l.a.createElement(v.a,null)},l.a.createElement(m.b,{to:"/cryptocurrencies"},"Cryptocurrencies")),l.a.createElement(d.a.Item,{icon:l.a.createElement(g.a,null)},l.a.createElement(m.b,{to:"/exchanges"},"Exchanges")),l.a.createElement(d.a.Item,{icon:l.a.createElement(y.a,null)},l.a.createElement(m.b,{to:"/news"},"News"))))},x=t(13),w=t(47),C=t.n(w),k=t(250),j=t(251),O=t(246),T=t(134),I=t(40),M={"X-RapidAPI-Host":"coinranking1.p.rapidapi.com","X-RapidAPI-Key":"4da647f613msh929c5eee3a02e8bp16cd6ajsn0971f770e413"},A=Object(T.a)({reducerPath:"cryptoApi",baseQuery:Object(I.d)({baseUrl:"https://coinranking1.p.rapidapi.com"}),endpoints:function(e){return{getCryptos:e.query({query:function(){return{url:"/coins",headers:M}}})}}}),P=A.useGetCryptosQuery,S=t(243),F=function(){return l.a.createElement("div",{className:"loader"},l.a.createElement(S.a,null))},V=function(){var e,a=Object(n.useState)(""),t=Object(x.a)(a,2),c=t[0],r=t[1],o=P(10),s=o.data,i=o.isFetching;return Object(n.useEffect)(function(){void 0!==s&&(r(s),console.log(s))},[i]),void 0!==c&&(e=c.data&&c.data.coins,console.log(e)),console.log(e),i?l.a.createElement(F,null):void 0!==e?l.a.createElement(l.a.Fragment,null,l.a.createElement(k.a,{gutters:[32,32],className:"crypto-card-container"},e.map(function(e){return l.a.createElement(j.a,{xs:24,sm:12,lg:6,className:"crypto-card",key:e.id},l.a.createElement(m.b,{to:"/crypto/${currency.id}"},l.a.createElement(O.a,{title:"${currenty.rank}, ${currency.name}",extra:l.a.createElement("img",{className:"crypto-image",src:e.iconUrl}),hoverable:!0},l.a.createElement("p",null,"Price: ",C()(e.price)),l.a.createElement("p",null,"MarketCap: ",C()(e.marketCap)),l.a.createElement("p",null,"Daily Change: ",C()(e.change)))))}))):void 0},H=function(){return l.a.createElement("div",null,"CryptoDetails")},$=function(){return l.a.createElement("div",null,"Exchanges")},q=function(){return l.a.createElement("div",null,"News")},D=t(249),G=u.a.Title,J=function(){var e,a=Object(n.useState)(""),t=Object(x.a)(a,2),c=t[0],r=t[1],o=P(10),s=o.data,i=o.isFetching;return Object(n.useEffect)(function(){void 0!==s&&(r(s),console.log(s))},[i]),void 0!==c&&(e=c.data&&c.data.stats),l.a.createElement(l.a.Fragment,null,l.a.createElement(G,{level:2,className:"heading"},"Global Crypto Stacks"),l.a.createElement(k.a,null,l.a.createElement(j.a,{span:12},l.a.createElement(D.a,{title:"Total Cryptocurrencies",value:e&&C()(e.total)})),l.a.createElement(j.a,{span:12},l.a.createElement(D.a,{title:"Total Exchanges",value:e&&C()(e.totalExchanges)})),l.a.createElement(j.a,{span:12},l.a.createElement(D.a,{title:"Total Market Cap",value:e&&C()(e.totalMarketCap)})),l.a.createElement(j.a,{span:12},l.a.createElement(D.a,{title:"Total 24h Volume",value:e&&C()(e.total24hVolume)})),l.a.createElement(j.a,{span:12},l.a.createElement(D.a,{title:"Total Markets",value:e&&C()(e.totalMarkets)}))),l.a.createElement("div",{className:"home-heading-container"},l.a.createElement(G,{level:2,className:"home-title"},"Top 10 Crypotocurrencies"),l.a.createElement(G,{level:3,className:"home-title"},l.a.createElement(m.b,{to:"/cryptocurrencies"},"See More"))),l.a.createElement(V,null),l.a.createElement("div",{className:"home-heading-container"},l.a.createElement(G,{level:2,className:"home-title"},"Latest Crypto News"),l.a.createElement(G,{level:3,className:"home-title"},l.a.createElement(m.b,{to:"/news"},"See More"))),l.a.createElement(q,null))},Q=(t(236),function(){return l.a.createElement("div",{className:"app"},l.a.createElement("div",{className:"navbar"},l.a.createElement(N,null)),l.a.createElement("div",{className:"main"},l.a.createElement(i.a,null,l.a.createElement("div",{className:"routes"},l.a.createElement(s.c,null,l.a.createElement(s.a,{exact:!0,path:"/",element:l.a.createElement(J,null)}),l.a.createElement(s.a,{exact:!0,path:"/exchanges",element:l.a.createElement($,null)}),l.a.createElement(s.a,{exact:!0,path:"/cryptocurrencies",element:l.a.createElement(V,null)}),l.a.createElement(s.a,{exact:!0,path:"/crypto/:coinId",element:l.a.createElement(H,null)}),l.a.createElement(s.a,{exact:!0,path:"/news",element:l.a.createElement(q,null)})))),l.a.createElement("div",{className:"footer"},l.a.createElement(u.a.Title,{level:5,style:{color:"white",textAlign:"center"}},"CryptoVerse ",l.a.createElement("br",null),"All rights reserved"),l.a.createElement(E.b,null,l.a.createElement(m.b,{to:"/"},"Home"),l.a.createElement(m.b,{to:"/exchanges"},"Exchanges"),l.a.createElement(m.b,{to:"/news"},"News")))))}),R=t(24),U=t(10),X=Object(U.b)({reducer:Object(R.a)({},A.reducerPath,A.reducer),middleware:function(e){return e().concat(A.middleware)}});t(238);r.a.render(l.a.createElement(m.a,null,l.a.createElement(o.a,{store:X},l.a.createElement(Q,null))),document.getElementById("root"))}},[[139,2,1]]]);
//# sourceMappingURL=main.c4f3b224.chunk.js.map