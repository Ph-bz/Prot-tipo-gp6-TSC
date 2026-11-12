const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
const STORE = 'rotaJovemDataV2';
const defaultJobs = [
    { id: 'seed1', company: 'Norte & Co.', title: 'Jovem Aprendiz — Administrativo', area: 'administração', location: 'São Paulo, SP', workMode: 'Híbrido', type: 'Jovem Aprendiz', skills: ['organização', 'comunicação'], certificates: '', description: 'Apoio a rotinas administrativas, organização de documentos e atendimento interno.', minAge: 14, maxAge: 20, seed: true, applications: [] },
    { id: 'seed2', company: 'Viva Serviços', title: 'Jovem Aprendiz — Atendimento', area: 'atendimento', location: 'Campinas, SP', workMode: 'Presencial', type: 'Jovem Aprendiz', skills: ['comunicação', 'trabalho em equipe'], certificates: '', description: 'Apoio ao atendimento e encaminhamento de solicitações com orientação da equipe.', minAge: 14, maxAge: 20, seed: true, applications: [] },
    { id: 'seed3', company: 'Ponto Digital', title: 'Jovem Aprendiz — Tecnologia', area: 'tecnologia', location: 'Remoto', workMode: 'Remoto', type: 'Jovem Aprendiz', skills: ['informática', 'resolução de problemas'], certificates: 'informática básica', description: 'Apoio inicial à equipe de tecnologia e organização de informações digitais.', minAge: 16, maxAge: 20, seed: true, applications: [] }
];
const careers = [
    { title: 'Tecnologia e dados', desc: 'Desenvolvimento, suporte, análise de dados e segurança digital.', skills: 'Lógica, curiosidade, resolução de problemas', paths: 'Suporte de TI, desenvolvimento, análise de dados, redes', courses: 'Lógica de programação, informática, planilhas' },
    { title: 'Administração e negócios', desc: 'Organização de processos, gestão, finanças e apoio operacional.', skills: 'Organização, comunicação, planejamento', paths: 'Assistente administrativo, RH, financeiro, logística', courses: 'Pacote de escritório, comunicação, gestão básica' },
    { title: 'Comunicação e criação', desc: 'Produção de conteúdo, design, marketing e comunicação visual.', skills: 'Criatividade, escrita, observação', paths: 'Assistente de marketing, design, produção de conteúdo', courses: 'Design básico, escrita, marketing digital' },
    { title: 'Saúde e bem-estar', desc: 'Áreas ligadas à promoção da saúde, cuidado e pesquisa.', skills: 'Responsabilidade, empatia, atenção', paths: 'Técnico de enfermagem (com formação), apoio administrativo em saúde, pesquisa', courses: 'Biossegurança introdutória, atendimento, primeiros conceitos' },
    { title: 'Educação e sociedade', desc: 'Ensino, projetos sociais, pesquisa e apoio ao desenvolvimento.', skills: 'Escuta, comunicação, organização', paths: 'Apoio educacional, projetos sociais, pedagogia (com formação)', courses: 'Comunicação, mediação, ferramentas digitais' },
    { title: 'Engenharia e meio ambiente', desc: 'Soluções práticas, sistemas, construção e sustentabilidade.', skills: 'Raciocínio, análise, trabalho em equipe', paths: 'Técnico em áreas industriais, desenho técnico, sustentabilidade', courses: 'Matemática aplicada, desenho, fundamentos ambientais' }
];
const courses = [
    { id: 'c1', title: 'Organização e produtividade', area: 'administração', level: 'Iniciante', duration: '40 min', desc: 'Prioridades, rotina de estudos e organização de tarefas.', kind: 'Conteúdo da plataforma', url: '' },
    { id: 'c2', title: 'Comunicação no ambiente de trabalho', area: 'comunicação', level: 'Iniciante', duration: '35 min', desc: 'Escuta, clareza, colaboração e postura profissional.', kind: 'Conteúdo da plataforma', url: '' },
    { id: 'c3', title: 'Planilhas: primeiros passos', area: 'administração', level: 'Iniciante', duration: '60 min', desc: 'Estrutura de tabelas, fórmulas simples e organização de dados.', kind: 'Conteúdo da plataforma', url: 'https://www.ev.org.br/' },
    { id: 'c4', title: 'Introdução à programação', area: 'tecnologia', level: 'Iniciante', duration: '50 min', desc: 'Lógica, sequência de instruções e resolução de problemas.', kind: 'Conteúdo da plataforma', url: 'https://www.ev.org.br/' },
    { id: 'c5', title: 'Preparação para o primeiro emprego', area: 'carreira', level: 'Iniciante', duration: '45 min', desc: 'Currículo, entrevista e comportamento profissional.', kind: 'Conteúdo da plataforma', url: 'https://www.escolavirtual.gov.br/' },
    { id: 'c6', title: 'Cursos gratuitos de tecnologia', area: 'tecnologia', level: 'Externo', duration: 'Catálogo', desc: 'Explore trilhas introdutórias e cursos gratuitos disponíveis na plataforma parceira.', kind: 'Plataforma externa', url: 'https://www.ev.org.br/' }
];
const demoCandidates = [
    { name: 'Ana Martins', education: '2º ano do ensino médio', location: 'São Paulo, SP', skills: ['organização', 'comunicação', 'planilhas'], certificates: ['Organização e produtividade'], interests: ['administração', 'atendimento'], age: 17 },
    { name: 'João Costa', education: 'Ensino técnico integrado', location: 'Campinas, SP', skills: ['informática', 'resolução de problemas', 'trabalho em equipe'], certificates: ['Introdução à programação'], interests: ['tecnologia', 'dados'], age: 18 },
    { name: 'Luiza Santos', education: '3º ano do ensino médio', location: 'São Paulo, SP', skills: ['comunicação', 'escrita', 'trabalho em equipe'], certificates: ['Comunicação no ambiente de trabalho'], interests: ['comunicação', 'atendimento'], age: 18 },
    { name: 'Rafael Lima', education: '2º ano do ensino médio', location: 'Santo André, SP', skills: ['organização', 'planilhas', 'comunicação'], certificates: ['Planilhas: primeiros passos'], interests: ['administração', 'financeiro'], age: 16 },
    { name: 'Beatriz Rocha', education: 'Ensino técnico integrado', location: 'Remoto', skills: ['informática', 'organização', 'escrita'], certificates: ['Preparação para o primeiro emprego'], interests: ['tecnologia', 'comunicação'], age: 19 }
];
let state = loadState(), authMode = 'register', toastTimer;
if (state.tasks) { delete state.tasks; try { localStorage.setItem(STORE, JSON.stringify(state)); } catch { } }

function loadState() { try { return JSON.parse(localStorage.getItem(STORE)) || { users: [], session: null, jobs: defaultJobs, progress: {}, applications: [], certificates: [], resumes: {}, careerResults: {}, profiles: {}, points: {} } } catch { return { users: [], session: null, jobs: defaultJobs, progress: {}, applications: [], certificates: [], resumes: {}, careerResults: {}, profiles: {}, points: {} } } }

function save() { localStorage.setItem(STORE, JSON.stringify(state)) }

function uid(prefix = 'id') { return prefix + '_' + Math.random().toString(36).slice(2, 10) }

function current() { return state.session ? state.users.find(u => u.email === state.session.email) : null }

function toast(msg) { const t = $('#toast'); t.textContent = msg; t.classList.add('show'); clearTimeout(toastTimer); toastTimer = setTimeout(() => t.classList.remove('show'), 3500) }

function esc(s = '') { return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])) }

function norm(s = '') { return String(s).toLocaleLowerCase('pt-BR').normalize('NFD').replace(/[\u0300-\u036f]/g, '') }

function split(s = '') { return String(s).split(',').map(x => norm(x.trim())).filter(Boolean) }

function roleOf() { return current()?.role || null }


function configurePublicNav() {
    const nav = $('#mainNav');
    if (!nav || document.body.dataset.accountPage) return;
    nav.classList.remove('workspace-topnav');
    nav.innerHTML = '<a href="#inicio" data-view="home" id="homeNavLink">Início</a><a href="#recursos">Recursos</a><a href="#como-funciona">Como funciona</a><a href="#quem-somos">Quem somos</a>';
    nav.setAttribute('aria-label', 'Navegação principal');
}

function configureWorkspaceNav(role) {
    const nav = $('#mainNav');
    if (!nav) return;
    if (role === 'student') nav.innerHTML = '<button data-panel="student-home">Início</button><button data-panel="student-jobs">Vagas</button><button data-panel="learning">Cursos</button><button data-panel="ranking">Ranking</button><button data-panel="student-overview">Perfil</button>';
    el
    nav.innerHTML = '<button data-panel="company-vacancies">Vagas</button><button data-panel="company-candidates">Candidatos</button><button data-panel="company-profile">Perfil</button>';
    nav.classList.add('workspace-topnav');
    nav.setAttribute('aria-label', role === 'student' ? 'Navegação do estudante' : 'Navegação da empresa');
    updateHeader();
}

function setView(name) {
    const user = current();
    if (name === 'home') configurePublicNav();

    // A página inicial é sempre pública; o painel só abre por ação explícita.
    // Impede que uma conta acesse a interface do outro tipo de usuário.
    if (name === 'student' || name === 'company') {
        if (!user) {
            name = 'home';
        } else if (user.role !== name) {
            toast('Esta área não pertence ao tipo da sua conta. Você continua na página inicial.');
            name = 'home';
        }
    }

    // Isolamento rígido das telas: apenas a view solicitada fica renderizada.
    // O atributo hidden também impede que regras de layout/grid reexibam outra área.
    $$('.view').forEach(view => {
        const isTarget = view.id === `view-${name}`;
        view.classList.toggle('active', isTarget);
        view.hidden = !isTarget;
        view.setAttribute('aria-hidden', String(!isTarget));
    });
    $('#mainNav').classList.remove('open');
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (name === 'student') {
        renderStudent();
        configureWorkspaceNav('student');
        showPanel('student-home');
    }
    if (name === 'company') {
        renderCompany();
        configureWorkspaceNav('company');
        showPanel('company-overview');
    }
    if (name === 'jobs') renderPublicJobs();
    document.body.dataset.currentView = name;
}

function showPanel(name) {
    const user = current();
    const requestedRole = name.startsWith('company-') ? 'company' : 'student';
    if (!user || user.role !== requestedRole) { toast('Esta área não pertence ao tipo da sua conta.'); setView('home'); return; }
    const root = name.startsWith('company-') ? $('#view-company') : $('#view-student');
    if (!root || root.hidden || !root.classList.contains('active')) { setView(user.role); return; }
    root.querySelectorAll('.panel').forEach(p => p.classList.toggle('active', p.id === 'panel-' + name));
    root.querySelectorAll('.side-link').forEach(b => b.classList.toggle('active', b.dataset.panel === name));
    const navFor = { 'student-overview': 'student-overview', profile: 'student-overview', career: 'student-overview', resume: 'student-overview', 'company-overview': '' }; const navTarget = name in navFor ? navFor[name] : name; $$('#mainNav [data-panel]').forEach(b => b.classList.toggle('workspace-current', b.dataset.panel === navTarget));
    if (name === 'career') renderCareer();
    if (name === 'learning') renderLearning();
    if (name === 'resume') renderResume();
    if (name === 'student-jobs') renderStudentJobs();
    if (name === 'student-home') { renderInicioJobs(); renderInicioCourses(); renderRanking(); renderHomeProfile(); }
    if (name === 'student-overview') { renderStudent(); }
    if (name === 'ranking') renderRanking();
    if (name === 'profile') fillStudentProfile();
    if (name === 'company-vacancies') renderCompanyJobs();
    if (name === 'company-candidates') renderCandidates();
    if (name === 'company-profile') fillCompanyProfile();
    if (name === 'company-overview') renderCompany();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function openAuth(mode = 'register', role = 'student') { authMode = mode; $('#authModal').hidden = false; document.body.style.overflow = 'hidden'; setAuthMode(mode); const radio = $(`input[name="role"][value="${role}"]`); if (radio) radio.checked = true; updateAuthFields() }

function closeAuth() { $('#authModal').hidden = true; document.body.style.overflow = '' }

function setAuthMode(mode) { authMode = mode; $$('[data-auth-mode]').forEach(b => b.classList.toggle('active', b.dataset.authMode === mode)); $('#authTitle').textContent = mode === 'register' ? 'Crie sua conta' : 'Entre na sua conta'; $('#authIntro').textContent = mode === 'register' ? 'Escolha seu perfil e preencha os dados.' : 'Use os dados da conta criada neste navegador.'; $('#authSubmit').textContent = mode === 'register' ? 'Criar conta demonstrativa' : 'Entrar'; $('#authNameWrap').hidden = mode === 'login'; $('#authName').required = mode === 'register'; updateAuthFields() }

function updateAuthFields() { const role = $('input[name="role"]:checked')?.value || 'student', reg = authMode === 'register'; $('#authStudentFields').hidden = role !== 'student' || !reg; $('#authCompanyFields').hidden = role !== 'company' || !reg; $('#authAge').required = role === 'student' && reg; $('#authEducation').required = role === 'student' && reg; $('#authCpf').required = role === 'student' && reg; $('#authCnpj').required = role === 'company' && reg }

function updateHeader() { const user = current(), actions = $('#topActions'), homeLink = $('#homeNavLink'); if (homeLink) { homeLink.textContent = 'Início'; homeLink.setAttribute('href', '#inicio'); homeLink.dataset.view = 'home' } actions.innerHTML = user ? `<span class="user-chip"><span class="login-dot"></span><span class="user-chip-name">${esc(user.name)}</span><small>${user.role === 'student' ? 'Estudante' : 'Empresa'}</small></span>${document.body.dataset.accountPage ? '' : '<button class="btn btn-outline" data-action="dashboard">Minha área</button>'}<button class="btn btn-quiet" data-action="logout">Sair</button>` : '<button class="btn btn-quiet" data-action="open-login">Entrar</button><button class="btn btn-primary" data-action="open-register">Criar conta</button>' }


function allJobs() { return state.jobs || defaultJobs }


function userProfile() { const u = current(); return u ? (state.profiles[u.email] || u) : null }

function homeJobCards() { const box = $('#homeJobs'); if (!box) return; const jobs = allJobs().slice(0, 3); box.innerHTML = jobs.map(j => jobCard(j, false)).join('') }

function jobCard(j, apply = true) { const user = current(), applied = state.applications.some(a => a.jobId === j.id && a.email === user?.email); return `<article class="job-card"><p class="job-company">${esc(j.company)}</p><h3>${esc(j.title)}</h3><p class="job-meta">${esc(j.location)} · ${esc(j.workMode || 'A definir')}</p><div class="tag-list"><span class="tag">${esc(j.type || 'Oportunidade')}</span><span class="tag">${esc(j.area)}</span></div><div class="job-card-actions"><button class="btn btn-outline full" data-job-info="${esc(j.id)}">Ver detalhes</button>${apply ? `<button class="btn ${applied ? 'btn-outline' : 'btn-primary'} full" data-apply="${esc(j.id)}" ${applied ? 'disabled' : ''}>${applied ? 'Interesse registrado' : 'Tenho interesse'}</button>` : ''}</div></article>` }

function filterJobs(filters = {}) { return allJobs().filter(j => { const text = (v) => norm(v || ''); if (filters.location && !text(j.location).includes(text(filters.location)) && !text(j.workMode).includes(text(filters.location))) return false; if (filters.area && !text(j.area + ' ' + j.title + ' ' + (j.skills || []).join(' ')).includes(text(filters.area))) return false; if (filters.skills && !text((j.skills || []).join(' ')).includes(text(filters.skills))) return false; if (filters.company && !text(j.company).includes(text(filters.company))) return false; if (filters.certificate && !text(j.certificates).includes(text(filters.certificate))) return false; if (filters.mode && j.workMode !== filters.mode) return false; if (filters.type && j.type !== filters.type) return false; return true }) }

function renderPublicJobs() { const f = $('#publicJobFilter'); if (!f) return; const d = new FormData(f); const jobs = filterJobs({ location: d.get('location'), area: d.get('area'), mode: d.get('mode'), type: d.get('type') }); $('#publicJobResults').innerHTML = jobs.length ? jobs.map(j => jobCard(j, true)).join('') : '<div class="empty-state wide">Nenhuma vaga corresponde aos filtros. Tente outra localidade ou área.</div>' }

function renderStudentJobs() { const f = $('#jobFilter'); if (!f) return; const d = new FormData(f); const jobs = filterJobs({ location: d.get('location'), area: d.get('area'), skills: d.get('skills'), company: d.get('company'), certificate: d.get('certificate') }); $('#jobResults').innerHTML = jobs.length ? jobs.map(j => jobCard(j, true)).join('') : '<div class="empty-state wide">Nenhuma vaga corresponde aos filtros. Ajuste os critérios e tente novamente.</div>' }

function renderInicioJobs() { const box = $('#inicioJobResults'); if (!box) return; const jobs = allJobs().slice().reverse().slice(0, 2); box.innerHTML = jobs.length ? jobs.map(j => jobCard(j, true)).join('') : '<p class="empty-state">Ainda não há vagas publicadas.</p>'; }


function renderInicioCourses() { const box = $('#inicioCourseResults'); if (!box) return; box.innerHTML = courses.slice(0, 2).map(c => `<article class="home-course-item"><span class="home-course-icon">✦</span><div><strong>${esc(c.title)}</strong><small>${esc(c.area)} · ${esc(c.duration)}</small></div></article>`).join(''); }
function renderHomeProfile() { const u = current(); if (!u || !$('#homeProfileName')) return; const p = state.progress[u.email] || { courses: [] }; const profile = state.profiles[u.email] || u; const name = profile.name || u.name; const initials = name.split(/\s+/).slice(0, 2).map(x => x[0]).join('').toUpperCase(); $('#homeProfileAvatar').textContent = initials; $('#homeProfileName').textContent = name; $('#homeProfileEducation').textContent = profile.education || 'Escolaridade não informada'; $('#homeProfileSkills').textContent = (state.resumes[u.email]?.skills || '').split(',').filter(x => x.trim()).length; $('#homeProfileCourses').textContent = (p.courses || []).length; }

function applyToJob(id) { const user = current(); if (!user) { openAuth('login', 'student'); return } if (user.role !== 'student') { toast('A candidatura está disponível no perfil de estudante.'); return } if (state.applications.some(a => a.jobId === id && a.email === user.email)) { toast('Você já demonstrou interesse nesta vaga.'); return } const j = allJobs().find(x => x.id === id); if (!j) return; if (user.age && (+user.age < (j.minAge || 14) || +user.age > (j.maxAge || 99))) { toast('A faixa etária informada não corresponde aos requisitos desta vaga.'); return } state.applications.push({ id: uid('app'), jobId: id, email: user.email, date: new Date().toISOString() }); state.points[user.email] = (state.points[user.email] || 0) + 10; j.applications = j.applications || []; j.applications.push(user.email); save(); toast('Candidatura registrada! Você ganhou 10 pontos no ranking mensal.'); renderPublicJobs(); renderRanking(); renderInicioJobs(); renderStudentJobs(); renderStudent(); renderCompany() }

function renderStudent() {
    const u = current();
    if (!u || u.role !== 'student') return;
    const greeting = $('#studentGreeting');
    if (greeting) greeting.textContent = u.name.split(' ')[0];
    const p = state.progress[u.email] || { courses: [], certificates: [], quizDone: false, resumeDone: false };
    const routeDone = [!!p.quizDone, (p.courses || []).length > 0, !!p.resumeDone, state.applications.some(a => a.email === u.email)];
    let started = 0;
    routeDone.forEach((done, i) => {
        const status = $('#routeStatus' + (i + 1));
        if (status) {
            status.textContent = done ? 'Etapa concluída' : (started === 0 ? 'Seu próximo passo' : 'Continue sua jornada');
            status.classList.toggle('route-complete', done);
        }
        if (done) started++;
    });
    const progressText = $('#routeProgressText');
    const progressBar = $('#routeProgressBar');
    if (progressText) progressText.textContent = started + ' de 4 etapas concluídas';
    if (progressBar) progressBar.style.width = (started / 4 * 100) + '%';
    renderRanking();
    renderInicioJobs();
    renderInicioCourses();
    renderHomeProfile();
}

function ageForRoute(u) { return Number((state.profiles[u.email] || u).age || u.age || 0) }

function renderCareer() { const u = current(); if (!u) return; $('#careerCatalog').innerHTML = careers.map(c => `<article class="career-item"><h4>${esc(c.title)}</h4><p>${esc(c.desc)}</p><small>Habilidades: ${esc(c.skills)}</small></article>`).join(''); if ($('#quizQuestions').dataset.ready) return; const qs = [{ q: 'Que tipo de atividade chama mais sua atenção?', opts: [['tech', 'Resolver problemas com computadores e lógica'], ['business', 'Organizar tarefas, números e processos'], ['creative', 'Criar textos, imagens ou campanhas'], ['care', 'Ajudar pessoas e cuidar do bem-estar'], ['education', 'Ensinar, orientar ou pesquisar'], ['engineering', 'Construir, testar ou entender como as coisas funcionam']] }, { q: 'Em um trabalho em grupo, qual papel você prefere?', opts: [['tech', 'Investigar como resolver um problema'], ['business', 'Planejar etapas e dividir tarefas'], ['creative', 'Pensar em ideias e apresentar propostas'], ['care', 'Ouvir as pessoas e apoiar o grupo'], ['education', 'Explicar informações e ajudar colegas'], ['engineering', 'Testar soluções práticas']] }, { q: 'Qual tema você teria vontade de aprender?', opts: [['tech', 'Programação e tecnologia'], ['business', 'Administração e negócios'], ['creative', 'Comunicação e design'], ['care', 'Saúde e bem-estar'], ['education', 'Educação e sociedade'], ['engineering', 'Engenharia e meio ambiente']] }]; $('#quizQuestions').innerHTML = qs.map((q, i) => `<div class="quiz-question"><p>${i + 1}. ${q.q}</p>${q.opts.map(([v, l]) => `<label><input type="radio" name="q${i}" value="${v}" required> ${l}</label>`).join('')}</div>`).join(''); $('#quizQuestions').dataset.ready = '1'; const result = state.careerResults[u.email]; if (result) showCareerResult(result) }

function showCareerResult(result) { const target = $('#careerResults'); target.hidden = false; const list = result.areas || []; target.innerHTML = `<p class="eyebrow">Resultado orientativo</p><h3>${esc(result.title || 'Áreas para explorar')}</h3><p>${esc(result.summary || 'Estas sugestões servem como ponto de partida. Converse com orientadores, pesquise formações e compare as atividades reais de cada profissão.')}</p>${list.map(t => { const c = careers.find(x => x.title === t) || careers.find(x => norm(x.title).includes(norm(t))) || careers[0]; return `<div class="career-item"><h4>${esc(c.title)}</h4><p>${esc(c.desc)}</p><p><b>Possíveis caminhos:</b> ${esc(c.paths)}</p><p><b>Para começar:</b> ${esc(c.courses)}</p></div>` }).join('')}` }

function renderLearning() { const u = current(); if (!u) return; const p = state.progress[u.email] || { courses: [] }; $('#courseGrid').innerHTML = courses.map(c => { const done = p.courses.includes(c.id); return `<article class="course-card"><p class="eyebrow">${esc(c.area)} · ${esc(c.level)}</p><h3>${esc(c.title)}</h3><p>${esc(c.desc)}</p><div class="course-foot"><small>${esc(c.duration)} · ${esc(c.kind)}</small>${c.url ? `<a href="${esc(c.url)}" target="_blank" rel="noopener noreferrer">Abrir plataforma externa</a>` : `<button class="small-btn" data-course="${c.id}" ${done ? 'disabled' : ''}>${done ? 'Concluído' : 'Marcar como concluído'}</button>`}</div>${c.url ? `<button class="btn btn-outline" data-course="${c.id}" ${done ? 'disabled' : ''}>${done ? 'Concluído' : 'Registrar conclusão demonstrativa'}</button>` : ''}</article>` }).join(''); $('#certificateCourse').innerHTML = '<option value="">Selecione um curso</option>' + courses.map(c => `<option value="${c.id}">${esc(c.title)}</option>`).join(''); const certs = state.certificates.filter(c => c.email === u.email); $('#certificateList').innerHTML = certs.length ? certs.map(c => `<div class="certificate-entry"><b>${esc(c.courseTitle)}</b><br><span class="muted">${esc(c.fileName)} · registrado em ${new Date(c.date).toLocaleDateString('pt-BR')}</span></div>`).join('') : '<div class="empty-state">Nenhum certificado registrado ainda.</div>' }

function completeCourse(id) { const u = current(); if (!u) return; const p = state.progress[u.email] || (state.progress[u.email] = { courses: [], certificates: [], quizDone: false, resumeDone: false }); if (!p.courses.includes(id)) { p.courses.push(id); state.points[u.email] = (state.points[u.email] || 0) + 10; save(); toast('Conclusão registrada. Você ganhou 10 pontos demonstrativos.'); renderLearning(); renderStudent() } }

function renderResume() { const u = current(); if (!u) return; const f = $('#resumeForm'), r = state.resumes[u.email] || {}; if (!f) return; for (const el of f.elements) { if (el.name && r[el.name] !== undefined) el.value = r[el.name]; else if (el.name && u[el.name] !== undefined) el.value = u[el.name] } updateResumePreview(r) }

function updateResumePreview(r = {}) { const u = current(); if (!u) return; const x = { fullName: r.fullName || u.name, email: r.email || u.email, location: r.location || '', education: r.education || u.education || '', interests: r.interests || '', skills: r.skills || '', objective: r.objective || '', courses: r.courses || state.certificates.filter(c => c.email === u.email).map(c => c.courseTitle).join(', ') }; $('#resumePreview').innerHTML = `<h2>${esc(x.fullName || 'Seu nome')}</h2><p>${esc(x.email)}${x.location ? ' · ' + esc(x.location) : ''}</p><h3>Objetivo profissional</h3><p>${esc(x.objective || 'Preencha o objetivo profissional para apresentar sua área de interesse.')}</p><h3>Formação</h3><p>${esc(x.education || 'Informe sua escolaridade.')}</p><h3>Habilidades</h3><p>${esc(x.skills || 'Adicione habilidades relevantes.')}</p><h3>Interesses</h3><p>${esc(x.interests || 'Informe as áreas que deseja explorar.')}</p><h3>Cursos e certificados</h3><p>${esc(x.courses || 'Adicione cursos e certificados.')}</p>` }

function fillStudentProfile() { const u = current(); if (!u || u.role !== 'student') return; const f = $('#studentProfileForm'), p = state.profiles[u.email] || u; if (!f) return; for (const el of f.elements) if (el.name) el.value = p[el.name] || u[el.name] || '' }



function renderRanking() { const u = current(); if (!u) return; const points = state.points[u.email] || 0; const leagues = [['Bronze', 0, 50], ['Prata', 50, 120], ['Ouro', 120, 220], ['Diamante', 220, 400]]; let league = leagues[0]; for (const l of leagues) if (points >= l[1]) league = l; $('#leagueName').textContent = league[0]; $('#leagueDescription').textContent = league[0] === 'Diamante' ? 'Você alcançou a liga mais alta do ranking mensal.' : 'Conclua cursos e candidate-se a vagas para avançar à próxima liga.'; $('#leagueProgress').style.width = Math.min(100, (points - league[1]) / (league[2] - league[1]) * 100) + '%'; $('#pointsText').textContent = points + ' pontos neste mês'; const demo = [{ name: 'Ana Clara', points: 185, email: 'demo-ana' }, { name: 'Lucas Mendes', points: 160, email: 'demo-lucas' }, { name: 'Beatriz Souza', points: 142, email: 'demo-bia' }, { name: 'Pedro Henrique', points: 118, email: 'demo-pedro' }, { name: 'Mariana Lima', points: 96, email: 'demo-mari' }, { name: 'Rafael Costa', points: 74, email: 'demo-rafa' }, { name: 'Julia Alves', points: 48, email: 'demo-julia' }]; const rows = [...state.users.filter(x => x.role === 'student').map(x => ({ name: x.name, points: state.points[x.email] || 0, email: x.email })), ...demo].filter((r, i, arr) => arr.findIndex(x => x.email === r.email) === i).sort((a, b) => b.points - a.points); if (!rows.length) rows.push({ name: u.name, points, email: u.email }); const html = rows.map((r, i) => `<div class="ranking-row"><span class="rank-number">${i + 1}</span><div><strong>${esc(r.name)}${r.email === u.email ? ' (você)' : ''}</strong><small>${r.points >= 220 ? 'Diamante' : r.points >= 120 ? 'Ouro' : r.points >= 50 ? 'Prata' : 'Bronze'}</small></div><b>${r.points} pts</b></div>`).join(''); const list = $('#rankingList'); if (list) list.innerHTML = html; const homeList = $('#rankingListInicio'); if (homeList) homeList.innerHTML = rows.slice(0, 3).map((r, i) => `<div class="ranking-row"><span class="rank-number">${i + 1}</span><div><strong>${esc(r.name)}${r.email === u.email ? ' (você)' : ''}</strong><small>${r.points >= 220 ? 'Diamante' : r.points >= 120 ? 'Ouro' : r.points >= 50 ? 'Prata' : 'Bronze'}</small></div><b>${r.points} pts</b></div>`).join(''); const summary = $('#inicioLeagueSummary'); if (summary) summary.innerHTML = `<strong>${league[0]} · ${points} pontos</strong><span>Continue participando para subir de liga.</span>`; }

function renderCompany() { const u = current(); if (!u || u.role !== 'company') return; $('#companyGreeting').textContent = u.name; const jobs = allJobs().filter(j => j.owner === u.email); const apps = jobs.reduce((n, j) => n + (j.applications || []).length, 0); $('#companyStatJobs').textContent = jobs.length; $('#companyStatApps').textContent = apps; $('#companyRecentJobs').innerHTML = jobs.length ? jobs.slice(-4).reverse().map(j => `<div class="compact-row"><div><h4>${esc(j.title)}</h4><p>${esc(j.location)} · ${(j.applications || []).length} interesses</p></div><button class="small-btn" data-delete-job="${esc(j.id)}">Remover</button></div>`).join('') : '<div class="empty-state">Você ainda não publicou vagas.</div>'; renderCompanyJobs(); fillCompanyProfile() }

function renderCompanyJobs() { const u = current(); if (!u) return; const jobs = allJobs().filter(j => j.owner === u.email); $('#companyVacancyList').innerHTML = jobs.length ? jobs.map(j => `<div class="compact-row"><div><h4>${esc(j.title)}</h4><p>${esc(j.area)} · ${esc(j.location)} · ${(j.applications || []).length} candidaturas demonstrativas</p></div><div class="row-actions"><button class="small-btn" data-view-candidates="${esc(j.id)}">Ver perfis</button><button class="small-btn danger" data-delete-job="${esc(j.id)}">Excluir</button></div></div>`).join('') : '<div class="empty-state">Nenhuma vaga cadastrada por esta conta.</div>'; const sel = $('#candidateVacancySelect'); if (sel) sel.innerHTML = jobs.length ? jobs.map(j => `<option value="${esc(j.id)}">${esc(j.title)}</option>`).join('') : '<option value="">Cadastre uma vaga primeiro</option>' }


function fillCompanyProfile() { const u = current(); if (!u || u.role !== 'company') return; const f = $('#companyProfileForm'), p = state.profiles[u.email] || u; if (!f) return; for (const el of f.elements) if (el.name) el.value = p[el.name] || u[el.name] || '' }

function renderCandidates() { const sel = $('#candidateVacancySelect'); if (!sel) return; renderCompanyJobs(); showCandidatesFor(sel.value) }

function showCandidatesFor(id) { const job = allJobs().find(j => j.id === id); if (!job) { $('#candidateResults').innerHTML = '<div class="empty-state">Cadastre uma vaga para ver a prévia de compatibilidade.</div>'; return } const req = (job.skills || []).map(norm), interest = norm(job.area + ' ' + job.title), matches = demoCandidates.map(c => { let score = 0; const hits = c.skills.filter(s => req.some(r => s.includes(r) || r.includes(s))).length; score += req.length ? Math.round(hits / req.length * 50) : 15; if (c.interests.some(s => interest.includes(s))) score += 25; if (norm(c.location).includes(norm(job.location)) || norm(job.location).includes('remoto') && norm(c.location).includes('remoto')) score += 15; if (job.certificates && c.certificates.some(s => norm(s).includes(norm(job.certificates)))) score += 10; return { ...c, score: Math.min(100, score) } }).sort((a, b) => b.score - a.score); $('#candidateResults').innerHTML = matches.map((c, i) => `<article class="candidate-card"><div class="candidate-top"><div><h4>${esc(c.name)}</h4><p>${esc(c.education)} · ${esc(c.location)}</p></div><span class="match-score">${c.score}%</span></div><p><b>Habilidades:</b> ${esc(c.skills.join(', '))}</p><p><b>Certificados de exemplo:</b> ${esc(c.certificates.join(', ') || 'Nenhum informado')}</p><p><b>Interesses:</b> ${esc(c.interests.join(', '))}</p><small class="muted">Perfil fictício para demonstração. Não corresponde a uma pessoa real.</small></article>`).join('') }

function matchDemoCandidates(job) { const req = (job.skills || []).map(norm); return demoCandidates.map(c => ({ c, score: Math.min(100, (req.length ? Math.round(c.skills.filter(s => req.some(r => s.includes(r) || r.includes(s))).length / req.length * 70) : 20) + (c.interests.some(s => norm(job.area + ' ' + job.title).includes(s)) ? 30 : 0)) })).sort((a, b) => b.score - a.score) }

function deleteJob(id) { const u = current(); state.jobs = allJobs().filter(j => !(j.id === id && j.owner === u.email)); save(); toast('Vaga removida.'); renderCompany(); renderPublicJobs(); renderStudentJobs() }


function handleClick(e) { const b = e.target.closest('button,a'); if (!b) return; if (b.classList.contains('area-menu-toggle')) { const box = b.nextElementSibling; const opened = box.classList.toggle('menu-open'); b.setAttribute('aria-expanded', String(opened)); return; } if (b.dataset.action === 'open-login') { openAuth('login', roleOf() || 'student'); return } if (b.dataset.action === 'open-register') { openAuth('register', b.dataset.role || 'student'); return } if (b.dataset.action === 'logout') { state.session = null; save(); window.location.href = 'index.html'; return } if (b.dataset.action === 'dashboard') { window.location.href = roleOf() === 'company' ? 'empresa.html' : 'estudante.html'; return } if (b.dataset.viewLink) { setView(b.dataset.viewLink); return } if (b.dataset.panelLink) { const role = roleOf(); if (!role) { openAuth('login', 'student'); return } const panel = b.dataset.panelLink.startsWith('company-') ? b.dataset.panelLink : (role === 'company' ? 'company-' : '') + b.dataset.panelLink; setView(role); showPanel(panel); return } if (b.dataset.view) { let target = b.dataset.view; if (target === 'student' || target === 'company') { if (!current()) { openAuth('login', target); return } if (roleOf() !== target) { toast('Entre com uma conta do tipo ' + (target === 'student' ? 'estudante' : 'empresa') + '.'); return } } setView(target); return } if (b.classList.contains('brand') && b.getAttribute('href') === '#inicio') { e.preventDefault(); if (roleOf() === 'student' && document.body.dataset.accountPage === 'student') { showPanel('student-home'); return } if (roleOf() === 'company' && document.body.dataset.accountPage === 'company') { showPanel('company-overview'); return } setView('home'); return } if (b.dataset.panel) { showPanel(b.dataset.panel); const menu = b.closest('.area-menu-links'); if (menu) { menu.classList.remove('menu-open'); menu.previousElementSibling?.setAttribute('aria-expanded', 'false') } return } if (b.dataset.jobInfo) { openJobInfo(b.dataset.jobInfo); return } if (b.id === 'closeJobInfo') { closeJobInfo(); return } if (b.id === 'jobInfoInterest') { const id = b.dataset.jobId; if (id) applyToJob(id); return } if (b.dataset.apply) { applyToJob(b.dataset.apply); return } if (b.dataset.course) { completeCourse(b.dataset.course); return } if (b.dataset.deleteJob) { deleteJob(b.dataset.deleteJob); return } if (b.dataset.viewCandidates) { showPanel('company-candidates'); $('#candidateVacancySelect').value = b.dataset.viewCandidates; showCandidatesFor(b.dataset.viewCandidates); return } }

function openJobInfo(id) { const j = allJobs().find(x => x.id === id); if (!j) return; $('#jobInfoCompany').textContent = j.company; $('#jobInfoTitle').textContent = j.title; $('#jobInfoBody').innerHTML = `<p class="job-meta">${esc(j.location)} · ${esc(j.workMode || 'A definir')}</p><div class="tag-list"><span class="tag">${esc(j.type || 'Oportunidade')}</span><span class="tag">${esc(j.area)}</span></div><h3>Sobre a oportunidade</h3><p>${esc(j.description || 'Oportunidade de início de carreira.')}</p><h3>Habilidades desejadas</h3><p>${esc((j.skills || []).join(', ') || 'A definir pela empresa')}</p>${j.certificates ? `<h3>Certificados</h3><p>${esc(j.certificates)}</p>` : ''}<p class="fine-print">Empresa e vaga exibidas conforme o cadastro de demonstração.</p>`; const btn = $('#jobInfoInterest'); btn.dataset.jobId = id; const applied = state.applications.some(a => a.jobId === id && a.email === current()?.email); btn.textContent = applied ? 'Interesse registrado' : 'Tenho interesse'; btn.disabled = applied; $('#jobInfoModal').hidden = false; document.body.style.overflow = 'hidden' }
function closeJobInfo() { $('#jobInfoModal').hidden = true; document.body.style.overflow = '' }
const testimonialSets = { student: [{ quote: '“A plataforma me ajudou a organizar os próximos passos e enxergar possibilidades que eu ainda não conhecia.”', author: 'Estudante participante' }, { quote: '“Consegui visualizar melhor quais habilidades desenvolver antes de procurar minha primeira oportunidade.”', author: 'Estudante participante' }, { quote: '“Ter cursos e oportunidades organizados em um só lugar deixou minha busca mais clara.”', author: 'Estudante participante' }], company: [{ quote: '“Encontrar candidatos com interesses alinhados à vaga pode tornar o processo seletivo mais organizado.”', author: 'Equipe de recrutamento' }, { quote: '“Uma apresentação clara das habilidades dos jovens ajuda a entender melhor cada perfil.”', author: 'Empresa participante' }, { quote: '“A proposta facilita visualizar oportunidades de início de carreira e os requisitos de cada vaga.”', author: 'Equipe de pessoas' }] }; let testimonialType = 'student', testimonialIndex = 0;
function renderTestimonial() { const quote = $('#testimonialQuote'), author = $('#testimonialAuthor'); if (!quote || !author) return; const list = testimonialSets[testimonialType], item = list[testimonialIndex]; quote.textContent = item.quote; author.textContent = item.author; $$('[data-testimonial-type]').forEach(b => { const active = b.dataset.testimonialType === testimonialType; b.classList.toggle('active', active); b.setAttribute('aria-selected', String(active)) }); $$('[data-testimonial-index]').forEach((b, i) => b.classList.toggle('active', i === testimonialIndex)); } $$('[data-testimonial-type]').forEach(b => b.addEventListener('click', () => { testimonialType = b.dataset.testimonialType; testimonialIndex = 0; renderTestimonial() })); $('#testimonialPrev')?.addEventListener('click', () => { testimonialIndex = (testimonialIndex + 2) % 3; renderTestimonial() }); $('#testimonialNext')?.addEventListener('click', () => { testimonialIndex = (testimonialIndex + 1) % 3; renderTestimonial() }); $$('[data-testimonial-index]').forEach(b => b.addEventListener('click', () => { testimonialIndex = Number(b.dataset.testimonialIndex); renderTestimonial() })); renderTestimonial();
document.addEventListener('click', handleClick);
$('#mobileMenu')?.addEventListener('click', () => $('#mainNav').classList.toggle('open'));
$('#closeModal')?.addEventListener('click', closeAuth); $('#closeModalMobile')?.addEventListener('click', closeAuth); $('#closeJobInfo')?.addEventListener('click', closeJobInfo); $('#jobInfoModal')?.addEventListener('click', e => { if (e.target === $('#jobInfoModal')) closeJobInfo() }); $('#authModal')?.addEventListener('click', e => { if (e.target === $('#authModal')) closeAuth() }); document.addEventListener('keydown', e => { if (e.key === 'Escape' && !$('#authModal').hidden) closeAuth() });
$$('[data-auth-mode]').forEach(b => b.addEventListener('click', () => setAuthMode(b.dataset.authMode))); $$('input[name="role"]').forEach(r => r.addEventListener('change', updateAuthFields));
$('#authForm')?.addEventListener('submit', e => { e.preventDefault(); const f = e.currentTarget; if (!f.reportValidity()) return; const d = new FormData(f), email = String(d.get('email')).trim().toLowerCase(), password = String(d.get('password')), role = d.get('role'); if (authMode === 'register') { if (state.users.some(u => u.email === email)) { toast('Já existe uma conta com este e-mail neste navegador.'); return } const user = { id: uid('user'), name: String(d.get('name')).trim(), email, password, role, age: d.get('age') || '', education: d.get('education') || '', cpf: String(d.get('cpf') || '').replace(/\D/g, ''), cnpj: String(d.get('cnpj') || '').replace(/\D/g, ''), createdAt: new Date().toISOString() }; if (role === 'student' && user.cpf.length !== 11) { toast('Informe um CPF com 11 números.'); return } if (role === 'company' && user.cnpj.length !== 14) { toast('Informe um CNPJ com 14 números.'); return } if (role === 'student' && state.users.some(u => u.cpf && u.cpf === user.cpf)) { toast('Já existe uma conta com este CPF neste navegador.'); return } if (role === 'company' && state.users.some(u => u.cnpj && u.cnpj === user.cnpj)) { toast('Já existe uma conta com este CNPJ neste navegador.'); return } if (role === 'student' && (!user.age || +user.age < 14 || +user.age > 20)) { toast('A idade deve estar entre 14 e 20 anos.'); return } state.users.push(user); state.session = { email, role }; state.progress[email] = { courses: [], certificates: [], quizDone: false, resumeDone: false }; state.points[email] = 0; save(); closeAuth(); updateHeader(); window.location.href = role === 'company' ? 'empresa.html' : 'estudante.html'; toast('Conta criada!'); f.reset(); setAuthMode('register'); return } const user = state.users.find(u => u.email === email && u.password === password); if (!user) { toast('Dados incorretos ou conta inexistente neste navegador.'); return } if (user.role !== role) { toast('O tipo de conta selecionado não corresponde a este cadastro. Selecione ' + (user.role === 'student' ? 'Estudante' : 'Empresa') + '.'); return } state.session = { email: user.email, role: user.role }; save(); closeAuth(); updateHeader(); window.location.href = role === 'company' ? 'empresa.html' : 'estudante.html'; toast('Login realizado!'); f.reset(); setAuthMode('register') });
$('#careerUndecided')?.addEventListener('click', () => { $('#careerStart').hidden = true; $('#careerQuiz').hidden = false; $('#careerKnown').hidden = true; $('#careerResults').hidden = true });
$('#careerDefined')?.addEventListener('click', () => { $('#careerStart').hidden = true; $('#careerKnown').hidden = false; $('#careerQuiz').hidden = true; $('#careerResults').hidden = true });
$('#careerQuiz')?.addEventListener('submit', e => { e.preventDefault(); const d = new FormData(e.currentTarget), scores = { tech: 0, business: 0, creative: 0, care: 0, education: 0, engineering: 0 }; for (let i = 0; i < 3; i++)scores[d.get('q' + i)] = (scores[d.get('q' + i)] || 0) + 1; const map = { tech: 'Tecnologia e dados', business: 'Administração e negócios', creative: 'Comunicação e criação', care: 'Saúde e bem-estar', education: 'Educação e sociedade', engineering: 'Engenharia e meio ambiente' }; const areas = Object.entries(scores).sort((a, b) => b[1] - a[1]).slice(0, 3).map(([k]) => map[k]); const u = current(); const result = { title: areas[0], areas, summary: 'Estas áreas combinam com algumas respostas que você marcou. Use o resultado como ponto de partida para pesquisar atividades, cursos e requisitos de formação.' }; state.careerResults[u.email] = result; state.progress[u.email].quizDone = true; save(); showCareerResult(result); renderStudent(); toast('Orientação registrada no seu perfil.') });
$('#careerKnown')?.addEventListener('submit', e => { e.preventDefault(); const term = $('#knownCareer').value.trim(); const u = current(); const found = careers.find(c => norm(c.title).includes(norm(term)) || norm(c.desc).includes(norm(term))) || null; const result = { title: term, areas: found ? [found.title] : careers.filter(c => norm(c.title + ' ' + c.desc + ' ' + c.paths).includes(norm(term))).slice(0, 3).map(c => c.title), summary: found ? found.desc : 'Pesquise a formação exigida, as atividades do dia a dia, as possibilidades de entrada e as habilidades necessárias para ' + term + '. Compare diferentes fontes e converse com profissionais da área.' }; if (!result.areas.length) result.areas = [careers[0].title, careers[1].title]; state.careerResults[u.email] = result; state.progress[u.email].quizDone = true; save(); showCareerResult(result); renderStudent() });
$('#certificateForm')?.addEventListener('submit', e => { e.preventDefault(); const u = current(), courseId = $('#certificateCourse').value, file = $('#certificateFile').files[0]; if (!courseId || !file) return; if (file.size > 5 * 1024 * 1024) { toast('O arquivo deve ter no máximo 5 MB.'); return } const c = courses.find(x => x.id === courseId); state.certificates.push({ id: uid('cert'), email: u.email, courseId, courseTitle: c?.title || courseId, fileName: file.name, date: new Date().toISOString() }); state.progress[u.email].certificates.push(courseId); save(); e.currentTarget.reset(); renderLearning(); renderStudent(); toast('Certificado registrado. O arquivo não foi enviado a um servidor.') });
$('#resumeForm')?.addEventListener('submit', e => { e.preventDefault(); const u = current(), d = Object.fromEntries(new FormData(e.currentTarget).entries()); state.resumes[u.email] = d; state.progress[u.email].resumeDone = true; save(); updateResumePreview(d); renderStudent(); toast('Currículo atualizado.') });
$('#printResume')?.addEventListener('click', () => window.print());
$('#studentProfileForm')?.addEventListener('submit', e => { e.preventDefault(); const u = current(), d = Object.fromEntries(new FormData(e.currentTarget).entries()); d.email = String(d.email || '').trim().toLowerCase(); if (d.email !== u.email && state.users.some(x => x.email === d.email)) { toast('Já existe uma conta com este e-mail.'); return } if (+d.age < 14 || +d.age > 20) { toast('A idade deve estar entre 14 e 20 anos.'); return } state.profiles[u.email] = { ...u, ...d, age: Number(d.age) }; const account = state.users.find(x => x.email === u.email); Object.assign(account, { name: d.name, email: d.email, age: Number(d.age), education: d.education }); if (d.email !== u.email) { state.session.email = d.email; const old = state.progress[u.email]; state.progress[d.email] = old; delete state.progress[u.email]; state.points[d.email] = state.points[u.email] || 0; delete state.points[u.email]; state.profiles[d.email] = state.profiles[u.email]; delete state.profiles[u.email]; state.certificates.forEach(c => { if (c.email === u.email) c.email = d.email }); state.applications.forEach(a => { if (a.email === u.email) a.email = d.email }) } save(); updateHeader(); renderStudent(); toast('Perfil salvo.') });
$('#jobFilter')?.addEventListener('submit', e => { e.preventDefault(); renderStudentJobs() }); $('#jobFilter')?.addEventListener('reset', () => setTimeout(renderStudentJobs, 0));

$('#vacancyForm')?.addEventListener('submit', e => { e.preventDefault(); const u = current(), d = Object.fromEntries(new FormData(e.currentTarget).entries()); if (+d.minAge > +d.maxAge) { toast('A idade mínima não pode ser maior que a máxima.'); return } const j = { ...d, id: uid('job'), owner: u.email, company: u.name, skills: split(d.skills), applications: [], minAge: +d.minAge, maxAge: +d.maxAge, seed: false, createdAt: new Date().toISOString() }; state.jobs.push(j); save(); e.currentTarget.reset(); renderCompany(); renderPublicJobs(); renderStudentJobs(); toast('Vaga publicada neste navegador.'); showPanel('company-vacancies') });
$('#companyProfileForm')?.addEventListener('submit', e => { e.preventDefault(); const u = current(), d = Object.fromEntries(new FormData(e.currentTarget).entries()); state.profiles[u.email] = { ...u, ...d }; d.email = String(d.email || '').trim().toLowerCase(); if (d.email !== u.email && state.users.some(x => x.email === d.email)) { toast('Já existe uma conta com este e-mail.'); return } Object.assign(state.users.find(x => x.email === u.email), { name: d.name, email: d.email, cnpj: d.cnpj }); if (d.email !== u.email) { state.session.email = d.email; state.profiles[d.email] = state.profiles[u.email]; delete state.profiles[u.email]; allJobs().forEach(j => { if (j.owner === u.email) { j.owner = d.email; j.company = d.name } }) } else allJobs().forEach(j => { if (j.owner === u.email) j.company = d.name }); save(); updateHeader(); renderCompany(); toast('Perfil empresarial atualizado.') });
$('#candidateVacancySelect')?.addEventListener('change', e => showCandidatesFor(e.target.value));

function init() {
    homeJobCards();
    updateHeader();
    renderPublicJobs();

    // Mantém a sessão válida, mas começa sempre na vitrine pública.
    if (state.session && !current()) { state.session = null; save(); }
    if (state.session && current() && state.session.role !== current().role) { state.session.role = current().role; save(); }
    // A sessão persiste entre páginas e recarregamentos até o usuário escolher Sair.
    const accountPage = document.body.dataset.accountPage;
    if (accountPage) { if (!current() || roleOf() !== accountPage) { window.location.replace('index.html'); return; } setView(accountPage); }
    else if (current()) { window.location.replace(roleOf() === 'company' ? 'empresa.html' : 'estudante.html'); return; }
    else { $$('.view').forEach(view => { view.hidden = view.id !== 'view-home'; view.classList.toggle('active', view.id === 'view-home'); view.setAttribute('aria-hidden', String(view.id !== 'view-home')); }); setView('home'); }
}

init();
initScrollAnimations();


// Animações de entrada acionadas pelo scroll (respeita a preferência por movimento reduzido).
function initScrollAnimations() {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const selectors = [
        '.hero-copy', '.hero-visual', '.testimonials-heading', '.testimonial-carousel',
        '.testimonial-dots', '.panel-heading', '.content-card', '.stats-grid article',
        '.job-card', '.course-card', '.career-item', '.resume-preview', '.ranking-card',
        '.task-card', '.footer-inner'
    ].join(',');
    const reveal = (root = document) => {
        root.querySelectorAll(selectors).forEach((el, index) => {
            if (el.classList.contains('js-reveal')) return;
            // Não anima conteúdo dentro de painéis que ainda estão ocultos.
            if (el.closest('.panel:not(.active), .view:not(.active)')) return;
            el.classList.add('js-reveal');
            el.style.setProperty('--reveal-delay', `${(index % 4) * 75}ms`);
            if (reduceMotion || !('IntersectionObserver' in window)) {
                el.classList.add('is-visible');
                return;
            }
            observer.observe(el);
        });
    };
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -45px 0px' });

    reveal();
    // Também observa cards criados dinamicamente pela aplicação.
    const mutationObserver = new MutationObserver(records => {
        records.forEach(record => record.addedNodes.forEach(node => {
            if (node.nodeType === 1) reveal(node);
        }));
    });
    mutationObserver.observe(document.querySelector('main'), { childList: true, subtree: true, attributes: true, attributeFilter: ['class'] });
    // Ao trocar de área/painel, prepara as animações dos elementos que acabaram de aparecer.
    document.querySelectorAll('.panel, .view').forEach(el => {
        new MutationObserver(() => reveal(document)).observe(el, { attributes: true, attributeFilter: ['class'] });
    });
}
