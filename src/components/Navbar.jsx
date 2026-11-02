import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const navLinks = [
  { label: 'Trang chủ', to: '/' },
  { label: 'Về DAVICO', to: '/ve-davico' },
  { label: 'Lĩnh vực', to: '/linh-vuc' },
  { label: 'Dự án', to: '/du-an' },
  { label: 'Nông sản', to: '/nong-san' },
  { label: 'Liên hệ', to: '/lien-he' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  const navBg = scrolled || !isHome
    ? 'bg-[#101D2D]/95 backdrop-blur-md border-b border-white/10 shadow-lg'
    : 'bg-transparent border-b border-white/10'

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
      <div className="max-w-[1380px] mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <img src="/images/logo.png" alt="DAVICO" className="h-11 w-auto object-contain" />
          <div className="text-white leading-none">
            <div className="font-extrabold text-lg tracking-wider text-[#339900]">DAVICO</div>
            <div className="text-[9px] text-gray-300 tracking-[0.25em] font-medium mt-1">
              XÂY NỀN MÓNG - DỰNG TƯƠNG LAI
            </div>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-9">
          {navLinks.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `text-[13px] tracking-wider transition-colors duration-200 relative py-2 ${
                  isActive
                    ? 'text-[#E07026] font-semibold'
                    : 'text-white/90 hover:text-[#E07026] font-medium'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#E07026]" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden lg:block">
          <Link
            to="/lien-he"
            className="inline-flex items-center gap-2 bg-[#E07026] hover:bg-[#C85D1A] text-white text-xs font-semibold px-6 py-2.5 transition-colors uppercase tracking-wider"
          >
            Tìm hiểu thêm →
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-white p-2 focus:outline-none"
          aria-label="Toggle navigation"
        >
          <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <div className={`w-6 h-0.5 bg-white transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="lg:hidden bg-[#101D2D] border-b border-white/10 px-6 py-6 space-y-4">
          {navLinks.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `block text-sm py-2 ${
                  isActive ? 'text-[#E07026] font-bold' : 'text-white/90'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <div className="pt-2">
            <Link
              to="/lien-he"
              className="block text-center bg-[#E07026] text-white text-xs font-bold py-3 uppercase tracking-wider"
            >
              Tìm hiểu thêm →
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
