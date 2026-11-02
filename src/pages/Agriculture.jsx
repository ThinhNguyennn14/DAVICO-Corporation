import { useState } from 'react'
import { Link } from 'react-router-dom'

const steps = [
  {
    num: '01',
    title: 'Trồng trọt',
    desc: 'Trồng tại Nông trại Davico trên đất phù sa giàu dinh dưỡng.',
  },
  {
    num: '02',
    title: 'Chăm sóc',
    desc: 'Chăm sóc theo quy trình VietGAP.',
  },
  {
    num: '03',
    title: 'Chế biến',
    desc: 'Trà Tân Cương được chế biến tại Nông trại Davico.',
  },
  {
    num: '04',
    title: 'Phân phối',
    desc: 'Cung cấp cho cửa hàng kinh doanh và đơn vị có nhu cầu.',
  },
]

export default function Agriculture() {
  const [modalImg, setModalImg] = useState(null)

  return (
    <div className="bg-white">
      {/* ── 1. HERO BANNER ── */}
      <section className="relative pt-36 pb-24 bg-[#0D5A3A] text-white overflow-hidden">
        <div className="absolute -right-36 top-1/2 -translate-y-1/2 hidden lg:block pointer-events-none">
          <div className="arc-circle-1 flex items-center justify-center">
            <div className="arc-circle-2 flex items-center justify-center">
              <div className="arc-circle-3" />
            </div>
          </div>
        </div>

        <div className="max-w-[1380px] mx-auto px-6 lg:px-12 relative z-10">
          <p className="text-[#E07026] text-[11px] font-bold uppercase tracking-[0.2em] mb-4">
            NÔNG SẢN DAVICO
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.2] mb-5 tracking-normal">
            Nâng tầm giá trị<br />nông sản Việt
          </h1>
          <p className="text-gray-200 text-sm sm:text-base leading-relaxed max-w-xl font-light">
            Nông sản sạch, chất lượng cao cho nhu cầu trong nước và quốc tế – trồng và chăm sóc theo quy trình VietGAP.
          </p>
        </div>

      </section>

      {/* ── 2. NGUỒN GỐC SẢN PHẨM ── */}
      <section className="py-28 bg-white">
        <div className="max-w-[1380px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 pr-0 lg:pr-4">
              <span className="eyebrow-orange">NGUỒN GỐC SẢN PHẨM</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#101D2D] leading-[1.25] mb-6">
                Hai sản phẩm chủ lực mang thương hiệu DAVICO
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Davico tự hào là đơn vị tiên phong trong lĩnh vực nông sản sạch, nông sản chất lượng cao. Tất cả sản phẩm đều được trồng trọt, chăm sóc theo quy trình VietGAP, đem lại chất lượng cao cho người tiêu dùng.
              </p>
            </div>

            <div className="lg:col-span-6">
              <div
                className="relative h-72 sm:h-80 bg-[#162B3D] overflow-hidden cursor-pointer group"
                onClick={() => setModalImg({
                  img: '/images/projects/hinh10_nong_trai_davico.jpg',
                  title: 'Hình 10 · Nông trại Davico – Cổng trang trại xóm Cây Si'
                })}
              >
                <img
                  src="/images/projects/img_p15_3.jpeg"
                  alt="Nông trại Davico"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[#0F2A24]/20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. SẢN PHẨM 01: BƯỞI DIỄN TRÀNG XÁ ── */}
      <section className="grid lg:grid-cols-[minmax(0,1fr)_1.15fr_minmax(0,1fr)] items-center gap-8 lg:gap-10 border-t border-b border-gray-200 p-6 sm:p-10 lg:p-12">
        <div
          className="relative h-64 sm:h-80 lg:h-[520px] bg-[#0D5A3A] overflow-hidden cursor-pointer group"
          onClick={() => setModalImg({
            img: '/images/projects/hinh11_buoi_trang_xa.jpg',
            title: 'Vườn bưởi Tràng Xá – Davico'
          })}
        >
          <img
            src="/images/projects/hinh11_buoi_trang_xa.jpg"
            alt="Bưởi Diễn trên cây tại vườn Tràng Xá"
            className="absolute left-0 top-0 w-full h-[200%] object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
          />
        </div>

        <div className="py-4 sm:py-8 lg:py-12 flex flex-col justify-center bg-white text-center">
          <span className="eyebrow-orange">SẢN PHẨM 01</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#101D2D] mb-6 leading-[1.25]">
            Bưởi Diễn Tràng Xá –<br />DAVICO
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            Được trồng và chăm sóc tại Nông trại Davico trên mảnh đất phù sa giàu dinh dưỡng bên dòng sông Rong.
          </p>
          <p className="text-[#E07026] text-xs font-semibold">
            Địa chỉ: Xóm Lò Gạch, xã Tràng Xá, tỉnh Thái Nguyên
          </p>
        </div>

        <div
          className="relative h-64 sm:h-80 lg:h-[520px] bg-[#0D5A3A] overflow-hidden cursor-pointer group"
          onClick={() => setModalImg({
            img: '/images/projects/hinh11_buoi_trang_xa.jpg',
            title: 'Bưởi Tràng Xá sau thu hoạch – Davico'
          })}
        >
          <img
            src="/images/projects/img_p16_3.jpeg"
            alt="Bưởi Tràng Xá sau thu hoạch"
            className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
          />
        </div>
      </section>

      {/* ── 4. SẢN PHẨM 02: TRÀ TÂN CƯƠNG ── */}
      <section className="grid lg:grid-cols-[minmax(0,1fr)_1.15fr_minmax(0,1fr)] items-center gap-8 lg:gap-10 border-b border-gray-200 p-6 sm:p-10 lg:p-12">
        <div
          className="relative h-64 sm:h-80 lg:h-[520px] bg-[#0D5A3A] overflow-hidden cursor-pointer group"
          onClick={() => setModalImg({
            img: '/images/projects/hinh12_tra_tan_cuong.jpg',
            title: 'Vườn chè Tân Cương – Davico'
          })}
        >
          <img
            src="/images/projects/hinh12_tra_tan_cuong.jpg"
            alt="Luống chè non tại vườn Tân Cương"
            className="absolute left-0 top-0 w-full h-[200%] object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
          />
        </div>

        <div className="py-8 sm:py-12 lg:py-16 px-4 sm:px-8 flex flex-col justify-center bg-[#0D5A3A] text-white text-center">
          <span className="eyebrow-orange">SẢN PHẨM 02</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 leading-[1.25]">
            Trà Tân Cương –<br />DAVICO
          </h2>
          <p className="text-gray-200 text-sm leading-relaxed mb-6 font-light">
            Được trồng, chăm sóc và chế biến tại Nông trại Davico, theo quy trình VietGAP.
          </p>
          <p className="text-[#E07026] text-xs font-semibold">
            Địa chỉ: Xóm Cây Si, xã Đại Phúc, tỉnh Thái Nguyên
          </p>
        </div>

        <div
          className="relative h-64 sm:h-80 lg:h-[520px] bg-[#0D5A3A] overflow-hidden cursor-pointer group"
          onClick={() => setModalImg({
            img: '/images/projects/hinh12_tra_tan_cuong.jpg',
            title: 'Đồi chè Tân Cương – Davico'
          })}
        >
          <img
            src="/images/projects/img_p17_3.jpeg"
            alt="Đồi chè Tân Cương"
            className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
          />
        </div>
      </section>

      {/* ── 5. CÂU CHUYỆN NÔNG SẢN ── */}
      <section className="py-28 bg-[#FAF7F2]">
        <div className="max-w-[1380px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5 pr-0 lg:pr-4">
              <span className="eyebrow-orange">CÂU CHUYỆN NÔNG SẢN</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#101D2D] leading-[1.25] mb-6">
                Từ nông trại đến người tiêu dùng
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-8">
                Vườn ươm khoảng 2 ha tại xã Đại Phúc, dự kiến mở rộng khoảng 30 ha, hướng tới nhà cung cấp cây giống số 1 các tỉnh Trung du miền núi Phía Bắc.
              </p>
              <Link
                to="/lien-he"
                className="inline-flex items-center gap-2 bg-[#E07026] hover:bg-[#C85D1A] text-white text-xs font-bold uppercase tracking-wider px-8 py-4 transition-colors shadow-md"
              >
                Liên hệ đặt hàng →
              </Link>
            </div>

            <div className="lg:col-span-7 grid grid-cols-2 gap-3">
              <div className="h-80 bg-[#162B3D] overflow-hidden relative">
                <img
                  src="/images/projects/page_render_16(1).png"
                  alt="Vườn Bưởi"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="h-80 bg-[#162B3D] overflow-hidden relative">
                <img
                  src="/images/projects/page_render_17(1).png"
                  alt="Vườn Chè"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. QUY TRÌNH VIETGAP ── */}
      <section className="py-28 bg-[#0D5A3A] text-white">
        <div className="max-w-[1380px] mx-auto px-6 lg:px-12">
          <div className="mb-16">
            <span className="eyebrow-orange">QUY TRÌNH VIETGAP</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.25]">
              Trồng trọt, chăm sóc theo quy trình VietGAP
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map(s => (
              <div key={s.num} className="bg-[#0A472E] p-8 sm:p-9 flex flex-col justify-between min-h-[230px]">
                <div>
                  <div className="text-[#E07026] text-3xl font-extrabold mb-4 leading-none">
                    {s.num}
                  </div>
                  <h3 className="text-lg font-bold mb-2">
                    {s.title}
                  </h3>
                </div>
                <p className="text-gray-300 text-xs leading-relaxed font-light">
                  {s.desc}
                </p>
              </div>
            ))}
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
