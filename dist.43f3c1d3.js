function L(f){return f&&f.__esModule?f.default:f}function ye(f){Object.defineProperty(f,"__esModule",{value:!0,configurable:!0})}function P(f,J,m,e){Object.defineProperty(f,J,{get:m,set:e,enumerable:!0,configurable:!0})}var Le=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{},I=Le.parcelRequire11ea,Ve=I.register;Ve("2uENX",function(f,J){ye(f.exports),P(f.exports,"DiffEditor",function(){return ve}),P(f.exports,"useMonaco",function(){return Me}),P(f.exports,"Editor",function(){return K}),P(f.exports,"default",function(){return me}),P(f.exports,"loader",function(){return I("7hWZw").default});var m=I("7hWZw"),e=I("afhwv"),te={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},U=te,ne={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},ae=ne;function ue({children:r}){return L(e).createElement("div",{style:ae.container},r)}var ie=ue,oe=ie;function ce({width:r,height:n,isEditorReady:u,loading:t,_ref:p,className:g,wrapperProps:M}){return L(e).createElement("section",{style:{...U.wrapper,width:r,height:n},...M},!u&&L(e).createElement(oe,null,t),L(e).createElement("div",{ref:p,style:{...U.fullWidth,...!u&&U.hide},className:g}))}var de=ce,Q=(0,e.memo)(de);function le(r){(0,e.useEffect)(r,[])}var W=le;function fe(r,n,u=!0){let t=(0,e.useRef)(!0);(0,e.useEffect)(t.current||!u?()=>{t.current=!1}:r,n)}var h=fe;function V(){}function x(r,n,u,t){return se(r,t)||$e(r,n,u,t)}function se(r,n){return r.editor.getModel(Y(r,n))}function $e(r,n,u,t){return r.editor.createModel(n,u,t?Y(r,t):void 0)}function Y(r,n){return r.Uri.parse(n)}function pe({original:r,modified:n,language:u,originalLanguage:t,modifiedLanguage:p,originalModelPath:g,modifiedModelPath:M,keepCurrentOriginalModel:E=!1,keepCurrentModifiedModel:Z=!1,theme:R="light",loading:D="Loading...",options:w={},height:j="100%",width:F="100%",className:q,wrapperProps:z={},beforeMount:H=V,onMount:X=V}){let[v,S]=(0,e.useState)(!1),[C,c]=(0,e.useState)(!0),d=(0,e.useRef)(null),o=(0,e.useRef)(null),O=(0,e.useRef)(null),s=(0,e.useRef)(X),a=(0,e.useRef)(H),y=(0,e.useRef)(!1);W(()=>{let i=m.default.init();return i.then(l=>(o.current=l)&&c(!1)).catch(l=>l?.type!=="cancelation"&&console.error("Monaco initialization: error:",l)),()=>d.current?k():i.cancel()}),h(()=>{if(d.current&&o.current){let i=d.current.getOriginalEditor(),l=x(o.current,r||"",t||u||"text",g||"");l!==i.getModel()&&i.setModel(l)}},[g],v),h(()=>{if(d.current&&o.current){let i=d.current.getModifiedEditor(),l=x(o.current,n||"",p||u||"text",M||"");l!==i.getModel()&&i.setModel(l)}},[M],v),h(()=>{let i=d.current.getModifiedEditor();i.getOption(o.current.editor.EditorOption.readOnly)?i.setValue(n||""):n!==i.getValue()&&(i.executeEdits("",[{range:i.getModel().getFullModelRange(),text:n||"",forceMoveMarkers:!0}]),i.pushUndoStop())},[n],v),h(()=>{d.current?.getModel()?.original.setValue(r||"")},[r],v),h(()=>{let{original:i,modified:l}=d.current.getModel();o.current.editor.setModelLanguage(i,t||u||"text"),o.current.editor.setModelLanguage(l,p||u||"text")},[u,t,p],v),h(()=>{o.current?.editor.setTheme(R)},[R],v),h(()=>{d.current?.updateOptions(w)},[w],v);let N=(0,e.useCallback)(()=>{if(!o.current)return;a.current(o.current);let i=x(o.current,r||"",t||u||"text",g||""),l=x(o.current,n||"",p||u||"text",M||"");d.current?.setModel({original:i,modified:l})},[u,n,p,r,t,g,M]),T=(0,e.useCallback)(()=>{!y.current&&O.current&&(d.current=o.current.editor.createDiffEditor(O.current,{automaticLayout:!0,...w}),N(),o.current?.editor.setTheme(R),S(!0),y.current=!0)},[w,R,N]);(0,e.useEffect)(()=>{v&&s.current(d.current,o.current)},[v]),(0,e.useEffect)(()=>{!C&&!v&&T()},[C,v,T]);function k(){let i=d.current?.getModel();E||i?.original?.dispose(),Z||i?.modified?.dispose(),d.current?.dispose()}return L(e).createElement(Q,{width:F,height:j,isEditorReady:v,loading:D,_ref:O,className:q,wrapperProps:z})}var ge=pe,ve=(0,e.memo)(ge);function he(){let[r,n]=(0,e.useState)(m.default.__getMonacoInstance());return W(()=>{let u;return r||(u=m.default.init(),u.then(t=>{n(t)})),()=>u?.cancel()}),r}var Me=he;function we(r){let n=(0,e.useRef)();return(0,e.useEffect)(()=>{n.current=r},[r]),n.current}var Re=we,_=new Map;function Ee({defaultValue:r,defaultLanguage:n,defaultPath:u,value:t,language:p,path:g,theme:M="light",line:E,loading:Z="Loading...",options:R={},overrideServices:D={},saveViewState:w=!0,keepCurrentModel:j=!1,width:F="100%",height:q="100%",className:z,wrapperProps:H={},beforeMount:X=V,onMount:v=V,onChange:S,onValidate:C=V}){let[c,d]=(0,e.useState)(!1),[o,O]=(0,e.useState)(!0),s=(0,e.useRef)(null),a=(0,e.useRef)(null),y=(0,e.useRef)(null),N=(0,e.useRef)(v),T=(0,e.useRef)(X),k=(0,e.useRef)(),i=(0,e.useRef)(t),l=Re(g),ee=(0,e.useRef)(!1),A=(0,e.useRef)(!1);W(()=>{let $=m.default.init();return $.then(b=>(s.current=b)&&O(!1)).catch(b=>b?.type!=="cancelation"&&console.error("Monaco initialization: error:",b)),()=>a.current?xe():$.cancel()}),h(()=>{let $=x(s.current,r||t||"",n||p||"",g||u||"");$!==a.current?.getModel()&&(w&&_.set(l,a.current?.saveViewState()),a.current?.setModel($),w&&a.current?.restoreViewState(_.get(g)))},[g],c),h(()=>{a.current?.updateOptions(R)},[R],c),h(()=>{!a.current||t===void 0||(a.current.getOption(s.current.editor.EditorOption.readOnly)?a.current.setValue(t):t!==a.current.getValue()&&(A.current=!0,a.current.executeEdits("",[{range:a.current.getModel().getFullModelRange(),text:t,forceMoveMarkers:!0}]),a.current.pushUndoStop(),A.current=!1))},[t],c),h(()=>{let $=a.current?.getModel();$&&p&&s.current?.editor.setModelLanguage($,p)},[p],c),h(()=>{E!==void 0&&a.current?.revealLine(E)},[E],c),h(()=>{s.current?.editor.setTheme(M)},[M],c);let re=(0,e.useCallback)(()=>{if(!(!y.current||!s.current)&&!ee.current){T.current(s.current);let $=g||u,b=x(s.current,t||r||"",n||p||"",$||"");a.current=s.current?.editor.create(y.current,{model:b,automaticLayout:!0,...R},D),w&&a.current.restoreViewState(_.get($)),s.current.editor.setTheme(M),E!==void 0&&a.current.revealLine(E),d(!0),ee.current=!0}},[r,n,u,t,p,g,R,D,w,M,E]);(0,e.useEffect)(()=>{c&&N.current(a.current,s.current)},[c]),(0,e.useEffect)(()=>{!o&&!c&&re()},[o,c,re]),i.current=t,(0,e.useEffect)(()=>{c&&S&&(k.current?.dispose(),k.current=a.current?.onDidChangeModelContent($=>{A.current||S(a.current.getValue(),$)}))},[c,S]),(0,e.useEffect)(()=>{if(c){let $=s.current.editor.onDidChangeMarkers(b=>{let B=a.current.getModel()?.uri;if(B&&b.find(G=>G.path===B.path)){let G=s.current.editor.getModelMarkers({resource:B});C?.(G)}});return()=>{$?.dispose()}}return()=>{}},[c,C]);function xe(){k.current?.dispose(),j?w&&_.set(g,a.current.saveViewState()):a.current.getModel()?.dispose(),a.current.dispose()}return L(e).createElement(Q,{width:F,height:q,isEditorReady:c,loading:Z,_ref:y,className:z,wrapperProps:H})}var be=Ee,K=(0,e.memo)(be),me=K});
