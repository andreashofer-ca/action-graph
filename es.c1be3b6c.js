function re(o){Object.defineProperty(o,"__esModule",{value:!0,configurable:!0})}function $(o,g,i,t){Object.defineProperty(o,g,{get:i,set:t,enumerable:!0,configurable:!0})}function r(o){return o&&o.__esModule?o.default:o}var ne=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{},n=ne.parcelRequire11ea;n.register("jWeD5",function(o,g){re(o.exports),$(o.exports,"loader",function(){return n("tolM1").default}),$(o.exports,"DiffEditor",function(){return n("9h7GG").default}),$(o.exports,"useMonaco",function(){return n("bkM8a").default}),$(o.exports,"default",function(){return n("5JqyN").default});var i=n("tolM1"),t=n("9h7GG"),e=n("bkM8a"),a=n("5JqyN")});n.register("9h7GG",function(o,g){$(o.exports,"default",function(){return a});var i=n("er44Y"),t=n("kT2Q9"),e=(0,i.memo)(t.default),a=e});n.register("kT2Q9",function(o,g){$(o.exports,"default",function(){return v});var i=n("tolM1"),t=n("er44Y"),e=n("277vZ"),a=n("8HYmJ"),c=n("irhqf"),d=n("bp4hX"),u=n("93ZTR");function l({original:b,modified:T,language:R,originalLanguage:E,modifiedLanguage:C,originalModelPath:w,modifiedModelPath:Y,keepCurrentOriginalModel:k,keepCurrentModifiedModel:Z,theme:S,loading:J,options:P,height:V,width:q,className:H,wrapperProps:F,beforeMount:W,onMount:z}){const[O,A]=(0,t.useState)(!1),[I,j]=(0,t.useState)(!0),y=(0,t.useRef)(null),s=(0,t.useRef)(null),D=(0,t.useRef)(null),_=(0,t.useRef)(z),X=(0,t.useRef)(W);(0,c.default)(()=>{const M=i.default.init();return M.then(x=>(s.current=x)&&j(!1)).catch(x=>(x==null?void 0:x.type)!=="cancelation"&&console.error("Monaco initialization: error:",x)),()=>y.current?L():M.cancel()}),(0,d.default)(()=>{const M=y.current.getModifiedEditor();M.getOption(s.current.editor.EditorOption.readOnly)?M.setValue(T):T!==M.getValue()&&(M.executeEdits("",[{range:M.getModel().getFullModelRange(),text:T,forceMoveMarkers:!0}]),M.pushUndoStop())},[T],O),(0,d.default)(()=>{y.current.getModel().original.setValue(b)},[b],O),(0,d.default)(()=>{const{original:M,modified:x}=y.current.getModel();s.current.editor.setModelLanguage(M,E||R),s.current.editor.setModelLanguage(x,C||R)},[R,E,C],O),(0,d.default)(()=>{s.current.editor.setTheme(S)},[S],O),(0,d.default)(()=>{y.current.updateOptions(P)},[P],O);const m=(0,t.useCallback)(()=>{X.current(s.current);const M=(0,u.getOrCreateModel)(s.current,b,E||R,w),x=(0,u.getOrCreateModel)(s.current,T,C||R,Y);y.current.setModel({original:M,modified:x})},[R,T,C,b,E,w,Y]),f=(0,t.useCallback)(()=>{y.current=s.current.editor.createDiffEditor(D.current,{automaticLayout:!0,...P}),m(),s.current.editor.setTheme(S),A(!0)},[P,S,m]);(0,t.useEffect)(()=>{O&&_.current(y.current,s.current)},[O]),(0,t.useEffect)(()=>{!I&&!O&&f()},[I,O,f]);function L(){const M=y.current.getModel();if(!k){var x;(x=M.original)===null||x===void 0||x.dispose()}if(!Z){var N;(N=M.modified)===null||N===void 0||N.dispose()}y.current.dispose()}return r(t).createElement(a.default,{width:q,height:V,isEditorReady:O,loading:J,_ref:D,className:H,wrapperProps:F})}l.propTypes={original:r(e).string,modified:r(e).string,language:r(e).string,originalLanguage:r(e).string,modifiedLanguage:r(e).string,originalModelPath:r(e).string,modifiedModelPath:r(e).string,keepCurrentOriginalModel:r(e).bool,keepCurrentModifiedModel:r(e).bool,theme:r(e).string,loading:r(e).oneOfType([r(e).element,r(e).string]),options:r(e).object,width:r(e).oneOfType([r(e).number,r(e).string]),height:r(e).oneOfType([r(e).number,r(e).string]),className:r(e).string,wrapperProps:r(e).object,beforeMount:r(e).func,onMount:r(e).func},l.defaultProps={theme:"light",loading:"Loading...",options:{},keepCurrentOriginalModel:!1,keepCurrentModifiedModel:!1,width:"100%",height:"100%",wrapperProps:{},beforeMount:u.noop,onMount:u.noop};var v=l});n.register("277vZ",function(o,g){var i,t;o.exports=n("7yZAD")()});n.register("7yZAD",function(o,g){"use strict";var i=n("22VMo");function t(){}function e(){}e.resetWarningCache=t,o.exports=function(){function a(u,l,v,b,T,R){if(R!==i){var E=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw E.name="Invariant Violation",E}}a.isRequired=a;function c(){return a}var d={array:a,bigint:a,bool:a,func:a,number:a,object:a,string:a,symbol:a,any:a,arrayOf:c,element:a,elementType:a,instanceOf:c,node:a,objectOf:c,oneOf:c,oneOfType:c,shape:c,exact:c,checkPropTypes:e,resetWarningCache:t};return d.PropTypes=d,d}});n.register("22VMo",function(o,g){"use strict";var i="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";o.exports=i});n.register("8HYmJ",function(o,g){$(o.exports,"default",function(){return a});var i=n("er44Y"),t=n("6C948"),e=(0,i.memo)(t.default),a=e});n.register("6C948",function(o,g){$(o.exports,"default",function(){return u});var i=n("er44Y"),t=n("277vZ"),e=n("4o5vh"),a=n("fz2Uc"),c=n("c6gbs");function d({width:l,height:v,isEditorReady:b,loading:T,_ref:R,className:E,wrapperProps:C}){return r(i).createElement("section",(0,e.extends)({style:{...c.default.wrapper,width:l,height:v}},C),!b&&r(i).createElement(a.default,{content:T}),r(i).createElement("div",{ref:R,style:{...c.default.fullWidth,...!b&&c.default.hide},className:E}))}d.propTypes={width:r(t).oneOfType([r(t).number,r(t).string]).isRequired,height:r(t).oneOfType([r(t).number,r(t).string]).isRequired,loading:r(t).oneOfType([r(t).element,r(t).string]).isRequired,isEditorReady:r(t).bool.isRequired,className:r(t).string,wrapperProps:r(t).object};var u=d});n.register("4o5vh",function(o,g){$(o.exports,"extends",function(){return i});function i(){return i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(t[c]=a[c])}return t},i.apply(this,arguments)}});n.register("fz2Uc",function(o,g){$(o.exports,"default",function(){return a});var i=n("er44Y");const t={display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"};function e({content:c}){return r(i).createElement("div",{style:t},c)}var a=e});n.register("c6gbs",function(o,g){$(o.exports,"default",function(){return t});var t={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}}});n.register("irhqf",function(o,g){$(o.exports,"default",function(){return e});var i=n("er44Y");function t(a){(0,i.useEffect)(a,[])}var e=t});n.register("bp4hX",function(o,g){$(o.exports,"default",function(){return e});var i=n("er44Y");function t(a,c,d=!0){const u=(0,i.useRef)(!0);(0,i.useEffect)(u.current||!d?()=>{u.current=!1}:a,c)}var e=t});n.register("93ZTR",function(o,g){$(o.exports,"noop",function(){return i}),$(o.exports,"getOrCreateModel",function(){return t}),$(o.exports,"isUndefined",function(){return d});function i(){}function t(u,l,v,b){return e(u,b)||a(u,l,v,b)}function e(u,l){return u.editor.getModel(c(u,l))}function a(u,l,v,b){return u.editor.createModel(l,v,b&&c(u,b))}function c(u,l){return u.Uri.parse(l)}function d(u){return u===void 0}});n.register("bkM8a",function(o,g){$(o.exports,"default",function(){return c});var i=n("tolM1"),t=n("er44Y"),e=n("irhqf");function a(){const[d,u]=(0,t.useState)(i.default.__getMonacoInstance());return(0,e.default)(()=>{let l;return d||(l=i.default.init(),l.then(v=>{u(v)})),()=>{var v;return(v=l)===null||v===void 0?void 0:v.cancel()}}),d}var c=a});n.register("5JqyN",function(o,g){$(o.exports,"default",function(){return a});var i=n("er44Y"),t=n("fUd7w"),e=(0,i.memo)(t.default),a=e});n.register("fUd7w",function(o,g){$(o.exports,"default",function(){return T});var i=n("tolM1"),t=n("er44Y"),e=n("277vZ"),a=n("8HYmJ"),c=n("irhqf"),d=n("bp4hX"),u=n("93ZTR"),l=n("1GvGZ");const v=new Map;function b({defaultValue:R,defaultLanguage:E,defaultPath:C,value:w,language:Y,path:k,theme:Z,line:S,loading:J,options:P,overrideServices:V,saveViewState:q,keepCurrentModel:H,width:F,height:W,className:z,wrapperProps:O,beforeMount:A,onMount:I,onChange:j,onValidate:y}){const[s,D]=(0,t.useState)(!1),[_,X]=(0,t.useState)(!0),m=(0,t.useRef)(null),f=(0,t.useRef)(null),L=(0,t.useRef)(null),M=(0,t.useRef)(I),x=(0,t.useRef)(A),N=(0,t.useRef)(null),B=(0,t.useRef)(w),ee=(0,l.default)(k);(0,c.default)(()=>{const p=i.default.init();return p.then(h=>(m.current=h)&&X(!1)).catch(h=>(h==null?void 0:h.type)!=="cancelation"&&console.error("Monaco initialization: error:",h)),()=>f.current?te():p.cancel()}),(0,d.default)(()=>{const p=(0,u.getOrCreateModel)(m.current,R||w,E||Y,k);p!==f.current.getModel()&&(q&&v.set(ee,f.current.saveViewState()),f.current.setModel(p),q&&f.current.restoreViewState(v.get(k)))},[k],s),(0,d.default)(()=>{f.current.updateOptions(P)},[P],s),(0,d.default)(()=>{f.current.getOption(m.current.editor.EditorOption.readOnly)?f.current.setValue(w):w!==f.current.getValue()&&(f.current.executeEdits("",[{range:f.current.getModel().getFullModelRange(),text:w,forceMoveMarkers:!0}]),f.current.pushUndoStop())},[w],s),(0,d.default)(()=>{m.current.editor.setModelLanguage(f.current.getModel(),Y)},[Y],s),(0,d.default)(()=>{(0,u.isUndefined)(S)||f.current.revealLine(S)},[S],s),(0,d.default)(()=>{m.current.editor.setTheme(Z)},[Z],s);const K=(0,t.useCallback)(()=>{x.current(m.current);const p=k||C,h=(0,u.getOrCreateModel)(m.current,w||R,E||Y,p);f.current=m.current.editor.create(L.current,{model:h,automaticLayout:!0,...P},V),q&&f.current.restoreViewState(v.get(p)),m.current.editor.setTheme(Z),D(!0)},[R,E,C,w,Y,k,P,V,q,Z]);(0,t.useEffect)(()=>{s&&M.current(f.current,m.current)},[s]),(0,t.useEffect)(()=>{!_&&!s&&K()},[_,s,K]),B.current=w,(0,t.useEffect)(()=>{if(s&&j){var p,h;(p=N.current)===null||p===void 0||p.dispose(),N.current=(h=f.current)===null||h===void 0?void 0:h.onDidChangeModelContent(G=>{const U=f.current.getValue();B.current!==U&&j(U,G)})}},[s,j]),(0,t.useEffect)(()=>{if(s){const p=m.current.editor.onDidChangeMarkers(h=>{var G;const U=(G=f.current.getModel())===null||G===void 0?void 0:G.uri;if(U&&h.find(Q=>Q.path===U.path)){const Q=m.current.editor.getModelMarkers({resource:U});y==null||y(Q)}});return()=>{p==null||p.dispose()}}},[s,y]);function te(){var p;if((p=N.current)===null||p===void 0||p.dispose(),H)q&&v.set(k,f.current.saveViewState());else{var h;(h=f.current.getModel())===null||h===void 0||h.dispose()}f.current.dispose()}return r(t).createElement(a.default,{width:F,height:W,isEditorReady:s,loading:J,_ref:L,className:z,wrapperProps:O})}b.propTypes={defaultValue:r(e).string,defaultPath:r(e).string,defaultLanguage:r(e).string,value:r(e).string,language:r(e).string,path:r(e).string,theme:r(e).string,line:r(e).number,loading:r(e).oneOfType([r(e).element,r(e).string]),options:r(e).object,overrideServices:r(e).object,saveViewState:r(e).bool,keepCurrentModel:r(e).bool,width:r(e).oneOfType([r(e).number,r(e).string]),height:r(e).oneOfType([r(e).number,r(e).string]),className:r(e).string,wrapperProps:r(e).object,beforeMount:r(e).func,onMount:r(e).func,onChange:r(e).func,onValidate:r(e).func},b.defaultProps={theme:"light",loading:"Loading...",options:{},overrideServices:{},saveViewState:!0,keepCurrentModel:!1,width:"100%",height:"100%",wrapperProps:{},beforeMount:u.noop,onMount:u.noop,onValidate:u.noop};var T=b});n.register("1GvGZ",function(o,g){$(o.exports,"default",function(){return e});var i=n("er44Y");function t(a){const c=(0,i.useRef)();return(0,i.useEffect)(()=>{c.current=a},[a]),c.current}var e=t});