import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{f as m,i as r}from"./assets/vendor-c2cf587c.js";let e;const n=document.querySelector("button[data-start]");let f=document.querySelector("span[data-seconds]"),h=document.querySelector("span[data-minutes]"),p=document.querySelector("span[data-hours]"),S=document.querySelector("span[data-days]");const s={enableTime:!0,time_24hr:!0,defaultDate:Date.now(),minuteIncrement:1,onClose(t){console.log(t[0]),t[0]-s.defaultDate>0?(e=t[0],console.log(e),n.removeAttribute("disabled")):(b(),n.setAttribute("disabled","")),console.log("user selected:",e)}};m("#datetime-picker",s);function i(t){const u=Math.floor(t/864e5),l=Math.floor(t%864e5/36e5),c=Math.floor(t%864e5%36e5/6e4),d=Math.floor(t%864e5%36e5%6e4/1e3);return{days:u,hours:l,minutes:c,seconds:d}}console.log(i(e));function g(t){f.textContent=t.seconds.toString().padStart(2,"0"),h.textContent=t.minutes.toString().padStart(2,"0"),p.textContent=t.hours.toString().padStart(2,"0"),S.textContent=t.days.toString().padStart(2,"0")}function y(){n.setAttribute("disabled",""),console.log(e);let t=setInterval(()=>{let o=e-Date.now();console.log(o),o<1e3&&clearInterval(t);let a=i(o);console.log(a),g(a)},1e3)}n.addEventListener("click",y);r.settings({timeout:1e4,resetOnHover:!0,icon:"material-icons",transitionIn:"flipInX",transitionOut:"flipOutX"});function b(){r.error({title:"Error",message:"Please choose a date in the future"})}
//# sourceMappingURL=commonHelpers.js.map
