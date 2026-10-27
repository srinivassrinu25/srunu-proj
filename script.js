try{const io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.querySelectorAll('u').forEach(u=>u.style.width=u.dataset.w+'%');io.unobserve(x.target)}}),{threshold:.2});
document.querySelectorAll('.card').forEach(c=>io.observe(c))}catch(e){document.querySelectorAll('u').forEach(u=>u.style.width=u.dataset.w+'%')}

const form=document.getElementById('contactForm');
if(form){form.addEventListener('submit',async e=>{
  e.preventDefault();
  const s=document.getElementById('formStatus'),b=form.querySelector('button');
  const fd=new FormData(form);
  if(!fd.get('name').trim()||!/^\S+@\S+\.\S+$/.test(fd.get('email'))||!fd.get('message').trim()){s.className='err';s.textContent='Please fill in your name, a valid email and a message.';return}
  b.disabled=true;s.className='';s.textContent='Sending...';
  try{
    const r=await fetch('/',{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:new URLSearchParams(fd).toString()});
    if(r.ok){s.className='ok';s.textContent='Thank you! Your message was sent.';form.reset()}
    else{s.className='err';s.textContent='Something went wrong. Please try again.'}
  }catch(err){s.className='err';s.textContent='Network error. Please try again.'}
  b.disabled=false;
})}

/* typing role */
(function(){const el=document.querySelector('.role');if(!el)return;
const words=['Full Stack Python Developer','Django and React Builder','Problem Solver'];let w=0,c=0,del=false;
function tick(){const t=words[w];c+=del?-1:1;el.firstChild.nodeValue=t.slice(0,c);
let d=del?35:70;if(!del&&c===t.length){del=true;d=1500}else if(del&&c===0){del=false;w=(w+1)%words.length;d=300}setTimeout(tick,d)}
el.firstChild.nodeValue='';tick()})();
/* reveal on scroll */
try{const rio=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');rio.unobserve(x.target)}}),{threshold:.12});
document.querySelectorAll('section .wrap > *, .gal img').forEach(n=>{n.classList.add('rv');rio.observe(n)})}catch(e){}