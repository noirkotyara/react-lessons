(this["webpackJsonpmy-app-1"]=this["webpackJsonpmy-app-1"]||[]).push([[0],{100:function(e,t,a){e.exports={addPost:"MyPosts_addPost__1exZM"}},136:function(e,t,a){e.exports=a.p+"static/media/kuscherenko.7bc7e317.jpg"},137:function(e,t,a){e.exports=a.p+"static/media/lyubov.fc2a1a49.jpg"},139:function(e,t,a){e.exports={message:"Message_message__xSb92"}},141:function(e,t,a){e.exports=a.p+"static/media/preloader.c04e3ad7.svg"},142:function(e,t,a){e.exports={item:"Post_item__2DfE4"}},143:function(e,t,a){},144:function(e,t,a){e.exports=a.p+"static/media/av.3322ac59.jpg"},145:function(e,t,a){e.exports=a.p+"static/media/sad.f356e41d.png"},146:function(e,t,a){e.exports=a.p+"static/media/happy.ed41fce9.png"},147:function(e,t,a){e.exports=a.p+"static/media/logo2.623bb4d9.jpg"},15:function(e,t,a){e.exports={nav:"Navbar_nav__kBj7q",item:"Navbar_item__3Pa_F",active:"Navbar_active__28OkF",friendsNav:"Navbar_friendsNav__2q2DP"}},175:function(e,t,a){e.exports=a(305)},180:function(e,t,a){},181:function(e,t,a){},182:function(e,t,a){},183:function(e,t,a){},184:function(e,t,a){},189:function(e,t,a){"use strict";a.r(t),a.d(t,"instance",(function(){return r}));var n=a(138),r=n.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"30bffa88-490b-405c-83b6-e6b58d235873"}})},24:function(e,t,a){e.exports={description:"ProfileInfo_description__3GDnK",contacts:"ProfileInfo_contacts__37vHF",socialIcon:"ProfileInfo_socialIcon__GBk5o",editData:"ProfileInfo_editData__3bG9g"}},27:function(e,t,a){e.exports={userItem:"User_userItem__4zQnk",avatar:"User_avatar__39gSA",lastMessage:"User_lastMessage__1hlgj",name:"User_name__2R3Cl",off:"User_off__XjvUl",on:"User_on__1XQfw",country:"User_country__2T7Tr",stars:"User_stars__3aZm4"}},305:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(68),c=a.n(s),o=(a(180),a(20)),i=a(21),u=a(23),l=a(22),m=a(11);a(181),a(182);function p(){return r.a.createElement("a",{href:"#",onClick:function(e){console.log("\u041f\u043e \u0441\u0441\u044b\u043b\u043a\u0435 \u043a\u043b\u0438\u043a\u043d\u0443\u043b\u0438.")}},"\u041d\u0430\u0436\u043c\u0438 \u043d\u0430 \u043c\u0435\u043d\u044f")}var f=function(){return r.a.createElement("div",null,r.a.createElement(p,null))},d=(a(183),function(){return r.a.createElement("div",null,"Music")}),g=(a(184),function(){return r.a.createElement("div",null,"Settings")}),v=a(9),h=a(41),b=a(4),E=a(71),O=a.n(E),_=a(136),j=a.n(_),w=a(137),P=a.n(w),y={messagesData:[{id:1,message:"\u0437\u043b\u0442\u0449\u043e\u0442\u043e\u0442\u043e\u043b\u0438\u043e\u043b\u0438\u0433"},{id:2,message:"Hello"},{id:3,message:"Privet"},{id:4,message:"Au revoir"}],dialogsUsersData:[{id:1,name:"Zorro",ava:O.a},{id:2,name:"Lyubov",ava:P.a},{id:3,name:"Kuscherenko",ava:j.a}]},N=5,k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-MESSAGE-STATE":return N++,Object(b.a)(Object(b.a)({},e),{},{messagesData:[].concat(Object(h.a)(e.messagesData),[{id:N,message:t.newMessageText}])});default:return e}},x=a(10),C=a(132),S=a(133),F=a(6),I=a.n(F),D=a(13),M=a(32),A=a(189),T=A.instance,U=function(e,t){return T.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},L=function(e,t){return T.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},z=function(e){return T.delete("follow/".concat(e)).then((function(e){return e.data}))},G=function(e){return T.post("follow/".concat(e)).then((function(e){return e.data}))},H=function(){return T.get("auth/me").then((function(e){return e.data}))},R=function(e){return T.post("auth/login",{email:e.login,password:e.password,rememberMe:e.checkbox,captcha:e.symbols}).then((function(e){return e.data}))},B=function(){return T.delete("auth/login").then((function(e){return e.data}))},W=function(e){return T.get("profile/".concat(e)).then((function(e){return e.data}))},Z=function(e){return T.put("/profile/status",{status:e}).then((function(e){return e.data}))},J=function(e){return T.get("/profile/status/".concat(e)).then((function(e){return e.data}))},Y=function(e){var t=new FormData;return t.append("image",e),T.put("/profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){return e.data}))},q=function(e){return T.put("/profile",e).then((function(e){return e.data}))},K=function(){return T.get("/security/get-captcha-url").then((function(e){return e.data}))},V="CAPTCHA-SUCCESS",Q=function(e){var t=e.id,a=e.login,n=e.email,r=e.isAuthMe,s=e.captcha;return{type:"SET-USER-DATA",data:{id:t,login:a,email:n,isAuthMe:r,captcha:void 0===s?null:s}}},X=function(e){return{type:"IS-AUTH-ME",isAuthMe:e}},$={id:null,login:null,email:null,isAuthMe:!1,checkbox:!1,captcha:null},ee=function(){return function(){var e=Object(D.a)(I.a.mark((function e(t){var a;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H();case 2:a=e.sent,t(Q(Object(b.a)({},a.data))),0===a.resultCode&&t(X(!0));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},te=function(){return function(){var e=Object(D.a)(I.a.mark((function e(t){var a;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,K();case 3:a=e.sent,t((n=a.url,{type:V,captcha:n}));case 5:case"end":return e.stop()}var n}),e)})));return function(t){return e.apply(this,arguments)}}()},ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-USER-DATA":return Object(b.a)(Object(b.a)({},e),t.data);case"IS-AUTH-ME":return Object(b.a)(Object(b.a)({},e),{},{isAuthMe:t.isAuthMe});case V:return Object(b.a)(Object(b.a)({},e),{},{captcha:t.captcha});default:return e}},ne=a(101),re=a(33),se=a.n(re),ce=function(e){var t=e.input,a=e.meta,n=Object(ne.a)(e,["input","meta"]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:a.error&&a.visited&&!a.active&&se.a.error},r.a.createElement("textarea",Object.assign({},t,{placeholder:n.placeholder}))),r.a.createElement("span",{className:se.a.messageError},a.visited&&!a.active&&a.error))},oe=function(e){var t=e.input,a=e.meta,n=Object(ne.a)(e,["input","meta"]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:a.error&&a.visited&&!a.active&&se.a.error},r.a.createElement("input",Object.assign({},t,{placeholder:n.placeholder}))),r.a.createElement("span",{className:se.a.messageError},a.visited&&!a.active&&a.error))},ie=function(e){return e?void 0:"Field is required"},ue=function(e){return function(t){return t&&t.length<e?void 0:"".concat(e," is reached")}},le=function(e){return function(t){Object(u.a)(n,t);var a=Object(l.a)(n);function n(){return Object(o.a)(this,n),a.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return this.props.isAuthMe?r.a.createElement(e,this.props):r.a.createElement(m.a,{to:"/login"})}}]),n}(r.a.Component)},me=a(12),pe=a(73),fe=a.n(pe),de=function(e){var t="/dialogs/"+e.id;return r.a.createElement("div",{className:fe.a.dialog},r.a.createElement("span",null," ",r.a.createElement("img",{className:fe.a.avatar,src:e.avatar,alt:"ava"})," "),r.a.createElement(me.b,{to:t,activeClassName:fe.a.active},"  ",e.name," "))},ge=a(59),ve=a.n(ge),he=a(139),be=a.n(he),Ee=function(e){return r.a.createElement("div",{className:be.a.message},e.message)},Oe=ue(10),_e=Object(S.a)({form:"sendMessage"})((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement(C.a,{name:"newMessageText",type:"text",validate:[ie,Oe],component:oe}),r.a.createElement("button",{type:"submit",className:ve.a.sendMessage},"send")))})),je=Object(x.compose)(Object(v.b)((function(e){return{isAuthMe:e.authMe.isAuthMe}}),{authMeSuccess:ee}),le)((function(e){var t=e.dialogsGenerate.map((function(e){return r.a.createElement(de,{key:e.id,name:e.name,id:e.id,avatar:e.ava})})),a=e.messagesGenerate.map((function(e){return r.a.createElement(Ee,{key:e.id,message:e.message})}));return r.a.createElement("div",{className:ve.a.dialogs},r.a.createElement("div",{className:ve.a.dialogsItems},t),r.a.createElement("div",{className:ve.a.messages},a),r.a.createElement(_e,{onSubmit:function(t){e.sendMessage(t.newMessageText)}}))})),we=Object(v.b)((function(e){return{dialogsGenerate:e.messagesPage.dialogsUsersData,messagesGenerate:e.messagesPage.messagesData}}),{sendMessage:function(e){return{type:"ADD-MESSAGE-STATE",newMessageText:e}}})(je),Pe=a(75),ye=a.n(Pe),Ne=function(e){return r.a.createElement("div",{className:ye.a.friend},r.a.createElement("div",{className:ye.a.avatar}),r.a.createElement("div",{className:ye.a.name},e.name))},ke=a(15),xe=a.n(ke),Ce=function(e){var t=e.friendsListComp.map((function(e){return r.a.createElement(Ne,{key:e.id,id:e.id,name:e.name})}));return r.a.createElement("nav",{className:xe.a.nav},r.a.createElement("div",{className:xe.a.item},r.a.createElement(me.b,{to:"/profile",activeClassName:xe.a.active},"Profile")),r.a.createElement("div",{className:xe.a.item},r.a.createElement(me.b,{to:"/dialogs",activeClassName:xe.a.active},"Messages")),r.a.createElement("div",{className:xe.a.item},r.a.createElement(me.b,{to:"/news",activeClassName:xe.a.active},"News")),r.a.createElement("div",{className:xe.a.item},r.a.createElement(me.b,{to:"/music",activeClassName:xe.a.active},"Music")),r.a.createElement("div",{className:xe.a.item},r.a.createElement(me.b,{to:"/settings",activeClassName:xe.a.active},"Settings")),r.a.createElement("div",{className:xe.a.item}," ",r.a.createElement(me.b,{to:"/users",activeClassName:xe.a.active},"Users")),r.a.createElement("div",{className:xe.a.friendsList}," ",r.a.createElement("h3",{className:xe.a.friendsNav},"FRIENDS")," ",t," "))},Se=Object(v.b)((function(e){return{friendsListComp:e.sideBar.friendsList}}),{})(Ce),Fe="SETUSERS",Ie={usersData:[],currentPage:1,pageSize:90,totalCount:10,isFetching:!1,followingInProgress:[]},De=function(e){return{type:Fe,usersData:e}},Me=function(e){return{type:"TOGGLEIF",isFetching:e}},Ae=function(e,t){return{type:"FOLISFETCH",followingTF:e,userId:t}},Te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(b.a)(Object(b.a)({},e),{},{usersData:e.usersData.map((function(e){return e.id===t.id?Object(b.a)(Object(b.a)({},e),{},{followed:!0}):e}))});case"UNFOLLOW":return Object(b.a)(Object(b.a)({},e),{},{usersData:e.usersData.map((function(e){return e.id===t.id?Object(b.a)(Object(b.a)({},e),{},{followed:!1}):e}))});case Fe:return Object(b.a)(Object(b.a)({},e),{},{usersData:Object(h.a)(t.usersData)});case"CURPAGE":return Object(b.a)(Object(b.a)({},e),{},{currentPage:t.currentPage});case"TOTALCOUNT":return Object(b.a)(Object(b.a)({},e),{},{totalCount:t.totalCount});case"TOGGLEIF":return Object(b.a)(Object(b.a)({},e),{},{isFetching:t.isFetching});case"FOLISFETCH":var a=Object(b.a)(Object(b.a)({},e),{},{followingInProgress:Object(h.a)(e.followingInProgress)});return t.followingTF?a.followingInProgress.push(t.userId):a.followingInProgress=a.followingInProgress.filter((function(e){return e!==t.userId})),a;default:return e}},Ue=a(27),Le=a.n(Ue),ze=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:Le.a.userItem},r.a.createElement(me.b,{to:"profile/"+e.user.id},r.a.createElement("img",{className:Le.a.avatar,src:null!=e.user.photos.small?e.user.photos.small:O.a,alt:"ava"})),r.a.createElement("div",{className:Le.a.country},e.user.id%3===0?r.a.createElement("div",{className:Le.a.off},"offline"):r.a.createElement("div",{className:Le.a.on},"online")),r.a.createElement("div",{className:Le.a.name},e.user.name),r.a.createElement("div",{className:Le.a.stars}),r.a.createElement("div",{className:Le.a.lastMessage},e.user.status?"status: "+e.user.status:"----"),r.a.createElement("div",null,e.user.followed?r.a.createElement("button",{disabled:e.followingInProgress.some((function(t){return t===e.user.id})),onClick:function(){e.doUnfollow(e.user.id)},className:Le.a.statusFollow},"UNFOLLOW"):r.a.createElement("button",{disabled:e.followingInProgress.some((function(t){return t===e.user.id})),onClick:function(){e.doFollow(e.user.id)},className:Le.a.statusFollow},"FOLLOW"))))},Ge=a(49),He=a.n(Ge),Re=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:He.a.usersItem},e.usersGenerate.map((function(t){return r.a.createElement(ze,{key:t.id,user:t,doFollow:e.doFollow,doUnfollow:e.doUnfollow,followingInProgress:e.followingInProgress,toggleFollowing:e.toggleFollowing})}))))},Be=a(141),We=a.n(Be),Ze=a(99),Je=a.n(Ze),Ye=function(){return r.a.createElement("div",{className:Je.a.divPreloader},r.a.createElement("img",{className:Je.a.preloader,src:We.a,alt:"preloader"}))},qe=a(42),Ke=function(e){return e.usersPage},Ve=Object(qe.a)(Ke,(function(e){return e.usersData})),Qe=Object(qe.a)(Ke,(function(e){return e.currentPage})),Xe=Object(qe.a)(Ke,(function(e){return e.totalCount})),$e=Object(qe.a)(Ke,(function(e){return e.pageSize})),et=Object(qe.a)(Ke,(function(e){return e.isFetching})),tt=Object(qe.a)(Ke,(function(e){return e.followingInProgress})),at=a(30),nt=a(76),rt=a.n(nt),st=function(e){for(var t=Math.ceil(e.totalCount/e.pageSize),a=[],s=1;s<=t;s++)a.push(s);var c=Object(n.useState)(1),o=Object(at.a)(c,2),i=o[0],u=o[1],l=Math.ceil(t/5),m=5*(i-1)+1,p=5*i;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:rt.a.pages},i>1&&r.a.createElement("button",{onClick:function(){return u(i-1)}},"minus"),a.filter((function(e){return e>=m&&e<=p})).map((function(t){return r.a.createElement("span",{onClick:function(){e.changeCurPage(t)},className:e.currentPage===t&&rt.a.pageSelected||rt.a.page,key:t},t," ")})),l>i&&r.a.createElement("button",{onClick:function(){return u(i+1)}},"plus")))},ct=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).changeCurPage=function(t){e.props.setCurPage(t,e.props.pageSize)},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.props.setUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:He.a.userPage},"Choose your friends",this.props.isFetching&&r.a.createElement("span",{className:He.a.preloader},r.a.createElement(Ye,null))),r.a.createElement("div",{className:He.a.pagination}," ",r.a.createElement(st,Object.assign({},this.props,{changeCurPage:this.changeCurPage}))," "),!this.props.isFetching&&r.a.createElement(Re,Object.assign({},this.props,{isFetching:this.props.isFetching})))}}]),a}(r.a.Component),ot=Object(v.b)((function(e){return{usersGenerate:Ve(e),currentPage:Qe(e),totalCount:Xe(e),pageSize:$e(e),isFetching:et(e),followingInProgress:tt(e)}}),{doFollow:function(e){return function(){var t=Object(D.a)(I.a.mark((function t(a){return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(Ae(!0,e)),t.next=3,G(e);case 3:0===t.sent.resultCode&&a({type:"FOLLOW",id:e}),a(Ae(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},doUnfollow:function(e){return function(){var t=Object(D.a)(I.a.mark((function t(a){return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(Ae(!0,e)),t.next=3,z(e);case 3:0===t.sent.resultCode&&a({type:"UNFOLLOW",id:e}),a(Ae(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setUsers:function(e,t){return function(){var a=Object(D.a)(I.a.mark((function a(n){var r;return I.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n(Me(!0)),a.next=3,U(e,t);case 3:r=a.sent,n(Me(!1)),n(De(r.items)),n({type:"TOTALCOUNT",totalCount:r.totalCount});case 7:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},setCurPage:function(e,t){return function(){var a=Object(D.a)(I.a.mark((function a(n){var r;return I.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n({type:"CURPAGE",currentPage:e}),n(Me(!0)),a.next=4,L(e,t);case 4:r=a.sent,n(Me(!1)),n(De(r.items));case 7:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}})(ct),it="POST-FORM-newPostText",ut={postsData:[{id:1,message:"Hello",likes:15},{id:2,message:"Bonjour",likes:30},{id:3,message:"\u041f\u0440\u0438\u0432\u0435\u0442",likes:15e3}],newPostText:"",profile:null,status:"no status"},lt=function(e){return{type:"SET-STATUS",status:e}},mt=function(e){return{type:it,content:e}},pt=function(e){return{type:"UPLOAD-PHOTO",image:e}},ft=function(e){return function(){var t=Object(D.a)(I.a.mark((function t(a){var n;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,W(e);case 2:n=t.sent,a({type:"SET-PROFILE",profile:n});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},dt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ut,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case it:var a={id:5,message:t.content,likes:0};return Object(b.a)(Object(b.a)({},e),{},{postsData:[].concat(Object(h.a)(e.postsData),[a])});case"SET-PROFILE":return Object(b.a)(Object(b.a)({},e),{},{profile:t.profile});case"UPLOAD-PHOTO":return Object(b.a)(Object(b.a)({},e),{},{profile:Object(b.a)(Object(b.a)({},e.profile),{},{photos:t.image})});case"SET-STATUS":return Object(b.a)(Object(b.a)({},e),{},{status:t.status});default:return e}},gt=a(100),vt=a.n(gt),ht=a(142),bt=a.n(ht),Et=function(e){return r.a.createElement("div",{className:bt.a.item},r.a.createElement("img",{src:"https://static.tildacdn.com/tild3538-3762-4936-b162-656163363764/Icon.png",alt:"avatar"}),r.a.createElement("span",null,e.message),r.a.createElement("div",null,r.a.createElement("div",null,"Likes --\x3e ",e.likes)))},Ot=ue(20),_t=Object(S.a)({form:"post"})((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement(C.a,{component:ce,name:"newPostText",type:"text",validate:[ie,Ot],placeholder:"Write your post here..."}),r.a.createElement("button",{type:"submit",className:vt.a.addPost},"Add post")))})),jt=function(e){var t=e.postsGenerate.map((function(e){return r.a.createElement(Et,{key:e.id,message:e.message,likes:e.likes})}));return r.a.createElement("div",null,r.a.createElement(_t,Object.assign({},e,{onSubmit:function(t){e.postForm(t.newPostText)}})),r.a.createElement("div",{className:vt.a.posts},t))},wt=Object(v.b)((function(e){return{postsGenerate:e.profilePage.postsData,newPostText:e.profilePage.newPostText}}),{postForm:mt})(jt),Pt=a(143),yt=a.n(Pt),Nt=a(24),kt=a.n(Nt),xt=a(144),Ct=a.n(xt),St={facebook:"https://www.flaticon.com/svg/static/icons/svg/2111/2111393.svg",website:"https://www.flaticon.com/svg/static/icons/svg/2847/2847798.svg",vk:"https://www.flaticon.com/svg/static/icons/svg/2111/2111712.svg",twitter:"https://www.flaticon.com/svg/static/icons/svg/733/733579.svg",instagram:"https://www.flaticon.com/svg/static/icons/svg/174/174855.svg",youtube:"https://www.flaticon.com/svg/static/icons/svg/1384/1384060.svg",github:"https://www.flaticon.com/svg/static/icons/svg/733/733553.svg",mainLink:"https://www.flaticon.com/svg/static/icons/svg/2111/2111644.svg"},Ft=function(e){var t,a=e.property,n=e.value;Object.keys(St).forEach((function(e){e===a&&(t=St[e])}));return r.a.createElement(r.a.Fragment,null,n&&r.a.createElement("span",null,r.a.createElement("a",{href:n},r.a.createElement("img",{className:kt.a.socialIcon,src:t,alt:""}))))},It=function(e,t,a){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];return r.a.createElement(C.a,{name:e,component:t,type:a,placeholder:e,validate:n})},Dt=Object(S.a)({form:"editProfile",enableReinitialize:!0})((function(e){var t=Object.keys(e.profileData.contacts).map((function(e){return r.a.createElement("div",{key:e},It("contacts."+e,oe,"text"))}));return r.a.createElement("form",{onSubmit:e.handleSubmit,className:kt.a.editData},r.a.createElement("div",null,e.error&&r.a.createElement("div",{className:se.a.commonError}," ",e.error," ")),r.a.createElement("div",null,"Here is our form for editing"),r.a.createElement("div",null," Your full name: ",It("fullName",oe,"text")," "),r.a.createElement("div",null," About me: ",It("aboutMe",oe,"text")," "),r.a.createElement("div",null," ",It("lookingForAJob","input","checkbox")," Looking for a job?"),r.a.createElement("div",null," Description: ",It("lookingForAJobDescription",oe,"text")," "),r.a.createElement("div",null," Contacts: ",t," "),r.a.createElement("button",null,"Save changes"))})),Mt=a(145),At=a.n(Mt),Tt=a(146),Ut=a.n(Tt),Lt=function(e){var t=e.owner,a=e.profileData,s=e.updateProfile,c=Object(n.useState)(!1),o=Object(at.a)(c,2),i=o[0],u=o[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,i&&t?r.a.createElement(Dt,{initialValues:a,profileData:a,onSubmit:function(e){s(e).then((function(){return u(!1)}))}}):t&&r.a.createElement("div",null,r.a.createElement("button",{className:kt.a.editButton,onClick:function(){return u(!0)}},"Edit Profile"),r.a.createElement("div",{className:kt.a.fullname},a.fullName),r.a.createElement("div",{className:kt.a.aboutMe},a.aboutMe),r.a.createElement("div",{className:kt.a.contacts},Object.keys(a.contacts).map((function(e){return r.a.createElement(Ft,{key:e,property:e,value:a.contacts[e]})}))),r.a.createElement("div",null,"lookingForAJob:  ",r.a.createElement("img",{src:a.lookingForAJob?Ut.a:At.a,style:{width:"50px",height:"50px"},alt:""})," "),r.a.createElement("div",null,"Description: ",a.lookingForAJobDescription))))},zt=r.a.memo((function(e){var t=e.checkedAuth,a=e.profileData,s=e.uploadPhoto,c=e.userId,o=e.updateProfile,i=Object(n.useState)(!1),u=Object(at.a)(i,2),l=u[0],m=u[1],p=Object(n.useState)(""),f=Object(at.a)(p,2),d=f[0],g=f[1];if(!e.profileData)return r.a.createElement(Ye,null);return r.a.createElement("div",{className:kt.a.content},r.a.createElement("div",{className:kt.a.description},!l||t!==c&&c?r.a.createElement("img",{style:{width:"100px",height:"100px"},src:a.photos.small?a.photos.small:Ct.a,alt:"avatar",onDoubleClick:function(){m(!0)}}):r.a.createElement("div",null,r.a.createElement("input",{type:"file",accept:"image/*",onChange:function(e){return t=e.target.files[0],void g(t);var t}}),r.a.createElement("input",{onClick:function(){s(d),m(!1)},type:"button",value:"Upload"})),r.a.createElement(Lt,{owner:t===c||!c,profileData:a,updateProfile:o})))})),Gt=a(31),Ht=a.n(Gt),Rt=(r.a.Component,function(e){var t=Object(n.useState)(!1),a=Object(at.a)(t,2),s=a[0],c=a[1],o=Object(n.useState)(e.status),i=Object(at.a)(o,2),u=i[0],l=i[1];Object(n.useEffect)((function(){l(e.status)}),[e.status]);return r.a.createElement("div",{className:Ht.a.content},r.a.createElement("span",{className:Ht.a.status},"Status:"),s?r.a.createElement("div",{className:Ht.a.editionVersion},r.a.createElement("input",{onBlur:function(){c(!1),e.updateStatus(u)},autoFocus:!0,type:"text",value:u,onChange:function(e){return l(e.target.value)}})):r.a.createElement("div",null,r.a.createElement("span",{className:Ht.a.readyStatus,onDoubleClick:function(){return!e.match.params.userId&&c(!0)}},e.status||"---------")))}),Bt=function(e){return r.a.createElement("div",{className:yt.a.content},r.a.createElement(zt,{profileData:e.profile,userId:e.match.params.userId,uploadPhoto:e.uploadPhoto,checkedAuth:e.authorizedUser,updateProfile:e.updateProfile}),r.a.createElement(Rt,e),r.a.createElement(wt,{store:e.store}))},Wt=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).refreshProfile=function(){var t=e.props.match.params.userId;if(!t&&!(t=e.props.authorizedUser))return r.a.createElement(Ye,null);e.props.setProfile(t),e.props.getStatus(t)},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t){e.match.params.userId!=this.props.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return r.a.createElement(Bt,this.props)}}]),a}(r.a.Component),Zt=Object(x.compose)(Object(v.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUser:e.authMe.id,authorized:e.authMe.isAuthMe}}),{setProfile:ft,updateStatus:function(e){return function(){var t=Object(D.a)(I.a.mark((function t(a){return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Z(e);case 2:0===t.sent.resultCode&&a(lt(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},getStatus:function(e){return function(){var t=Object(D.a)(I.a.mark((function t(a){var n;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,J(e);case 2:n=t.sent,a(lt(n));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},postForm:mt,uploadPhoto:function(e){return function(){var t=Object(D.a)(I.a.mark((function t(a){var n;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Y(e);case 2:0===(n=t.sent).resultCode&&a(pt(n.data.photos));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateProfile:function(e){return function(){var t=Object(D.a)(I.a.mark((function t(a,n){var r;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,q(e);case 2:if(0!==(r=t.sent).resultCode){t.next=8;break}a(ft(n().authMe.id)),t.next=11;break;case 8:if(!(r.messages.length>0)){t.next=11;break}return a(Object(M.a)("editProfile",{_error:r.messages})),t.abrupt("return",Promise.reject(r.messages));case 11:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()}}),m.f,Object(v.b)((function(e){return{isAuthMe:e.authMe.isAuthMe}}),{}),le)(Wt),Jt=a(43),Yt=a.n(Jt),qt=a(147),Kt=a.n(qt),Vt=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{className:Yt.a.header},r.a.createElement("div",{className:Yt.a.loginPhrase},e.isAuthMe?r.a.createElement("div",{onClick:e.logout,className:Yt.a.userLogin},"Click to logOut "):r.a.createElement("div",{className:Yt.a.logIn},r.a.createElement(me.b,{to:"login/"},r.a.createElement("div",null,"Log In")," "))),r.a.createElement("div",{className:Yt.a.name},"HellDream"),r.a.createElement("div",null,r.a.createElement("img",{className:Yt.a.logo,src:Kt.a,alt:"logo"}))))},Qt=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null," ",r.a.createElement(Vt,this.props)," ")}}]),a}(r.a.Component),Xt=Object(v.b)((function(e){return Object(b.a)({},e.authMe)}),{logout:function(){return function(){var e=Object(D.a)(I.a.mark((function e(t){var a;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B();case 2:0===(a=e.sent).resultCode&&t(X(!1)),t(Q(Object(b.a)({},a.data)));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(Qt),$t=a(93),ea=a.n($t),ta=ue(30),aa=Object(S.a)({form:"login"})((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement("div",null,r.a.createElement(C.a,{name:"login",component:oe,type:"text",placeholder:"login",validate:[ie,ta]})),r.a.createElement("div",null,r.a.createElement(C.a,{name:"password",component:oe,type:"text",placeholder:"password",validate:[ie,ta]})),r.a.createElement("div",null,r.a.createElement(C.a,{name:"checkbox",component:"input",type:"checkbox"}),"Remember Me"),e.error&&r.a.createElement("div",{className:se.a.commonError}," ",e.error," "),e.captcha&&r.a.createElement("div",null,r.a.createElement("img",{src:e.captcha}),r.a.createElement(C.a,{name:"symbols",component:oe,type:"text",placeholder:"symbols"})," "),r.a.createElement("div",null,r.a.createElement("button",null,"Login"))))})),na=Object(v.b)((function(e){return{authMe:e.authMe.isAuthMe,captcha:e.authMe.captcha}}),{isLogin:function(e){return function(){var t=Object(D.a)(I.a.mark((function t(a){var n,r;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,R(e);case 3:0===(n=t.sent).resultCode?a(ee()):(10===n.resultCode&&a(te()),r=n.messages.length>0?n.messages[0]:"Some errors",a(Object(M.a)("login",{_error:r})));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:ea.a.starter},"LOGIN"),e.authMe?r.a.createElement("div",null,"You are login successfully"):r.a.createElement(aa,{onSubmit:function(t){e.isLogin(t)},captcha:e.captcha}))})),ra={initialized:!1},sa=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ra,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-INITIALIZE":return Object(b.a)(Object(b.a)({},e),{},{initialized:!0});default:return e}},ca=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).PostsComp=function(){return r.a.createElement(Zt,{store:e.props.store})},e.DialogsMessagesComp=function(){return r.a.createElement(we,{store:e.props.store})},e.UsersComp=function(){return r.a.createElement(ot,{store:e.props.store})},e.LoginFormContainerCom=function(){return r.a.createElement(na,{store:e.props.store})},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.props.setInitialize()}},{key:"render",value:function(){return this.props.initialized?r.a.createElement("div",{className:"app-wrapper"},r.a.createElement(Xt,null),r.a.createElement(Se,null),r.a.createElement("div",{className:"app-wrapper-content"},r.a.createElement(m.b,{path:"/dialogs",render:this.DialogsMessagesComp}),r.a.createElement(m.b,{path:"/profile/:userId?",render:this.PostsComp}),r.a.createElement(m.b,{path:"/news",render:f}),r.a.createElement(m.b,{path:"/music",render:d}),r.a.createElement(m.b,{path:"/settings",render:g}),r.a.createElement(m.b,{path:"/users",render:this.UsersComp}),r.a.createElement(m.b,{path:"/login",render:this.LoginFormContainerCom}))):r.a.createElement(Ye,null)}}]),a}(r.a.Component),oa=Object(x.compose)(m.f,Object(v.b)((function(e){return{initialized:e.appInit.initialized}}),{setInitialize:function(){return function(){var e=Object(D.a)(I.a.mark((function e(t){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(ee());case 2:t({type:"SET-INITIALIZE"});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}))(ca);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ia={friendsList:[{id:1,name:"Zorro"},{id:2,name:"Lyubov"},{id:3,name:"Kuscherenko"}]},ua=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ia;return e},la=a(148),ma=a(134),pa=a(149),fa=a(10),da=fa.createStore,ga=fa.combineReducers,va=fa.applyMiddleware,ha=da(ga({profilePage:dt,messagesPage:k,sideBar:ua,usersPage:Te,authMe:ae,appInit:sa,form:ma.a}),Object(pa.composeWithDevTools)(va(la.a)));window.store=ha;var ba=ha;c.a.render(r.a.createElement(v.a,{store:ba},r.a.createElement(me.a,null,r.a.createElement(oa,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},31:function(e,t,a){e.exports={editionVersion:"ProfileStatus_editionVersion__34QJ5",status:"ProfileStatus_status__PRDP4",readyStatus:"ProfileStatus_readyStatus__1-qBM"}},33:function(e,t,a){e.exports={error:"InputChecker_error__3bOFz",messageError:"InputChecker_messageError__2L7eE",commonError:"InputChecker_commonError__15Qry"}},43:function(e,t,a){e.exports={logo:"Header_logo__3b1l2",name:"Header_name__wsK4x",header:"Header_header__10dxk",loginPhrase:"Header_loginPhrase__3mCng",userLogin:"Header_userLogin__230Sn",logIn:"Header_logIn__IbfsR"}},49:function(e,t,a){e.exports={userPage:"Users_userPage__3pdtU",butGET:"Users_butGET__3mBVF",preloader:"Users_preloader__3ube4",pagination:"Users_pagination__1ZtKZ"}},59:function(e,t,a){e.exports={dialogs:"Dialogs_dialogs__2BwxY",dialogsItems:"Dialogs_dialogsItems__5NlB3",dialog:"Dialogs_dialog__39fd-",message:"Dialogs_message__cuXq7",active:"Dialogs_active__17luP"}},71:function(e,t,a){e.exports=a.p+"static/media/zorro.097a33ad.jpg"},73:function(e,t,a){e.exports={dialog:"Dialog_dialog__3izJD",active:"Dialog_active__1j-Og",avatar:"Dialog_avatar__1n0LU"}},75:function(e,t,a){e.exports={avatar:"Friends_avatar__2iBkW",friend:"Friends_friend__1Hlqs",name:"Friends_name__YkjbY"}},76:function(e,t,a){e.exports={pages:"Pagination_pages__3ksA0",page:"Pagination_page__1iloC",pageSelected:"Pagination_pageSelected__EFH4Z"}},93:function(e,t,a){e.exports={starter:"Login_starter__1tZcA"}},99:function(e,t,a){e.exports={preloader:"Preloader_preloader__UMRl1",divPreloader:"Preloader_divPreloader__3iYxB"}}},[[175,1,2]]]);
//# sourceMappingURL=main.8f7d7054.chunk.js.map