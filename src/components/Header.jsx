import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Icon from './Icon';
import { navigation } from '../data/navigation';
import { company, contactChannels, offices } from '../data/company';
import logoMark from '../assets/logo-mark.png';

function Wordmark({ light = false }) {
  return (
    <Link to="/" className="group flex shrink-0 items-center gap-3" aria-label={`${company.legalName} home`}>
      <img
        src={logoMark}
        alt=""
        className="h-10 w-auto shrink-0 transition-transform duration-500 group-hover:scale-[1.04] md:h-12"
      />
      <span className="block leading-none">
        <span
          className={`block font-display text-[19px] font-semibold uppercase tracking-[0.12em] xl:text-[22px] ${
            light ? 'text-white' : 'text-navy-900'
          }`}
        >
          Sterling
        </span>
        <span className="block font-display text-[11.5px] font-medium uppercase tracking-[0.235em] text-signal-600 xl:text-[13px]">
          Ventilation
        </span>
        <span
          className={`mt-[3px] hidden text-[8px] font-semibold uppercase tracking-[0.18em] xl:block ${
            light ? 'text-navy-300' : 'text-steel-400'
          }`}
        >
          Asia Pacific Pte Ltd
        </span>
      </span>
    </Link>
  );
}

function MegaPanel({ item, onNavigate }) {
  return (
    <div className="shell">
      <div className="grid gap-10 border-t border-white/50 py-10 lg:grid-cols-[minmax(0,1fr)_2.1fr]">
        <div className="pr-6">
          <span className="eyebrow">{item.label}</span>
          <p className="mt-5 font-display text-[26px] font-semibold uppercase leading-[1.1] text-navy-900">
            {item.label === 'Solutions'
              ? 'Systems, not products'
              : item.label === 'Products'
                ? 'Certified equipment'
                : item.label === 'Engineering'
                  ? 'Evidence-led design'
                  : item.label === 'Services'
                    ? 'Support for the whole asset life'
                    : item.label === 'Resources'
                      ? 'For design teams'
                      : 'The practice'}
          </p>
          <p className="mt-3 text-[14px] leading-relaxed text-steel-500">{item.description}</p>
          <Link to={item.to} onClick={onNavigate} className="link-arrow mt-6">
            View all
            <Icon name="arrow" className="h-4 w-4" />
          </Link>
        </div>

        <div className="flex flex-wrap items-start gap-x-16 gap-y-7">
          {item.columns.map((col) => (
            <div key={col.title} className="w-full max-w-[260px] flex-1 sm:w-auto sm:flex-none">
              <p className="mb-4 text-[10.5px] font-bold uppercase tracking-widest2 text-steel-400">{col.title}</p>
              <ul className="space-y-1">
                {col.items.map((sub) => (
                  <li key={sub.to}>
                    <Link
                      to={sub.to}
                      onClick={onNavigate}
                      className="group flex items-start gap-3 border-l-2 border-transparent py-2 pl-3 transition-all hover:border-signal-600 hover:bg-navy-50/60"
                    >
                      <span className="min-w-0">
                        <span className="block text-[14.5px] font-semibold text-navy-900 group-hover:text-signal-700">
                          {sub.label}
                        </span>
                        {sub.blurb ? (
                          <span className="mt-0.5 block text-[12.5px] leading-snug text-steel-500">{sub.blurb}</span>
                        ) : null}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Header() {
  const [open, setOpen] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSub, setMobileSub] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(null);
    setMobileOpen(false);
    setMobileSub(null);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(null);
        setMobileOpen(false);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const enter = (label) => {
    clearTimeout(closeTimer.current);
    setOpen(label);
  };
  const leave = () => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpen(null), 140);
  };

  return (
    <header className="sticky top-0 z-50">
      {/* utility bar */}
      <div className="glass-dark relative z-10 hidden text-navy-200 lg:block">
        <div className="mx-auto flex h-9 w-full max-w-[1560px] items-center justify-between px-5 text-[11.5px] sm:px-8 lg:px-10">
          <p className="font-semibold uppercase tracking-[0.2em] text-navy-300">
            {company.promise.split('.')[0]}.
            <span className="text-signal-400"> {company.promise.split('.')[1]}.</span>
          </p>
          <div className="flex items-center gap-6">
            <a href={`tel:${offices[0].phone.replace(/\s/g, '')}`} className="flex items-center gap-2 hover:text-white">
              <Icon name="phone" className="h-3.5 w-3.5" />
              {offices[0].phone}
            </a>
            <a href={`mailto:${contactChannels.general}`} className="flex items-center gap-2 hover:text-white">
              <Icon name="mail" className="h-3.5 w-3.5" />
              {contactChannels.general}
            </a>
            <span className="flex items-center gap-2 text-navy-400">
              <Icon name="pin" className="h-3.5 w-3.5" />
              Singapore
            </span>
          </div>
        </div>
      </div>

      {/* main bar */}
      <div
        className={`glass glass-sheen relative rounded-b-2xl transition-all duration-500 ${
          scrolled ? 'shadow-[0_18px_50px_-30px_rgba(10,19,39,.75)]' : ''
        }`}
        onMouseLeave={leave}
      >
        <div className="mx-auto flex h-[74px] w-full max-w-[1560px] items-center justify-between gap-3 px-5 sm:px-8 lg:h-[86px] lg:px-10 xl:gap-5">
          <Wordmark />

          <nav className="hidden min-w-0 items-center lg:flex" aria-label="Primary">
            {navigation
              .filter((item) => item.to !== '/')
              .map((item) => {
              const hasMega = Array.isArray(item.columns);
              return (
                <div
                  key={item.label}
                  className={`relative ${item.compact ? 'hidden xl:block' : ''}`}
                  onMouseEnter={() => enter(hasMega ? item.label : null)}
                >
                  <NavLink
                    to={item.to}
                    end={item.to === '/'}
                    className={({ isActive }) =>
                      `relative flex items-center gap-1 whitespace-nowrap px-2 py-3 text-[10.5px] font-semibold uppercase tracking-[0.06em] transition-colors xl:gap-1.5 xl:px-3 xl:text-[11.5px] xl:tracking-[0.08em] ${
                        isActive || open === item.label ? 'text-signal-700' : 'text-navy-800 hover:text-signal-700'
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {item.label}
                        {hasMega ? (
                          <Icon
                            name="chevron"
                            className={`h-3 w-3 transition-transform ${open === item.label ? 'rotate-180' : ''}`}
                            strokeWidth={2}
                          />
                        ) : null}
                        <span
                          className={`absolute inset-x-2 bottom-0 h-[2px] bg-signal-600 transition-transform duration-300 ${
                            isActive || open === item.label ? 'scale-x-100' : 'scale-x-0'
                          }`}
                        />
                      </>
                    )}
                  </NavLink>
                </div>
                );
              })}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <Link to="/contact" className="btn-primary hidden !px-4 !py-3 !text-[11px] 2xl:inline-flex">
              Request Consultation
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              className="inline-flex h-11 w-11 items-center justify-center border border-steel-200 text-navy-900 lg:hidden"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              <Icon name={mobileOpen ? 'close' : 'menu'} className="h-5 w-5" strokeWidth={1.8} />
            </button>
          </div>
        </div>

        {/* mega menu */}
        <div
          className={`absolute inset-x-0 top-full hidden overflow-hidden rounded-b-2xl border-t border-steel-100 bg-white shadow-[0_40px_80px_-40px_rgba(10,19,39,.7)] backdrop-blur-2xl transition-all duration-300 lg:block ${
            open ? 'pointer-events-auto max-h-[560px] opacity-100' : 'pointer-events-none max-h-0 opacity-0'
          }`}
          onMouseEnter={() => clearTimeout(closeTimer.current)}
          onMouseLeave={leave}
        >
          {navigation
            .filter((n) => n.columns)
            .map((item) =>
              open === item.label ? (
                <MegaPanel key={item.label} item={item} onNavigate={() => setOpen(null)} />
              ) : null
            )}
        </div>
      </div>

      {/* mobile drawer */}
      <div
        className={`glass fixed inset-0 top-[74px] z-40 transition-all duration-300 lg:hidden ${
          mobileOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <div className="h-full overflow-y-auto pb-28">
          <nav className="shell divide-y divide-steel-200 py-2">
            {navigation.map((item) => {
              const hasMega = Array.isArray(item.columns);
              const isOpen = mobileSub === item.label;
              return (
                <div key={item.label} className="py-1">
                  <div className="flex items-center justify-between">
                    <Link
                      to={item.to}
                      className="flex-1 py-4 font-display text-[19px] font-semibold uppercase tracking-wide text-navy-900"
                    >
                      {item.label}
                    </Link>
                    {hasMega ? (
                      <button
                        type="button"
                        onClick={() => setMobileSub(isOpen ? null : item.label)}
                        className="flex h-10 w-10 items-center justify-center text-navy-700"
                        aria-label={`Toggle ${item.label} submenu`}
                      >
                        <Icon name="chevron" className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                      </button>
                    ) : null}
                  </div>
                  {hasMega && isOpen ? (
                    <div className="space-y-5 pb-5">
                      {item.columns.map((col) => (
                        <div key={col.title}>
                          <p className="mb-2 text-[10px] font-bold uppercase tracking-widest2 text-steel-400">
                            {col.title}
                          </p>
                          <ul className="space-y-0.5 border-l border-steel-200 pl-4">
                            {col.items.map((sub) => (
                              <li key={sub.to}>
                                <Link to={sub.to} className="block py-2 text-[15px] text-navy-800">
                                  {sub.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>
              );
            })}
          </nav>
          <div className="shell mt-6 space-y-3">
            <Link to="/contact" className="btn-primary w-full">
              Request Consultation
            </Link>
            <a href={`tel:${offices[0].phone.replace(/\s/g, '')}`} className="btn-outline w-full">
              <Icon name="phone" className="h-4 w-4" />
              Call Singapore
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
