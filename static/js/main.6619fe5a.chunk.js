(this.webpackJsonpsmart_dropdown_search=this.webpackJsonpsmart_dropdown_search||[]).push([[0],{42:function(e,t,n){e.exports=n(73)},54:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),s=n(11),c=n.n(s),o=n(18),i=(n(52),n(53),n(54),n(6)),u=n.n(i),l=n(9),p=n(16),d=n(17),y=n(20),f=n(19),h="GET_COUNTRY_LIST",m="SET_COUNTRY_LIST",v="ADD_NEW_COUNTRY",b="ADD_COUNTRY",O=n(21),C=n(26);var _=function(e){return a.a.createElement(O.a,{defaultActiveKey:"0"},a.a.createElement(C.a,null,a.a.createElement(O.a.Toggle,{eventKey:"0"},e.title,a.a.createElement("i",{className:"fa fa-angle-down"})),a.a.createElement(O.a.Collapse,{eventKey:"0"},a.a.createElement(C.a.Body,null,e.children))))},g=n(41);function j(e,t){var n,r=[],a=Object(g.a)(e);try{for(a.s();!(n=a.n()).done;){var s=n.value;s.indexOf(t)>-1&&r.push(s)}}catch(c){a.e(c)}finally{a.f()}return r}var w=function(e){Object(y.a)(n,e);var t=Object(f.a)(n);function n(e){var r;return Object(p.a)(this,n),(r=t.call(this,e)).searchCountry=function(){var e=Object(l.a)(u.a.mark((function e(t){var n,a,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.setState({CountryInput:t});case 2:n=r.props.countryList,a=r.state.CountryInput,s=j(n,a),r.setState({displayCountryList:s});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r.increaseDispLimit=function(){var e=r.state.displayLimit+r.props.noOfItems;r.setState({displayLimit:e})},r.fnAddCountry=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.state.CountryInput,e.next=3,r.setState({disableAddBtn:!0});case 3:r.props.addAndSelectHandler(t,"Add");case 4:case"end":return e.stop()}}),e)}))),r.state={CountryInput:"",displayCountryList:r.props.countryList,displayLimit:r.props.noOfItems,disableAddBtn:!1},r}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.searchField.focus()}},{key:"componentDidUpdate",value:function(){var e=Object(l.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.countryList===this.props.countryList){e.next=5;break}if(!this.props.countryList){e.next=5;break}return e.next=4,this.setState({displayCountryList:this.props.countryList,disableAddBtn:!1});case 4:this.searchCountry(this.state.CountryInput);case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,n=t.CountryInput,r=t.displayCountryList,s=t.displayLimit,c=t.disableAddBtn,o=this.props,i=o.noOfItems,u=o.privilidge,l=o.addAndSelectHandler;return a.a.createElement("div",{className:"smart-search"},a.a.createElement(_,{title:"Select a location"},a.a.createElement("i",{className:"fa fa-search","aria-hidden":"true"}),a.a.createElement("input",{type:"text",value:n,onChange:function(t){return e.searchCountry(t.target.value)},ref:function(t){return e.searchField=t}}),a.a.createElement("div",{className:"search-result"},r.slice(0,s).map((function(e,t){return a.a.createElement("li",{key:t,onClick:function(){return l(e,"Select")}},e)})),r.length>s&&a.a.createElement("p",{onClick:this.increaseDispLimit},"".concat(i," more...")),0===r.length&&""!==n&&a.a.createElement("li",{className:"mt-1",disabled:!0},'"'.concat(n,'" not found'),u&&a.a.createElement("button",{className:"add-select",onClick:this.fnAddCountry,disabled:c},"Add & select")))))}}]),n}(r.Component),E=function(e){Object(y.a)(n,e);var t=Object(f.a)(n);function n(e){var r;return Object(p.a)(this,n),(r=t.call(this,e)).addAndSelectHandler=function(){var e=Object(l.a)(u.a.mark((function e(t,n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"Add"===n?r.props.addnewCountry(t):"Select"===n&&r.setState({selectedCountry:t});case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),r.fnAddCountryHandler=function(e){if(500===e.status)return alert("Adding duplicate coutnries are not allowed !!!"),!1;alert("Added Successfully !!!"),r.props.getCountryList()},r.changeUser=function(e){var t="admin"===e;r.setState({loggedInAs:e,privilidge:t})},r.state={countryList:[],selectedCountry:"",privilidge:!0,noOfItems:5,loggedInAs:"admin"},r}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.props.getCountryList()}},{key:"componentDidUpdate",value:function(){var e=Object(l.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.county_list!==this.props.county_list&&this.props.county_list&&this.setState({countryList:this.props.county_list}),t.add_country_response!==this.props.add_country_response&&this.props.add_country_response&&this.fnAddCountryHandler(this.props.add_country_response);case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,n=t.countryList,r=t.selectedCountry,s=t.privilidge,c=t.noOfItems,o=t.loggedInAs;return a.a.createElement("div",{className:"App"},a.a.createElement("div",{className:"loginSection"},"Logged In As :",a.a.createElement("p",{className:"admin"===o?"active":"",onClick:function(){return e.changeUser("admin")}},"Admin"),"|",a.a.createElement("p",{className:"user"===o?"active":"",onClick:function(){return e.changeUser("user")}},"User")),a.a.createElement(w,{countryList:n,privilidge:s,noOfItems:c,addAndSelectHandler:this.addAndSelectHandler}),a.a.createElement("br",null),a.a.createElement("p",null,"Selected Country : ".concat(r)))}}]),n}(r.Component),k=Object(o.b)((function(e){return{county_list:e.countryReducer.county_list,add_country_response:e.countryReducer.add_country_response}}),(function(e){return{getCountryList:function(){return e({type:h})},addnewCountry:function(t){return e({type:v,payload:t})}}}))(E),x=n(10),A=n(40),L=n(38),S=n(14),I={county_list:"",add_country_response:""},N=Object(x.combineReducers)({countryReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return e=Object(S.a)(Object(S.a)({},e),{},{county_list:t.payload});case b:return e=Object(S.a)(Object(S.a)({},e),{},{add_country_response:t.payload});default:return e}}}),D=n(13),T=n(39),U=n.n(T).a.create({baseURL:"http://13.57.235.126:5000/",responseType:"json"});function R(e,t){return H.apply(this,arguments)}function H(){return(H=Object(l.a)(u.a.mark((function e(t,n){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,U.get(t+n);case 3:return r=e.sent,e.abrupt("return",r);case 7:e.prev=7,e.t0=e.catch(0),alert("Internal Server Error. Please try again later.");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}var B=u.a.mark(J);function Y(){return K.apply(this,arguments)}function K(){return(K=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R("countries","");case 2:if(t=e.sent){e.next=5;break}return e.abrupt("return",!1);case 5:if(200===t.status){e.next=8;break}return alert("Internal Server Error. Please try again later."),e.abrupt("return",!1);case 8:Q.dispatch({type:m,payload:t.data.countries});case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function M(e){return F.apply(this,arguments)}function F(){return(F=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R("/addcountry?name=",t.payload);case 2:if(n=e.sent){e.next=5;break}return e.abrupt("return",!1);case 5:Q.dispatch({type:b,payload:n});case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function J(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(D.b)(h,Y);case 2:return e.next=4,Object(D.b)(v,M);case 4:case"end":return e.stop()}}),B)}var P=u.a.mark(W);function W(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(D.a)([J()]);case 2:case"end":return e.stop()}}),P)}var G=Object(A.a)(),q=Object(L.composeWithDevTools)(Object(x.applyMiddleware)(G)),z=Object(x.createStore)(N,{},q);G.run(W);var Q=z;c.a.render(a.a.createElement(o.a,{store:Q},a.a.createElement(k,null)),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.6619fe5a.chunk.js.map