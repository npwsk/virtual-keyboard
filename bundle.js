(()=>{"use strict";const e=JSON.parse('[[{"caseDown":"`","caseUp":"~","code":"Backquote"},{"caseDown":"1","caseUp":"!","code":"Digit1"},{"caseDown":"2","caseUp":"@","code":"Digit2"},{"caseDown":"3","caseUp":"#","code":"Digit3"},{"caseDown":"4","caseUp":"$","code":"Digit4"},{"caseDown":"5","caseUp":"%","code":"Digit5"},{"caseDown":"6","caseUp":"^","code":"Digit6"},{"caseDown":"7","caseUp":"&","code":"Digit7"},{"caseDown":"8","caseUp":"*","code":"Digit8"},{"caseDown":"9","caseUp":"(","code":"Digit9"},{"caseDown":"0","caseUp":")","code":"Digit0"},{"caseDown":"-","caseUp":"_","code":"Minus"},{"caseDown":"=","caseUp":"+","code":"Equal"},{"caseDown":"Backspace","caseUp":"Backspace","code":"Backspace"}],[{"caseDown":"Tab","caseUp":"Tab","code":"Tab"},{"caseDown":"q","caseUp":"Q","code":"KeyQ"},{"caseDown":"w","caseUp":"W","code":"KeyW"},{"caseDown":"e","caseUp":"E","code":"KeyE"},{"caseDown":"r","caseUp":"R","code":"KeyR"},{"caseDown":"t","caseUp":"T","code":"KeyT"},{"caseDown":"y","caseUp":"Y","code":"KeyY"},{"caseDown":"u","caseUp":"U","code":"KeyU"},{"caseDown":"i","caseUp":"I","code":"KeyI"},{"caseDown":"o","caseUp":"O","code":"KeyO"},{"caseDown":"p","caseUp":"P","code":"KeyP"},{"caseDown":"[","caseUp":"{","code":"BracketLeft"},{"caseDown":"]","caseUp":"}","code":"BracketRight"},{"caseDown":"\\\\","caseUp":"|","code":"Backslash"},{"caseDown":"Del","caseUp":"Del","code":"Delete"}],[{"caseDown":"CapsLock","caseUp":"CapsLock","code":"CapsLock"},{"caseDown":"a","caseUp":"A","code":"KeyA"},{"caseDown":"s","caseUp":"S","code":"KeyS"},{"caseDown":"d","caseUp":"D","code":"KeyD"},{"caseDown":"f","caseUp":"F","code":"KeyF"},{"caseDown":"g","caseUp":"G","code":"KeyG"},{"caseDown":"h","caseUp":"H","code":"KeyH"},{"caseDown":"j","caseUp":"J","code":"KeyJ"},{"caseDown":"k","caseUp":"K","code":"KeyK"},{"caseDown":"l","caseUp":"L","code":"KeyL"},{"caseDown":";","caseUp":":","code":"Semicolon"},{"caseDown":"\\"","caseUp":"\'","code":"Quote"},{"caseDown":"Enter","caseUp":"Enter","code":"Enter"}],[{"caseDown":"Shift","caseUp":"Shift","code":"ShiftLeft"},{"caseDown":"z","caseUp":"Z","code":"KeyZ"},{"caseDown":"x","caseUp":"X","code":"KeyX"},{"caseDown":"c","caseUp":"C","code":"KeyC"},{"caseDown":"v","caseUp":"V","code":"KeyV"},{"caseDown":"b","caseUp":"B","code":"KeyB"},{"caseDown":"n","caseUp":"N","code":"KeyN"},{"caseDown":"m","caseUp":"M","code":"KeyM"},{"caseDown":",","caseUp":"<","code":"Comma"},{"caseDown":".","caseUp":">","code":"Period"},{"caseDown":"/","caseUp":"?","code":"Slash"},{"caseDown":"↑","caseUp":"↑","code":"ArrowUp"},{"caseDown":"Shift","caseUp":"Shift","code":"ShiftRight"}],[{"caseDown":"Ctrl","caseUp":"Ctrl","code":"ControlLeft"},{"caseDown":"Win","caseUp":"Win","code":"MetaLeft"},{"caseDown":"Alt","caseUp":"Alt","code":"AltLeft"},{"caseDown":" ","caseUp":" ","code":"Space"},{"caseDown":"Alt","caseUp":"Alt","code":"AltRight"},{"caseDown":"Ctrl","caseUp":"Ctrl","code":"ControlRight"},{"caseDown":"←","caseUp":"←","code":"ArrowLeft"},{"caseDown":"↓","caseUp":"↓","code":"ArrowDown"},{"caseDown":"→","caseUp":"→","code":"ArrowRight"}]]'),c=(e,c)=>{c?e.classList.add("key--active"):e.classList.remove("key--active")},a=(e,c)=>{const a=(e=>{const c=document.createElement("div");c.classList.add("keyboard");const a=document.createElement("div");a.classList.add("keyboard__inner");const s=e.map((e=>{const c=document.createElement("div");c.classList.add("keyboard__row");const a=e.map((e=>{const c=(e=>{const{uppercase:c,lowercase:a,code:s}=e;let t;switch(s.toLowerCase()){case"tab":case"backspace":case"delete":case"capslock":case"enter":case"space":t=s.toLowerCase();break;case"shiftleft":case"shiftright":case"controlleft":case"controlright":case"metaleft":case"metaright":case"altleft":case"altright":t=s.toLowerCase().replace(/(right|left)/g,"")}const o=document.createElement("button");o.classList.add("key"),t&&o.classList.add(`key--${t}`),o.setAttribute("data-uppercase",c),o.setAttribute("data-lowercase",a),o.setAttribute("data-code",s);const n=document.createElement("div");n.classList.add("key__content");const d=document.createElement("div");d.classList.add("key__text","key__text--up-case"),d.textContent=c;const p=document.createElement("div");return p.classList.add("key__text","key__text--down-case"),c!==a&&(p.textContent=a??""),n.append(d,p),o.append(n),o})(e);return c.classList.add("keyboard__key"),c}));return c.append(...a),c}));return a.append(...s),c.append(a),c})(e);return c.append(a),a},s=class{state={value:"",capsLock:!1};keys=[];keyElems=[];constructor(e){this.keys=e}updateValue(e){const{code:c}=e.dataset;let a;switch(c){case"ControlLeft":case"ControlRight":case"ShiftLeft":case"ShiftRight":case"MetaRight":case"Delete":case"Backspace":case"ArrowLeft":case"ArrowRight":case"ArrowUp":case"ArrowDown":a="";break;case"Tab":a="\t";break;case"Enter":a="\n";break;case"CapsLock":this.state.capsLock=!this.state.capsLock,a="";break;default:a=this.state.capsLock?e.dataset.uppercase:e.dataset.lowercase}this.state={...this.state,value:a}}pressKey(e){const c=this.keyElems.find((c=>c.dataset.code===e));c&&(c.classList.add("key--pressed"),this.updateValue(c))}updateKey(e,a){const s=this.keyElems.find((c=>c.dataset.code===e));s&&(a||this.state.capsLock?(c(s,a),this.updateValue(s)):c(s,a))}init(e){const c=a(this.keys,e);this.keyElems=Array.from(c.querySelectorAll(".key"))}};document.addEventListener("DOMContentLoaded",(()=>{const c=e.map((e=>e.map((e=>new class{uppercase;lowercase;code;constructor(e,c,a){this.uppercase=e,this.lowercase=c,this.code=a}}(e.caseUp,e.caseDown,e.code))))),a=new s(c),t=new class{value="";inputEl=null;focus(){this.inputEl.focus()}updateValue(e){var c,a;this.value+=e.state.value,c=this.inputEl,a=this.value,c.value=a}init(e){this.inputEl=(e=>{const c=(()=>{const e=document.createElement("textarea");return e.classList.add("input-field"),e})();return e.append(c),c})(e)}},o=document.createElement("main");o.classList.add("app"),t.init(o),a.init(o),document.body.append(o);const n={keyUp:null};window.addEventListener("keydown",(e=>((e,c,a,s)=>{if(e.repeat)return;const{code:t}=e;s.keyUp=Date.now(),c.updateKey(t,!0),a.updateValue(c)})(e,a,t,n))),window.addEventListener("keyup",(e=>((e,c,a)=>{if(e.repeat)return;const{code:s}=e,t=Date.now()-a.keyUp;t>=200?c.updateKey(s,!1):setTimeout((()=>c.updateKey(s,!1)),t)})(e,a,n))),a.keyElems.forEach((e=>{e.addEventListener("click",(e=>((e,c,a)=>{const{code:s}=e.currentTarget.dataset;c.pressKey(s),a.updateValue(c),a.focus()})(e,a,t))),e.addEventListener("animationend",(()=>e.classList.remove("key--pressed")))}))}))})();