(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{736:function(e,t,n){},737:function(e,t,n){},738:function(e,t,n){},739:function(e,t,n){},745:function(e,t,n){"use strict";n.r(t);var r=n(127),a=n(14),i=n.n(a),s=n(25),o=n(6),c=n(9),l=n(11),u=n(10),d=n(12),p=n(0),f=n.n(p),h=n(8),k=n.n(h),m=n(39),v=n(5),S=n.n(v),b=n(32),w=n(33),g=n.n(w),O=n(74),j=n.n(O),E=n(480),C=n.n(E),P=n(742),y=n(458),M=n(43),x=n(34),R=n(417),T=n(27),N=(n(736),function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"shouldComponentUpdate",value:function(e,t,n){var r=this.props,a=r.info;return r.theme!==e.theme||a!==e.info}},{key:"render",value:function(){var e=this.props,t=e.classes,n=e.info,r=e.onSelect,a=e.onMouseDown,i=e.onMouseOver;if(!n)return null;var s=n.title,o=n.stickers.map(function(e,n){return f.a.createElement("div",{className:k()("sticker-set-item",t.stickerSetItem),key:e.sticker.id,"data-sticker-id":e.sticker.id,onClick:function(){return r(e)},onMouseDown:a,onMouseOver:i},f.a.createElement(R.a,{key:e.sticker.id,className:"sticker-set-item-sticker",sticker:e,preview:!0,displaySize:T.V-6,blur:!1}))});return f.a.createElement("div",{className:"sticker-set"},f.a.createElement("div",{className:k()("sticker-set-title",t.title)},f.a.createElement("span",null,s)),f.a.createElement("div",{className:"sticker-set-content"},o))}}]),t}(f.a.Component)),U=S()(function(e){return{title:{backgroundColor:e.palette.background.paper,color:e.palette.text.primary},stickerSetItem:{width:T.V,height:T.V,padding:3,boxSizing:"border-box","&:hover":{background:"dark"===e.palette.type?"#303030":"#f4f4f4",borderRadius:6}}}},{withTheme:!0})(N),I=n(126),D=function(){function e(t){var n=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];Object(o.a)(this,e),this.start=function(){n.stopped=!1,n.id=requestAnimationFrame(n.startAnim)},this.startAnim=function(e){var t=n.start,r=n.duration;n.start=e,n.end=t+r,n.draw(e)},this.draw=function(t){var r=n.stopped,a=n.duration,i=n.start,s=n.options;if(!r){t-i>=a&&(n.stopped=!0);var o=(t-i)/a,c=e.outSine(o);s.forEach(function(e){var t=e.from,n=e.to;(0,e.func)(t+(n-t)*c)}),n.id=requestAnimationFrame(n.draw)}},this.stop=function(){n.stopped=!0,cancelAnimationFrame(n.id)},this.options=r,this.duration=t}return Object(c.a)(e,null,[{key:"outSine",value:function(e){return Math.sin(e*Math.PI/2)}}]),e}(),L=n(128),V=n(426),B=(n(737),function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).onClientUpdateStickerSetPosition=function(e){var t=e.position;n.setState({position:t})},n.scrollToPosition=function(){var e=n.state.position,t=Object(M.a)(Object(M.a)(n)),r=t.animator,a=t.anchorRef,i=t.scrollRef.current,s=a.current,o=x.findDOMNode(s),c=i.scrollLeft,l=44*e-147,u=Number(o.style.left.replace("px","")),d=44*e;r&&r.stop(),n.animator=new D(T.a,[{from:c,to:l,func:function(e){return i.scrollLeft=e}},{from:Math.abs(d-u)>338?d-338*Math.sign(d-u):u,to:d,func:function(e){return o.style.left=e+"px"}}]),n.animator.start()},n.handleWheel=function(e){var t=Object(M.a)(Object(M.a)(n)).scrollRef;0===e.deltaX&&(t.current.scrollLeft+=e.deltaY)},n.handleSelect=function(e){var t=n.props,r=t.stickers;(0,t.onSelect)(r.indexOf(e))},n.state={position:0},n.scrollRef=f.a.createRef(),n.anchorRef=f.a.createRef(),n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){V.a.on("clientUpdateStickerSetPosition",this.onClientUpdateStickerSetPosition)}},{key:"componentWillUnmount",value:function(){V.a.removeListener("clientUpdateStickerSetPosition",this.onClientUpdateStickerSetPosition)}},{key:"componentDidUpdate",value:function(e,t,n){t.position!==this.state.position&&this.scrollToPosition()}},{key:"render",value:function(){var e=this,t=this.props,n=t.classes,r=t.stickers.map(function(t){return f.a.createElement(R.a,{key:t.sticker.id,className:"stickers-picker-header-sticker",preview:!0,sticker:t,displaySize:32,blur:!1,openMedia:function(){return e.handleSelect(t)}})});return f.a.createElement("div",{className:k()("stickers-picker-header",n.borderColor)},f.a.createElement("div",{ref:this.scrollRef,className:"stickers-picker-header-scroll",onWheel:this.handleWheel},f.a.createElement("div",{className:"stickers-picker-header-items"},r),f.a.createElement("div",{ref:this.anchorRef,className:k()("stickers-picker-header-anchor",n.accentBackgroundDark)})))}}]),t}(f.a.Component)),A=S()(function(e){return Object(I.a)({},Object(L.b)(e),Object(L.a)(e))})(B),F=n(17),_=n(403),z=n(413),H=n(402),W=n(2),q=(n(738),function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).scrollTop=function(){n.scrollRef.current.scrollTop=0},n.loadContent=function(){var e=Object(s.a)(i.a.mark(function e(t,r){var a,s,o,c;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.state.stickerSets){e.next=2;break}return e.abrupt("return");case 2:if(r){e.next=11;break}return e.next=5,W.a.send({"@type":"getInstalledStickerSets",is_masks:!1});case 5:return a=e.sent,s=[],a.sets.forEach(function(e){s.push(W.a.send({"@type":"getStickerSet",set_id:e.id}))}),e.next=10,Promise.all(s);case 10:r=e.sent;case 11:o=r.slice(0,5),c=r.reduce(function(e,t){return t.stickers.length>0&&e.push(t.stickers[0]),e},[]),n.setState({stickerSets:t,sets:o,headerStickers:c}),n.setsLength=o.length;case 15:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}(),n.loadInViewContentOnScroll=function(){n.loadInViewContent()},n.loadInViewContentOnScrollEnd=function(){n.loadInViewContent(400)},n.loadInViewContent=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=n.scrollRef.current,r=n.state.sets,a=[];r.forEach(function(r){var i=n.itemsMap.get(r.id),s=x.findDOMNode(i);if(s){var o=t.scrollTop-e,c=t.scrollTop+t.offsetHeight+e,l=s.offsetTop,u=s.offsetTop+s.clientHeight;l>=o&&s.offsetTop<=c?a.push(r):u>=o&&u<=c?a.push(r):l<=o&&u>=c&&a.push(r)}}),a.forEach(function(e){var t=H.a.getStore();n.loadedSets.has(e.id)||(n.loadedSets.set(e.id,e.id),Object(_.r)(t,e))})},n.updatePosition=function(){var e=n.scrollRef.current,t=n.state.sets,r=e.scrollHeight,a=0,i=0;t.forEach(function(t,s){var o=n.itemsMap.get(t.id);if(o){var c=x.findDOMNode(o);if(c){i=0===s?c.offsetTop:i;var l=c.offsetTop-i;if(c&&l<=e.scrollTop){var u=Math.abs(e.scrollTop-l);u<=r&&(r=u,a=s)}}}}),W.a.clientUpdate({"@type":"clientUpdateStickerSetPosition",position:a})},n.handleScroll=Object(s.a)(i.a.mark(function e(){var t,r,a,s,o,c,l,u;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.loadInViewContentOnScrollEnd(),n.updatePosition(),t=n.scrollRef.current,!n.loadingChunk){e.next=5;break}return e.abrupt("return");case 5:if(r=!1,t.scrollTop+t.offsetHeight>=t.scrollHeight-400&&(r=!0),r){e.next=9;break}return e.abrupt("return",!1);case 9:if(a=n.state,s=a.sets,(o=a.stickerSets).sets.length!==s.length){e.next=12;break}return e.abrupt("return");case 12:return n.loadingChunk=!0,c=[],o.sets.slice(n.setsLength,n.setsLength+5).forEach(function(e){c.push(W.a.send({"@type":"getStickerSet",set_id:e.id}))}),e.next=17,Promise.all(c).finally(function(){return n.loadingChunk=!1});case 17:l=e.sent,n.setsLength+=l.length,u=s.concat(l),n.setState({sets:u});case 21:case"end":return e.stop()}},e)})),n.loadPreviewContent=function(e){var t=n.state.sets,r=Object(z.c)(t).find(function(t){return t.sticker.id===e});if(r){var a=H.a.getStore();Object(_.q)(a,r,null);Object(z.b)(r,t,5).forEach(function(e){Object(_.q)(a,e,null)})}},n.handleMouseOver=function(e){var t=Number(e.target.dataset.stickerId);if(t&&n.mouseDown){n.mouseDownStickerId!==t&&(n.mouseDownStickerId=null),n.setState({previewStickerId:t}),n.loadPreviewContent(t);var r=n.props.onPreview,a=n.state.sets;r(Object(z.c)(a).find(function(e){return e.sticker.id===t}))}},n.handleMouseDown=function(e){var t=Number(e.target.dataset.stickerId);if(t){n.mouseDownStickerId=t;var r=Date.now();return n.setState({previewStickerId:t,timestamp:r,showPreview:!1,cancelSend:!1}),setTimeout(function(){n.state.timestamp===r&&n.setState({showPreview:!0,cancelSend:!0},function(){var e=n.props.onPreview,r=n.state.sets;e(Object(z.c)(r).find(function(e){return e.sticker.id===t}))})},500),n.loadPreviewContent(t),n.mouseDown=!0,document.addEventListener("mouseup",n.handleMouseUp),e.preventDefault(),e.stopPropagation(),!1}},n.handleMouseUp=function(){n.setState({previewStickerId:0,timestamp:0,showPreview:!1}),(0,n.props.onPreview)(null),n.mouseDown=!1,document.removeEventListener("mouseup",n.handleMouseUp)},n.handleStickerSelect=function(e){var t=n.props.onSelect;n.state.cancelSend||t(e)},n.handleSelectSet=function(){var e=Object(s.a)(i.a.mark(function e(t){var r,a,s,o,c,l,u,d,p,f;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n.state,a=r.sets,s=r.stickerSets,o=Object(M.a)(Object(M.a)(n)),c=o.scrollRef,!(t<a.length)){e.next=7;break}(l=n.itemsMap.get(a[t].id))&&(u=x.findDOMNode(l))&&(c.current.scrollTop=u.offsetTop),e.next=21;break;case 7:if(!(t<s.sets.length)){e.next=21;break}if(!n.loadingChunk){e.next=10;break}return e.abrupt("return");case 10:if(s.sets.length!==a.length){e.next=12;break}return e.abrupt("return");case 12:return n.loadingChunk=!0,d=[],s.sets.slice(n.setsLength,t+1).forEach(function(e){d.push(W.a.send({"@type":"getStickerSet",set_id:e.id}))}),e.next=17,Promise.all(d).finally(function(){return n.loadingChunk=!1});case 17:p=e.sent,n.setsLength+=p.length,f=a.concat(p),n.setState({sets:f},function(){t<f.length&&n.handleSelectSet(t)});case 21:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n.scrollRef=f.a.createRef(),n.itemsMap=new Map,n.loadedSets=new Map,n.state={stickerSets:null,sets:[],headerStickers:[],position:0},n.loadInViewContentOnScrollEnd=Object(F.d)(n.loadInViewContentOnScrollEnd,100),n.loadInViewContentOnScroll=Object(F.v)(n.loadInViewContentOnScroll,2e3),n.updatePosition=Object(F.v)(n.updatePosition,250),n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"shouldComponentUpdate",value:function(e,t,n){var r=this.state,a=r.position,i=r.stickerSets,s=r.sets,o=r.showPreview;return t.stickerSets!==i||(t.sets!==s||(t.showPreview!==o||t.position!==a))}},{key:"render",value:function(){var e=this,t=this.state,n=t.stickerSets,r=t.sets,a=t.headerStickers;if(!n)return null;if(!r)return null;if(!r.length)return null;this.itemsMap.clear();var i=r.map(function(t){return f.a.createElement(U,{key:t.id,ref:function(n){return e.itemsMap.set(t.id,n)},info:t,onSelect:e.handleStickerSelect,onMouseDown:e.handleMouseDown,onMouseOver:e.handleMouseOver})});return f.a.createElement("div",{className:"stickers-picker"},f.a.createElement(A,{onSelect:this.handleSelectSet,stickers:a}),f.a.createElement("div",{ref:this.scrollRef,className:"stickers-picker-scroll",onScroll:this.handleScroll},i))}}]),t}(f.a.Component)),X=n(13),J=n(90),Y=(n(739),function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).onClientUpdateChange=function(e){n.picker=null},n.handleButtonMouseEnter=function(e){n.buttonEnter=!0,setTimeout(function(){n.buttonEnter&&(n.updatePicker(!0),n.loadStickerSets())},T.d)},n.loadStickerSets=Object(s.a)(i.a.mark(function e(){var t,r,a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.sets){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,W.a.send({"@type":"getInstalledStickerSets",is_masks:!1});case 4:return n.stickerSets=e.sent,t=[],n.stickerSets.sets.forEach(function(e){t.push(W.a.send({"@type":"getStickerSet",set_id:e.id}))}),e.next=9,Promise.all(t);case 9:n.sets=e.sent,r=n.stickersPickerRef.current,a=H.a.getStore(),n.sets.slice(0,5).reverse().forEach(function(e){Object(_.r)(a,e),r.loadedSets.set(e.id,e.id)}),n.sets.reduce(function(e,t){return t.stickers.length>0&&e.push(t.stickers[0]),e},[]).forEach(function(e){Object(_.s)(a,e)});case 16:case"end":return e.stop()}},e)})),n.handleButtonMouseLeave=function(){n.buttonEnter=!1,setTimeout(function(){n.tryClosePicker()},T.d)},n.tryClosePicker=function(){var e=n.state.sticker;n.paperEnter||n.buttonEnter||e||n.updatePicker(!1)},n.handlePaperMouseEnter=function(){n.paperEnter=!0},n.handlePaperMouseLeave=function(){n.paperEnter=!1,setTimeout(function(){n.tryClosePicker()},T.d)},n.updatePicker=function(e){n.setState({open:e})},n.handleEmojiClick=function(){n.setState({tab:0})},n.handleStickersClick=function(){var e=n.stickersPickerRef.current,t=n.state.tab;e.loadContent(n.stickerSets,n.sets),n.setState({tab:1}),1===t&&e.scrollTop()},n.handleStickerSend=function(e){e&&(W.a.clientUpdate({"@type":"clientUpdateStickerSend",sticker:e}),n.updatePicker(!1))},n.handleStickerPreview=function(e){n.setState({sticker:e}),e||n.tryClosePicker()},n.state={open:!1,tab:0},n.emojiPickerRef=f.a.createRef(),n.stickersPickerRef=f.a.createRef(),n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){X.a.on("clientUpdateThemeChange",this.onClientUpdateChange),J.a.on("clientUpdateLanguageChange",this.onClientUpdateChange)}},{key:"componentWillUnmount",value:function(){X.a.removeListener("clientUpdateThemeChange",this.onClientUpdateChange),J.a.removeListener("clientUpdateLanguageChange",this.onClientUpdateChange)}},{key:"render",value:function(){var e=this.props,t=e.classes,n=e.theme,a=e.t,i=this.state,s=i.open,o=i.tab,c=i.sticker;if(s&&!this.picker){var l={search:a("Search"),notfound:a("NotEmojiFound"),skintext:a("ChooseDefaultSkinTone"),categories:{search:a("SearchResults"),recent:a("Recent"),people:a("SmileysPeople"),nature:a("AnimalsNature"),foods:a("FoodDrink"),activity:a("Activity"),places:a("TravelPlaces"),objects:a("Objects"),symbols:a("Symbols"),flags:a("Flags"),custom:a("Custom")}};this.picker=f.a.createElement(P.a,{ref:this.emojiPickerRef,set:"apple",showPreview:!1,showSkinTones:!1,onSelect:this.props.onSelect,color:n.palette.primary.dark,i18n:l,style:{width:338,overflowX:"hidden"}}),this.stickersPicker=f.a.createElement(q,{ref:this.stickersPickerRef,onSelect:this.handleStickerSend,onPreview:this.handleStickerPreview})}return f.a.createElement(f.a.Fragment,null,f.a.createElement("link",{rel:"stylesheet",type:"text/css",href:"dark"===n.palette.type?"emoji-mart.dark.css":"emoji-mart.light.css"}),f.a.createElement(j.a,{className:t.iconButton,"aria-label":"Emoticon",onMouseEnter:this.handleButtonMouseEnter,onMouseLeave:this.handleButtonMouseLeave},f.a.createElement(C.a,null)),f.a.createElement("div",{className:k()(t.pickerRoot,Object(r.a)({},t.pickerRootOpened,s)),onMouseEnter:this.handlePaperMouseEnter,onMouseLeave:this.handlePaperMouseLeave},f.a.createElement("div",{className:"emoji-picker-header"},f.a.createElement(g.a,{color:0===o?"primary":"default",className:t.headerButton,onClick:this.handleEmojiClick},a("Emoji")),f.a.createElement(g.a,{color:1===o?"primary":"default",className:t.headerButton,onClick:this.handleStickersClick},a("Stickers"))),f.a.createElement("div",{className:k()("emoji-picker-content",{"emoji-picker-content-stickers":1===o})},this.picker,this.stickersPicker),f.a.createElement(y.a,{sticker:c})))}}]),t}(f.a.Component)),G=Object(m.a)(S()(function(e){return{iconButton:{margin:"8px 0px"},headerButton:{borderRadius:0,flex:"50%"},pickerRoot:{zIndex:e.zIndex.modal,width:338,overflowX:"hidden",backgroundColor:e.palette.background.paper,color:e.palette.text.primary,borderRadius:e.shape.borderRadius,boxShadow:e.shadows[8],position:"absolute",bottom:80,display:"none"},pickerRootOpened:{display:"block"}}},{withTheme:!0}),Object(b.c)());t.default=G(Y)}}]);
//# sourceMappingURL=5.d9e68be2.chunk.js.map