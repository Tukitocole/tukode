import { useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import {
  ArrowDownRight,
  ArrowRight,
  BarChart3,
  Bot,
  Camera,
  ChevronDown,
  Code2,
  Gauge,
  Menu,
  MessageCircle,
  MonitorSmartphone,
  Settings,
  ShieldCheck,
  ShoppingCart,
  Store,
  X,
  Zap,
} from 'lucide-react'

const whatsappMessage = encodeURIComponent('Hola Tukode, quiero conversar sobre un proyecto.')
const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || ''
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

const services = [
  { icon: MonitorSmartphone, title: 'Páginas web a medida', text: 'Sitios rápidos, modernos y pensados para convertir visitas en oportunidades.', price: 'Cotización a medida', image: '/brand-growth.png' },
  { icon: Settings, title: 'Sistemas a medida', text: 'Software que se adapta a tu operación, no al revés.', price: 'Cotización a medida', image: '/tukode-brand.jpg' },
  { icon: Bot, title: 'Automatizaciones', text: 'Menos tareas repetitivas. Más tiempo para hacer crecer tu negocio.', price: 'Cotización a medida', image: '/sanabria-living.jpg' },
  { icon: ShoppingCart, title: 'E-commerce', text: 'Tiendas claras, ágiles y listas para vender sin límites.', price: 'Cotización a medida', image: '/brand-growth.png' },
  { icon: Gauge, title: 'Mantenimiento', text: 'Tu producto actualizado, seguro y siempre funcionando.', price: 'Planes mensuales', image: '/tukode-brand.jpg' },
]

const faqs = [
  ['¿Cuánto tarda un proyecto?', 'Una web institucional suele tomar entre 3 y 5 semanas. Un sistema a medida depende del alcance. Antes de empezar definimos etapas, entregables y fechas claras.'],
  ['¿Cómo preparan la cotización?', 'Primero tenemos una charla breve para entender el objetivo, las funciones y prioridades. Después te enviamos una propuesta cerrada, sin costos escondidos.'],
  ['¿Trabajan de manera remota?', 'Sí. Trabajamos con clientes de toda Argentina y otros países. Organizamos el proceso con reuniones cortas y seguimiento online.'],
  ['¿Qué necesito para empezar?', 'Con una idea, problema u objetivo alcanza. Te ayudamos a ordenar el alcance, la tecnología y el mejor camino para llevarlo a producción.'],
  ['¿Ofrecen soporte después del lanzamiento?', 'Sí. Podés elegir un plan de mantenimiento o contratar mejoras puntuales. No desaparecemos cuando el producto sale online.'],
]

const easeOut = [0.16, 1, 0.3, 1]
const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
}
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
}

function Reveal({ as = 'div', className = '', children }) {
  const Component = motion[as]
  return <Component className={className} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.16 }}>{children}</Component>
}

function Logo({ light = false }) {
  return (
    <a className={`logo ${light ? 'logo--light' : ''}`} href="#inicio" aria-label="Tukode, inicio">
      <img src="/tukode-lockup-dark.png" alt="" />
      <span className="logo-type"><strong>TUKODE</strong><small>SOLUCIONES DIGITALES</small></span>
    </a>
  )
}

function Header() {
  const [open, setOpen] = useState(false)
  const links = [['Servicios', '#servicios'], ['Proyectos', '#proyectos'], ['Nosotros', '#nosotros'], ['Contacto', '#contacto']]
  return (
    <header className="header">
      <div className="header-inner">
        <Logo />
        <nav className={open ? 'nav nav--open' : 'nav'} aria-label="Navegación principal">
          {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
          <a className="button button--dark nav-cta" href={whatsappUrl} target="_blank" rel="noreferrer">Hablemos <ArrowDownRight size={17} /></a>
        </nav>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? 'Cerrar menú' : 'Abrir menú'}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  )
}

function HeroLaptop() {
  return (
    <div className="hero-machine" aria-hidden="true">
      <div className="window-step window-step--one"><span /><span /><span /><b>Tu idea online</b><i /></div>
      <div className="window-step window-step--two"><span /><span /><span /><div><i /><i /><i /></div></div>
      <div className="window-step window-step--three"><span /><span /><span /><b>Diseño que<br />convierte.</b><i /></div>
      <div className="window-step window-step--four"><span /><span /><span /><small>CRECIMIENTO REAL</small><b>+ Tu negocio</b><i /></div>
      <ArrowRight className="growth-arrow" />
    </div>
  )
}

function Hero() {
  const reduceMotion = useReducedMotion()
  return (
    <main id="inicio" className="hero">
      <div className="eyebrow hero-top"><span>01 / INICIO</span><span>IDEAS<br />DISEÑO<br />DESARROLLO<br />RESULTADOS</span></div>
      <div className="hero-grid">
        <motion.div className="hero-copy" variants={stagger} initial="hidden" animate="visible">
          <motion.p className="kicker" variants={fadeUp}>MÁS QUE CÓDIGO / SOLUCIONES REALES</motion.p>
          <h1 aria-label="Tu negocio avanza. Tu web también debería.">
            <span className="hero-line hero-line--strong"><motion.i variants={fadeUp}>Tu negocio avanza.</motion.i></span>
            <span className="hero-line"><motion.i variants={fadeUp}>Tu web también debería.</motion.i></span>
          </h1>
          <motion.p className="hero-description" variants={fadeUp}>Diseñamos y desarrollamos soluciones digitales claras, modernas y hechas para generar resultados reales.</motion.p>
          <motion.div className="hero-actions" variants={fadeUp}>
            <a className="button button--dark" href="#contacto">Contanos tu idea <ArrowDownRight size={18} /></a>
            <a className="text-link" href="#proyectos">Ver proyectos <ArrowRight size={18} /></a>
          </motion.div>
        </motion.div>
        <motion.div initial={reduceMotion ? false : { opacity: 0, x: 35 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .75, delay: .25, ease: easeOut }}><HeroLaptop /></motion.div>
      </div>
      <div className="hero-services" aria-label="Servicios principales">
        <span><MonitorSmartphone /> Páginas web</span>
        <span><Store /> Tiendas online</span>
        <span><Settings /> Sistemas a medida</span>
        <span><BarChart3 /> Asesoramiento</span>
      </div>
    </main>
  )
}

function TrustBar() {
  const items = ['ESTRATEGIA', 'DISEÑO', 'DESARROLLO', 'RESULTADOS', 'PÁGINAS WEB', 'SISTEMAS A MEDIDA']
  return (
    <section className="trust" aria-label="Especialidades de Tukode">
      <p>MÁS QUE CÓDIGO</p>
      <div className="marquee-viewport"><div className="trust-logos">{[0, 1].map((group) => <div className="marquee-group" key={group} aria-hidden={group === 1}>{items.map((item) => <span key={`${group}-${item}`}>{item}<i /></span>)}</div>)}</div></div>
    </section>
  )
}

const featuredProject = {
  eyebrow: 'PROYECTO DESTACADO / 01',
  titleBefore: 'Microcemento Sanabria llevó su marca ',
  titleHighlight: 'a la web',
  titleAfter: ' con Tukode.',
  description: 'Una landing page para una empresa de microcemento, creada para comunicar la calidad de su trabajo, generar confianza y convertir visitas en nuevas consultas.',
  url: 'https://microcemento-sanabria-tukito.vercel.app/',
  desktopImage: '/sanabria-home.png',
  mobileImage: '/microcelu-transparent.png',
  callout: 'SITIO EN PRODUCCIÓN',
  benefits: [
    { icon: ShieldCheck, title: 'Estética profesional', text: 'Una imagen que refleja la calidad del cliente.' },
    { icon: MonitorSmartphone, title: 'Web responsive', text: 'Perfecta en todos los dispositivos.' },
    { icon: Zap, title: 'Más oportunidades reales', text: 'El negocio más cerca de sus próximos clientes.' },
  ],
}

function ProjectCaseStudy({ project }) {
  return (
    <article className="portfolio-case">
      <motion.div className="portfolio-copy" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: .25 }}>
        <p className="kicker">{project.eyebrow}</p>
        <h2>{project.titleBefore}<span>{project.titleHighlight}</span>{project.titleAfter}</h2>
        <p className="portfolio-description">{project.description}</p>
        <motion.ul className="portfolio-benefits" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: .25 }}>
          {project.benefits.map(({ icon: Icon, title, text }) => (
            <motion.li variants={fadeUp} key={title}><span><Icon /></span><div><strong>{title}</strong><p>{text}</p></div></motion.li>
          ))}
        </motion.ul>
        <motion.a className="button button--dark portfolio-cta" href={project.url} target="_blank" rel="noreferrer" whileHover={{ scale: 1.03 }} whileTap={{ scale: .98 }} transition={{ duration: .2 }}>Ver proyecto en vivo <ArrowDownRight size={18} /></motion.a>
      </motion.div>
      <motion.div className="portfolio-mockup-wrap" initial={{ opacity: 0, scale: .95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .7, delay: .12, ease: easeOut }} whileHover={{ y: -4 }}>
        <div className="portfolio-glow" />
        <div className="device-laptop">
          <div className="device-laptop-screen"><img src={project.desktopImage} alt="Sitio web de Microcemento Sanabria en una laptop" /></div>
          <div className="device-laptop-base"><i /></div>
        </div>
        <div className="device-phone device-phone--art"><img src={project.mobileImage} alt="Versión móvil del sitio de Microcemento Sanabria" /></div>
        <div className="project-callout"><i /><span>{project.callout}</span></div>
      </motion.div>
    </article>
  )
}

function Projects() {
  return (
    <section id="proyectos" className="projects portfolio-section" aria-label="Proyectos de Tukode">
      <ProjectCaseStudy project={featuredProject} />
    </section>
  )
}

function Services() {
  return (
    <section id="servicios" className="section services">
      <Reveal className="section-head section-head--light">
        <div><span className="section-number">03</span><p className="kicker">QUÉ HACEMOS</p></div>
        <h2>Tecnología que mueve <span>tu negocio.</span></h2>
      </Reveal>
      <motion.div className="service-list" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: .1 }}>
        {services.map((service, index) => {
          const Icon = service.icon
          return <motion.article className="service-row" variants={fadeUp} whileHover="hover" key={service.title}><motion.div className="service-bg" style={{ backgroundImage: `url(${service.image})` }} variants={{ hover: { opacity: .22, scale: 1.03 } }} transition={{ duration: .35 }} /><span className="service-index">0{index + 1}</span><Icon /><div><h3>{service.title}</h3><p>{service.text}</p></div><motion.strong variants={{ hover: { opacity: 1, scale: 1 } }}>{service.price}</motion.strong><ArrowDownRight className="service-arrow" /></motion.article>
        })}
      </motion.div>
    </section>
  )
}

function WhyUs() {
  const items = [
    { icon: Code2, number: '01', title: 'Hecho para vos', text: 'Sin plantillas forzadas. Cada decisión responde a un objetivo de tu negocio.' },
    { icon: Zap, number: '02', title: 'Proceso sin vueltas', text: 'Comunicación clara, entregas por etapas y avances que podés ver.' },
    { icon: ShieldCheck, number: '03', title: 'Socios a largo plazo', text: 'Te acompañamos antes, durante y después de publicar.' },
  ]
  return (
    <section className="section why">
      <Reveal className="split-title"><p className="kicker">POR QUÉ TUKODE</p><h2>No hacemos “una web”.<br /><span>Resolvemos un problema.</span></h2></Reveal>
      <motion.div className="why-grid" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: .2 }}>{items.map(({ icon: Icon, ...item }) => <motion.article className="why-card" variants={fadeUp} key={item.number}><div><span>{item.number}</span><Icon /></div><h3>{item.title}</h3><p>{item.text}</p></motion.article>)}</motion.div>
    </section>
  )
}

function Testimonials() {
  const constraintsRef = useRef(null)
  const cards = [
    ['01', 'Claridad desde el inicio', 'Alcance, prioridades y próximos pasos definidos antes de desarrollar.'],
    ['02', 'Decisiones con propósito', 'Diseño y tecnología al servicio del objetivo comercial, no de una tendencia.'],
    ['03', 'Avances que podés ver', 'Entregas por etapas y comunicación directa durante todo el proceso.'],
    ['04', 'Acompañamiento real', 'Seguimos cerca después del lanzamiento para mantener y mejorar el producto.'],
  ]
  return <section className="section testimonials"><Reveal className="section-head"><div><span className="section-number">04</span><p className="kicker">LA EXPERIENCIA TUKODE</p></div><h2>Así se siente<br /><span>trabajar con nosotros.</span></h2></Reveal><div className="testimonial-drag" ref={constraintsRef}><motion.div className="testimonial-track" drag="x" dragConstraints={constraintsRef} dragElastic={.12} dragMomentum transition={{ type: 'spring', stiffness: 180, damping: 24 }}>{cards.map(([number, title, text]) => <motion.article className="testimonial-card" whileHover={{ y: -5 }} transition={{ duration: .25 }} key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div><small>ARRASTRÁ PARA EXPLORAR ↔</small></motion.article>)}</motion.div></div></section>
}

function About() {
  return (
    <section id="nosotros" className="section about">
      <Reveal className="about-visual">
        <img src="/brand-growth.png" alt="Concepto visual de crecimiento digital de Tukode" />
        <span>EST. 2024 / ARG</span>
      </Reveal>
      <Reveal className="about-copy">
        <p className="kicker">05 / DETRÁS DE TUKODE</p>
        <h2>Primero entendemos.<br /><span>Después codeamos.</span></h2>
        <p>Tukode nace con una idea simple: acercar tecnología bien hecha a negocios reales. Somos un equipo argentino que combina estrategia, diseño y desarrollo para crear herramientas digitales útiles, sin humo ni complejidad innecesaria.</p>
        <p>Nos involucramos en cada proyecto de punta a punta. Escuchamos, planificamos, diseñamos, desarrollamos, lanzamos y seguimos cerca.</p>
        <div className="about-signature"><span>TK</span><div><strong>EQUIPO TUKODE</strong><small>ESTRATEGIA / DISEÑO / TECNOLOGÍA</small></div></div>
      </Reveal>
    </section>
  )
}

function FAQ() {
  const [active, setActive] = useState(0)
  return (
    <section className="section faq">
      <Reveal className="faq-title"><p className="kicker">06 / PREGUNTAS FRECUENTES</p><h2>Antes de<br /><span>empezar.</span></h2></Reveal>
      <motion.div className="faq-list" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: .1 }}>{faqs.map(([question, answer], index) => <motion.div variants={fadeUp} className={`faq-item ${active === index ? 'faq-item--open' : ''}`} key={question}><button onClick={() => setActive(active === index ? -1 : index)} aria-expanded={active === index}><span>0{index + 1}</span><strong>{question}</strong><ChevronDown /></button><div className="faq-answer"><p>{answer}</p></div></motion.div>)}</motion.div>
    </section>
  )
}

function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const text = encodeURIComponent(`Hola Tukode, soy ${data.get('name')}.\n\n${data.get('message')}\n\nMi email: ${data.get('email')}`)
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank', 'noopener,noreferrer')
  }
  return (
    <section id="contacto" className="contact">
      <Reveal className="contact-heading"><p className="kicker">07 / HAGÁMOSLO REAL</p><h2>Tu idea también<br />puede estar <span>acá.</span></h2><p>Contanos qué tenés en mente. Te respondemos con próximos pasos claros, sin compromiso.</p></Reveal>
      <motion.form className="contact-form" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: .2 }} onSubmit={handleSubmit}>
        <label>Tu nombre<input name="name" type="text" placeholder="¿Cómo te llamás?" required /></label>
        <label>Tu email<input name="email" type="email" placeholder="nombre@empresa.com" required /></label>
        <label>Contanos sobre el proyecto<textarea name="message" rows="4" placeholder="Qué necesitás, qué querés mejorar..." required /></label>
        <button className="button button--light" type="submit">Enviar consulta <ArrowDownRight /></button>
      </motion.form>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top"><Logo light /><p>Soluciones digitales<br />para negocios reales.</p><div className="footer-links"><a href="#servicios">Servicios</a><a href="#proyectos">Proyectos</a><a href="#nosotros">Nosotros</a><a href="#contacto">Contacto</a></div><a className="social" href="https://www.instagram.com/tukode_/" target="_blank" rel="noreferrer" aria-label="Instagram de Tukode"><Camera /></a></div>
      <div className="footer-bottom"><span>© 2026 TUKODE. TODOS LOS DERECHOS RESERVADOS.</span><span>HECHO EN ARGENTINA / PARA TODO EL MUNDO</span></div>
    </footer>
  )
}

function App() {
  const reduceMotion = useReducedMotion()
  return <><Header /><Hero /><TrustBar /><Projects /><Services /><WhyUs /><Testimonials /><About /><FAQ /><Contact /><Footer /><motion.a className="whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Contactar a Tukode por WhatsApp" animate={reduceMotion ? undefined : { scale: [1, 1.05, 1] }} transition={{ duration: .8, repeat: Infinity, repeatDelay: 2.2, ease: 'easeInOut' }} whileHover={{ scale: 1.06 }}><MessageCircle /><span>HABLEMOS</span></motion.a></>
}

export default App
