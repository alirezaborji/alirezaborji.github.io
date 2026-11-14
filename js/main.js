/* Content is separate from markup to simplify updates and future localization. */
const portfolio = {
  skills: [
    ['Programming', ['C / C++', 'Python', 'Bash', 'PHP / Yii2']],
    ['Microcontrollers & RTOS', ['ESP32', 'STM32', 'FreeRTOS', 'HAL', 'ADC']],
    ['Connectivity', ['MQTT', 'TCP/IP', 'Wi-Fi', 'UART', 'HTTP', 'REST API']],
    ['Firmware & products', ['OTA updates', 'Embedded web interface', 'SQLite', 'Device management']],
    ['Linux & deployment', ['CentOS 7 / 9', 'Ubuntu', 'RPM packages', 'Offline deployment']],
    ['Engineering tools', ['Git', 'STM32CubeIDE', 'STM32CubeMX', 'Keil', 'Oscilloscope', 'Logic analyzer']]
  ],
  projects: [
    {name:'ESP32 commercial vending system',category:'embedded',label:'COMMERCIAL PRODUCT',symbol:'ESP32',art:'',description:'Firmware and management features for a connected vending product, from development to commercial release and ongoing support.',features:['MQTT, Wi-Fi, TCP/IP and UART connectivity','Web interface, management API and SQLite storage','OTA updates and concurrent FreeRTOS tasks'],technologies:['ESP32','C / C++','FreeRTOS','MQTT','SQLite'],status:'Commercial deployment · Source and demo not provided',image:null,github:null,demo:null},
    {name:'Text data in audio signals',category:'systems',label:'SOFTWARE & SIGNAL PROCESSING',symbol:'≈ ≋ ≈',art:'audio',description:'Contributed to a Python system combining encrypted text data with audio, including key exchange, compression and signal processing.',features:['Diffie–Hellman key exchange and ChaCha20','Audio processing and data compression','Some technical details are confidential'],technologies:['Python','ChaCha20','Diffie–Hellman'],status:'Technical contribution · Public source not provided',image:null,github:null,demo:null},
    {name:'CentOS 7 → CentOS 9 migration',category:'systems',label:'LINUX & OFFLINE DEPLOYMENT',symbol:'7 → 9',art:'linux',description:'Adapted existing software and prepared a new runtime environment for deployment without internet access.',features:['Changes to C software and related code','RPM dependency and installation preparation','Bash automation for environment setup'],technologies:['C','Linux','RPM','Bash'],status:'Systems migration · Public source not provided',image:null,github:null,demo:null},
    {name:'Discrete buck converter',category:'electronics',label:'HARDWARE ASSEMBLY & TEST',symbol:'DC → DC',art:'circuit-art',description:'Assembled, implemented and tested an op-amp-based step-down converter without a dedicated controller IC.',features:['16–20 V input','Adjustable 1.7–16 V output','3 A output current in testing'],technologies:['Electronics','Op-amp circuit','Bench testing'],status:'Contribution: assembly, implementation and testing',image:null,github:null,demo:null}
  ],
  experience: [
    ['1402–present SH','Developer & Product Technical Lead','Commercial vending machine project','Developed ESP32 firmware and device management features through commercial release and product support. Implemented communications, SQLite storage, customer and inventory management, web interfaces, OTA and FreeRTOS tasks.',['ESP32','MQTT','FreeRTOS','SQLite']],
    ['1402–1404 SH','Electronics & Software Development Specialist','Pazhouhesh Novin Rayaneh · Tehran','Contributed to C and PHP/Yii2 systems, CentOS migration and offline deployment using RPM and Bash. Worked with Quectel GSM modules and W5500 Ethernet controllers, and contributed to Python audio data processing and encryption.',['C','Python','CentOS','Bash','W5500']],
    ['1400–1402 SH','Freelance Project Developer','Independent projects','Developed parallel ADC data acquisition and processing, a remotely controlled hand sanitizer, and networked attendance devices for Ahar power plant services and Oxygen Holding.',['Embedded systems','ADC','Networked devices']],
    ['1398–1401 SH','STM32 Programming Instructor','Ferdowsi University of Mashhad','Taught practical STM32 programming and HAL-based firmware. Guided learners through configuration, code generation, development and compilation with STM32CubeMX and Keil.',['STM32','C / C++','HAL','Keil']],
    ['1399 SH','Content Creator','Behnam Robotics','Worked in content creation. Further responsibilities are not specified in the resume.',[]],
    ['1397 SH','Microcontroller Programming Intern','Ayrik Company','Developed a plant monitoring system for agricultural applications, including temperature and water management.',['Microcontrollers','Monitoring']]
  ]
};
const isPersian = document.documentElement.lang === 'fa';
// Translate content data before rendering; English remains the editable source.
function localize(value) {
 if (typeof value === 'string') return window.persianContent?.[value] ?? value;
 if (Array.isArray(value)) return value.map(localize);
 if (value && typeof value === 'object') return Object.fromEntries(Object.entries(value).map(([key,item]) => [key,localize(item)]));
 return value;
}
if (isPersian) Object.assign(portfolio, localize(portfolio));
const ui = isPersian
 ? {illustration:'نمای شماتیک برای', art:'تصویر شماتیک مهندسی / تصویر واقعی محصول نیست',source:'سورس ↗',demo:'نمایش دمو ↗'}
 : {illustration:'Illustrative graphic for', art:'ENGINEERING ILLUSTRATION / NOT A PRODUCT PHOTO',source:'Source ↗',demo:'Demo ↗'};
const tags = values => values.map(value => `<span dir="auto">${value}</span>`).join('');
document.querySelector('#skills-grid').innerHTML = portfolio.skills.map(([title,items],index) => `<article class="skill-card"><span class="skill-number">0${index+1} /</span><h3>${title}</h3><div class="tags">${tags(items)}</div></article>`).join('');
function renderProjects(filter='all') {
 document.querySelector('#projects-grid').innerHTML = portfolio.projects.filter(project => filter==='all'||project.category===filter).map(project => `<article class="project-card"><div class="project-art ${project.art}" role="img" aria-label="${ui.illustration} ${project.name}"><span class="art-code">${project.symbol}</span><small>${ui.art}</small></div><div class="project-body"><div class="project-meta">${project.label}</div><h3>${project.name}</h3><p>${project.description}</p><ul>${project.features.map(feature=>`<li>${feature}</li>`).join('')}</ul><div class="tags">${tags(project.technologies)}</div><div class="project-status">${project.status}</div>${project.github?`<a class="text-link" href="${project.github}" rel="noopener" target="_blank">${ui.source}</a>`:''}${project.demo?`<a class="text-link" href="${project.demo}" rel="noopener" target="_blank">${ui.demo}</a>`:''}</div></article>`).join('');
}
renderProjects();
document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
 document.querySelectorAll('[data-filter]').forEach(item => {const selected=item===button;item.classList.toggle('selected',selected);item.setAttribute('aria-pressed',String(selected));});
 renderProjects(button.dataset.filter);
}));
document.querySelector('#timeline').innerHTML=portfolio.experience.map(([date,title,company,description,technologies])=>`<article class="experience-item"><div class="experience-date">${date}</div><div><h3>${title}</h3><p class="experience-company">${company}</p><p>${description}</p><div class="tags">${tags(technologies)}</div></div></article>`).join('');
document.querySelector('#year').textContent = new Date().getFullYear();
const menu = document.querySelector('.menu');
const navigation = document.querySelector('#navigation');
function closeMenu(){menu.setAttribute('aria-expanded','false');navigation.classList.remove('open');}
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));navigation.classList.toggle('open',open);});
navigation.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));
document.addEventListener('keydown',event=>{if(event.key==='Escape'){const wasOpen=menu.getAttribute('aria-expanded')==='true';closeMenu();if(wasOpen)menu.focus();}});
if('IntersectionObserver' in window){
 const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}}),{threshold:0.08});
 document.querySelectorAll('.section:not(.hero)').forEach(section=>{section.classList.add('reveal');observer.observe(section);});
 const sections=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)navigation.querySelectorAll('a').forEach(link=>link.classList.toggle('active',link.hash===`#${entry.target.id}`));}),{rootMargin:'-15% 0px -55% 0px'});
 document.querySelectorAll('section[id]').forEach(section=>sections.observe(section));
}
