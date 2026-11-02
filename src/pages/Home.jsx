import { Link } from 'react-router-dom'
import AmpersandText from '../components/AmpersandText.jsx'

const statsData = [
  {
    value: '2009',
    label: 'Hình thành đội khảo sát, thiết kế Đất Việt',
    widthClass: 'flex-1 min-w-[160px]',
  },
  {
    value: '2019',
    label: 'Thành lập công ty – cấp GCN đăng ký doanh nghiệp ngày 23/01/2019',
    widthClass: 'flex-[1.4] min-w-[220px]',
  },
  {
    value: '05',
    label: 'Lĩnh vực hoạt động',
    widthClass: 'flex-initial min-w-[130px]',
  },
  {
    value: '400 m²',
    label: 'Văn phòng làm việc tại Toà nhà Davico Tower',
    widthClass: 'flex-1 min-w-[170px]',
  },
  {
    value: '30 ha',
    label: 'Quy mô vườn ươm dự kiến mở rộng (hiện khoảng 2 ha)',
    widthClass: 'flex-[1.2] min-w-[190px]',
  },
]

const services = [
  {
    num: '01',
    title: 'Tư vấn khảo sát – thiết kế; giám sát & QLDA',
    desc: 'Khảo sát địa chất, địa hình; tư vấn thiết kế, giám sát và quản lý dự án đảm bảo chất lượng – tiến độ – hiệu quả.',
    img: '/images/projects/hinh1_khao_sat_dia_hinh_dong_tien.jpg',
    to: '/linh-vuc',
  },
  {
    num: '02',
    title: 'Thi công xây dựng nền móng',
    desc: 'Cọc khoan nhồi mini, cọc ống bê tông, cọc ép bê tông cốt thép cho công trình có điều kiện địa chất, địa hình phức tạp.',
    img: 'public/images/projects/hinh7_thi_cong_nha_anh_quyet(1).png',
    to: '/linh-vuc',
  },
  {
    num: '03',
    title: 'Dịch vụ kỹ thuật khảo sát, điện nước',
    desc: 'Mua bán, sửa chữa thiết bị khảo sát; điện năng lượng mặt trời, máy lọc không khí, lọc nước.',
    img: 'public/images/projects/img_p14_4.jpeg',
    to: '/linh-vuc',
  },
  {
    num: '04',
    title: 'Trồng trọt kinh doanh nông sản',
    desc: 'Bưởi Diễn Tràng Xá và Trà Tân Cương – DAVICO, trồng và chăm sóc theo quy trình VietGAP.',
    img: 'images/projects/img_p16_2.jpeg',
    to: '/nong-san',
  },
  {
    num: '05',
    title: 'Tư vấn mua bán bất động sản, đầu tư dự án',
    desc: 'Môi giới bất động sản có chứng chỉ hành nghề; nghiên cứu đầu tư dự án nhà ở, nghỉ dưỡng.',
    img: '/images/projects/cover_page.jpg',
    to: '/linh-vuc',
  },
]

const strategicGoals = [
  {
    num: '01',
    title: 'Khu nghỉ dưỡng dưỡng lão hồ Cây Si',
    location: 'Xã Đại Phúc, tỉnh Thái Nguyên · đang nghiên cứu đầu tư',
  },
  {
    num: '02',
    title: 'Khu đô thị sinh thái River Hill Lake Phú Xá',
    location: 'Phường Gia Sàng, tỉnh Thái Nguyên · đang nghiên cứu đầu tư',
  },
  {
    num: '03',
    title: 'Khu đô thị sinh thái Davico Ninh Cơ',
    location: 'Xã Ninh Giang, tỉnh Ninh Bình · đang nghiên cứu đầu tư',
  },
]

export default function Home() {
  return (
    <div className="bg-white">
      {/* ── 1. HERO SECTION (Khoảng cách dòng thoáng, chữ không đè dính) ── */}
      <section className="relative min-h-screen flex items-end pb-20 overflow-hidden">
        {/* Background ảnh minh họa */}
        <div className="absolute inset-0 z-0">
          <img
            src="public/images/bgr.png"
            alt="DAVICO Hero Background"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F1D2F]/85 via-[#0F1D2F]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F1D2F]/90 via-transparent to-black/30" />
        </div>

        <div className="relative z-10 max-w-[1380px] w-full mx-auto px-6 lg:px-12 pt-40">
          <div className="max-w-3xl">
            {/* Eyebrow Label cam */}
            <p className="text-[#E07026] text-xs font-bold uppercase tracking-[0.2em] mb-6 flex items-center flex-wrap">
              CÔNG TY CP TƯ VẤN <span className="ampersand text-sm">&</span> ĐẦU TƯ PHÁT TRIỂN BỀN VỮNG ĐẤT VIỆT
            </p>

            {/* Tiêu đề chính Hero */}
            <h1 className="flex flex-col gap-3 sm:gap-4 text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-7 tracking-normal">
              <span>DAVICO</span>
              <span>TẤT CẢ VÌ <span className="whitespace-nowrap">MỤC TIÊU</span></span>
              <span>PHÍA TRƯỚC</span>
            </h1>

            {/* Phụ đề mô tả */}
            <p className="text-gray-200 text-sm sm:text-base leading-relaxed mb-9 max-w-xl font-light">
              Từ đội khảo sát, thiết kế năm 2009 đến doanh nghiệp đa ngành: tư vấn khảo sát – thiết kế, thi công nền móng, dịch vụ kỹ thuật, nông sản và đầu tư dự án.
            </p>

            {/* 2 Nút CTA */}
            <div className="flex flex-wrap items-center gap-5 mb-20">
              <Link
                to="/linh-vuc"
                className="bg-[#E07026] hover:bg-[#C85D1A] text-white text-xs font-bold uppercase tracking-wider px-8 py-4 transition-colors shadow-md"
              >
                Khám phá lĩnh vực →
              </Link>
              <Link
                to="/du-an"
                className="border border-white/70 hover:bg-white hover:text-[#0F1D2F] text-white text-xs font-bold uppercase tracking-wider px-8 py-4 transition-colors backdrop-blur-sm"
              >
                Xem hồ sơ dự án →
              </Link>
            </div>
          </div>

          {/* Thanh chỉ số chân Hero */}
          <div className="flex items-center justify-between text-[11px] text-white/75 tracking-widest uppercase border-t border-white/20 pt-6">
            <span className="flex items-center gap-2">
              CUỘN XUỐNG ↓
            </span>
            <span>
              01 / 06 · TRANG CHỦ
            </span>
          </div>
        </div>
      </section>

      {/* ── 2. VỀ CHÚNG TÔI (Cân đối khoảng cách và tỷ lệ) ── */}
      <section className="py-28 bg-[#FAF7F2]">
        <div className="max-w-[1380px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* Cột trái */}
            <div className="lg:col-span-6 pr-0 lg:pr-4">
              <span className="eyebrow-orange">VỀ CHÚNG TÔI</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#101D2D] leading-[1.25] mb-6">
                Từ đội khảo sát năm 2009 đến doanh nghiệp đa ngành
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Công ty CP tư vấn và đầu tư phát triển bền vững Đất Việt – Davico tiền thân là đội khảo sát, thiết kế Đất Việt, hình thành và phát triển từ năm 2009. Năm 2019, các cán bộ chủ chốt đã thống nhất thành lập công ty để phát huy hết thế mạnh về nhân lực và thiết bị.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mb-9">
                Ban lãnh đạo luôn lấy con người làm trọng tâm, chất lượng công việc là trên hết.
              </p>
              <Link
                to="/ve-davico"
                className="inline-flex items-center gap-2 border border-[#101D2D] hover:bg-[#101D2D] hover:text-white text-[#101D2D] text-xs font-bold uppercase tracking-widest px-7 py-3.5 transition-colors"
              >
                VỀ DAVICO →
              </Link>
            </div>

            {/* Cột phải: Khung ảnh + Box cam 2009 */}
            <div className="lg:col-span-6 relative mt-4 lg:mt-0">
              <div className="relative h-[430px] bg-[#143B33] overflow-hidden">
                <img
                  src="/images/projects/doi_ngu.png"
                  alt="Đội ngũ DAVICO"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-[#0F2A24]/20" />
              </div>

              {/* Box 2009 nổi bật đè góc dưới */}
              <div className="absolute -bottom-8 -left-6 sm:-left-10 bg-[#E07026] text-white p-8 sm:p-10 shadow-2xl max-w-[290px] z-20">
                <div className="text-4xl sm:text-5xl font-extrabold mb-2 leading-none">
                  2009
                </div>
                <p className="text-xs text-white/95 leading-snug font-medium">
                  Hình thành đội khảo sát, thiết kế Đất Việt
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. DẢI THỐNG KÊ XANH (Format co giãn theo nội dung chữ, không ép ô) ── */}
      <section className="bg-[#0D5A3A] text-white py-16">
        <div className="max-w-[1380px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col sm:flex-row flex-wrap lg:flex-nowrap items-start justify-between gap-10 lg:gap-8">
            {statsData.map((s, idx) => (
              <div key={idx} className={`${s.widthClass} flex flex-col justify-start`}>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-2 leading-none">
                  {s.value}
                </div>
                <div className="text-xs text-white/85 font-light leading-relaxed pt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. NĂM LĨNH VỰC – MỘT MỤC TIÊU PHÍA TRƯỚC ── */}
      <section className="py-28 bg-white">
        <div className="max-w-[1380px] mx-auto px-6 lg:px-12">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="eyebrow-orange">LĨNH VỰC HOẠT ĐỘNG</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#101D2D] leading-[1.25]">
                Năm lĩnh vực – một mục tiêu<br />phía trước
              </h2>
            </div>
            <Link
              to="/linh-vuc"
              className="inline-flex items-center gap-2 border border-[#101D2D] hover:bg-[#101D2D] hover:text-white text-[#101D2D] text-xs font-bold uppercase tracking-wider px-7 py-3.5 transition-colors shrink-0"
            >
              Tất cả lĩnh vực →
            </Link>
          </div>

          {/* Lưới 6 thẻ có khoảng thở rộng rãi */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
            {services.map(svc => (
              <div
                key={svc.num}
                className="bg-white flex flex-col justify-between border-b md:border-b-0 pb-8 md:pb-0"
              >
                <div>
                  <div className="relative h-64 bg-[#162B3D] overflow-hidden mb-6">
                    <img
                      src={svc.img}
                      alt={svc.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                  </div>

                  <div className="text-[#E07026] text-xs font-extrabold mb-2.5">
                    {svc.num}
                  </div>

                  <h3 className="text-xl font-bold text-[#101D2D] mb-3 leading-snug">
                    <AmpersandText>{svc.title}</AmpersandText>
                  </h3>
                  <p className="text-gray-600 text-xs leading-relaxed mb-5">
                    {svc.desc}
                  </p>
                </div>

                <Link
                  to={svc.to}
                  className="text-xs font-bold text-[#101D2D] hover:text-[#E07026] transition-colors inline-flex items-center gap-1.5 pt-3"
                >
                  Tìm hiểu thêm →
                </Link>
              </div>
            ))}

            {/* Thẻ 06: CTA Box */}
            <div className="bg-[#101D2D] text-white p-8 sm:p-12 flex flex-col justify-between min-h-[380px]">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold leading-snug mb-5">
                  CÙNG DAVICO kiến tạo giá trị bền vững
                </h3>
                <p className="text-gray-300 text-xs leading-relaxed">
                  Liên hệ để được tư vấn giải pháp phù hợp cho dự án của bạn.
                </p>
              </div>

              <div className="pt-8">
                <Link
                  to="/lien-he"
                  className="inline-flex items-center gap-2 bg-[#E07026] hover:bg-[#C85D1A] text-white text-xs font-bold uppercase tracking-wider px-7 py-3.5 transition-colors"
                >
                  Liên hệ ngay →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. NĂNG LỰC ĐƯỢC CHỨNG MINH TẠI HIỆN TRƯỜNG ── */}
      <section className="py-28 bg-[#FAF7F2]">
        <div className="max-w-[1380px] mx-auto px-6 lg:px-12">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <p className="eyebrow-orange flex items-center">
                DỰ ÁN <span className="ampersand text-xs">&</span> CÔNG TRÌNH TIÊU BIỂU
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#101D2D] leading-[1.25]">
                Năng lực được chứng minh<br />tại hiện trường
              </h2>
            </div>
            <Link
              to="/du-an"
              className="inline-flex items-center gap-2 border border-[#101D2D] hover:bg-[#101D2D] hover:text-white text-[#101D2D] text-xs font-bold uppercase tracking-wider px-7 py-3.5 transition-colors shrink-0"
            >
              Xem tất cả dự án →
            </Link>
          </div>

          {/* Lưới Bento 2 Cột */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10">
            {/* Cột trái */}
            <div className="lg:col-span-7 relative bg-[#132230] h-[540px] overflow-hidden flex flex-col justify-end p-8 sm:p-10 text-white group">
              <img
                src="/images/projects/hinh1_khao_sat_dia_hinh_dong_tien.jpg"
                alt="Khảo sát địa hình Đồng Tiến"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B141F] via-[#0B141F]/40 to-transparent" />
              
              <div className="relative z-10">
                <span className="inline-block bg-[#E07026] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 mb-3">
                  ĐỊA HÌNH
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 leading-tight">
                  Khảo sát địa hình dự án khu đô thị Đồng Tiến
                </h3>
                <p className="text-gray-300 text-xs">
                  Phổ Yên, Thái Nguyên
                </p>
              </div>

            </div>

            {/* Cột phải: 2 Khối */}
            <div className="lg:col-span-5 flex flex-col gap-8 lg:gap-10">
              <div className="relative bg-[#132230] h-[250px] overflow-hidden flex flex-col justify-end p-6 sm:p-8 text-white group">
                <img
                  src="public/images/projects/img_p12_2.jpeg"
                  alt="Khảo sát địa chất Thanh Bình"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B141F] via-[#0B141F]/40 to-transparent" />
                
                <div className="relative z-10">
                  <span className="inline-block bg-[#E07026] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 mb-2">
                    ĐỊA CHẤT
                  </span>
                  <h4 className="text-lg font-bold text-white mb-1 leading-snug">
                    Khảo sát địa chất tuyến đường KCN Thanh Bình
                  </h4>
                  <p className="text-gray-300 text-xs">
                    Chợ Mới, Bắc Kạn
                  </p>
                </div>

              </div>

              <div className="relative bg-[#132230] h-[250px] overflow-hidden flex flex-col justify-end p-6 sm:p-8 text-white group">
                <img
                  src="public/images/projects/hinh6_thi_cong_nha_anh_hai(1).png"
                  alt="Thi công nền móng nhà anh Hải"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B141F] via-[#0B141F]/40 to-transparent" />
                
                <div className="relative z-10">
                  <span className="inline-block bg-[#E07026] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 mb-2">
                    NỀN MÓNG
                  </span>
                  <h4 className="text-lg font-bold text-white mb-1 leading-snug">
                    Nhà anh Hải (3 tầng) – thi công nền móng
                  </h4>
                  <p className="text-gray-300 text-xs">
                    Bờ sông Cầu, TP Thái Nguyên
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. NÔNG SẢN DAVICO ── */}
      <section className="py-28 bg-[#0D5A3A] text-white relative overflow-hidden">
        <div className="max-w-[1380px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5 pr-0 lg:pr-4">
              <span className="eyebrow-orange text-[#E07026]">NÔNG SẢN DAVICO</span>
              <h2 className="text-4xl sm:text-5xl font-extrabold leading-[1.25] mb-6">
                Nâng tầm giá trị nông sản Việt
              </h2>
              <p className="text-gray-200 text-sm leading-relaxed mb-5 font-light">
                Bưởi Diễn Tràng Xá – DAVICO được trồng trên mảnh đất phù sa màu mỡ giàu dinh dưỡng bên dòng sông Rong, xóm Lò Gạch, xã Tràng Xá.
              </p>
              <p className="text-gray-200 text-sm leading-relaxed mb-9 font-light">
                Trà Tân Cương – DAVICO được trồng, chăm sóc và chế biến tại Nông trại Davico, xóm Cây Si, Xã Đại Phúc. Tất cả đều theo quy trình VietGAP.
              </p>
              <Link
                to="/nong-san"
                className="inline-flex items-center gap-2 bg-[#E07026] hover:bg-[#C85D1A] text-white text-xs font-bold uppercase tracking-wider px-8 py-4 transition-colors shadow-lg"
              >
                Khám phá nông sản →
              </Link>
            </div>

            <div className="lg:col-span-7 relative">
              <div className="grid grid-cols-2 gap-5 sm:gap-6">
                <div className="h-72 sm:h-80 bg-[#124B36] overflow-hidden">
                  <img
                    src="public/images/projects/page_render_16(1).png"
                    alt="Bưởi Diễn Tràng Xá"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-72 sm:h-80 bg-[#124B36] overflow-hidden relative">
                  <img
                    src="public/images/projects/page_render_17(1).png"
                    alt="Trà Tân Cương"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Huy hiệu tròn VietGAP */}
              <div className="absolute -bottom-6 right-6 w-24 h-24 rounded-full bg-[#E07026] text-white flex items-center justify-center font-extrabold text-sm tracking-wider shadow-2xl border-4 border-[#0D5A3A]">
                VietGAP
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. TẦM NHÌN & ĐỊNH HƯỚNG ── */}
      <section className="py-28 bg-[#101D2D] text-white relative overflow-hidden">
        <div className="absolute -right-36 top-1/2 -translate-y-1/2 hidden lg:block pointer-events-none">
          <div className="arc-circle-1 flex items-center justify-center">
            <div className="arc-circle-2 flex items-center justify-center">
              <div className="arc-circle-3" />
            </div>
          </div>
        </div>

        <div className="max-w-[1380px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <div className="lg:col-span-6">
              <p className="eyebrow-orange flex items-center">
                TẦM NHÌN <span className="ampersand text-xs">&</span> ĐỊNH HƯỚNG
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.25] mb-6">
                Quyết tâm trở thành doanh nghiệp dẫn đầu trong các lĩnh vực kinh doanh
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed max-w-lg font-light">
                Với mục tiêu trở thành tập đoàn đa ngành trong tương lai, DAVICO nghiên cứu đầu tư các dự án bất động sản nhà ở, nghỉ dưỡng tại Thái Nguyên và các tỉnh lân cận.
              </p>
            </div>

            <div className="lg:col-span-6 space-y-8 pt-2">
              {strategicGoals.map(item => (
                <div key={item.num} className="flex gap-6 items-baseline pb-7 border-b border-white/10">
                  <div className="text-[#E07026] text-xl font-bold shrink-0">
                    {item.num}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1.5 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-xs font-light">
                      {item.location}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
