import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{f as C,i as c}from"./assets/vendor-322d52e2.js";let a=Date();const o=document.querySelector("button[data-start]");o.setAttribute("disabled","");let r=document.querySelector("span[data-seconds]"),s=document.querySelector("span[data-minutes]"),i=document.querySelector("span[data-hours]"),l=document.querySelector("span[data-days]");const m={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){clearInterval(u),(r.textContent>1||s.textContent>1||i.textContent>1||l.textContent>1)&&tostStopolldtaimer(),f(),console.log(t[0]),new Promise((e,d)=>{setTimeout(()=>{t[0]-m.defaultDate>0?e(a=t[0],o.removeAttribute("disabled")):d(y(),o.setAttribute("disabled",""))})}),console.log("user selected:",a)}};C("#datetime-picker",m);function n(t){const g=Math.floor(t/864e5),h=Math.floor(t%864e5/36e5),S=Math.floor(t%864e5%36e5/6e4),p=Math.floor(t%864e5%36e5%6e4/1e3);return{days:g,hours:h,minutes:S,seconds:p}}console.log(n(2e3));console.log(n(14e4));console.log(n(2414e4));console.log(n(a));c.settings({timeout:1e4,resetOnHover:!0,icon:"material-icons",transitionIn:"flipInX",transitionOut:"flipOutX",onOpening:function(){console.log("callback abriu!")},onClosing:function(){console.log("callback fechou!")}});function x(t){r.textContent=t.seconds.toString().padStart(2,"0"),s.textContent=t.minutes.toString().padStart(2,"0"),i.textContent=t.hours.toString().padStart(2,"0"),l.textContent=t.days.toString().padStart(2,"0"),r.textContent<1&&s.textContent<1&&i.textContent<1&&l.textContent<1&&(clearInterval(u),f())}function f(){r.textContent="00",s.textContent="00",i.textContent="00",l.textContent="00"}let u;function b(){v(),o.setAttribute("disabled",""),u=setInterval(()=>{let t=a.getTime()-Date.now(),e=n(t);console.log(e),x(e)},1e3)}o.addEventListener("click",b);function y(){c.error({title:"Error",message:"Please choose a date in the future"})}function v(){c.success({title:"OK",message:"Taimer start"})}
//# sourceMappingURL=commonHelpers.js.map
