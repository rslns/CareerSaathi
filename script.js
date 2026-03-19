/* ══════════════════════════════════════
   CAREERSAATHI — script.js
══════════════════════════════════════ */
/*336 api key */
/* ── SKILL LINKS ── */
const SL = {
  /* Programming */
  'Python': 'https://www.coursera.org/learn/python',
  'Java': 'https://www.freecodecamp.org/news/java-programming-language-basics/',
  'JavaScript': 'https://javascript.info/',
  'HTML': 'https://www.w3schools.com/html/',
  'CSS': 'https://www.w3schools.com/css/',
  'React': 'https://react.dev/learn',
  'Node': 'https://nodejs.org/en/learn',
  'SQL': 'https://www.w3schools.com/sql/',
  'C++': 'https://www.learncpp.com/',
  'PHP': 'https://www.w3schools.com/php/',
  'Flutter': 'https://flutter.dev/learn',
  'Android': 'https://developer.android.com/courses',
  'Kotlin': 'https://developer.android.com/courses/android-basics-kotlin/course',
  'Swift': 'https://developer.apple.com/tutorials/swiftui',
  'Git': 'https://www.youtube.com/watch?v=RGOj5yH7evk',
  'GitHub': 'https://skills.github.com/',
  'Linux': 'https://www.youtube.com/watch?v=wBp0Rb-ZJak',
  /* Data & AI */
  'Machine Learning': 'https://www.coursera.org/learn/machine-learning',
  'Deep Learning': 'https://www.coursera.org/specializations/deep-learning',
  'Artificial Intelligence': 'https://www.coursera.org/learn/ai-for-everyone',
  'Data Science': 'https://www.coursera.org/professional-certificates/ibm-data-science',
  'Data Analysis': 'https://www.coursera.org/learn/data-analysis-with-python',
  'Data Analytics': 'https://www.coursera.org/professional-certificates/google-data-analytics',
  'Data Visualization': 'https://www.coursera.org/learn/data-visualization',
  'Statistics': 'https://www.khanacademy.org/math/statistics-probability',
  'Excel': 'https://www.coursera.org/learn/excel-basics-data-analysis-ibm',
  'Power BI': 'https://www.youtube.com/watch?v=TmhQCQr_WnU',
  'Tableau': 'https://www.tableau.com/learn/training',
  'NLP': 'https://www.coursera.org/learn/classification-vector-spaces-in-nlp',
  'Computer Vision': 'https://www.coursera.org/learn/convolutional-neural-networks',
  /* Design */
  'Figma': 'https://www.youtube.com/watch?v=FTFaQWZBqQ8',
  'UI/UX': 'https://www.coursera.org/learn/ux-design',
  'UI UX': 'https://www.coursera.org/learn/ux-design',
  'User Experience': 'https://www.coursera.org/learn/ux-design',
  'Graphic Design': 'https://www.canva.com/designschool/',
  'Canva': 'https://www.canva.com/designschool/',
  'Adobe Photoshop': 'https://helpx.adobe.com/photoshop/tutorials.html',
  'Photoshop': 'https://helpx.adobe.com/photoshop/tutorials.html',
  'Illustrator': 'https://helpx.adobe.com/illustrator/tutorials.html',
  'Adobe Illustrator': 'https://helpx.adobe.com/illustrator/tutorials.html',
  'Premiere Pro': 'https://helpx.adobe.com/premiere-pro/tutorials.html',
  'After Effects': 'https://helpx.adobe.com/after-effects/tutorials.html',
  'InDesign': 'https://helpx.adobe.com/indesign/tutorials.html',
  'Video Editing': 'https://www.youtube.com/watch?v=NQhFnI8JGEs',
  'Photography': 'https://www.coursera.org/learn/photography-basics',
  '3D Modeling': 'https://www.youtube.com/watch?v=nIoXOplUvAw',
  /* Marketing & Business */
  'Digital Marketing': 'https://learndigital.withgoogle.com/digitalgarage',
  'Social Media Marketing': 'https://learndigital.withgoogle.com/digitalgarage',
  'Social Media': 'https://learndigital.withgoogle.com/digitalgarage',
  'SEO': 'https://learndigital.withgoogle.com/digitalgarage/course/digital-marketing',
  'Content Marketing': 'https://academy.hubspot.com/courses/content-marketing',
  'Content Writing': 'https://academy.hubspot.com/courses/content-marketing',
  'Content Creation': 'https://www.coursera.org/learn/content-creation-storytelling',
  'Copywriting': 'https://www.youtube.com/watch?v=KPoOlkRWORE',
  'Email Marketing': 'https://academy.hubspot.com/courses/email-marketing',
  'Affiliate Marketing': 'https://www.youtube.com/watch?v=0SBMpGzxf0A',
  'Brand Management': 'https://www.coursera.org/learn/brand-management',
  'Market Research': 'https://www.coursera.org/learn/market-research',
  'E-Commerce': 'https://www.coursera.org/learn/ecommerce',
  'Dropshipping': 'https://www.youtube.com/watch?v=TBXdaSUicJY',
  'Sales': 'https://www.coursera.org/learn/successful-negotiation',
  /* Finance & Accounting */
  'Tally': 'https://www.youtube.com/watch?v=B-n7uZ8xwfQ',
  'Accounting': 'https://www.youtube.com/watch?v=7H8zcABtPAY',
  'Financial Modeling': 'https://www.youtube.com/watch?v=EADcVhv0gxo',
  'Financial Analysis': 'https://www.coursera.org/learn/financial-analysis',
  'Bookkeeping': 'https://www.coursera.org/learn/bookkeeping-basics',
  'GST': 'https://www.youtube.com/watch?v=58bE35HyKkY',
  'Taxation': 'https://www.youtube.com/watch?v=58bE35HyKkY',
  'Investment': 'https://www.coursera.org/learn/financial-markets-intro',
  'Stock Market': 'https://www.youtube.com/watch?v=jc8Ox0bFAkc',
  'Banking': 'https://www.youtube.com/watch?v=WEDIj9JBTC8',
  /* Healthcare */
  'Nutrition': 'https://www.coursera.org/learn/nutrition-health',
  'Yoga': 'https://www.youtube.com/watch?v=v7AYKMP6rOE',
  'Fitness': 'https://www.youtube.com/watch?v=1f8yoFFdkcY',
  'First Aid': 'https://www.redcross.org/take-a-class/first-aid',
  'Anatomy': 'https://www.khanacademy.org/science/health-and-medicine',
  'Psychology': 'https://www.coursera.org/learn/introduction-psychology',
  'Counseling': 'https://www.coursera.org/learn/positive-psychology',
  'Nursing': 'https://www.coursera.org/learn/patient-safety',
  'Public Health': 'https://www.coursera.org/learn/public-health',
  /* Teaching & Education */
  'Teaching': 'https://www.coursera.org/learn/teaching-methods',
  'Curriculum Design': 'https://www.coursera.org/learn/curriculum-design',
  'Online Teaching': 'https://www.coursera.org/learn/online-teaching',
  'Child Development': 'https://www.coursera.org/learn/child-development',
  'Special Education': 'https://www.coursera.org/learn/special-needs',
  /* Soft Skills */
  'Communication': 'https://www.coursera.org/learn/improve-english',
  'Leadership': 'https://www.coursera.org/learn/inspirational-leadership',
  'Project Management': 'https://www.coursera.org/professional-certificates/google-project-management',
  'Time Management': 'https://www.coursera.org/learn/work-smarter-not-harder',
  'Public Speaking': 'https://www.coursera.org/learn/public-speaking',
  'Problem Solving': 'https://www.coursera.org/learn/problem-solving',
  'Critical Thinking': 'https://www.coursera.org/learn/critical-thinking-skills',
  'Team Management': 'https://www.coursera.org/learn/people-management',
  'Negotiation': 'https://www.coursera.org/learn/successful-negotiation',
  /* Tech & Cyber */
  'Cybersecurity': 'https://www.coursera.org/professional-certificates/google-cybersecurity',
  'Cyber Security': 'https://www.coursera.org/professional-certificates/google-cybersecurity',
  'Ethical Hacking': 'https://www.youtube.com/watch?v=3Kq1MIfTWCE',
  'Network Security': 'https://www.coursera.org/learn/network-security',
  'Cloud Computing': 'https://www.coursera.org/learn/cloud-computing',
  'AWS': 'https://aws.amazon.com/training/learn-about/',
  'DevOps': 'https://www.coursera.org/learn/devops-culture-and-mindset',
  'Blockchain': 'https://www.coursera.org/learn/blockchain-basics',
  /* Other */
  'Research': 'https://www.coursera.org/learn/research-methods',
  'Writing': 'https://www.coursera.org/learn/writing-and-the-workplace',
  'Biology': 'https://www.khanacademy.org/science/biology',
  'Chemistry': 'https://www.khanacademy.org/science/chemistry',
  'Physics': 'https://www.khanacademy.org/science/physics',
  'GIS': 'https://www.qgis.org/en/site/forusers/trainingmaterial/index.html',
  'AutoCAD': 'https://www.youtube.com/watch?v=J5bDm7m1bHs',
  'Cooking': 'https://www.youtube.com/watch?v=CRs8ErEWXe4',
  'Tailoring': 'https://www.youtube.com/watch?v=MYJ6C4aVMI8',
  'Fashion Design': 'https://www.youtube.com/watch?v=AHgY9GGmONk',
  'Textile': 'https://www.youtube.com/watch?v=AHgY9GGmONk',
  'Agriculture': 'https://www.coursera.org/learn/sustainable-agriculture',
  'Organic Farming': 'https://www.youtube.com/watch?v=QmN1nBnMvS0',
  'Grant Writing': 'https://www.coursera.org/learn/grantsmanship',
  'Product Management': 'https://pmschool.io/',
  'Supply Chain': 'https://www.coursera.org/learn/supply-chain-basics',
  'Logistics': 'https://www.coursera.org/learn/supply-chain-basics',
  'Event Management': 'https://www.youtube.com/watch?v=kMH3G0OJxZQ',
  'Interior Design': 'https://www.coursera.org/learn/design-thinking-innovation',
  'Architecture': 'https://www.coursera.org/learn/design-thinking-innovation',
  'Legal': 'https://www.coursera.org/learn/law-and-life',
  'Law': 'https://www.coursera.org/learn/law-and-life',
  'Journalism': 'https://www.coursera.org/learn/journalism',
  'Video Production': 'https://www.youtube.com/watch?v=NQhFnI8JGEs',
  'Podcast': 'https://www.youtube.com/watch?v=TkVCOBwzXqo',
  'Animation': 'https://www.youtube.com/watch?v=nIoXOplUvAw',
  'Game Design': 'https://www.coursera.org/learn/game-design',
  'Music': 'https://www.coursera.org/learn/music-theory',
  'Entrepreneurship': 'https://www.coursera.org/learn/entrepreneurship',
  'Business Plan': 'https://www.coursera.org/learn/what-is-a-business-plan',
  'MS Office': 'https://www.coursera.org/learn/excel-basics-data-analysis-ibm',
  'Microsoft Office': 'https://www.coursera.org/learn/excel-basics-data-analysis-ibm',
  'Spoken English': 'https://www.coursera.org/learn/improve-english',
  'English': 'https://www.coursera.org/learn/improve-english',
  'Hindi': 'https://www.youtube.com/watch?v=vbSaJ-HUQNs',
};

/* ── SCHEME LINKS ── */
const SCL = {
  'PM Mudra Yojana': 'https://www.mudra.org.in/',
  'Stand-Up India': 'https://www.standupmitra.in/',
  'Startup India': 'https://www.startupindia.gov.in/',
  'Digital India': 'https://www.digitalindia.gov.in/',
  'NRLM': 'https://nrlm.gov.in/',
  'PM Kaushal Vikas Yojana': 'https://www.pmkvyofficial.org/',
  'PMKVY': 'https://www.pmkvyofficial.org/',
  'Mahila Shakti Kendra': 'https://wcd.nic.in/schemes/mahila-shakti-kendra',
  'Nirbhaya Fund': 'https://wcd.nic.in/schemes/nirbhaya-fund',
  'SIDBI': 'https://www.sidbi.in/',
  'Beti Bachao Beti Padhao': 'https://wcd.nic.in/bbbp-schemes',
  'SERB KIRAN': 'https://www.serbonline.in/SERB/kiran',
  'NASSCOM FutureSkills': 'https://futureskillsprime.in/',
  'BIRAC': 'https://www.birac.nic.in/',
  'PM Awas Yojana': 'https://pmaymis.gov.in/',
  'Smart Cities Mission': 'https://smartcities.gov.in/',
  'MSME Loan': 'https://udyamimitra.in/',
  'Skill India': 'https://www.skillindia.gov.in/',
  'PM Jan Arogya Yojana': 'https://pmjay.gov.in/',
  'ICAR': 'https://icar.org.in/',
  'DBT Fellowship': 'https://www.dbtindia.gov.in/',
  'RKVY': 'https://rkvy.nic.in/',
  'Legal Aid': 'https://nalsa.gov.in/',
  'NHM': 'https://nhm.gov.in/',
  'NABARD': 'https://www.nabard.org/',
  'KVIC': 'https://www.kvic.gov.in/',
  'Handloom Board': 'https://handlooms.nic.in/',
  'TRIFED': 'https://trifed.tribal.gov.in/',
  'Cyber Swachhta Kendra': 'https://www.cyberswachhtakendra.gov.in/',
  'WCD': 'https://wcd.nic.in/',
  'ICAI': 'https://www.icai.org/',
  'Ayush Ministry': 'https://main.ayush.gov.in/',
  'Food Processing Ministry': 'https://mofpi.gov.in/',
  'FSSAI': 'https://www.fssai.gov.in/',
  'Deen Dayal': 'https://aajeevika.gov.in/',
  'PM SVANidhi': 'https://pmsvanidhi.mohua.gov.in/',
  'NABARD SHG': 'https://www.nabard.org/',
  'Udyam Registration': 'https://udyamregistration.gov.in/',
};

/* ══════════════════════════════════════
   PILL BUILDERS
══════════════════════════════════════ */

/**
 * Finds the skill URL using exact, substring, or reverse-substring matching.
 * @param {string} s - Skill name
 * @returns {string|null}
 */
function findSkillUrl(s) {
  const sl = s.toLowerCase();
  if (SL[s]) return SL[s];
  const m1 = Object.entries(SL).find(([k]) => sl.includes(k.toLowerCase()));
  if (m1) return m1[1];
  const m2 = Object.entries(SL).find(([k]) => k.toLowerCase().includes(sl));
  if (m2) return m2[1];
  return null;
}

function skillPills(arr) {
  if (!arr || !arr.length) return '<span style="color:#aaa;font-size:.8rem">—</span>';
  return arr.map(s => {
    const url = findSkillUrl(s);
    return url
      ? `<a href="${url}" target="_blank" rel="noopener" class="pill p-skill">${s} <span class="parr">↗</span></a>`
      : `<span class="pill p-skill">${s}</span>`;
  }).join('');
}

function schemePills(arr) {
  if (!arr || !arr.length) return '<span style="color:#aaa;font-size:.8rem">—</span>';
  return arr.map(s => {
    const url = SCL[s] || Object.entries(SCL).find(([k]) => s.toLowerCase().includes(k.toLowerCase()))?.[1];
    return url
      ? `<a href="${url}" target="_blank" rel="noopener" class="pill p-scheme">${s} <span class="parr">↗</span></a>`
      : `<span class="pill p-scheme">${s}</span>`;
  }).join('');
}

function plainPills(arr, cls) {
  if (!arr || !arr.length) return '<span style="color:#aaa;font-size:.8rem">—</span>';
  return arr.map(s => `<span class="pill ${cls}">${s}</span>`).join('');
}

function barrierSkillPills(arr) {
  if (!arr || !arr.length) return '';
  return arr.map(s => {
    const url = findSkillUrl(s);
    const style = 'background:#1A1118;color:#f9d886;border:1px solid #4a3a20;';
    return url
      ? `<a href="${url}" target="_blank" rel="noopener" class="pill" style="${style}">${s} <span class="parr" style="color:rgba(249,216,134,.6)">↗</span></a>`
      : `<span class="pill" style="${style}">${s}</span>`;
  }).join('');
}

/* ══════════════════════════════════════
   FORM VALIDATION
══════════════════════════════════════ */
function validate() {
  let ok = true;
  const age = parseInt(document.getElementById('inp-age').value);
  const loc = document.getElementById('inp-loc').value.trim();
  const mar = document.getElementById('inp-mar').value;

  document.getElementById('f-age').classList.toggle('invalid', isNaN(age) || age < 18 || age > 60);
  document.getElementById('f-loc').classList.toggle('invalid', !loc);
  document.getElementById('f-mar').classList.toggle('invalid', !mar);

  if (isNaN(age) || age < 18 || age > 60) ok = false;
  if (!loc) ok = false;
  if (!mar) ok = false;
  return ok;
}

/* Clear validation state on input */
['inp-age', 'inp-loc', 'inp-mar'].forEach(id => {
  document.getElementById(id).addEventListener('input', () => {
    const map = { 'inp-age': 'f-age', 'inp-loc': 'f-loc', 'inp-mar': 'f-mar' };
    document.getElementById(map[id])?.classList.remove('invalid');
  });
});

/* ══════════════════════════════════════
   LOADING ANIMATION
══════════════════════════════════════ */
let stepTimers = [];

function animateSteps() {
  const ids = ['ls1', 'ls2', 'ls3', 'ls4', 'ls5'];
  ids.forEach(id => {
    const el = document.getElementById(id);
    if (el) { el.className = ''; el.querySelector('.sico').textContent = '⏳'; }
  });
  ids.forEach((id, i) => {
    stepTimers.push(setTimeout(() => {
      if (i > 0) {
        const prev = document.getElementById(ids[i - 1]);
        if (prev) { prev.classList.add('done'); prev.querySelector('.sico').textContent = '✓'; }
      }
      const el = document.getElementById(id);
      if (el) { el.classList.add('active'); el.querySelector('.sico').textContent = '⚡'; }
    }, i * 1100));
  });
}

function clearStepTimers() { stepTimers.forEach(clearTimeout); stepTimers = []; }

function markStep(n) {
  for (let i = 1; i < n; i++) {
    const el = document.getElementById('ls' + i);
    if (el) { el.className = 'done'; el.querySelector('.sico').textContent = '✓'; }
  }
  const cur = document.getElementById('ls' + n);
  if (cur) { cur.classList.add('active'); cur.querySelector('.sico').textContent = '⚡'; }
}

/* ══════════════════════════════════════
   JSON EXTRACTOR
   Strips markdown fences, grabs outermost { … }
══════════════════════════════════════ */
function parseJSON(raw) {
  if (!raw || !raw.trim()) throw new Error('Empty API response.');
  let s = raw.trim();
  s = s.replace(/^```json\s*/i, '').replace(/^```\s*/, '').replace(/\s*```$/, '').trim();
  try { return JSON.parse(s); } catch (_) {}
  const a = s.indexOf('{'), b = s.lastIndexOf('}');
  if (a !== -1 && b > a) {
    const chunk = s.slice(a, b + 1);
    try { return JSON.parse(chunk); } catch (_) {}
    try { return JSON.parse(chunk.replace(/,(?=\s*[}\]])/g, '')); } catch (_) {}
  }
  console.error('[CareerSaathi] raw:', s.slice(0, 500));
  throw new Error('AI returned an unexpected format. Please try again.');
}

/* ══════════════════════════════════════
   GROQ API
══════════════════════════════════════ */
const GROQ_KEY = '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';

async function callAPI(systemPrompt, userPrompt) {
 const resp = await fetch('/api/proxy', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      
    },
    body: JSON.stringify({
      model: 'llama-3.3-70b-versatile',
      temperature: 0.7,
      max_tokens: 2500,
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user',   content: userPrompt   }
      ]
    })
  });
  if (!resp.ok) {
    const e = await resp.json().catch(() => ({}));
    throw new Error(e.error?.message || 'API error ' + resp.status);
  }
  const data = await resp.json();
  const text = data.choices?.[0]?.message?.content || '';
  if (!text) throw new Error('Empty response from Groq. Please try again.');
  return parseJSON(text);
}

/* ══════════════════════════════════════
   PROMPTS
══════════════════════════════════════ */

/** Prompt 1: summary + careers (4) + businesses (3) + schemes (4) */
function prompt1(age, loc, mar, edu, iStr) {
  return `Generate career guidance for an Indian woman.
Profile: Age ${age}, City: ${loc}, Marital status: ${mar}, Education: ${edu}, Interests: ${iStr}

Respond with ONLY this JSON object — fill every value with real specific content:

{
  "summary": "2 warm sentences mentioning age ${age}, city ${loc}, and her interests. Be encouraging and specific.",
  "careers": [
    {
      "title": "Job title relevant to ${iStr}",
      "industry": "Industry name",
      "salary": "X-YLpa",
      "why_fit": "One sentence — mention age ${age} or ${loc} or ${edu} specifically",
      "male_dominated": false,
      "skills": ["Skill 1", "Skill 2", "Skill 3"],
      "courses": ["Free course 1", "Free course 2"],
      "schemes": ["Government scheme name"],
      "networking": ["Community or org name"]
    },
    {
      "title": "Second job title",
      "industry": "Industry",
      "salary": "X-YLpa",
      "why_fit": "Specific reason for her profile",
      "male_dominated": false,
      "skills": ["Skill 1", "Skill 2", "Skill 3"],
      "courses": ["Free course 1", "Free course 2"],
      "schemes": ["Scheme name"],
      "networking": ["Org name"]
    },
    {
      "title": "Third job title",
      "industry": "Industry",
      "salary": "X-YLpa",
      "why_fit": "Specific reason",
      "male_dominated": false,
      "skills": ["Skill 1", "Skill 2", "Skill 3"],
      "courses": ["Course 1", "Course 2"],
      "schemes": ["Scheme name"],
      "networking": ["Org name"]
    },
    {
      "title": "Fourth job title",
      "industry": "Industry",
      "salary": "X-YLpa",
      "why_fit": "Specific reason",
      "male_dominated": true,
      "skills": ["Skill 1", "Skill 2", "Skill 3"],
      "courses": ["Course 1", "Course 2"],
      "schemes": ["Scheme name"],
      "networking": ["Org name"]
    }
  ],
  "businesses": [
    {
      "idea": "Business idea suitable for ${loc}",
      "category": "Category",
      "investment": "Low (Rs 10,000-50,000)",
      "monthly_income": "Rs 15,000-40,000 per month",
      "why_fit": "Why this suits her city and marital status",
      "skills": ["Skill 1", "Skill 2"],
      "courses": ["Free course"],
      "schemes": ["Scheme name"],
      "networking": ["Community name"]
    },
    {
      "idea": "Second business idea",
      "category": "Category",
      "investment": "Low (Rs X-Y)",
      "monthly_income": "Rs X-Y per month",
      "why_fit": "Specific reason",
      "skills": ["Skill 1", "Skill 2"],
      "courses": ["Course"],
      "schemes": ["Scheme"],
      "networking": ["Community"]
    },
    {
      "idea": "Third business idea",
      "category": "Category",
      "investment": "Medium (Rs X-Y)",
      "monthly_income": "Rs X-Y per month",
      "why_fit": "Specific reason",
      "skills": ["Skill 1", "Skill 2"],
      "courses": ["Course"],
      "schemes": ["Scheme"],
      "networking": ["Community"]
    }
  ],
  "schemes": [
    {
      "name": "PM Mudra Yojana",
      "tag": "Loan",
      "description": "Provides loans up to Rs 10 lakh for small businesses. Ideal for her to fund a micro-enterprise in ${loc}.",
      "url": "https://www.mudra.org.in/"
    },
    {
      "name": "Second real scheme name",
      "tag": "Skill",
      "description": "What this scheme offers and why it is relevant to her profile specifically.",
      "url": "https://real.gov.in/url"
    },
    {
      "name": "Third real scheme name",
      "tag": "Startup",
      "description": "What this scheme offers for her.",
      "url": "https://real.gov.in/url"
    },
    {
      "name": "Fourth real scheme name",
      "tag": "Empowerment",
      "description": "What this scheme provides and why it fits her.",
      "url": "https://real.gov.in/url"
    }
  ]
}`;
}

/** Prompt 2: networking + barrier fields (2) */
function prompt2(age, loc, mar, edu, iStr) {
  return `Generate networking and barrier-breaking guidance for an Indian woman.
Profile: Age ${age}, City: ${loc}, Marital status: ${mar}, Education: ${edu}, Interests: ${iStr}

Respond with ONLY this JSON object — fill every value with real specific content:

{
  "networking": {
    "communities": ["Real Indian women org for ${iStr}", "Second real org", "Third real org"],
    "online": ["LinkedIn Women in Tech India", "Another relevant online platform"],
    "mentorship": ["Real Indian mentorship program name", "Second program"],
    "portals": ["skillindia.gov.in - free skill development courses", "wcd.nic.in - women and child development schemes"]
  },
  "barrier_fields": [
    {
      "title": "Male-dominated field matching ${iStr}",
      "industry": "Industry name",
      "salary": "X-YLpa",
      "gap_pct": 78,
      "gap_note": "Real India statistic about women in this field",
      "opportunity": "Why this is the right time for women to enter",
      "roadmap": [
        "Step 1 specific to ${edu} level in ${loc}",
        "Step 2 — certification or skill to acquire",
        "Step 3 — how to get first role or project",
        "Step 4 — how to grow and advance"
      ],
      "key_skills": ["Skill 1", "Skill 2", "Skill 3", "Skill 4"],
      "myths": [
        {"false": "Myth about women in this field in India", "true": "The real situation today"},
        {"false": "Another common myth", "true": "The reality"}
      ],
      "role_models": ["Real Indian woman name - her achievement in this field", "Second role model"],
      "schemes": ["SERB KIRAN", "Relevant scheme name"]
    },
    {
      "title": "Second male-dominated field matching ${iStr}",
      "industry": "Industry name",
      "salary": "X-YLpa",
      "gap_pct": 83,
      "gap_note": "India-specific gender gap fact",
      "opportunity": "Why women should enter now",
      "roadmap": [
        "Actionable step 1",
        "Step 2",
        "Step 3",
        "Step 4"
      ],
      "key_skills": ["Skill 1", "Skill 2", "Skill 3", "Skill 4"],
      "myths": [
        {"false": "Common myth", "true": "Reality"},
        {"false": "Another myth", "true": "Reality"}
      ],
      "role_models": ["Real Indian woman - achievement"],
      "schemes": ["Real scheme name"]
    }
  ]
}`;
}

/* ══════════════════════════════════════
   GENERATE (main entry point)
══════════════════════════════════════ */
async function generate() {
  if (!validate()) return;

  const age  = parseInt(document.getElementById('inp-age').value);
  const loc  = document.getElementById('inp-loc').value.trim();
  const mar  = document.getElementById('inp-mar').value;
  const edu  = document.getElementById('inp-edu').value || 'Not specified';
  const ints = [...document.querySelectorAll('.int-chip input:checked, .interest-chip input:checked')].map(i => i.value);
  const iStr = ints.length ? ints.join(', ') : 'Technology and Coding';

  const errBox = document.getElementById('errBox');
  errBox.className = 'err-box';
  errBox.textContent = '';

  if (GROQ_KEY === 'YOUR_KEY_HERE') {
    errBox.textContent = '⚠ Please open this file in Notepad and replace YOUR_KEY_HERE with your Groq API key from console.groq.com';
    errBox.className = 'err-box show';
    return;
  }

  const lw = document.getElementById('loadWrap');
  lw.classList.add('active');
  lw.style.display = 'flex';
  document.getElementById('btnGen').disabled = true;
  animateSteps();

  const SYS = `You are CareerSaathi, a career guidance AI for Indian women.
You MUST respond with ONLY a valid JSON object.
Rules:
- Start your response with { and end with }
- No markdown, no backticks, no explanation text outside the JSON
- All string values use double quotes
- Escape apostrophes inside strings as \'
- Generate content specific to the exact profile provided`;

  try {
    markStep(1);
    const part1 = await callAPI(SYS, prompt1(age, loc, mar, edu, iStr));
    markStep(3);

    markStep(4);
    const part2 = await callAPI(SYS, prompt2(age, loc, mar, edu, iStr));
    markStep(5);

    const result = Object.assign({}, part1, part2);
    clearStepTimers();

    document.querySelectorAll('[id^="ls"]').forEach(el => {
      el.className = 'done';
      el.querySelector('.sico').textContent = '✓';
    });

    setTimeout(() => {
      const lwDone = document.getElementById('loadWrap');
      lwDone.classList.remove('active');
      lwDone.style.display = 'none';
      renderResults(result, age, loc, mar, ints);
      document.getElementById('btnGen').disabled = false;
      document.getElementById('landing').style.display = 'none';
      const rp = document.getElementById('results-page');
      rp.style.display = 'flex';
      rp.classList.add('show');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      switchTab('careers', document.querySelector('.nav-item[data-tab="careers"]'));
    }, 400);

  } catch (err) {
    clearStepTimers();
    const lwErr = document.getElementById('loadWrap');
    lwErr.classList.remove('active');
    lwErr.style.display = 'none';
    errBox.textContent = '⚠ ' + err.message;
    errBox.className = 'err-box show';
    document.getElementById('btnGen').disabled = false;
    console.error('[CareerSaathi]', err);
  }
}

/* ══════════════════════════════════════
   RENDER RESULTS
══════════════════════════════════════ */
function renderResults(data, age, loc, mar, ints) {
  const iStr2 = ints.length ? ints.join(', ') : 'general';
  userProfile = { age, loc, mar, edu: document.getElementById('inp-edu').value || 'Not specified', iStr: iStr2 };
  resultsData = data;
  chatInitialized = false;

  document.getElementById('profileTag').textContent =
    `Age ${age} · ${loc} · ${mar}${ints.length ? ' · ' + ints.slice(0, 2).join(', ') : ''}`;

  const c = (data.careers    || []).length;
  const b = (data.businesses || []).length;
  const s = (data.schemes    || []).length;

  if (data.summary) document.getElementById('sbSummary').textContent = data.summary;

  document.getElementById('sbStats').innerHTML = `
    <div class="sb-stat"><strong>${c}</strong><span>Careers</span></div>
    <div class="sb-stat"><strong>${b}</strong><span>Businesses</span></div>
    <div class="sb-stat"><strong>${s}</strong><span>Schemes</span></div>
    <div class="sb-stat"><strong>${(data.barrier_fields || []).length}</strong><span>Barriers</span></div>`;

  const nb  = document.getElementById('nb-careers');  if (nb)  nb.textContent  = c;
  const nb2 = document.getElementById('nb-business'); if (nb2) nb2.textContent = b;
  const nb3 = document.getElementById('nb-schemes');  if (nb3) nb3.textContent = s;

  document.getElementById('careersGrid').innerHTML  = (data.careers    || []).map(renderCareerCard).join('') || empty('🔍', 'No careers generated');
  document.getElementById('bizGrid').innerHTML      = (data.businesses || []).map(renderBizCard).join('')    || empty('💡', 'No businesses generated');
  document.getElementById('schemesGrid').innerHTML  = (data.schemes    || []).map(renderSchemeCard).join('') || empty('🏛', 'No schemes generated');
  document.getElementById('netContent').innerHTML   = renderNetwork(data.networking || {});
  document.getElementById('barrierContent').innerHTML = renderBarrier(data.barrier_fields || []);
}

function empty(icon, msg) {
  return `<div class="empty"><div class="ei">${icon}</div><p>${msg}</p></div>`;
}

/* ── CARD RENDERERS ── */

function renderCareerCard(j, i) {
  const warn = j.male_dominated
    ? `<div class="warn-bar">⚡ <strong>Gender Gap Alert:</strong> This field is male-dominated in India — massive opportunity for women who enter now!</div>`
    : '';
  return `<div class="rcard" style="animation-delay:${i * .07}s">
    <div class="rcard-head">
      <div class="num">0${i + 1}</div>
      <div class="ttl">${j.title || '—'}</div>
      <div class="sub">${j.industry || ''}</div>
      ${j.salary ? `<div class="badge">₹ ${j.salary}</div>` : ''}
    </div>
    ${warn}
    <div class="rcard-body">
      ${j.why_fit ? `<p style="font-size:.83rem;color:var(--ink-soft);margin-bottom:12px;line-height:1.6;font-style:italic">"${j.why_fit}"</p>` : ''}
      <div class="sec-lbl">Skills Required</div>
      <div class="pills-hint"><span class="dot">↗</span> Click any skill to learn free</div>
      <div class="pills">${skillPills(j.skills)}</div>
      <div class="sec-lbl green">Recommended Courses</div>
      <div class="pills">${plainPills(j.courses, 'p-course')}</div>
      <div class="sec-lbl gold">Govt Schemes</div>
      <div class="pills-hint"><span class="dot">↗</span> Click to visit official site</div>
      <div class="pills">${schemePills(j.schemes)}</div>
      <div class="sec-lbl blue">Networking</div>
      <div class="pills">${plainPills(j.networking, 'p-net')}</div>
    </div>
  </div>`;
}

function renderBizCard(b, i) {
  return `<div class="rcard" style="animation-delay:${i * .07}s">
    <div class="rcard-head">
      <div class="num">0${i + 1}</div>
      <div class="ttl">${b.idea || '—'}</div>
      <div class="sub">${b.category || ''}</div>
      ${b.monthly_income ? `<div class="badge">${b.monthly_income}/mo</div>` : ''}
    </div>
    <div class="rcard-body">
      ${b.why_fit ? `<p style="font-size:.83rem;color:var(--ink-soft);margin-bottom:12px;line-height:1.6;font-style:italic">"${b.why_fit}"</p>` : ''}
      <div class="meta-chips">${b.investment ? `<span class="meta-chip">💰 ${b.investment}</span>` : ''}</div>
      <div class="sec-lbl">Skills Required</div>
      <div class="pills-hint"><span class="dot">↗</span> Click any skill to learn free</div>
      <div class="pills">${skillPills(b.skills)}</div>
      <div class="sec-lbl green">Recommended Courses</div>
      <div class="pills">${plainPills(b.courses, 'p-course')}</div>
      <div class="sec-lbl gold">Govt Schemes</div>
      <div class="pills-hint"><span class="dot">↗</span> Click to visit official site</div>
      <div class="pills">${schemePills(b.schemes)}</div>
      <div class="sec-lbl blue">Networking</div>
      <div class="pills">${plainPills(b.networking, 'p-net')}</div>
    </div>
  </div>`;
}

function renderSchemeCard(s, i) {
  const url = s.url
    || SCL[s.name]
    || Object.entries(SCL).find(([k]) => (s.name || '').toLowerCase().includes(k.toLowerCase()))?.[1]
    || '#';
  return `<div class="scheme-card" style="animation-delay:${i * .06}s">
    <div class="scheme-tag">${s.tag || 'Scheme'}</div>
    <h4>${s.name || '—'}</h4>
    <p>${s.description || ''}</p>
    <a href="${url}" target="_blank" rel="noopener" class="scheme-link">Apply / Learn More ↗</a>
  </div>`;
}

function renderNetwork(net) {
  const secs = [
    { title: '🏛 Communities',        key: 'communities' },
    { title: '🌐 Online Platforms',   key: 'online'      },
    { title: '🎓 Mentorship',         key: 'mentorship'  },
    { title: '🏛 Government Portals', key: 'portals'     },
  ];
  return secs.map(sec => {
    const items = net[sec.key] || [];
    if (!items.length) return '';
    return `<div class="net-section">
      <h3>${sec.title}</h3>
      <div class="net-grid">
        ${items.map(item => `<div class="net-item"><span>🔹</span><span>${item}</span></div>`).join('')}
      </div>
    </div>`;
  }).join('');
}

function renderBarrier(fields) {
  if (!fields.length) return empty('⚡', 'No barrier fields generated');

  const avg = Math.round(fields.reduce((s, b) => s + (b.gap_pct || 75), 0) / fields.length);

  const hero = `<div style="background:linear-gradient(135deg,var(--ink),#3A2520);border-radius:var(--r);padding:28px 32px;margin-bottom:24px;position:relative;overflow:hidden;">
    <div style="position:absolute;top:-40px;right:-40px;width:180px;height:180px;background:radial-gradient(circle,rgba(214,63,107,.2) 0%,transparent 70%);pointer-events:none;"></div>
    <h2 style="font-family:var(--font-d);font-size:1.5rem;font-weight:700;color:#fff;margin-bottom:8px;position:relative;z-index:1;">
      Fields Where Women Can <em style="color:var(--gold-light);font-style:italic">Change the Game</em>
    </h2>
    <p style="font-size:.85rem;color:rgba(255,255,255,.6);margin-bottom:16px;max-width:500px;line-height:1.7;position:relative;z-index:1;">
      These fields are male-dominated — not because women can't do the work, but because the path hasn't been shown clearly enough. Until now.
    </p>
    <div style="display:flex;gap:16px;flex-wrap:wrap;position:relative;z-index:1;">
      <div style="background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.12);border-radius:8px;padding:10px 16px;text-align:center;">
        <strong style="display:block;font-family:var(--font-d);font-size:1.5rem;color:var(--gold-light);">${fields.length}</strong>
        <span style="font-size:.7rem;color:rgba(255,255,255,.5);text-transform:uppercase;letter-spacing:.06em;">Fields</span>
      </div>
      <div style="background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.12);border-radius:8px;padding:10px 16px;text-align:center;">
        <strong style="display:block;font-family:var(--font-d);font-size:1.5rem;color:var(--gold-light);">${avg}%</strong>
        <span style="font-size:.7rem;color:rgba(255,255,255,.5);text-transform:uppercase;letter-spacing:.06em;">Avg Male %</span>
      </div>
    </div>
  </div>`;

  const cards = fields.map((b, i) => `
  <div class="barrier-card" style="animation-delay:${i * .1}s">
    <div class="bc-top">
      <div class="bc-num">0${i + 1}</div>
      <div class="bc-title">${b.title}</div>
      <span class="bc-ind">${b.industry}</span>
      ${b.salary ? `<span class="bc-salary">₹ ${b.salary}</span>` : ''}
    </div>
    <div class="bc-body">
      <div class="gap-meter">
        <div class="gap-row">
          <span>Gender Gap</span>
          <span class="gap-pct">${b.gap_pct || 75}% male</span>
        </div>
        <div class="gap-track"><div class="gap-fill" style="width:${b.gap_pct || 75}%"></div></div>
        <div class="gap-note">${b.gap_note || ''} · ${b.opportunity || ''}</div>
      </div>
      <div class="sec-lbl gold" style="margin-bottom:8px">Your Roadmap to Enter</div>
      <div class="roadmap-steps">
        ${(b.roadmap || []).map((step, si) => `
          <div class="roadmap-step">
            <div class="step-dot">${si + 1}</div>
            <span>${step}</span>
          </div>`).join('')}
      </div>
      <div class="sec-lbl" style="margin-bottom:5px">Key Skills to Master</div>
      <div class="pills-hint"><span class="dot">↗</span> Click to learn free</div>
      <div class="pills" style="margin-bottom:14px">${barrierSkillPills(b.key_skills)}</div>
      <div class="sec-lbl" style="margin-bottom:8px">Myth-Busting ⚡</div>
      ${(b.myths || []).map(m => `
        <div class="myth-box">
          <div class="myth-false">✗ "${m.false}"</div>
          <div class="myth-true">✓ ${m.true}</div>
        </div>`).join('')}
      ${b.role_models && b.role_models.length
        ? `<div class="sec-lbl blue" style="margin-top:12px;margin-bottom:8px">Women Who Lead Here</div>
           <div class="pills">${b.role_models.map(r => `<span class="pill p-net">👩‍💼 ${r}</span>`).join('')}</div>`
        : ''}
      ${b.schemes && b.schemes.length
        ? `<div class="sec-lbl gold" style="margin-top:12px;margin-bottom:5px">Schemes & Support</div>
           <div class="pills-hint"><span class="dot">↗</span> Click to visit official site</div>
           <div class="pills" style="margin-bottom:12px">${schemePills(b.schemes)}</div>`
        : ''}
      <div class="barrier-cta">⚡ <strong>The gap is the opportunity.</strong> With the right skills, you will not just enter this field — you will lead it.</div>
    </div>
  </div>`).join('');

  return hero + `<div class="cards-grid">${cards}</div>`;
}

/* ══════════════════════════════════════
   TAB SWITCHER & NAVIGATION
══════════════════════════════════════ */
function switchTab(name, btn) {
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
  document.getElementById('panel-' + name).classList.add('active');
  if (btn) btn.classList.add('active');
  const cp = document.getElementById('contentPanel');
  if (cp) cp.scrollTop = 0;
}

function goBack() {
  document.getElementById('results-page').classList.remove('show');
  document.getElementById('results-page').style.display = 'none';
  document.getElementById('landing').style.display = 'flex';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ══════════════════════════════════════
   CHATBOT
══════════════════════════════════════ */
let chatOpen       = false;
let chatHistory    = [];
let userProfile    = null;
let resultsData    = null;
let chatInitialized = false;

function toggleChat() {
  chatOpen = !chatOpen;
  document.getElementById('chatWindow').classList.toggle('open', chatOpen);
  document.getElementById('chatFab').classList.toggle('open', chatOpen);
  if (chatOpen) {
    document.getElementById('chatUnread').classList.remove('show');
    if (!chatInitialized) initChat();
    setTimeout(() => document.getElementById('chatInput').focus(), 300);
  }
}

function initChat() {
  chatInitialized = true;
  const msgs = document.getElementById('chatMsgs');
  msgs.innerHTML = '';

  const hasProfile = userProfile && userProfile.age;
  const greeting = hasProfile
    ? `Hi! I'm your CareerSaathi assistant 👋\n\nI can see you're ${userProfile.age} years old, based in ${userProfile.loc}, interested in ${userProfile.iStr}.\n\nHow can I help you today?`
    : `Hi! I'm your CareerSaathi assistant 👋\n\nI can help you with career advice, government schemes, skill resources, business ideas, and anything related to women's empowerment in India.\n\nWhat would you like to know?`;

  appendBotMsg(greeting);

  const qrs = hasProfile
    ? ['What skills should I learn first?', 'Which scheme suits me best?', 'How do I start freelancing?', 'Best cities for my career?']
    : ['Career options after 12th', 'Best govt schemes for women', 'How to start a business with ₹10K', 'High paying remote jobs'];
  appendQuickReplies(qrs);
}

function appendBotMsg(text) {
  const msgs = document.getElementById('chatMsgs');
  const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const div = document.createElement('div');
  div.className = 'msg bot';
  div.innerHTML = `
    <div class="msg-avatar">✨</div>
    <div>
      <div class="msg-bubble">${text.split('\n').join('<br>')}</div>
      <span class="msg-time">${time}</span>
    </div>`;
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}

function appendUserMsg(text) {
  const msgs = document.getElementById('chatMsgs');
  const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const div = document.createElement('div');
  div.className = 'msg user';
  div.innerHTML = `
    <div class="msg-avatar">👤</div>
    <div>
      <div class="msg-bubble">${text.replace(/</g, '&lt;')}</div>
      <span class="msg-time">${time}</span>
    </div>`;
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}

function appendQuickReplies(options) {
  const msgs = document.getElementById('chatMsgs');
  const wrap = document.createElement('div');
  wrap.className = 'quick-replies';
  options.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'qr-btn';
    btn.textContent = opt;
    btn.onclick = () => { wrap.remove(); sendChatText(opt); };
    wrap.appendChild(btn);
  });
  msgs.appendChild(wrap);
  msgs.scrollTop = msgs.scrollHeight;
}

function showTyping() {
  const msgs = document.getElementById('chatMsgs');
  const div = document.createElement('div');
  div.className = 'msg bot';
  div.id = 'typingIndicator';
  div.innerHTML = `
    <div class="msg-avatar">✨</div>
    <div class="msg-bubble">
      <div class="typing-dots"><span></span><span></span><span></span></div>
    </div>`;
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}

function hideTyping() {
  const t = document.getElementById('typingIndicator');
  if (t) t.remove();
}

function autoResize(el) {
  el.style.height = 'auto';
  el.style.height = Math.min(el.scrollHeight, 100) + 'px';
}

function handleChatKey(e) {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    sendChat();
  }
}

async function sendChat() {
  const inp = document.getElementById('chatInput');
  const text = inp.value.trim();
  if (!text) return;
  inp.value = '';
  inp.style.height = 'auto';
  sendChatText(text);
}

async function sendChatText(text) {
  appendUserMsg(text);
  document.getElementById('chatSend').disabled = true;

  // Build context string from user profile + results
  let context = '';
  if (userProfile && userProfile.age) {
    context = `User profile: Age ${userProfile.age}, City: ${userProfile.loc}, Marital: ${userProfile.mar}, Education: ${userProfile.edu}, Interests: ${userProfile.iStr}.\n`;
  }
  if (resultsData) {
    const careers = (resultsData.careers    || []).map(c => c.title).join(', ');
    const biz     = (resultsData.businesses || []).map(b => b.idea).join(', ');
    const schemes = (resultsData.schemes    || []).map(s => s.name).join(', ');
    if (careers) context += `Recommended careers: ${careers}.\n`;
    if (biz)     context += `Business ideas: ${biz}.\n`;
    if (schemes) context += `Relevant schemes: ${schemes}.\n`;
  }

  const systemPrompt = `You are CareerSaathi Assistant, a warm, knowledgeable career and entrepreneurship guide for women in India.
${context}
Guidelines:
- Be concise, friendly, and practical (2-4 short paragraphs max)
- Focus on Indian context — cities, schemes, job market, culture
- Give specific actionable advice, not generic tips
- If asked about skills, mention free resources (Coursera, NPTEL, YouTube, etc.)
- If asked about schemes, mention real Indian government schemes
- Use simple language, avoid jargon
- Be empowering and encouraging`;

  chatHistory.push({ role: 'user', content: text });
  showTyping();

  try {
    const resp = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + GROQ_KEY
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        temperature: 0.8,
        max_tokens: 400,
        messages: [
          { role: 'system', content: systemPrompt },
          ...chatHistory.slice(-8)
        ]
      })
    });

    hideTyping();

    if (!resp.ok) {
      const e = await resp.json().catch(() => ({}));
      throw new Error(e.error?.message || 'API error');
    }

    const data  = await resp.json();
    const reply = data.choices?.[0]?.message?.content || 'Sorry, I could not respond. Please try again.';

    chatHistory.push({ role: 'assistant', content: reply });
    appendBotMsg(reply);

    const followUps = getFollowUps(text);
    if (followUps.length) appendQuickReplies(followUps);

  } catch (err) {
    hideTyping();
    appendBotMsg('Sorry, something went wrong. Please check your Groq key or try again. Error: ' + err.message);
  }

  document.getElementById('chatSend').disabled = false;
  document.getElementById('chatInput').focus();
}

/**
 * Returns contextual quick-reply suggestions based on the last user message.
 * @param {string} lastQ
 * @returns {string[]}
 */
function getFollowUps(lastQ) {
  const q = lastQ.toLowerCase();
  if (q.includes('skill') || q.includes('learn'))
    return ['Free courses online?', 'How long to learn?', 'Job after this skill?'];
  if (q.includes('scheme') || q.includes('loan') || q.includes('mudra'))
    return ['How to apply?', 'Documents needed?', 'Other schemes for me?'];
  if (q.includes('business') || q.includes('start') || q.includes('entrepreneur'))
    return ['Investment needed?', 'Register a business', 'Marketing tips'];
  if (q.includes('job') || q.includes('career') || q.includes('salary'))
    return ['Resume tips', 'How to find jobs?', 'Work from home options'];
  return [];
}

/* Show unread badge after 2 seconds on load */
setTimeout(() => {
  if (!chatOpen) document.getElementById('chatUnread').classList.add('show');
}, 2000);