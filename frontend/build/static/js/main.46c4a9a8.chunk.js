(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,n){},31:function(e,t,n){e.exports=n(55)},36:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(14),s=(n(36),n(26)),i=n(11),c=n(2),o=n.n(c),u=n(12),l=n(21),d=n(10),h=n(28),p=n(29),m=window;function f(e,t){return k(e,{method:"POST",body:JSON.stringify(t)})}function k(e,t){return t||(t={}),t.headers||(t.headers=new Headers),t.headers=h.assign({"Content-type":"application/json; charset=UTF-8",Accept:"application/json"},t.headers),fetch(e,t).then(function(e){return e.ok?e:400===e.status?e.json().then(function(e){return Promise.reject(e)}):404===e.status?Promise.reject({message:"Object not found",exceptionName:"",statusCode:404}):403===e.status?Promise.reject({message:"Access is denied",exceptionName:"",statusCode:403}):401===e.status?Promise.reject({message:"User is not authenticated",exceptionName:"",statusCode:401}):Promise.reject({message:"Unknown network error",exceptionName:"",statusCode:e.status})}).catch(function(e){if(401===e.statusCode)window.location.replace("#/logout");else if(403===e.statusCode)window.location.replace("#/");else{var t=m.applicationStore;t&&t.dispatch((n=e.message,p.error({title:"An error occurred on the server",message:n,position:"tr",autoDismiss:0})))}var n;return Promise.reject(e)})}var b={taskList:[]};function C(){return(C=Object(u.a)(o.a.mark(function e(t){var n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f("/addTask",t);case 2:return n=e.sent,e.next=5,n.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}},e)}))).apply(this,arguments)}function v(e){return w.apply(this,arguments)}function w(){return(w=Object(u.a)(o.a.mark(function e(t){var n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f("/editTask",t);case 2:return n=e.sent,e.next=5,n.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}},e)}))).apply(this,arguments)}function E(){return j.apply(this,arguments)}function j(){return(j=Object(u.a)(o.a.mark(function e(){var t;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k("/api/rest");case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}},e)}))).apply(this,arguments)}var O=n(4),S=n(5),g=n(7),N=n(6),T=n(8),L=n(9),y=(n(23),function(e){function t(e){var n;return Object(O.a)(this,t),(n=Object(g.a)(this,Object(N.a)(t).call(this,e))).handlerDescChange=function(e){n.setState({desc:e})},n.handlerSubmitEditClick=function(e,t){n.setState({editTask:!1}),n.props.handlerSubmitEditClick(e,t)},n.handlerCancelEditClick=function(){n.setState({editTask:!1})},n.state={desc:n.props.desc,editTask:!1},n}return Object(T.a)(t,e),Object(S.a)(t,[{key:"render",value:function(){var e=this;return a.createElement("div",{className:"row"},this.state.editTask?a.createElement("div",{className:"edit-row"},a.createElement("input",{value:this.state.desc,onChange:function(t){return e.handlerDescChange(t.target.value)}}),a.createElement("button",{onClick:function(){return e.handlerSubmitEditClick(e.props.id,e.state.desc)}},"Submit"),a.createElement("button",{onClick:this.handlerCancelEditClick},"Cancel")):a.createElement("div",null,a.createElement("span",null,this.props.desc),this.props.done&&a.createElement("span",null," - OK "),!this.props.done&&a.createElement("span",null,a.createElement("button",{onClick:function(){return e.setState({editTask:!0,desc:e.props.desc})}},"Edit"),a.createElement("button",{onClick:function(){return e.props.handlerDoneClick(e.props.id)}},"Done"))))}}]),t}(a.Component)),D=function(e){function t(e){var n;return Object(O.a)(this,t),(n=Object(g.a)(this,Object(N.a)(t).call(this,e))).handlerDescChange=function(e){n.setState({desc:e})},n.state={desc:""},n}return Object(T.a)(t,e),Object(S.a)(t,[{key:"render",value:function(){var e=this;return a.createElement("div",{className:"edit-row"},a.createElement("input",{value:this.state.desc,onChange:function(t){return e.handlerDescChange(t.target.value)}}),a.createElement("button",{onClick:function(){return e.props.handlerSubmitCreationClick(e.state.desc)}},"Create"),a.createElement("button",{onClick:this.props.handlerCancelCreationClick},"Cancel"))}}]),t}(a.Component),x=function(e){function t(e){var n;return Object(O.a)(this,t),(n=Object(g.a)(this,Object(N.a)(t).call(this,e))).showNewRow=function(){n.setState({showNewRow:!0})},n.hideNewRow=function(){n.setState({showNewRow:!1})},n.handleCancelCreation=function(){n.hideNewRow()},n.handleSubmitCreation=function(e){n.hideNewRow(),n.props.handlerSubmitCreationClick(e)},n.state={showNewRow:!1},n}return Object(T.a)(t,e),Object(S.a)(t,[{key:"render",value:function(){var e=this;return a.createElement("div",{className:"task-list"},a.createElement("button",{className:"btn add-new-task",onClick:this.showNewRow},a.createElement("span",{className:"glyphicon glyphicon-plus"}),"Add new task"),a.createElement("div",{className:"task-list list"},this.state.showNewRow&&a.createElement(D,{handlerSubmitCreationClick:this.handleSubmitCreation,handlerCancelCreationClick:this.handleCancelCreation}),a.createElement("span",{className:"task-list list element"},this.props.taskList.map(function(t,n){return a.createElement(y,{key:n,desc:t.desc,done:t.done,id:t.id,handlerSubmitEditClick:e.props.handlerSubmitEditClick,handlerDoneClick:e.props.handlerDoneClick})}))))}}]),t}(a.Component);var I=Object(L.connect)(function(e){return{taskList:e.taskList.taskList}})(x),A=n(30),R=n.n(A),_=function(e){function t(e){var n;return Object(O.a)(this,t),(n=Object(g.a)(this,Object(N.a)(t).call(this,e))).handleSubmitCreation=function(e){!function(e){C.apply(this,arguments)}({id:R()(),done:!1,creationDateAndTime:"",creationTimestamp:"",desc:e})},n.handleSubmitEdition=function(e,t){var a=n.props.taskList.find(function(t){return t.id===e});a&&v(Object(d.a)({},a,{desc:t}))},n.handleDone=function(e){var t=n.props.taskList.find(function(t){return t.id===e});t&&v(Object(d.a)({},t,{done:!0}))},n.state={task:E.length},n}return Object(T.a)(t,e),Object(S.a)(t,[{key:"render",value:function(){return alert(this.state.task),a.createElement("div",{className:"task-list-component"},a.createElement(I,{handlerSubmitCreationClick:this.handleSubmitCreation,handlerSubmitEditClick:this.handleSubmitEdition,handlerDoneClick:this.handleDone}))}}]),t}(a.Component);var K=Object(L.connect)(function(e){return{taskList:e.taskList.taskList}},function(e){return{submitEdition:function(t){return e(function(e){return{type:"TASK_LIST/SUBMIT_EDITION",value:{value:e}}}(t))},makeDone:function(t){return e(function(e){return{type:"TASK_LIST/MAKE_DONE",value:{value:e}}}(t))}}})(_);n.d(t,"initialState",function(){return U});var P=Object(i.combineReducers)({taskList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TASK_LIST/SUBMIT_CREATION":return Object(d.a)({},e,{taskList:e.taskList.concat(t.value.value)});case"TASK_LIST/MAKE_DONE":case"TASK_LIST/SUBMIT_EDITION":return Object(d.a)({},e,{taskList:Object(l.a)(t.value.value)});default:return e}}}),U={taskList:b},M=Object(i.createStore)(P,Object(s.composeWithDevTools)());r.render(a.createElement(L.Provider,{store:M},a.createElement(K,null)),document.getElementById("root")),"serviceWorker"in navigator&&window.addEventListener("load",function(){var e="".concat("","/service-worker.js");navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))})}}).catch(function(e){console.error("Error during service worker registration:",e)})})}},[[31,1,2]]]);
//# sourceMappingURL=main.46c4a9a8.chunk.js.map