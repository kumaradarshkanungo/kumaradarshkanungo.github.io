(this.webpackJsonpsmart_dropdown_search=this.webpackJsonpsmart_dropdown_search||[]).push([[0],{27:function(e,t,n){e.exports=n(56)},34:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(7),c=n.n(s),i=(n(32),n(33),n(34),n(5)),o=n.n(i),l=n(8),u=n(9),d=n(10),p=n(12),m=n(11),f=n(13),y=n(15);var h=function(e){return r.a.createElement(f.a,{defaultActiveKey:"0"},r.a.createElement(y.a,null,r.a.createElement(f.a.Toggle,{eventKey:"0"},e.title,r.a.createElement("i",{className:"fa fa-angle-down"})),r.a.createElement(f.a.Collapse,{eventKey:"0"},r.a.createElement(y.a.Body,null,e.children))))},v=n(26);function g(e,t){var n,a=[],r=Object(v.a)(e);try{for(r.s();!(n=r.n()).done;){var s=n.value;s.indexOf(t)>-1&&a.push(s)}}catch(c){r.e(c)}finally{r.f()}return a}var b=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).searchCountry=function(){var e=Object(l.a)(o.a.mark((function e(t){var n,r,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.setState({CountryInput:t});case 2:n=a.props.countryList,r=a.state.CountryInput,s=g(n,r),a.setState({displayCountryList:s});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.increaseDispLimit=function(){var e=a.state.displayLimit+a.props.noOfItems;a.setState({displayLimit:e})},a.fnAddCountry=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.state.CountryInput,e.next=3,a.setState({disableAddBtn:!0});case 3:a.props.addAndSelectHandler(t,"Add");case 4:case"end":return e.stop()}}),e)}))),a.state={CountryInput:"",displayCountryList:a.props.countryList,displayLimit:a.props.noOfItems,disableAddBtn:!1},a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.searchField.focus()}},{key:"componentDidUpdate",value:function(e){e.countryList!==this.props.countryList&&this.props.countryList&&this.setState({countryList:this.props.countryList})}},{key:"render",value:function(){var e=this,t=this.state,n=t.CountryInput,a=t.displayCountryList,s=t.displayLimit,c=t.disableAddBtn,i=this.props,o=i.noOfItems,l=i.privilidge,u=i.addAndSelectHandler;return r.a.createElement("div",{className:"smart-search"},r.a.createElement(h,{title:"Select a location"},r.a.createElement("i",{className:"fa fa-search","aria-hidden":"true"}),r.a.createElement("input",{type:"text",value:n,onChange:function(t){return e.searchCountry(t.target.value)},ref:function(t){return e.searchField=t}}),r.a.createElement("div",{className:"search-result"},a.slice(0,s).map((function(e,t){return r.a.createElement("li",{key:t,onClick:function(){return u(e,"Select")}},e)})),a.length>s&&r.a.createElement("p",{onClick:this.increaseDispLimit},"".concat(o," more...")),0===a.length&&r.a.createElement("li",{className:"mt-1",disabled:!0},'"'.concat(n,'" not found'),l&&r.a.createElement("button",{className:"add-select",onClick:this.fnAddCountry,disabled:c},"Add & select")))))}}]),n}(a.Component),C=n(25),E=n.n(C).a.create({baseURL:"http://13.57.235.126:5000/",responseType:"json"}),L=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).fnGetCountryList=Object(l.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.get("/countries");case 3:if(200===(t=e.sent).status){e.next=7;break}return alert("something went wrong! Please try again later."),e.abrupt("return",!1);case 7:n=t.data.countries,a.setState({countryList:n,loading:!1}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),alert("something went wrong! Please try again later.");case 14:case"end":return e.stop()}}),e,null,[[0,11]])}))),a.addAndSelectHandler=function(){var e=Object(l.a)(o.a.mark((function e(t,n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("Add"!==n){e.next=19;break}return e.prev=1,e.next=4,E.get("/addcountry?name=".concat(t));case 4:if(200===e.sent.status){e.next=8;break}return alert("something went wrong! Please try again later."),e.abrupt("return",!1);case 8:return alert("Added Successfully !!!"),e.next=11,a.setState({loading:!0});case 11:a.fnGetCountryList(),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),500===e.t0.response.status&&alert("You are not allowed to add duplicate!!");case 17:e.next=20;break;case 19:"Select"===n&&a.setState({selectedCountry:t});case 20:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t,n){return e.apply(this,arguments)}}(),a.changeUser=function(e){var t="admin"===e;a.setState({loggedInAs:e,privilidge:t})},a.state={loading:!0,countryList:[],selectedCountry:"",privilidge:!0,noOfItems:5,loggedInAs:"admin"},a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.fnGetCountryList()}},{key:"render",value:function(){var e=this,t=this.state,n=t.loading,a=t.countryList,s=t.selectedCountry,c=t.privilidge,i=t.noOfItems,o=t.loggedInAs;return n?"":r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"loginSection"},"Logged In As :",r.a.createElement("p",{className:"admin"===o?"active":"",onClick:function(){return e.changeUser("admin")}},"Admin"),"|",r.a.createElement("p",{className:"user"===o?"active":"",onClick:function(){return e.changeUser("user")}},"User")),r.a.createElement(b,{countryList:a,privilidge:c,noOfItems:i,addAndSelectHandler:this.addAndSelectHandler}),r.a.createElement("br",null),r.a.createElement("p",null,"Selected Country : ".concat(s)))}}]),n}(a.Component);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(L,null)),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.fb6375b8.chunk.js.map