import { useState } from 'react'

const companyInfo = [
  {
    label: 'ĐỊA CHỈ TRỤ SỞ',
    value: 'Số 1, Ngõ 86, đường Dương Tự Minh, P. Quan Triều, tỉnh Thái Nguyên',
  },
  {
    label: 'VĂN PHÒNG GIAO DỊCH',
    value: 'Toà nhà Davico Tower – Số 1, đường Dương Tự Minh, P. Quan Triều, tỉnh Thái Nguyên',
  },
  {
    label: 'EMAIL',
    value: 'dtptbvdatviet@gmail.com',
    href: 'mailto:dtptbvdatviet@gmail.com',
  },
  {
    label: 'ĐIỆN THOẠI',
    value: '0972.762.296 · 0986.255.738',
    href: 'tel:0972762296',
  },
  {
    label: 'FANPAGE',
    value: 'Công ty cổ phần tư vấn và đầu tư phát triển bền vững Đất Việt',
  },
  {
    label: 'MÃ SỐ DOANH NGHIỆP',
    value: '4601533433',
  },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    field: '',
    content: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', phone: '', field: '', content: '' })
    }, 4000)
  }

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
            TRANG CHỦ  /  LIÊN HỆ
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.2] mb-5 tracking-normal">
            Liên hệ
          </h1>
          <p className="text-gray-200 text-sm sm:text-base leading-relaxed max-w-xl font-light">
            Hãy đến với DAVICO – bạn sẽ nhận được những điều tốt đẹp nhất.
          </p>
        </div>

      </section>

      {/* ── 2. KHỐI THÔNG TIN & FORM ── */}
      <section className="py-28 bg-[#FAF7F2]">
        <div className="max-w-[1380px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            {/* Cột trái */}
            <div className="lg:col-span-6 pr-0 lg:pr-4">
              <span className="eyebrow-orange">THÔNG TIN CÔNG TY</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#101D2D] leading-[1.25] mb-10">
                Công ty CP Tư vấn <span className="ampersand text-2xl sm:text-3xl">&</span> Đầu tư Phát triển Bền vững Đất Việt
              </h2>

              <div className="space-y-6">
                {companyInfo.map((info, idx) => (
                  <div key={idx} className="pb-5 border-b border-gray-200">
                    <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0D5A3A] mb-2">
                      {info.label}
                    </div>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-xs sm:text-sm text-[#101D2D] font-medium hover:text-[#E07026] transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-xs sm:text-sm text-[#101D2D] font-medium">
                        {info.value}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Cột phải: Form */}
            <div className="lg:col-span-6 bg-white p-8 sm:p-12 shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold text-[#101D2D] mb-8">
                Gửi yêu cầu cho DAVICO
              </h3>

              {submitted && (
                <div className="mb-6 p-4 bg-[#0D5A3A]/10 border border-[#0D5A3A] text-[#0D5A3A] text-xs font-semibold">
                  ✓ Cảm ơn bạn! Yêu cầu của bạn đã được gửi thành công đến DAVICO.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-gray-700 mb-2">
                    HỌ VÀ TÊN
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Nhập họ và tên"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#F6F4F0] border-none px-4 py-3.5 text-xs text-gray-800 focus:outline-none focus:ring-1 focus:ring-[#0D5A3A]"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-gray-700 mb-2">
                    EMAIL
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="Nhập email"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#F6F4F0] border-none px-4 py-3.5 text-xs text-gray-800 focus:outline-none focus:ring-1 focus:ring-[#0D5A3A]"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-gray-700 mb-2">
                    SỐ ĐIỆN THOẠI
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Nhập số điện thoại"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#F6F4F0] border-none px-4 py-3.5 text-xs text-gray-800 focus:outline-none focus:ring-1 focus:ring-[#0D5A3A]"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-gray-700 mb-2">
                    LĨNH VỰC QUAN TÂM
                  </label>
                  <select
                    value={formData.field}
                    onChange={e => setFormData({ ...formData, field: e.target.value })}
                    className="w-full bg-[#F6F4F0] border-none px-4 py-3.5 text-xs text-gray-700 focus:outline-none focus:ring-1 focus:ring-[#0D5A3A]"
                  >
                    <option value="">Chọn lĩnh vực</option>
                    <option value="khaosat">Tư vấn khảo sát – thiết kế</option>
                    <option value="nenmong">Thi công xây dựng nền móng</option>
                    <option value="kythuat">Dịch vụ kỹ thuật khảo sát, điện nước</option>
                    <option value="nongsan">Trồng trọt kinh doanh nông sản</option>
                    <option value="bds">Tư vấn mua bán BĐS, đầu tư dự án</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-gray-700 mb-2">
                    NỘI DUNG
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Nội dung cần tư vấn"
                    value={formData.content}
                    onChange={e => setFormData({ ...formData, content: e.target.value })}
                    className="w-full bg-[#F6F4F0] border-none px-4 py-3.5 text-xs text-gray-800 focus:outline-none focus:ring-1 focus:ring-[#0D5A3A] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-[#E07026] hover:bg-[#C85D1A] text-white text-xs font-bold uppercase tracking-wider px-8 py-3.5 transition-colors shadow-md"
                >
                  Gửi liên hệ →
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. BẢN ĐỒ VỊ TRÍ DAVICO ── */}
      <section className="h-[300px] bg-[#E8EDF2]">
        <iframe
          title="Bản đồ vị trí DAVICO Tower"
          src="https://maps.google.com/maps?q=Số%201%2C%20đường%20Dương%20Tự%20Minh%2C%20Quan%20Triều%2C%20Thái%20Nguyên%2C%20Việt%20Nam&amp;z=18&amp;output=embed"
          className="w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </section>
    </div>
  )
}
