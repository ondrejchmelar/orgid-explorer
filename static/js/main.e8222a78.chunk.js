(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{133:function(e,t,a){e.exports={"fixedh-600":"List_fixedh-600__3Ov4E","dont-break-out":"List_dont-break-out__1TqMd","min-width-column":"List_min-width-column__1HgPA"}},209:function(e,t,a){e.exports=a(439)},436:function(e,t,a){},439:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(13),c=a.n(o),l=a(66),s=a(206),i=a(51),m=a(27),d=a.n(m),u=a(52),p=a(46),h=a(47),g=a(49),E=a(48),f=a(50),v=a(96),C=a(441),y=a(430),b=a(43),D=a(10),k=function(){return r.a.createElement("div",{id:"app-header"},r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light",id:"navbar"},r.a.createElement("div",{className:"container"},r.a.createElement(b.LinkContainer,{to:"/"},r.a.createElement("a",{className:"navbar-brand mr-2"},"Winding Tree")),r.a.createElement("a",{href:"https://windingtree.com/",className:"nav-link",target:"_blank",rel:"noopener noreferrer"},"Winding Tree website"),r.a.createElement("a",{href:"https://developers.windingtree.com/overview.html#orgid",className:"nav-link",target:"_blank",rel:"noopener noreferrer"},"About ORG.ID"),r.a.createElement(b.LinkContainer,{to:"/"},r.a.createElement("a",{className:"nav-link"},"List")))))},N=function(){return r.a.createElement(D.Footer,{copyrightHref:"https://windingtree.com",copyrightText:"Winding Tree"},r.a.createElement("div",{className:"col-6 col-md-3"},r.a.createElement("dl",{className:"mb-1"},r.a.createElement("dt",{className:"mb-1"},"About"),r.a.createElement("dd",null,r.a.createElement("nav",{className:"nav flex-column small"},r.a.createElement("a",{href:"https://windingtree.com",className:"nav-link px-0 text-white text--alpha-inverse"},"Homepage"),r.a.createElement("a",{href:"https://blog.windingtree.com/",className:"nav-link px-0 text-white text--alpha-inverse"},"Blog"),r.a.createElement("a",{href:"https://developers.windingtree.com",className:"nav-link px-0 text-white text--alpha-inverse"},"Developer portal"))))),r.a.createElement("div",{className:"col-6 col-md-3"},r.a.createElement("dl",{className:"mb-1"},r.a.createElement("dt",{className:"mb-1"},"Developers"),r.a.createElement("dd",null,r.a.createElement("nav",{className:"nav flex-column small"},r.a.createElement("a",{href:"https://github.com/windingtree/orgid-explorer",className:"nav-link px-0 text-white text--alpha-inverse"},"Source code"),r.a.createElement("a",{href:"https://github.com/windingtree",className:"nav-link px-0 text-white text--alpha-inverse"},"GitHub"),r.a.createElement("a",{href:"https://groups.google.com/forum/#!forum/windingtree",className:"nav-link px-0 text-white text--alpha-inverse"},"Google Group"))))))},w=function(e){var t=e.value,a=e.onChange,n=e.onClick;return r.a.createElement(D.Container,{className:"mb-1"},r.a.createElement(D.Form,null,r.a.createElement(D.Row,null,r.a.createElement(D.Col,{className:"mt-1"},r.a.createElement(D.Form.Control,{placeholder:"ORG.ID Address",type:"text",onChange:a,value:t})),r.a.createElement(D.Col,{md:2,className:"mt-1"},r.a.createElement(b.LinkContainer,{to:"/orgid/".concat(t)},r.a.createElement(D.Button,{variant:"primary",onClick:n,block:!0},"GO"))))))},x=a(448),O=a(447),j=a(444),I=a(446),S=(a(391),a(23)),_=a.n(S),A=a(202),L=a.n(A),P=a(203),R=a.n(P),M=a(204),z=a.n(M),T=new _.a.Icon({iconUrl:R.a,iconRetinaUrl:L.a,shadowUrl:z.a}),F=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(g.a)(this,Object(E.a)(t).call(this,e))).state={zoom:e.zoom||16,center:e.center||[0,0]},a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props.markers,t=this.state,a=t.zoom,n=t.center;return r.a.createElement(x.a,{center:n,zoom:a,className:"h-100"},r.a.createElement(O.a,{attribution:'\xa9 <a href="https://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.osm.org/{z}/{x}/{y}.png"}),e&&e[0]&&e.map(function(e,t){var a=e.position,n=e.name;return r.a.createElement(j.a,{position:a,icon:T,key:"".concat(a).concat(t)},r.a.createElement(I.a,null,r.a.createElement("div",{className:"map-popup"},r.a.createElement("h4",null,n))))}))}}]),t}(r.a.PureComponent),U=a(132),B=a.n(U),G=a(205),V=a.n(G),H=["HOTELS","AIRLINES","OTAs"],J=["madrid","mainnetPlayground","mainnet"],W=(a(433),function(e){function t(){return Object(p.a)(this,t),Object(g.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props,t=e.startDate,a=e.endDate,n=e.onStartDateChange,o=e.onEndDateChange,c=e.onDirectoryChange,l=e.selectedDirectory,s=e.onApply,i=e.onLocationChange,m=e.onEnvironmentChange,d=e.selectedEnvironment;return r.a.createElement(D.Container,{className:"mt-1"},r.a.createElement(D.Form,null,r.a.createElement(D.Row,null,r.a.createElement(D.Col,{md:1,xs:4,className:"align-self-center font-weight-bold mt-1"},"Directory:"),r.a.createElement(D.Col,{md:4,xs:12,className:"mt-1"},r.a.createElement(D.Dropdown,{onSelect:c},r.a.createElement(D.Dropdown.Toggle,{variant:"light",id:"dropdown-basic"},l),r.a.createElement(D.Dropdown.Menu,null,H.map(function(e){return r.a.createElement(D.Dropdown.Item,{key:e,eventKey:e},e)})))),r.a.createElement(D.Col,{md:"auto",xs:4,className:"align-self-center font-weight-bold mt-1"},"Environment:"),r.a.createElement(D.Col,{md:4,xs:12,className:"align-self-center mt-1"},r.a.createElement(D.Dropdown,{onSelect:m},r.a.createElement(D.Dropdown.Toggle,{variant:"light",id:"dropdown-basic"},d),r.a.createElement(D.Dropdown.Menu,null,J.map(function(e){return r.a.createElement(D.Dropdown.Item,{key:e,eventKey:e},e)}))))),r.a.createElement(D.Row,{className:"mt-1"},r.a.createElement(D.Col,{md:1,className:"align-self-center font-weight-bold mt-1 mt-2"},"Filters:"),r.a.createElement(D.Col,{md:4,className:"align-self-center mt-md-1"},r.a.createElement(V.a,{onPlaceSelected:i,types:["(cities)"]})),r.a.createElement(D.Col,{md:"auto",className:"align-self-center mt-1"},"Creation date"),r.a.createElement(D.Col,{className:"align-self-center mt-md-1"},r.a.createElement(B.a,{selected:t,onChange:n})),r.a.createElement(D.Col,{className:"align-self-center mt-md-1"},r.a.createElement(B.a,{selected:a,onChange:o})),r.a.createElement(D.Col,{md:2,className:"align-self-center mt-2 mt-md-1"},r.a.createElement(D.Button,{onClick:s,variant:"dark",block:!0,outlined:!0},"Apply")))))}}]),t}(n.Component)),K=[{display:"ORG.ID",fieldName:"address"},{display:"company",fieldName:"name"},{display:"location",fieldName:"city"},{display:"directory",fieldName:"segments"},{display:"created",fieldName:"dateCreated"}],Q={API_URI:"https://explorer-cache.myorgid.com",googleApiKey:"AIzaSyBwmCMB6ANYBORUb1-UWVgDI4XCxO5UJqY"},q=(a(434),a(133)),Y=a.n(q);function X(e,t,a,n){return r.a.createElement(b.LinkContainer,{to:"orgid/".concat(e)},r.a.createElement(D.Button,{variant:"link",className:"".concat(Y.a["dont-break-out"])},e))}var Z=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(g.a)(this,Object(E.a)(t).call(this,e))).onStartDateChange=function(e){a.setState({startDate:e})},a.onEndDateChange=function(e){a.setState({endDate:e})},a.onDirectoryChange=function(e){a.setState({selectedDirectory:e})},a.onEnvironmentChange=function(e){a.setState({selectedEnvironment:e})},a.onSortChange=function(e,t){a.setState({sortName:e,sortOrder:t})},a.onInputChange=function(e){a.setState({inputValue:e.target.value})},a.onLocationChange=function(e){a.setState({city:e.formatted_address,location:"".concat(e.geometry.location.lat(),",").concat(e.geometry.location.lng())})},a.parseOrgData=function(e){var t=e.address,a=e.name,n=e.city,r=e.segments,o=e.dateCreated;return{address:t,name:a,city:n,segments:r,dateCreated:Object(C.default)(Object(y.default)(o),"yyyy-MM-dd")}},a.parseMarkers=function(e){return e.map(function(e){var t=e.gpsCoordsLat,a=e.gpsCoordsLon,n=e.orgJsonContent,r=e.name,o=n&&(n.hotel||n.airline),c=o&&(o.location||o.description&&o.description.location)||t&&a&&{latitude:t,longitude:a};if(!c)return{invalid:!0};var l={};return l.position=[c.latitude,c.longitude],l.name=o&&(o.description&&o.description.name||o.name)||r||"Name not provided",l}).filter(function(e){return!e.invalid})},a.onApply=function(){var e=Object(u.a)(d.a.mark(function e(t){var n,r,o,c,l,s,i;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=a.prepareQS(),n+="&limit=10&offset=0",e.prev=3,e.next=6,fetch("".concat(Q.API_URI,"/organizations?").concat(n));case 6:return r=e.sent,e.next=9,r.json();case 9:o=e.sent,c=o.items,l=o.totalCount,s=c.map(a.parseOrgData),i=a.parseMarkers(c),a.setState({organizationsData:s,markers:i,totalCount:parseInt(l)}),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(3),console.log(e.t0);case 20:case"end":return e.stop()}},e,null,[[3,17]])}));return function(t){return e.apply(this,arguments)}}(),a.prepareQS=function(){var e=a.state,t=e.selectedDirectory,n=e.startDate,r=e.endDate,o=e.sortOrder,c=e.sortName,l=e.location,s=e.selectedEnvironment,i="";return i+="environment=".concat(s.toLowerCase()),i+="&segments=".concat(t.toLowerCase()),i+=n?"&dateCreatedFrom=".concat(Object(C.default)(n,"yyyy-MM-dd")):"",i+=r?"&dateCreatedTo=".concat(Object(C.default)(r,"yyyy-MM-dd")):"",i+=l?"&location=".concat(l,":200&sortByDistance=").concat(l):"",i+=!l&&o&&c?"&sortingField=".concat("desc"===o?"-":"").concat(c):""},a.onPageChange=function(){var e=Object(u.a)(d.a.mark(function e(t,n){var r,o,c,l,s,i,m;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.prepareQS(),r+="&limit=".concat(n,"&offset=").concat(n*(t-1)),e.prev=2,e.next=5,fetch("".concat(Q.API_URI,"/organizations?").concat(r));case 5:return o=e.sent,e.next=8,o.json();case 8:c=e.sent,l=c.items,s=c.totalCount,i=l.map(a.parseOrgData),m=a.parseMarkers(l),a.setState({organizationsData:i,markers:m,totalCount:parseInt(s)}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(2),console.log(e.t0);case 19:case"end":return e.stop()}},e,null,[[2,16]])}));return function(t,a){return e.apply(this,arguments)}}(),a.state={inputValue:"",startDate:new Date(2019,0,1),endDate:new Date(Date.now()),selectedDirectory:"HOTELS",selectedEnvironment:"mainnet",organizationsData:[],markers:void 0,totalCount:0},a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=Object(u.a)(d.a.mark(function e(){var t,a,n,r,o,c,l;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=this.prepareQS(),t+="&limit=10&offset=0",e.next=5,fetch("".concat(Q.API_URI,"/organizations?").concat(t));case 5:return a=e.sent,e.next=8,a.json();case 8:n=e.sent,r=n.items,o=n.totalCount,c=r.map(this.parseOrgData),l=this.parseMarkers(r),this.setState({organizationsData:c,markers:l,totalCount:parseInt(o)}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),console.log(e.t0);case 19:case"end":return e.stop()}},e,this,[[0,16]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.startDate,a=e.endDate,n=e.selectedDirectory,o=e.organizationsData,c=e.inputValue,l=e.markers,s=e.selectedEnvironment,i=e.totalCount,m={sortName:this.state.sortName,sortOrder:this.state.sortOrder,onSortChange:this.onSortChange,noDataText:"No data to display",sizePerPage:10,sizePerPageList:[10],pageStartIndex:1,prePage:"Prev",nextPage:"Next",firstPage:"First",lastPage:"Last",paginationShowsTotal:!0,onPageChange:this.onPageChange};return r.a.createElement(r.a.Fragment,null,r.a.createElement(k,null),r.a.createElement(D.Container,{className:"mt-3"},r.a.createElement("h2",{className:"text-center text-uppercase"},"Org.Id explorer")),r.a.createElement(w,{value:c,onChange:this.onInputChange}),r.a.createElement(W,{startDate:t,endDate:a,selectedDirectory:n,onStartDateChange:this.onStartDateChange,onEndDateChange:this.onEndDateChange,onDirectoryChange:this.onDirectoryChange,onApply:this.onApply,onLocationChange:this.onLocationChange,onEnvironmentChange:this.onEnvironmentChange,selectedEnvironment:s}),r.a.createElement(D.Container,{className:"my-1"},r.a.createElement(v.BootstrapTable,{ref:"table",options:m,data:o,version:"4",striped:!0,hover:!0,pagination:!0,fetchInfo:{dataTotalSize:i},remote:!0},r.a.createElement(v.TableHeaderColumn,{dataAlign:"center",isKey:!0,dataFormat:X,width:"470",dataField:"address",key:"address",dataSort:!0},"ORG.ID"),K.map(function(e){var t=e.display,a=e.fieldName;return"address"===a?null:r.a.createElement(v.TableHeaderColumn,{dataAlign:"center",dataField:a,key:a,dataSort:!0,width:"company"===t?"150":"100"},t)}))),r.a.createElement(D.Container,{className:"my-1 min-vh-100 ".concat(Y.a["fixedh-600"])},r.a.createElement(F,{markers:l,zoom:2,center:[0,0]})),r.a.createElement(N,null))}}]),t}(n.Component),$=a(445),ee=a(62),te=a.n(ee),ae=function(e){var t=e.id;return r.a.createElement("div",{className:"align-self-center text-center"},r.a.createElement("h3",null,"ORG.ID ",t," not found"),r.a.createElement("h4",null,"IF you just cretead an new ORG.ID, have in mind that scraping task is scheduled at 2am and 2pm GMT."))},ne=function(e){var t=e.directory,a=e.id,n=e.created,o=e.updated,c=e.environment,l=e.lifDepositValue;if(!n)return r.a.createElement(ae,{id:a});var s=new Date,i=t.split(",");return r.a.createElement("div",{className:"align-self-center text-center"},r.a.createElement("h3",null,"ORG.ID in ",i.map(function(e,t){return t?", ".concat(e):e}),i.length>1?" directories":" directory"),r.a.createElement("h2",{className:"".concat(te.a["dont-break-out"])},a),r.a.createElement("p",null,"Created in ",c," ",Object($.a)(new Date(n),s)," ago, updated ",Object($.a)(new Date(o),s)," ago"),r.a.createElement("h3",null,"L\xedf deposit value: ",l))},re=function(e){var t=e.url;return t?r.a.createElement("a",{href:"".concat(t),className:"btn-link",target:"_blank",rel:"noopener noreferrer"},t):r.a.createElement("p",null,"Website not provided")},oe=function(e){var t=e.orgData,a=e.name,n=t.address,o=t.city,c=t.countryCode,l=t.website,s=t.description;return s?r.a.createElement(D.Container,{className:"my-1"},r.a.createElement("h2",null,s.name),r.a.createElement("p",null,s.address.line1," ",s.address.line2),r.a.createElement("p",null," ",s.address.city," ",s.address.state," ",s.address.countryCode),r.a.createElement(re,{url:"".concat(l)})):r.a.createElement(D.Container,{className:"my-1"},r.a.createElement("h2",null,a),n||o||c?r.a.createElement("p",null,n," ",o," ",c):r.a.createElement("p",null,"Address not provided"),r.a.createElement(re,{url:l}))},ce=a(207),le=function(e){var t=e.name,a=e.address,n=a.city,o=a.countryCode,c=a.houseNumber,l=a.road,s=e.contact,i=e.id,m=e.environment;return r.a.createElement(D.Container,{className:"mt-2"},r.a.createElement("h2",null,"Owner"),r.a.createElement("p",null,t),r.a.createElement("p",null,l," ",c," ",n," ",o),i?r.a.createElement("p",null,r.a.createElement("a",{href:"https://".concat("madrid"===m?"ropsten.":"","etherscan.io/address/").concat(i),className:"btn-link ".concat(te.a["dont-break-out"]),target:"_blank",rel:"noopener noreferrer"},i)):null,Object.entries(s).map(function(e){var t=Object(ce.a)(e,2),a=t[0],n=t[1];return r.a.createElement("p",{key:a},r.a.createElement("strong",null,a,": ")," ",n)}))},se=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(g.a)(this,Object(E.a)(t).call(this,e))).parseMarker=function(e,t,a,n){var r=e&&(e.location||e.description&&e.description.location)||t&&a&&{latitude:t,longitude:a};if(!r)return null;var o={};return o.position=[r.latitude,r.longitude],o.name=e&&(e.description&&e.description.name||e.name)||n||"Name not provided",o},a.onInputChange=function(e){a.setState({inputValue:e.target.value})},a.onInputClick=Object(u.a)(d.a.mark(function e(){var t;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=a.state.inputValue,a.fetchData(t);case 2:case"end":return e.stop()}},e)})),a.fetchData=function(){var e=Object(u.a)(d.a.mark(function e(t){var n,r,o,c,l,s,i,m,u,p,h,g,E,f,v;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(Q.API_URI,"/organizations/").concat(t));case 3:if(404!==(n=e.sent).status){e.next=6;break}return e.abrupt("return");case 6:return e.next=8,n.json();case 8:r=e.sent,o=r.segments,c=r.dateCreated,l=r.dateUpdated,s=r.orgJsonContent,i=r.owner,m=r.name,u=r.environment,p=r.lifDepositValue,h=s.hotel,g=s.legalEntity,E=s.airline,f=h||E,v=a.parseMarker(f),a.setState({markers:[v],environment:u,segments:o,dateCreated:c,dateUpdated:l,orgData:f,legalEntity:g,owner:i,name:m,lifDepositValue:p}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),console.log(e.t0);case 19:case"end":return e.stop()}},e,null,[[0,16]])}));return function(t){return e.apply(this,arguments)}}(),a.state={inputValue:""},a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=Object(u.a)(d.a.mark(function e(){var t;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=this.props.match.params.id,this.fetchData(t);case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.orgData,a=e.legalEntity,n=e.segments,o=e.dateCreated,c=e.dateUpdated,l=e.inputValue,s=e.owner,i=e.name,m=e.environment,d=e.markers,u=e.lifDepositValue,p=this.props.match.params.id;return console.log(m),r.a.createElement(r.a.Fragment,null,r.a.createElement(k,null),r.a.createElement(D.Container,{className:"mt-3"},r.a.createElement("h2",{className:"text-center text-uppercase"},"Org.Id explorer")),r.a.createElement(w,{value:l,onChange:this.onInputChange,onClick:this.onInputClick}),r.a.createElement(D.Container,{className:"my-1"},r.a.createElement(D.Row,{className:"align-self-center"},r.a.createElement(D.Col,{className:"align-self-center"},r.a.createElement(ne,{directory:n,id:p,created:o,updated:c,environment:m,lifDepositValue:u}))),o?r.a.createElement(D.Row,{className:"my-1"},r.a.createElement(D.Col,{md:6,sm:12},t?r.a.createElement(oe,{orgData:t,name:i}):null,a?r.a.createElement(le,{name:a.name,address:a.address,city:a.city,countryCode:a.countryCode,contact:a.contact,id:s,environment:m}):null),r.a.createElement(D.Col,{md:6,sm:12,className:"".concat(te.a["fixedh-600"])},r.a.createElement(F,{markers:d,center:d[0]?d[0].position:[0,0]}))):null),r.a.createElement(N,null))}}]),t}(n.Component),ie=function(){return r.a.createElement("main",{id:"app-content",className:"content-error bg-grad-up",style:{height:"100vh"}},r.a.createElement("article",{className:"app-section d-flex align-items-center"},r.a.createElement(D.Container,null,r.a.createElement("div",{className:"py-1 py-md-5 text-center"},r.a.createElement("h1",{className:"mb-1 text-white"},"Oops... 404"),r.a.createElement("p",{className:"mb-2 lead text-white"},"That is not the page you are looking for."),r.a.createElement(b.LinkContainer,{to:"/"},r.a.createElement(D.Button,{variant:"primary"},"Go to main"))))))},me=function(){return r.a.createElement(i.g,null,r.a.createElement(i.d,{path:["/orgid/:id"],component:se}),r.a.createElement(i.c,{exact:!0,from:"/orgid",to:"/"}),r.a.createElement(i.d,{path:"/",exact:!0,component:Z}),r.a.createElement(i.d,{component:ie}))};a(435),a(436);!function(e){c.a.render;(0,c.a.hydrate)(r.a.createElement(s.AppContainer,null,r.a.createElement(l.HashRouter,null,r.a.createElement(e,null))),document.getElementById("root"))}(me,document.getElementById("root"))},62:function(e,t,a){e.exports={"fixedh-600":"styles_fixedh-600__BjP2v","dont-break-out":"styles_dont-break-out__2bCw2"}}},[[209,1,2]]]);
//# sourceMappingURL=main.e8222a78.chunk.js.map