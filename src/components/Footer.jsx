import { Link } from 'react-router-dom'
import AmpersandText from './AmpersandText.jsx'

const navExplore = [
  { label: 'Trang chủ', to: '/' },
  { label: 'Về DAVICO', to: '/ve-davico' },
  { label: 'Lĩnh vực', to: '/linh-vuc' },
  { label: 'Dự án', to: '/du-an' },
  { label: 'Nông sản', to: '/nong-san' },
  { label: 'Liên hệ', to: '/lien-he' },
]

const navServices = [
  { label: 'Tư vấn khảo sát – thiết kế', to: '/linh-vuc' },
  { label: 'Thi công nền móng', to: '/linh-vuc' },
  { label: 'Dịch vụ kỹ thuật, điện nước', to: '/linh-vuc' },
  { label: 'Nông sản DAVICO', to: '/nong-san' },
  { label: 'Tư vấn bất động sản, đầu tư', to: '/linh-vuc' },
]

export default function Footer() {
  return (
    <footer className="bg-[#0B131C] text-white pt-20 pb-10 border-t border-white/5">
      <div className="max-w-[1380px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-5">
            <Link to="/" className="flex items-center gap-3">
              <img src="/images/logo.png" alt="DAVICO" className="h-12 w-auto object-contain" />
              <div>
                <div className="font-extrabold text-xl tracking-wider text-white">DAVICO</div>
                <div className="text-[10px] text-gray-400 tracking-[0.25em]">ĐẤT VIỆT · BỀN VỮNG</div>
              </div>
            </Link>
            
            <p className="text-[#E07026] text-xs font-bold tracking-wider uppercase">
              “DAVICO – TẤT CẢ VÌ MỤC TIÊU PHÍA TRƯỚC”
            </p>
            
            <p className="text-gray-400 text-xs leading-relaxed max-w-sm">
              <AmpersandText>Công ty CP Tư vấn & Đầu tư Phát triển Bền vững Đất Việt – tiền thân là đội khảo sát, thiết kế Đất Việt, hình thành từ năm 2009.</AmpersandText>
            </p>
          </div>

          {/* Cột Khám phá */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#E07026] mb-5">
              Khám phá
            </h4>
            <ul className="space-y-3">
              {navExplore.map(item => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="text-gray-300 hover:text-[#E07026] text-xs transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Cột Lĩnh vực */}
          <div className="lg:col-span-3">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#E07026] mb-5">
              Lĩnh vực
            </h4>
            <ul className="space-y-3">
              {navServices.map(item => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="text-gray-300 hover:text-[#E07026] text-xs transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Cột Liên hệ */}
          <div className="lg:col-span-3">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#E07026] mb-5">
              Liên hệ
            </h4>
            <ul className="space-y-3 text-xs text-gray-300 leading-relaxed">
              <li>
                <span className="text-gray-400 block text-[10px] uppercase tracking-wider mb-0.5">Trụ sở:</span>
                Số 1, Ngõ 86, đường Dương Tự Minh, P. Quan Triều, tỉnh Thái Nguyên
              </li>
              <li>
                <span className="text-gray-400 block text-[10px] uppercase tracking-wider mb-0.5">VPGD:</span>
                Tòa nhà Davico Tower – Số 1, đường Dương Tự Minh, P. Quan Triều, tỉnh Thái Nguyên
              </li>
              <li>
                <a href="mailto:dtptbvdatviet@gmail.com" className="hover:text-[#E07026] transition-colors">
                  dtptbvdatviet@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:0972762296" className="hover:text-[#E07026] transition-colors font-semibold">
                  0972.762.296
                </a>
                {' · '}
                <a href="tel:0986255738" className="hover:text-[#E07026] transition-colors font-semibold">
                  0986.255.738
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-gray-400">
          <p><AmpersandText>© 2026 Công ty CP Tư vấn & Đầu tư Phát triển Bền vững Đất Việt – DAVICO</AmpersandText></p>
          <p className="tracking-wider">Mã số doanh nghiệp: 4601533433</p>
        </div>
      </div>
    </footer>
  )
}
