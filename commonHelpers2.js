import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{i as s}from"./assets/vendor-c2cf587c.js";s.settings({timeout:1e4,resetOnHover:!0,icon:"material-icons",transitionIn:"flipInX",transitionOut:"flipOutX"});const r=document.querySelector(".form");r.addEventListener("submit",t=>{t.preventDefault(),console.log(t.target.state.value);let i=t.target.state.value,e=t.target.delay.value;r.reset(),a(i,e)});function a(t,i){new Promise((e,o)=>{setTimeout(()=>{t=="fulfilled"?e(i):o(i)},i)}).then(e=>{s.success({title:"✅",message:`Fulfilled promise in ${e}ms`})}).catch(e=>{s.error({title:"❌",message:`Rejected promise in ${e}ms`})})}
//# sourceMappingURL=commonHelpers2.js.map
