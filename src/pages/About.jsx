import { useState } from 'react'
import AmpersandText from '../components/AmpersandText.jsx'

const timeline = [
  {
    year: '2009',
    title: 'Hình thành đội khảo sát, thiết kế Đất Việt.',
    color: 'bg-[#0D5A3A]',
  },
  {
    year: '23/01/2019',
    title: 'Thành lập Công ty CP tư vấn và đầu tư phát triển bền vững Đất Việt – Davico.',
    color: 'bg-[#0D5A3A]',
  },
  {
    year: '26/9/2019',
    title: 'Được cấp chứng chỉ năng lực hoạt động xây dựng số THN-00031701.',
    color: 'bg-[#0D5A3A]',
  },
  {
    year: 'Hiện nay',
    title: 'Hoạt động trong 5 lĩnh vực, định hướng trở thành tập đoàn đa ngành.',
    color: 'bg-[#E07026]',
  },
]

const hdqt = [
  { name: 'Lê Thanh Đạo', role: 'CHỦ TỊCH HĐQT', sub: 'Hội đồng quản trị', tag: 'LĐ' },
  { name: 'Vũ Ngọc Chiến', role: 'THÀNH VIÊN HĐQT', sub: 'Hội đồng quản trị', tag: 'VC' },
  { name: 'Đặng Văn Hướng', role: 'THÀNH VIÊN HĐQT', sub: 'Hội đồng quản trị', tag: 'ĐH' },
]

const bgd = [
  { name: 'Lê Thanh Đạo', role: 'GIÁM ĐỐC', sub: 'Điều hành chung', tag: 'LĐ' },
  { name: 'Vũ Ngọc Chiến', role: 'PHÓ GIÁM ĐỐC', sub: 'Tư vấn khảo sát – thiết kế; tư vấn giám sát & quản lý dự án', tag: 'VC' },
  { name: 'Đoàn Quang Khải', role: 'PHÓ GIÁM ĐỐC', sub: 'Thi công xây dựng nền móng; dịch vụ kỹ thuật khảo sát, điện nước', tag: 'ĐK' },
  { name: 'Nguyễn Văn Thuỵ', role: 'PHÓ GIÁM ĐỐC', sub: 'Trồng trọt kinh doanh nông sản; tư vấn mua bán bất động sản, đầu tư dự án', tag: 'NT' },
]

const facilities = [
  {
    area: '300 m²',
    name: 'Trụ sở công ty',
    address: 'Nhà số 1, Ngõ 86, đường Dương Tự Minh, phường Quan Triều, tỉnh Thái Nguyên.',
    img: '/images/projects/img_p15_3.jpeg',
  },
  {
    area: '400 m²',
    name: 'Văn phòng – Toà nhà Davico Tower',
    address: 'Số 1, đường Dương Tự Minh, phường Quan Triều, tỉnh Thái Nguyên.',
    img: '/images/projects/cover_page.jpg',
  },
  {
    area: '~100 m²',
    name: 'Kho chứa máy móc, thiết bị',
    address: 'Nhà số 2, Ngõ 80, đường Dương Tự Minh, phường Quan Triều, tỉnh Thái Nguyên.',
    img: '/images/projects/img_p15_2.jpeg',
  },
]

export default function About() {
  const [modalImg, setModalImg] = useState(null)

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
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <p className="text-[#E07026] text-[11px] font-bold uppercase tracking-[0.2em] mb-4">
                TRANG CHỦ  /  VỀ DAVICO
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.2] mb-5 tracking-normal">
                Về DAVICO
              </h1>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-xl font-light">
                Từ đội khảo sát, thiết kế Đất Việt năm 2009 đến Công ty CP Tư vấn <span className="ampersand text-white">&</span> Đầu tư Phát triển Bền vững Đất Việt.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div
                className="relative h-72 sm:h-80 bg-white overflow-hidden cursor-pointer group"
                onClick={() => setModalImg({
                  img: '/images/projects/doi_ngu_davico.jpg',
                  title: 'Đội ngũ cán bộ, kỹ sư DAVICO tại hiện trường'
                })}
              >
                <div className="absolute inset-1 overflow-hidden transition-all duration-500 group-hover:inset-0">
                <img
                  src="/images/projects/doi_ngu.png"
                  alt="Đội ngũ DAVICO"
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[#0F2A24]/30" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. LỊCH SỬ HÌNH THÀNH ── */}
      <section className="py-28 bg-[#FAF7F2]">
        <div className="max-w-[1380px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <span className="eyebrow-orange">LỊCH SỬ HÌNH THÀNH</span>
              <div className="text-6xl sm:text-7xl font-extrabold text-[#0D5A3A] mb-4 leading-none">
                2009
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#101D2D] leading-snug">
                Đội khảo sát, thiết kế Đất Việt được hình thành và phát triển – tiền thân của DAVICO.
              </h3>
            </div>

            <div className="lg:col-span-7 space-y-8">
              <div>
                <h4 className="font-bold text-[#101D2D] text-sm mb-2">
                  Năm 2019 – Thành lập công ty
                </h4>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  Để phát huy hết thế mạnh về nhân lực, thiết bị của đội khảo sát, thiết kế Đất Việt, các cán bộ chủ chốt đã thống nhất thành lập Công ty CP tư vấn và đầu tư phát triển bền vững Đất Việt – Davico.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-[#101D2D] text-sm mb-2">
                  23/01/2019 – Giấy chứng nhận đăng ký doanh nghiệp
                </h4>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  Phòng Đăng ký kinh doanh, Sở Kế hoạch <span className="ampersand text-xs">&</span> Đầu tư tỉnh Thái Nguyên cấp GCN đăng ký doanh nghiệp ngày 23/01/2019, mã số: <strong>4601533433</strong>.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-[#101D2D] text-sm mb-2">
                  26/9/2019 – Chứng chỉ năng lực hoạt động xây dựng
                </h4>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  Sở Xây dựng tỉnh Thái Nguyên cấp chứng chỉ năng lực hoạt động xây dựng số <strong>THN-00031701</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. HAI KHỐI LỚN SONG SONG ── */}
      <section className="grid lg:grid-cols-2">
        <div className="bg-[#0D5A3A] text-white p-12 sm:p-16 lg:p-20 flex flex-col justify-center">
          <p className="eyebrow-orange text-[#E07026] flex items-center">
            TẦM NHÌN <span className="ampersand text-xs">&</span> MỤC TIÊU PHÁT TRIỂN
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold leading-[1.25] mb-6">
            Dẫn đầu trong các lĩnh vực kinh doanh
          </h2>
          <p className="text-gray-200 text-sm leading-relaxed font-light">
            Với tinh thần khởi nghiệp “Tất cả vì mục tiêu phía trước”, DAVICO quyết tâm trở thành doanh nghiệp dẫn đầu trong các lĩnh vực kinh doanh và hướng tới tập đoàn đa ngành trong tương lai.
          </p>
        </div>

        <div className="bg-[#E07026] text-white p-12 sm:p-16 lg:p-20 flex flex-col justify-center">
          <span className="eyebrow-white text-white/80">
            TRIẾT LÝ HOẠT ĐỘNG
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold leading-[1.25] mb-6">
            Lấy con người làm trọng tâm
          </h2>
          <p className="text-orange-100 text-sm leading-relaxed font-light">
            Chất lượng công việc là trên hết – kim chỉ nam xuyên suốt từ thời đội khảo sát, thiết kế đến giai đoạn công ty.
          </p>
        </div>
      </section>

      {/* ── 4. TIMELINE PHÁT TRIỂN ── */}
      <section className="py-28 bg-white">
        <div className="max-w-[1380px] mx-auto px-6 lg:px-12">
          <div className="mb-16">
            <span className="eyebrow-orange">TIMELINE PHÁT TRIỂN</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#101D2D] leading-[1.25]">
              Hành trình từ 2009 đến nay
            </h2>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute top-[11px] left-0 right-0 h-[2px] bg-gray-200" />
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              {timeline.map((item, idx) => (
                <div key={idx} className="flex flex-col">
                  <div className={`w-6 h-6 rounded-full ${item.color} border-4 border-white shadow-sm mb-6`} />
                  <div className="font-bold text-sm text-[#101D2D] mb-2 font-mono">
                    {item.year}
                  </div>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. BỘ MÁY LÃNH ĐẠO ── */}
      <section className="py-28 bg-[#FAF7F2]">
        <div className="max-w-[1380px] mx-auto px-6 lg:px-12">
          <div className="mb-16">
            <p className="eyebrow-orange flex items-center">
              BỘ MÁY LÃNH ĐẠO
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#101D2D] leading-[1.25]">
              Hội đồng quản trị <span className="ampersand text-2xl sm:text-3xl lg:text-4xl">&</span> Ban giám đốc
            </h2>
          </div>

          <div className="mb-16">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-6">
              Hội đồng quản trị
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {hdqt.map(m => (
                <div key={m.name} className="bg-white p-8 flex flex-col justify-between shadow-sm">
                  <div>
                    <div className="w-12 h-12 rounded-full bg-[#0D5A3A] text-white flex items-center justify-center font-bold text-sm mb-6">
                      {m.tag}
                    </div>
                    <div className="text-[10px] text-[#E07026] font-bold uppercase tracking-wider mb-1.5">
                      {m.role}
                    </div>
                    <h4 className="text-xl font-bold text-[#101D2D] mb-1">
                      {m.name}
                    </h4>
                  </div>
                  <p className="text-gray-400 text-xs mt-4">
                    <AmpersandText>{m.sub}</AmpersandText>
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-6">
              Ban giám đốc
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {bgd.map(m => (
                <div key={m.name} className="bg-white p-8 flex flex-col justify-between shadow-sm min-h-[230px]">
                  <div>
                    <div className="w-12 h-12 rounded-full bg-[#0D5A3A] text-white flex items-center justify-center font-bold text-sm mb-6">
                      {m.tag}
                    </div>
                    <div className="text-[10px] text-[#E07026] font-bold uppercase tracking-wider mb-1.5">
                      {m.role}
                    </div>
                    <h4 className="text-lg font-bold text-[#101D2D] mb-2">
                      {m.name}
                    </h4>
                  </div>
                  <p className="text-gray-500 text-xs leading-relaxed mt-2">
                    {m.sub}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. CƠ SỞ VẬT CHẤT ── */}
      <section className="py-28 bg-white">
        <div className="max-w-[1380px] mx-auto px-6 lg:px-12">
          <div className="mb-16">
            <p className="eyebrow-orange flex items-center">
              CƠ SỞ VẬT CHẤT <span className="ampersand text-xs">&</span> TRANG THIẾT BỊ
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#101D2D] leading-[1.25]">
              Đồng bộ, từ thô sơ đến hiện đại
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-14">
            {facilities.map((f, idx) => (
              <div key={idx} className="flex flex-col">
                <div className="relative h-64 bg-[#162B3D] overflow-hidden mb-6">
                  <img
                    src={f.img}
                    alt={f.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-[#E07026] mb-2 leading-none">
                  {f.area}
                </div>
                <h4 className="font-bold text-[#101D2D] text-sm mb-2">
                  {f.name}
                </h4>
                <p className="text-gray-500 text-xs leading-relaxed">
                  {f.address}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-[#101D2D] text-white p-8 sm:p-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="text-2xl sm:text-3xl font-bold text-white shrink-0">
              Máy móc, thiết bị
            </div>
            <p className="text-gray-300 text-xs leading-relaxed max-w-2xl font-light">
              Xe tải, ôtô con các loại · Máy toàn đạc điện tử, máy thủy chuẩn · Bộ đo GPS · Máy khoan khảo sát các loại · Thiết bị thí nghiệm hiện trường, trong phòng · Máy vi tính, máy in, máy photo
            </p>
          </div>
        </div>
      </section>

      {/* Modal */}
      {modalImg && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setModalImg(null)}
        >
          <div className="bg-white max-w-3xl w-full p-4" onClick={e => e.stopPropagation()}>
            <img src={modalImg.img} alt={modalImg.title} className="w-full h-auto" />
            <p className="text-sm font-bold text-[#101D2D] mt-3">{modalImg.title}</p>
          </div>
        </div>
      )}
    </div>
  )
}
