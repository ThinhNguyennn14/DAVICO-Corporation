import { useState } from 'react'
import { Link } from 'react-router-dom'
import AmpersandText from '../components/AmpersandText.jsx'

const filterTabs = [
  { id: 'all', label: '01 Khảo sát – thiết kế', targetId: 'service-1' },
  { id: 'foundation', label: '02 Nền móng', targetId: 'service-2' },
  { id: 'technical', label: '03 Kỹ thuật, điện nước', targetId: 'service-3' },
  { id: 'agriculture', label: '04 Nông sản', targetId: 'service-4' },
  { id: 'investment', label: '05 BĐS & đầu tư', targetId: 'service-5' },
]

export default function Services() {
  const [activeTab, setActiveTab] = useState('all')

  const scrollTo = (targetId, tabId) => {
    setActiveTab(tabId)
    const el = document.getElementById(targetId)
    if (el) {
      const offset = 80
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = el.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="bg-white">
      {/* ── 1. HERO BANNER ── */}
      <section className="relative pt-36 pb-24 bg-[#101D2D] text-white overflow-hidden">
        <div className="absolute -right-36 top-1/2 -translate-y-1/2 hidden lg:block pointer-events-none">
          <div className="arc-circle-1 flex items-center justify-center">
            <div className="arc-circle-2 flex items-center justify-center">
              <div className="arc-circle-3" />
            </div>
          </div>
        </div>

        <div className="max-w-[1380px] mx-auto px-6 lg:px-12 relative z-10">
          <p className="text-[#E07026] text-[11px] font-bold uppercase tracking-[0.2em] mb-4">
            TRANG CHỦ  /  LĨNH VỰC HOẠT ĐỘNG
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.2] mb-5 tracking-normal">
            Năm lĩnh vực<br />
            một mục tiêu phía trước
          </h1>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-xl font-light">
            Từ khảo sát – thiết kế đến nền móng, dịch vụ kỹ thuật, nông sản và đầu tư dự án.
          </p>
        </div>

      </section>

      {/* ── 2. FILTER PILLS BAR ── */}
      <div className="bg-white border-b border-gray-200 sticky top-20 z-40">
        <div className="max-w-[1380px] mx-auto px-6 lg:px-12 flex gap-3 overflow-x-auto py-4">
          {filterTabs.map(t => (
            <button
              key={t.id}
              onClick={() => scrollTo(t.targetId, t.id)}
              className={`shrink-0 px-5 py-2 rounded-full text-xs font-semibold transition-colors border ${
                activeTab === t.id
                  ? 'bg-[#101D2D] text-white border-[#101D2D]'
                  : 'bg-white text-gray-700 border-gray-300 hover:border-gray-900'
              }`}
            >
              <AmpersandText>{t.label}</AmpersandText>
            </button>
          ))}
        </div>
      </div>

      {/* ── 3. NĂM KHỐI DỊCH VỤ ── */}
      <div>
        {/* LĨNH VỰC 01 */}
        <section id="service-1" className="grid lg:grid-cols-2 border-b border-gray-200">
          <div className="p-8 sm:p-14 lg:p-20 flex flex-col justify-center bg-white">
            <div className="text-[#E07026] text-4xl sm:text-5xl font-extrabold mb-4 leading-none">
              01
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#101D2D] mb-4 leading-[1.25]">
              Tư vấn khảo sát – thiết kế; giám sát <span className="ampersand">&</span> QLDA
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-6">
              Lĩnh vực bắt đầu cho sự phát triển của DAVICO. Đơn vị đầu ngành về khảo sát địa chất công trình tại Thái Nguyên và các tỉnh lân cận như Bắc Kạn, Cao Bằng, Lạng Sơn, Bắc Giang; thực hiện hàng trăm công trình xây dựng, giao thông, thủy lợi, thủy điện, hạ tầng kỹ thuật.
            </p>
            <ul className="space-y-2.5 text-xs sm:text-sm text-gray-700 mb-8">
              <li>— Khảo sát địa chất công trình</li>
              <li>— Khảo sát địa hình công trình</li>
              <li>— Tư vấn thiết kế, giám sát và quản lý dự án</li>
            </ul>
            <div>
              <Link
                to="/du-an"
                className="inline-flex items-center gap-2 border border-[#101D2D] hover:bg-[#101D2D] hover:text-white text-[#101D2D] text-xs font-bold uppercase tracking-wider px-6 py-3 transition-colors"
              >
                Tìm hiểu thêm →
              </Link>
            </div>
          </div>

          <div className="relative min-h-[400px] bg-[#162B3D] overflow-hidden">
            <img
              src="/images/photoDAVICO/pt_1_11zon.webp"
              alt="Khảo sát địa hình Đồng Tiến"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* LĨNH VỰC 02 */}
        <section id="service-2" className="grid lg:grid-cols-2 border-b border-gray-200">
          <div className="relative min-h-[400px] bg-[#162B3D] overflow-hidden order-2 lg:order-1">
            <img
              src="/images/photoDAVICO/pt_2_11zon (1).webp"
              alt="Thi công nền móng"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-8 sm:p-14 lg:p-20 flex flex-col justify-center bg-white order-1 lg:order-2">
            <div className="text-[#E07026] text-4xl sm:text-5xl font-extrabold mb-4 leading-none">
              02
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#101D2D] mb-4 leading-[1.25]">
              Thi công xây dựng nền móng
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-6">
              Lĩnh vực mũi nhọn trong tương lai của DAVICO, với trình độ chuyên sâu về nền móng và thiết bị khoan thăm dò, khoan cọc nhồi mini đồng bộ; triển khai nhiều công trình có điều kiện địa chất, địa hình phức tạp.
            </p>
            <ul className="space-y-2.5 text-xs sm:text-sm text-gray-700 mb-8">
              <li>— Thi công cọc khoan nhồi mini, cọc ống bê tông</li>
              <li>— Thi công cọc ép bê tông cốt thép</li>
              <li>— Địa bàn các tỉnh Trung du và miền núi Phía Bắc</li>
            </ul>
            <div>
              <Link
                to="/du-an"
                className="inline-flex items-center gap-2 border border-[#101D2D] hover:bg-[#101D2D] hover:text-white text-[#101D2D] text-xs font-bold uppercase tracking-wider px-6 py-3 transition-colors"
              >
                Tìm hiểu thêm →
              </Link>
            </div>
          </div>
        </section>

        {/* LĨNH VỰC 03 */}
        <section id="service-3" className="grid lg:grid-cols-2 border-b border-gray-200">
          <div className="p-8 sm:p-14 lg:p-20 flex flex-col justify-center bg-white">
            <div className="text-[#E07026] text-4xl sm:text-5xl font-extrabold mb-4 leading-none">
              03
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#101D2D] mb-4 leading-[1.25]">
              Dịch vụ kỹ thuật khảo sát, điện nước
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-6">
              Mở rộng từ đầu tư máy móc khảo sát sang cung cấp vật tư thiết bị và giải pháp điện nước, kèm đội sửa chữa hậu mãi.
            </p>
            <ul className="space-y-2.5 text-xs sm:text-sm text-gray-700 mb-8">
              <li>— Mua bán vật tư thiết bị khảo sát: máy khoan, máy đo đạc, thiết bị thí nghiệm</li>
              <li>— Điện năng lượng mặt trời, máy lọc không khí, lọc nước RO, ion kiềm</li>
              <li>— Vật tư điện nước công nghiệp, dân dụng</li>
              <li>— Sửa chữa, nâng cấp máy móc thiết bị khảo sát, điện nước</li>
            </ul>
            <div>
              <Link
                to="/du-an"
                className="inline-flex items-center gap-2 border border-[#101D2D] hover:bg-[#101D2D] hover:text-white text-[#101D2D] text-xs font-bold uppercase tracking-wider px-6 py-3 transition-colors"
              >
                Tìm hiểu thêm →
              </Link>
            </div>
          </div>

          <div className="relative min-h-[400px] bg-[#0D5A3A] overflow-hidden">
            <img
              src="/images/photoDAVICO/img_p14_4.webp"
              alt="Sửa chữa thiết bị khảo sát"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* LĨNH VỰC 04 */}
        <section id="service-4" className="grid lg:grid-cols-2 border-b border-gray-200">
          <div className="relative min-h-[400px] bg-[#0E5B3C] overflow-hidden order-2 lg:order-1">
            <img
              src="/images/photoDAVICO/anh_doi_che.webp"
              alt="Nông trại Davico"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-8 sm:p-14 lg:p-20 flex flex-col justify-center bg-[#0D5A3A] text-white order-1 lg:order-2">
            <div className="text-[#E07026] text-4xl sm:text-5xl font-extrabold mb-4 leading-none">
              04
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-4 leading-[1.25]">
              Trồng trọt và kinh doanh nông sản
            </h2>
            <p className="text-gray-200 text-xs sm:text-sm leading-relaxed mb-6 font-light">
              Mục tiêu “Nâng tầm giá trị nông sản Việt”: nông sản sạch, chất lượng cao cho thị trường trong nước và quốc tế, trồng theo quy trình VietGAP.
            </p>
            <ul className="space-y-2.5 text-xs sm:text-sm text-gray-200 mb-8 font-light">
              <li>— Bưởi Diễn Tràng Xá – DAVICO</li>
              <li>— Trà Tân Cương – DAVICO</li>
              <li>— Ươm trồng cây giống: vườn ươm khoảng 2 ha tại xã Đại Phúc, dự kiến mở rộng khoảng 30 ha</li>
            </ul>
            <div>
              <Link
                to="/nong-san"
                className="inline-flex items-center gap-2 bg-[#E07026] hover:bg-[#C85D1A] text-white text-xs font-bold uppercase tracking-wider px-6 py-3 transition-colors"
              >
                Tìm hiểu thêm →
              </Link>
            </div>
          </div>
        </section>

        {/* LĨNH VỰC 05 */}
        <section id="service-5" className="grid lg:grid-cols-2">
          <div className="p-8 sm:p-14 lg:p-20 flex flex-col justify-center bg-[#101D2D] text-white">
            <div className="text-[#E07026] text-4xl sm:text-5xl font-extrabold mb-4 leading-none">
              05
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-4 leading-[1.25]">
              Tư vấn mua bán bất động sản <span className="ampersand text-white">&</span> đầu tư dự án
            </h2>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6 font-light">
              Đồng hành cùng người dân tìm mảnh đất, ngôi nhà mới nhanh nhất và phù hợp nhất; hướng tới trở thành tập đoàn đa ngành.
            </p>
            <ul className="space-y-2.5 text-xs sm:text-sm text-gray-300 mb-8 font-light">
              <li>— Dịch vụ môi giới bất động sản – cán bộ có chứng chỉ hành nghề do Sở Xây dựng cấp</li>
              <li>— Khu nghỉ dưỡng dưỡng lão hồ Cây Si, xã Đại Phúc</li>
              <li>— Khu đô thị sinh thái River Hill Lake Phú Xá, phường Gia Sàng</li>
              <li>— Khu đô thị sinh thái Davico Ninh Cơ, xã Ninh Giang, Ninh Bình</li>
            </ul>
            <div>
              <Link
                to="/lien-he"
                className="inline-flex items-center gap-2 bg-[#E07026] hover:bg-[#C85D1A] text-white text-xs font-bold uppercase tracking-wider px-6 py-3 transition-colors"
              >
                Tìm hiểu thêm →
              </Link>
            </div>
          </div>

          <div className="relative min-h-[400px] bg-gradient-to-br from-[#E07026] to-[#A84A10] overflow-hidden flex items-end p-8">
            <img
              src="/images/photoDAVICO/khao_sat_11zon.webp"
              alt="Đầu tư dự án DAVICO"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </section>
      </div>

      {/* ── 4. BANNER CAM ── */}
      <section className="bg-[#E07026] text-white py-14">
        <div className="max-w-[1380px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold">
            Bạn cần giải pháp cho dự án? Hãy đến với DAVICO.
          </h2>
          <Link
            to="/lien-he"
            className="bg-[#101D2D] hover:bg-black text-white text-xs font-bold uppercase tracking-wider px-8 py-4 transition-colors shrink-0"
          >
            Liên hệ tư vấn →
          </Link>
        </div>
      </section>
    </div>
  )
}
