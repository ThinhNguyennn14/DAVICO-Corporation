import { useState } from 'react'
import AmpersandText from '../components/AmpersandText.jsx'

const filterCategories = [
  { id: 'all', label: 'Tất cả' },
  { id: 'diachat', label: 'Khảo sát địa chất' },
  { id: 'diahinh', label: 'Khảo sát địa hình' },
  { id: 'nenmong', label: 'Thi công nền móng' },
  { id: 'thietbi', label: 'Thiết bị & hoạt động' },
  { id: 'nongsan', label: 'Nông sản' },
]

const projectList = [
  {
    id: 1,
    cat: 'diahinh',
    tag: 'ĐỊA HÌNH',
    title: 'Hình 1 · Khảo sát địa hình dự án khu đô thị Đồng Tiến',
    location: 'Phổ Yên, Thái Nguyên',
    img: '/images/projects/hinh1_khao_sat_dia_hinh_dong_tien.jpg',
    colSpan: 'lg:col-span-6',
    height: 'h-[380px]',
  },
  {
    id: 2,
    cat: 'diachat',
    tag: 'ĐỊA CHẤT',
    title: 'Hình 2 · Khảo sát địa chất khu nhà ở Đồng Tiến (khu số 1)',
    location: 'Phổ Yên, Thái Nguyên',
    img: '/images/projects/hinh2_khao_sat_dia_chat_dong_tien.jpg',
    colSpan: 'lg:col-span-6',
    height: 'h-[380px]',
  },
  {
    id: 3,
    cat: 'diachat',
    tag: 'ĐỊA CHẤT',
    title: 'Hình 3 · Địa chất tuyến đường KCN Thanh Bình',
    location: 'Chợ Mới, Bắc Kạn',
    img: '/images/projects/hinh3_khao_sat_dia_chat_thanh_binh.jpg',
    colSpan: 'lg:col-span-4',
    height: 'h-[330px]',
  },
  {
    id: 4,
    cat: 'diachat',
    tag: 'ĐỊA CHẤT',
    title: 'Hình 4 · Địa chất khu dân cư Xóm Bãi Bằng',
    location: 'Xã Tân Thái, huyện Đại Từ',
    img: '/images/projects/hinh4_khao_sat_dia_chat_bai_bang.jpg',
    colSpan: 'lg:col-span-4',
    height: 'h-[330px]',
  },
  {
    id: 5,
    cat: 'diachat',
    tag: 'ĐỊA CHẤT',
    title: 'Hình 5 · Khảo sát Hồ Cây Vỉ',
    location: 'Xã Tân Thái, huyện Đại Từ, Thái Nguyên',
    img: '/images/projects/hinh5_khao_sat_ho_cay_vi.jpg',
    colSpan: 'lg:col-span-4',
    height: 'h-[330px]',
  },
  {
    id: 6,
    cat: 'nenmong',
    tag: 'NỀN MÓNG',
    title: 'Hình 6 · Nhà anh Hải (3 tầng)',
    location: 'Bờ sông Cầu, P. Hoàng Văn Thụ, TP Thái Nguyên',
    img: '/images/projects/hinh6_thi_cong_nha_anh_hai.jpg',
    colSpan: 'lg:col-span-4',
    height: 'h-[330px]',
  },
  {
    id: 7,
    cat: 'nenmong',
    tag: 'NỀN MÓNG',
    title: 'Hình 7 · Nhà anh Quyết (2 tầng)',
    location: 'Khu TĐC phường Gia Sàng, TP Thái Nguyên',
    img: '/images/projects/hinh7_thi_cong_nha_anh_quyet.jpg',
    colSpan: 'lg:col-span-4',
    height: 'h-[330px]',
  },
  {
    id: 8,
    cat: 'thietbi',
    tag: 'THIẾT BỊ',
    title: 'Hình 8 · Sửa chữa hộp số máy khoan UKB12/25',
    location: 'Sửa chữa thiết bị khảo sát',
    img: '/images/projects/hinh8_sua_chua_hop_so_ukb12_25.jpg',
    colSpan: 'lg:col-span-4',
    height: 'h-[330px]',
  },
  {
    id: 9,
    cat: 'thietbi',
    tag: 'THIẾT BỊ',
    title: 'Hình 9 · Vận chuyển thiết bị đi công trình',
    location: 'Thiết bị khoan khảo sát',
    img: '/images/projects/hinh9_van_chuyen_thiet_bi.jpg',
    colSpan: 'lg:col-span-5',
    height: 'h-[350px]',
  },
  {
    id: 10,
    cat: 'nongsan',
    tag: 'NÔNG SẢN',
    title: 'Hình 10 · Nông trại Davico',
    location: 'Xóm Cây Si, xã Đại Phúc, Thái Nguyên',
    img: '/images/projects/hinh10_nong_trai_davico.jpg',
    colSpan: 'lg:col-span-7',
    height: 'h-[350px]',
  },
]

export default function Projects() {
  const [activeCat, setActiveCat] = useState('all')
  const [lightbox, setLightbox] = useState(null)

  const filtered = activeCat === 'all'
    ? projectList
    : projectList.filter(p => p.cat === activeCat)

  return (
    <div className="bg-white">
      {/* ── 1. HERO BANNER (Dấu & mềm mại, tiêu đề liền mạch) ── */}
      <section className="relative pt-36 pb-24 bg-[#101D2D] text-white overflow-hidden">
        <div className="absolute -right-36 top-1/2 -translate-y-1/2 hidden lg:block pointer-events-none">
          <div className="arc-circle-1 flex items-center justify-center">
            <div className="arc-circle-2 flex items-center justify-center">
              <div className="arc-circle-3" />
            </div>
          </div>
        </div>

        <div className="max-w-[1380px] mx-auto px-6 lg:px-12 relative z-10">
          <p className="text-[#E07026] text-[11px] font-bold uppercase tracking-[0.2em] mb-4 flex items-center">
            TRANG CHỦ  /  DỰ ÁN <span className="ampersand text-xs">&</span> NĂNG LỰC
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.2] mb-5 tracking-normal">
            Dự án <span className="ampersand text-3xl sm:text-4xl lg:text-5xl">&</span> Năng lực
          </h1>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-xl font-light">
            Hình ảnh thực tế từ hiện trường khảo sát, thi công nền móng, thiết bị và nông trại.
          </p>
        </div>

      </section>

      {/* ── 2. FILTER BAR ── */}
      <div className="bg-white border-b border-gray-200 sticky top-20 z-40">
        <div className="max-w-[1380px] mx-auto px-6 lg:px-12 flex items-center gap-3 overflow-x-auto py-4">
          <span className="text-gray-500 text-xs font-bold uppercase tracking-wider shrink-0 mr-2 flex items-center">
            LỌC THEO LĨNH VỰC
          </span>
          {filterCategories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCat(cat.id)}
              className={`shrink-0 px-5 py-2 rounded-full text-xs font-semibold transition-colors border ${
                activeCat === cat.id
                  ? 'bg-[#101D2D] text-white border-[#101D2D]'
                  : 'bg-white text-gray-700 border-gray-300 hover:border-gray-900'
              }`}
            >
              <AmpersandText>{cat.label}</AmpersandText>
            </button>
          ))}
        </div>
      </div>

      {/* ── 3. LƯỚI BENTO CÂN ĐỐI ── */}
      <section className="py-20 bg-[#FAF7F2]">
        <div className="max-w-[1380px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8">
            {filtered.map(p => (
              <div
                key={p.id}
                className={`${p.colSpan} relative bg-[#132230] ${p.height} overflow-hidden flex flex-col justify-end p-6 sm:p-8 text-white group cursor-pointer`}
                onClick={() => setLightbox(p)}
              >
                <img
                  src={p.img}
                  alt={p.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B141F] via-[#0B141F]/45 to-transparent" />
                
                <div className="relative z-10">
                  <span className="inline-block bg-[#E07026] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 mb-2.5">
                    {p.tag}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1.5 leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-gray-300 text-xs font-light">
                    {p.location}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. THỐNG KÊ ĐÁY TRANG ── */}
      <section className="bg-[#101D2D] text-white py-16">
        <div className="max-w-[1380px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="text-3xl font-extrabold text-[#E07026] mb-2 leading-none">
                Hàng trăm
              </div>
              <p className="text-gray-300 text-xs leading-relaxed font-light pt-2">
                công trình mỗi năm: xây dựng, giao thông, thủy lợi, thủy điện, hạ tầng kỹ thuật
              </p>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-[#E07026] mb-2 leading-none">
                Thái Nguyên <span className="ampersand text-2xl">&</span> lân cận
              </div>
              <p className="text-gray-300 text-xs leading-relaxed font-light pt-2">
                Bắc Kạn, Cao Bằng, Lạng Sơn, Bắc Giang
              </p>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-[#E07026] mb-2 leading-none">
                Chất lượng – tiến độ – hiệu quả
              </div>
              <p className="text-gray-300 text-xs leading-relaxed font-light pt-2">
                Cam kết xuyên suốt trong mọi công trình
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
        >
          <div className="bg-white max-w-4xl w-full p-4" onClick={e => e.stopPropagation()}>
            <img src={lightbox.img} alt={lightbox.title} className="w-full max-h-[75vh] object-contain" />
            <div className="mt-4 flex items-center justify-between">
              <div>
                <span className="inline-block bg-[#E07026] text-white text-[10px] font-bold px-2 py-0.5 uppercase mb-1">
                  {lightbox.tag}
                </span>
                <h4 className="font-bold text-[#101D2D] text-base">{lightbox.title}</h4>
                <p className="text-gray-500 text-xs">{lightbox.location}</p>
              </div>
              <button
                onClick={() => setLightbox(null)}
                className="bg-[#101D2D] text-white px-5 py-2 text-xs font-bold uppercase"
              >
                Đóng ✕
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
