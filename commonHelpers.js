import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{f as m,i as s}from"./assets/vendor-322d52e2.js";let e;const n=document.querySelector("button[data-start]");let f=document.querySelector("span[data-seconds]"),g=document.querySelector("span[data-minutes]"),h=document.querySelector("span[data-hours]"),p=document.querySelector("span[data-days]");const r={enableTime:!0,time_24hr:!0,defaultDate:Date.now(),minuteIncrement:1,onClose(t){console.log(t[0]),t[0]-r.defaultDate>0?(e=t[0],console.log(e),n.removeAttribute("disabled")):(b(),n.setAttribute("disabled","")),console.log("user selected:",e)}};m("#datetime-picker",r);function c(t){const i=Math.floor(t/864e5),l=Math.floor(t%864e5/36e5),u=Math.floor(t%864e5%36e5/6e4),d=Math.floor(t%864e5%36e5%6e4/1e3);return{days:i,hours:l,minutes:u,seconds:d}}console.log(c(e));function S(t){f.textContent=t.seconds.toString().padStart(2,"0"),g.textContent=t.minutes.toString().padStart(2,"0"),h.textContent=t.hours.toString().padStart(2,"0"),p.textContent=t.days.toString().padStart(2,"0")}function y(){v(),n.setAttribute("disabled",""),console.log(e);let t=setInterval(()=>{let o=e-Date.now();console.log(o),o<1e3&&clearInterval(t);let a=c(o);console.log(a),S(a)},1e3)}n.addEventListener("click",y);s.settings({timeout:1e4,resetOnHover:!0,icon:"material-icons",transitionIn:"flipInX",transitionOut:"flipOutX",onOpening:function(){console.log("callback abriu!")},onClosing:function(){console.log("callback fechou!")}});function b(){s.error({title:"Error",message:"Please choose a date in the future"})}function v(){s.success({title:"OK",message:"Taimer start"})}
//# sourceMappingURL=commonHelpers.js.map