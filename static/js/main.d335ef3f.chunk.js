(this["webpackJsonpmy-app-1"]=this["webpackJsonpmy-app-1"]||[]).push([[0],{100:function(e,t,a){e.exports={description:"ProfileInfo_description__1bTWa"}},136:function(e,t,a){e.exports=a.p+"static/media/kuscherenko.7bc7e317.jpg"},137:function(e,t,a){e.exports=a.p+"static/media/lyubov.fc2a1a49.jpg"},139:function(e,t,a){e.exports={message:"Message_message__xSb92"}},14:function(e,t,a){e.exports={nav:"Navbar_nav__kBj7q",item:"Navbar_item__3Pa_F",active:"Navbar_active__28OkF",friendsNav:"Navbar_friendsNav__2q2DP"}},141:function(e,t,a){e.exports=a.p+"static/media/preloader.c04e3ad7.svg"},142:function(e,t,a){e.exports={item:"Post_item__2DfE4"}},143:function(e,t,a){},144:function(e,t,a){e.exports=a.p+"static/media/sad.f356e41d.png"},145:function(e,t,a){e.exports=a.p+"static/media/happy.ed41fce9.png"},146:function(e,t,a){e.exports=a.p+"static/media/logo2.623bb4d9.jpg"},173:function(e,t,a){e.exports=a(303)},178:function(e,t,a){},179:function(e,t,a){},180:function(e,t,a){},181:function(e,t,a){},182:function(e,t,a){},187:function(e,t,a){"use strict";a.r(t),a.d(t,"instance",(function(){return r}));var n=a(138),r=n.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"ebd28442-c10f-47c7-b19b-27d6fc3e2b96"}})},26:function(e,t,a){e.exports={userItem:"User_userItem__4zQnk",avatar:"User_avatar__39gSA",lastMessage:"User_lastMessage__1hlgj",name:"User_name__2R3Cl",off:"User_off__XjvUl",on:"User_on__1XQfw",country:"User_country__2T7Tr",stars:"User_stars__3aZm4"}},29:function(e,t,a){e.exports={editionVersion:"ProfileStatus_editionVersion__24wI_",status:"ProfileStatus_status__U12ae",readyStatus:"ProfileStatus_readyStatus__3n5bf"}},303:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(67),o=a.n(s),c=(a(178),a(20)),i=a(21),u=a(23),l=a(22),m=a(11),p=(a(179),a(180),function(){return r.a.createElement("div",null,"News")}),d=(a(181),function(){return r.a.createElement("div",null,"Music")}),f=(a(182),function(){return r.a.createElement("div",null,"Settings")}),g=a(9),v=a(37),h=a(4),E=a(70),b=a.n(E),_=a(136),O=a.n(_),j=a(137),w=a.n(j),N={messagesData:[{id:1,message:"\u0437\u043b\u0442\u0449\u043e\u0442\u043e\u0442\u043e\u043b\u0438\u043e\u043b\u0438\u0433"},{id:2,message:"Hello"},{id:3,message:"Privet"},{id:4,message:"Au revoir"}],dialogsUsersData:[{id:1,name:"Zorro",ava:b.a},{id:2,name:"Lyubov",ava:w.a},{id:3,name:"Kuscherenko",ava:O.a}]},y=5,P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-MESSAGE-STATE":return y++,Object(h.a)(Object(h.a)({},e),{},{messagesData:[].concat(Object(v.a)(e.messagesData),[{id:y,message:t.newMessageText}])});default:return e}},x=a(10),S=a(132),k=a(133),C=a(8),I=a.n(C),F=a(15),M=a(43),D=a(187).instance,T=function(e,t){return D.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},A=function(e,t){return D.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},L=function(e){return D.delete("follow/".concat(e)).then((function(e){return e.data}))},U=function(e){return D.post("follow/".concat(e)).then((function(e){return e.data}))},z=function(){return D.get("auth/me").then((function(e){return e.data}))},G=function(e){return D.post("auth/login",{email:e.login,password:e.password,rememberMe:e.checkbox}).then((function(e){return e.data}))},R=function(){return D.delete("auth/login").then((function(e){return e.data}))},H=function(e){return D.get("profile/".concat(e)).then((function(e){return e.data}))},B=function(e){return D.put("/profile/status",{status:e}).then((function(e){return e.data}))},W=function(e){return D.get("/profile/status/".concat(e)).then((function(e){return e.data}))},Z=function(e){return{type:"SET-USER-DATA",data:{id:e.id,login:e.login,email:e.email,isAuthMe:e.isAuthMe}}},Y=function(e){return{type:"IS-AUTH-ME",isAuthMe:e}},q={id:null,login:null,email:null,isAuthMe:!1,checkbox:!1},J=function(){return function(){var e=Object(F.a)(I.a.mark((function e(t){var a;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z();case 2:a=e.sent,t(Z(Object(h.a)({},a.data))),0===a.resultCode&&t(Y(!0));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-USER-DATA":return Object(h.a)(Object(h.a)({},e),t.data);case"IS-AUTH-ME":return Object(h.a)(Object(h.a)({},e),{},{isAuthMe:t.isAuthMe});case"LOG-AND-PASSWORD":return Object(h.a)(Object(h.a)({},e),{},{userId:t.id});default:return e}},V=a(101),Q=a(39),X=a.n(Q),$=function(e){var t=e.input,a=e.meta,n=Object(V.a)(e,["input","meta"]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:a.error&&a.visited&&!a.active&&X.a.error},r.a.createElement("textarea",Object.assign({},t,{placeholder:n.placeholder}))),r.a.createElement("span",{className:X.a.messageError},a.visited&&!a.active&&a.error))},ee=function(e){var t=e.input,a=e.meta,n=Object(V.a)(e,["input","meta"]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:a.error&&a.visited&&!a.active&&X.a.error},r.a.createElement("input",Object.assign({},t,{placeholder:n.placeholder}))),r.a.createElement("span",{className:X.a.messageError},a.visited&&!a.active&&a.error))},te=function(e){return e?void 0:"Field is required"},ae=function(e){return function(t){return t&&t.length<e?void 0:"".concat(e," is reached")}},ne=function(e){return function(t){Object(u.a)(n,t);var a=Object(l.a)(n);function n(){return Object(c.a)(this,n),a.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return this.props.isAuthMe?r.a.createElement(e,this.props):r.a.createElement(m.a,{to:"/login"})}}]),n}(r.a.Component)},re=a(12),se=a(72),oe=a.n(se),ce=function(e){var t="/dialogs/"+e.id;return r.a.createElement("div",{className:oe.a.dialog},r.a.createElement("span",null," ",r.a.createElement("img",{className:oe.a.avatar,src:e.avatar,alt:"ava"})," "),r.a.createElement(re.b,{to:t,activeClassName:oe.a.active},"  ",e.name," "))},ie=a(58),ue=a.n(ie),le=a(139),me=a.n(le),pe=function(e){return r.a.createElement("div",{className:me.a.message},e.message)},de=ae(10),fe=Object(k.a)({form:"sendMessage"})((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement(S.a,{name:"newMessageText",type:"text",validate:[te,de],component:ee}),r.a.createElement("button",{type:"submit",className:ue.a.sendMessage},"send")))})),ge=Object(x.compose)(Object(g.b)((function(e){return{isAuthMe:e.authMe.isAuthMe}}),{authMeSuccess:J}),ne)((function(e){var t=e.dialogsGenerate.map((function(e){return r.a.createElement(ce,{key:e.id,name:e.name,id:e.id,avatar:e.ava})})),a=e.messagesGenerate.map((function(e){return r.a.createElement(pe,{key:e.id,message:e.message})}));return r.a.createElement("div",{className:ue.a.dialogs},r.a.createElement("div",{className:ue.a.dialogsItems},t),r.a.createElement("div",{className:ue.a.messages},a),r.a.createElement(fe,{onSubmit:function(t){e.sendMessage(t.newMessageText)}}))})),ve=Object(g.b)((function(e){return{dialogsGenerate:e.messagesPage.dialogsUsersData,messagesGenerate:e.messagesPage.messagesData}}),{sendMessage:function(e){return{type:"ADD-MESSAGE-STATE",newMessageText:e}}})(ge),he=a(74),Ee=a.n(he),be=function(e){return r.a.createElement("div",{className:Ee.a.friend},r.a.createElement("div",{className:Ee.a.avatar}),r.a.createElement("div",{className:Ee.a.name},e.name))},_e=a(14),Oe=a.n(_e),je=function(e){var t=e.friendsListComp.map((function(e){return r.a.createElement(be,{key:e.id,id:e.id,name:e.name})}));return r.a.createElement("nav",{className:Oe.a.nav},r.a.createElement("div",{className:Oe.a.item},r.a.createElement(re.b,{to:"/profile",activeClassName:Oe.a.active},"Profile")),r.a.createElement("div",{className:Oe.a.item},r.a.createElement(re.b,{to:"/dialogs",activeClassName:Oe.a.active},"Messages")),r.a.createElement("div",{className:Oe.a.item},r.a.createElement(re.b,{to:"/news",activeClassName:Oe.a.active},"News")),r.a.createElement("div",{className:Oe.a.item},r.a.createElement(re.b,{to:"/music",activeClassName:Oe.a.active},"Music")),r.a.createElement("div",{className:Oe.a.item},r.a.createElement(re.b,{to:"/settings",activeClassName:Oe.a.active},"Settings")),r.a.createElement("div",{className:Oe.a.item}," ",r.a.createElement(re.b,{to:"/users",activeClassName:Oe.a.active},"Users")),r.a.createElement("div",{className:Oe.a.friendsList}," ",r.a.createElement("h3",{className:Oe.a.friendsNav},"FRIENDS")," ",t," "))},we=Object(g.b)((function(e){return{friendsListComp:e.sideBar.friendsList}}),{})(je),Ne="SETUSERS",ye=function(e){return{type:Ne,usersData:e}},Pe=function(e){return{type:"TOGGLEIF",isFetching:e}},xe=function(e,t){return{type:"FOLISFETCH",followingTF:e,userId:t}},Se={usersData:[],currentPage:1,pageSize:90,totalCount:10,isFetching:!1,followingInProgress:[]},ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(h.a)(Object(h.a)({},e),{},{usersData:e.usersData.map((function(e){return e.id===t.id?Object(h.a)(Object(h.a)({},e),{},{followed:!0}):e}))});case"UNFOLLOW":return Object(h.a)(Object(h.a)({},e),{},{usersData:e.usersData.map((function(e){return e.id===t.id?Object(h.a)(Object(h.a)({},e),{},{followed:!1}):e}))});case Ne:return Object(h.a)(Object(h.a)({},e),{},{usersData:Object(v.a)(t.usersData)});case"CURPAGE":return Object(h.a)(Object(h.a)({},e),{},{currentPage:t.currentPage});case"TOTALCOUNT":return Object(h.a)(Object(h.a)({},e),{},{totalCount:t.totalCount});case"TOGGLEIF":return Object(h.a)(Object(h.a)({},e),{},{isFetching:t.isFetching});case"FOLISFETCH":var a=Object(h.a)(Object(h.a)({},e),{},{followingInProgress:Object(v.a)(e.followingInProgress)});return t.followingTF?a.followingInProgress.push(t.userId):a.followingInProgress=a.followingInProgress.filter((function(e){return e!==t.userId})),a;default:return e}},Ce=a(26),Ie=a.n(Ce),Fe=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:Ie.a.userItem},r.a.createElement(re.b,{to:"profile/"+e.user.id},r.a.createElement("img",{className:Ie.a.avatar,src:null!=e.user.photos.small?e.user.photos.small:b.a,alt:"ava"})),r.a.createElement("div",{className:Ie.a.country},e.user.id%3===0?r.a.createElement("div",{className:Ie.a.off},"offline"):r.a.createElement("div",{className:Ie.a.on},"online")),r.a.createElement("div",{className:Ie.a.name},e.user.name),r.a.createElement("div",{className:Ie.a.stars}),r.a.createElement("div",{className:Ie.a.lastMessage},e.user.status?"status: "+e.user.status:"----"),r.a.createElement("div",null,e.user.followed?r.a.createElement("button",{disabled:e.followingInProgress.some((function(t){return t===e.user.id})),onClick:function(){e.doUnfollow(e.user.id)},className:Ie.a.statusFollow},"UNFOLLOW"):r.a.createElement("button",{disabled:e.followingInProgress.some((function(t){return t===e.user.id})),onClick:function(){e.doFollow(e.user.id)},className:Ie.a.statusFollow},"FOLLOW"))))},Me=a(57),De=a.n(Me),Te=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:De.a.usersItem},e.usersGenerate.map((function(t){return r.a.createElement(Fe,{key:t.id,user:t,doFollow:e.doFollow,doUnfollow:e.doUnfollow,followingInProgress:e.followingInProgress,toggleFollowing:e.toggleFollowing})}))))},Ae=a(141),Le=a.n(Ae),Ue=a(97),ze=a.n(Ue),Ge=function(){return r.a.createElement("div",{className:ze.a.divPreloader},r.a.createElement("img",{className:ze.a.preloader,src:Le.a,alt:"preloader"}))},Re=a(40),He=function(e){return e.usersPage},Be=Object(Re.a)(He,(function(e){return e.usersData})),We=Object(Re.a)(He,(function(e){return e.currentPage})),Ze=Object(Re.a)(He,(function(e){return e.totalCount})),Ye=Object(Re.a)(He,(function(e){return e.pageSize})),qe=Object(Re.a)(He,(function(e){return e.isFetching})),Je=Object(Re.a)(He,(function(e){return e.followingInProgress})),Ke=a(38),Ve=a(98),Qe=a.n(Ve),Xe=function(e){for(var t=Math.ceil(e.totalCount/e.pageSize),a=[],s=1;s<=t;s++)a.push(s);var o=Object(n.useState)(1),c=Object(Ke.a)(o,2),i=c[0],u=c[1],l=Math.ceil(t/5),m=5*(i-1)+1,p=5*i;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:Qe.a.pages},i>1&&r.a.createElement("button",{onClick:function(){return u(i-1)}},"minus"),a.filter((function(e){return e>=m&&e<=p})).map((function(t){return r.a.createElement("span",{onClick:function(){e.changeCurPage(t)},className:e.currentPage===t&&Qe.a.pageSelected,key:t},t," ")})),l>i&&r.a.createElement("button",{onClick:function(){return u(i+1)}},"plus")))},$e=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).changeCurPage=function(t){e.props.setCurPage(t,e.props.pageSize)},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.props.setUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:De.a.userPage},"Choose your friends",this.props.isFetching&&r.a.createElement("span",{className:De.a.preloader},r.a.createElement(Ge,null))),r.a.createElement(Xe,Object.assign({},this.props,{changeCurPage:this.changeCurPage})),!this.props.isFetching&&r.a.createElement(Te,Object.assign({},this.props,{isFetching:this.props.isFetching})))}}]),a}(r.a.Component),et=Object(g.b)((function(e){return{usersGenerate:Be(e),currentPage:We(e),totalCount:Ze(e),pageSize:Ye(e),isFetching:qe(e),followingInProgress:Je(e)}}),{doFollow:function(e){return function(){var t=Object(F.a)(I.a.mark((function t(a){return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(xe(!0,e)),t.next=3,U(e);case 3:0===t.sent.resultCode&&a({type:"FOLLOW",id:e}),a(xe(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},doUnfollow:function(e){return function(){var t=Object(F.a)(I.a.mark((function t(a){return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(xe(!0,e)),t.next=3,L(e);case 3:0===t.sent.resultCode&&a({type:"UNFOLLOW",id:e}),a(xe(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setUsers:function(e,t){return function(){var a=Object(F.a)(I.a.mark((function a(n){var r;return I.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n(Pe(!0)),a.next=3,T(e,t);case 3:r=a.sent,n(Pe(!1)),n(ye(r.items)),n({type:"TOTALCOUNT",totalCount:r.totalCount});case 7:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},setCurPage:function(e,t){return function(){var a=Object(F.a)(I.a.mark((function a(n){var r;return I.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n({type:"CURPAGE",currentPage:e}),n(Pe(!0)),a.next=4,A(e,t);case 4:r=a.sent,n(Pe(!1)),n(ye(r.items));case 7:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}})($e),tt="POST-FORM-newPostText",at=function(e){return{type:"SET-STATUS",status:e}},nt=function(e){return{type:tt,content:e}},rt={postsData:[{id:1,message:"Hello",likes:15},{id:2,message:"Bonjour",likes:30},{id:3,message:"\u041f\u0440\u0438\u0432\u0435\u0442",likes:15e3}],newPostText:"",profile:null,status:"no status"},st=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:rt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case tt:var a={id:5,message:t.content,likes:0};return Object(h.a)(Object(h.a)({},e),{},{postsData:[].concat(Object(v.a)(e.postsData),[a])});case"SET-PROFILE":return Object(h.a)(Object(h.a)({},e),{},{profile:t.profile});case"SET-STATUS":return Object(h.a)(Object(h.a)({},e),{},{status:t.status});default:return e}},ot=a(99),ct=a.n(ot),it=a(142),ut=a.n(it),lt=function(e){return r.a.createElement("div",{className:ut.a.item},r.a.createElement("img",{src:"https://static.tildacdn.com/tild3538-3762-4936-b162-656163363764/Icon.png",alt:"avatar"}),r.a.createElement("span",null,e.message),r.a.createElement("div",null,r.a.createElement("div",null,"Likes --\x3e ",e.likes)))},mt=ae(20),pt=Object(k.a)({form:"post"})((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement(S.a,{component:$,name:"newPostText",type:"text",validate:[te,mt],placeholder:"Write your post here..."}),r.a.createElement("button",{type:"submit",className:ct.a.addPost},"Add post")))})),dt=function(e){var t=e.postsGenerate.map((function(e){return r.a.createElement(lt,{key:e.id,message:e.message,likes:e.likes})}));return r.a.createElement("div",null,r.a.createElement(pt,Object.assign({},e,{onSubmit:function(t){e.postForm(t.newPostText)}})),r.a.createElement("div",{className:ct.a.posts},t))},ft=Object(g.b)((function(e){return{postsGenerate:e.profilePage.postsData,newPostText:e.profilePage.newPostText}}),{postForm:nt})(dt),gt=a(143),vt=a.n(gt),ht=a(100),Et=a.n(ht),bt=a(144),_t=a.n(bt),Ot=a(145),jt=a.n(Ot),wt=function(e){var t=Object(n.useState)(!1),a=Object(Ke.a)(t,2);a[0],a[1];return e.profileData?r.a.createElement("div",{className:Et.a.content},r.a.createElement("div",{className:Et.a.description},r.a.createElement("img",{src:e.profileData.photos.small,alt:""}),r.a.createElement("ul",null,r.a.createElement("li",null,e.profileData.contacts.instagram),r.a.createElement("li",null,e.profileData.contacts.vk)),r.a.createElement("div",null,e.profileData.lookingForAJob?r.a.createElement("img",{src:jt.a,style:{width:"50px",height:"50px"},alt:""}):r.a.createElement("img",{src:_t.a,style:{width:"50px",height:"50px"},alt:""})))):r.a.createElement(Ge,null)},Nt=a(29),yt=a.n(Nt),Pt=(r.a.Component,function(e){var t=Object(n.useState)(!1),a=Object(Ke.a)(t,2),s=a[0],o=a[1],c=Object(n.useState)(e.status),i=Object(Ke.a)(c,2),u=i[0],l=i[1];Object(n.useEffect)((function(){l(e.status)}),[e.status]);return r.a.createElement("div",{className:yt.a.content},r.a.createElement("span",{className:yt.a.status},"Status:"),s?r.a.createElement("div",{className:yt.a.editionVersion},r.a.createElement("input",{onBlur:function(){o(!1),e.updateStatus(u)},autoFocus:!0,type:"text",value:u,onChange:function(e){return l(e.target.value)}})):r.a.createElement("div",null,r.a.createElement("span",{className:yt.a.readyStatus,onDoubleClick:function(){return!e.match.params.userId&&o(!0)}},e.status||"---------")))}),xt=function(e){return r.a.createElement("div",{className:vt.a.content},r.a.createElement(wt,{profileData:e.profile,userId:e.match.params.userId}),r.a.createElement(Pt,e),r.a.createElement(ft,{store:e.store}))},St=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).refreshProfile=function(){var t=e.props.match.params.userId;if(!t&&!(t=e.props.authorizedUser))return r.a.createElement(Ge,null);e.props.setProfile(t),e.props.getStatus(t)},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t){e.match.params.userId!=this.props.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return r.a.createElement(xt,this.props)}}]),a}(r.a.Component),kt=Object(x.compose)(Object(g.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUser:e.authMe.id,authorized:e.authMe.isAuthMe}}),{setProfile:function(e){return function(){var t=Object(F.a)(I.a.mark((function t(a){var n;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,H(e);case 2:n=t.sent,a({type:"SET-PROFILE",profile:n});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateStatus:function(e){return function(){var t=Object(F.a)(I.a.mark((function t(a){return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,B(e);case 2:0===t.sent.resultCode&&a(at(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},getStatus:function(e){return function(){var t=Object(F.a)(I.a.mark((function t(a){var n;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,W(e);case 2:n=t.sent,a(at(n));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},postForm:nt}),m.f,Object(g.b)((function(e){return{isAuthMe:e.authMe.isAuthMe}}),{}),ne)(St),Ct=a(41),It=a.n(Ct),Ft=a(146),Mt=a.n(Ft),Dt=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{className:It.a.header},r.a.createElement("div",{className:It.a.loginPhrase},e.isAuthMe?r.a.createElement("div",{onClick:e.logout,className:It.a.userLogin},e.userId," Jess Noir  "):r.a.createElement("div",{className:It.a.logIn},r.a.createElement(re.b,{to:"login/"},r.a.createElement("div",null,"Log In")," "))),r.a.createElement("div",{className:It.a.name},"HellDream"),r.a.createElement("div",null,r.a.createElement("img",{className:It.a.logo,src:Mt.a,alt:"logo"}))))},Tt=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null," ",r.a.createElement(Dt,this.props)," ")}}]),a}(r.a.Component),At=Object(g.b)((function(e){return Object(h.a)({},e.authMe)}),{logout:function(){return function(){var e=Object(F.a)(I.a.mark((function e(t){var a;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R();case 2:0===(a=e.sent).resultCode&&t(Y(!1)),t(Z(Object(h.a)({},a.data)));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(Tt),Lt=a(91),Ut=a.n(Lt),zt=ae(30),Gt=Object(k.a)({form:"login"})((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement("div",null,r.a.createElement(S.a,{name:"login",component:ee,type:"text",placeholder:"login",validate:[te,zt]})),r.a.createElement("div",null,r.a.createElement(S.a,{name:"password",component:ee,type:"text",placeholder:"password",validate:[te,zt]})),r.a.createElement("div",null,r.a.createElement(S.a,{name:"checkbox",component:"input",type:"checkbox"}),"Remember Me"),e.error&&r.a.createElement("div",{className:X.a.commonError}," ",e.error," "),r.a.createElement("div",null,r.a.createElement("button",null,"Login"))))})),Rt=Object(g.b)((function(e){return{authMe:e.authMe.isAuthMe}}),{isLogin:function(e){return function(){var t=Object(F.a)(I.a.mark((function t(a){var n,r;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,G(e);case 2:0===(n=t.sent).resultCode?a(J()):(r=n.messages.length>0?n.messages[0]:"Some errors",a(Object(M.a)("login",{_error:r})));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:Ut.a.starter},"LOGIN"),e.authMe?r.a.createElement("div",null,"You are login successfully"):r.a.createElement(Gt,{onSubmit:function(t){e.isLogin(t)}}))})),Ht={initialized:!1},Bt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ht,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-INITIALIZE":return Object(h.a)(Object(h.a)({},e),{},{initialized:!0});default:return e}},Wt=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).PostsComp=function(){return r.a.createElement(kt,{store:e.props.store})},e.DialogsMessagesComp=function(){return r.a.createElement(ve,{store:e.props.store})},e.UsersComp=function(){return r.a.createElement(et,{store:e.props.store})},e.LoginFormContainerCom=function(){return r.a.createElement(Rt,{store:e.props.store})},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.props.setInitialize()}},{key:"render",value:function(){return this.props.initialized?r.a.createElement("div",{className:"app-wrapper"},r.a.createElement(At,null),r.a.createElement(we,null),r.a.createElement("div",{className:"app-wrapper-content"},r.a.createElement(m.b,{path:"/dialogs",render:this.DialogsMessagesComp}),r.a.createElement(m.b,{path:"/profile/:userId?",render:this.PostsComp}),r.a.createElement(m.b,{path:"/news",render:p}),r.a.createElement(m.b,{path:"/music",render:d}),r.a.createElement(m.b,{path:"/settings",render:f}),r.a.createElement(m.b,{path:"/users",render:this.UsersComp}),r.a.createElement(m.b,{path:"/login",render:this.LoginFormContainerCom}))):r.a.createElement(Ge,null)}}]),a}(r.a.Component),Zt=Object(x.compose)(m.f,Object(g.b)((function(e){return{initialized:e.appInit.initialized}}),{setInitialize:function(){return function(){var e=Object(F.a)(I.a.mark((function e(t){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(J());case 2:t({type:"SET-INITIALIZE"});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}))(Wt);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Yt={friendsList:[{id:1,name:"Zorro"},{id:2,name:"Lyubov"},{id:3,name:"Kuscherenko"}]},qt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Yt;return e},Jt=a(147),Kt=a(134),Vt=a(10),Qt=Vt.createStore,Xt=Vt.combineReducers,$t=Vt.applyMiddleware,ea=Qt(Xt({profilePage:st,messagesPage:P,sideBar:qt,usersPage:ke,authMe:K,appInit:Bt,form:Kt.a}),$t(Jt.a));window.store=ea;var ta=ea;o.a.render(r.a.createElement(g.a,{store:ta},r.a.createElement(re.a,null,r.a.createElement(Zt,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},39:function(e,t,a){e.exports={error:"InputChecker_error__3bOFz",messageError:"InputChecker_messageError__2L7eE",commonError:"InputChecker_commonError__15Qry"}},41:function(e,t,a){e.exports={logo:"Header_logo__3b1l2",name:"Header_name__wsK4x",header:"Header_header__10dxk",loginPhrase:"Header_loginPhrase__3mCng",userLogin:"Header_userLogin__230Sn",logIn:"Header_logIn__IbfsR"}},57:function(e,t,a){e.exports={userPage:"Users_userPage__3pdtU",butGET:"Users_butGET__3mBVF",preloader:"Users_preloader__3ube4"}},58:function(e,t,a){e.exports={dialogs:"Dialogs_dialogs__2BwxY",dialogsItems:"Dialogs_dialogsItems__5NlB3",dialog:"Dialogs_dialog__39fd-",message:"Dialogs_message__cuXq7",active:"Dialogs_active__17luP"}},70:function(e,t,a){e.exports=a.p+"static/media/zorro.097a33ad.jpg"},72:function(e,t,a){e.exports={dialog:"Dialog_dialog__3izJD",active:"Dialog_active__1j-Og",avatar:"Dialog_avatar__1n0LU"}},74:function(e,t,a){e.exports={avatar:"Friends_avatar__2iBkW",friend:"Friends_friend__1Hlqs",name:"Friends_name__YkjbY"}},91:function(e,t,a){e.exports={starter:"Login_starter__1tZcA"}},97:function(e,t,a){e.exports={preloader:"Preloader_preloader__UMRl1",divPreloader:"Preloader_divPreloader__3iYxB"}},98:function(e,t,a){e.exports={pages:"Pagination_pages__3ksA0",pageSelected:"Pagination_pageSelected__EFH4Z"}},99:function(e,t,a){e.exports={addPost:"MyPosts_addPost__1exZM"}}},[[173,1,2]]]);
//# sourceMappingURL=main.d335ef3f.chunk.js.map