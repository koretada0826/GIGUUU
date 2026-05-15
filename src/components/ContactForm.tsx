'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="relative z-10 px-5 md:px-12 lg:px-[90px] pt-10 md:pt-12 pb-16 md:pb-20">
      <div className="max-w-[760px] mx-auto">
        <h1 className="text-center text-[28px] md:text-[36px] font-bold tracking-wider text-gray-900 mb-8 md:mb-10">
          お問い合わせ
        </h1>
        {submitted ? (
          <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-md p-6 text-center text-sm md:text-base">
            お問い合わせを受け付けました。ありがとうございます。
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
            <Field label="お名前" required>
              <input
                type="text"
                placeholder="名字 名前"
                required
                className="w-full border border-gray-300 rounded-md px-4 py-3 text-[15px] focus:outline-none focus:border-gray-500"
              />
            </Field>
            <Field label="法人名">
              <input
                type="text"
                placeholder="株式会社○○"
                className="w-full border border-gray-300 rounded-md px-4 py-3 text-[15px] focus:outline-none focus:border-gray-500"
              />
            </Field>
            <Field label="Email" required>
              <input
                type="email"
                placeholder="Email@address"
                required
                className="w-full border border-gray-300 rounded-md px-4 py-3 text-[15px] focus:outline-none focus:border-gray-500"
              />
            </Field>
            <Field label="詳細" required>
              <textarea
                rows={5}
                placeholder="お問い合わせ内容を記入してください"
                required
                className="w-full border border-gray-300 rounded-md px-4 py-3 text-[15px] resize-y focus:outline-none focus:border-gray-500"
              />
            </Field>
            <div className="flex items-center justify-center gap-3 pt-2">
              <input
                id="agree"
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="h-4 w-4"
              />
              <label htmlFor="agree" className="text-[13px] md:text-[14px] text-gray-800">
                プライバシーポリシーに同意する
              </label>
            </div>
            <div className="flex justify-center pt-2">
              <button
                type="submit"
                disabled={!agreed}
                className="bg-black text-white px-10 py-3 rounded-md text-[14px] hover:bg-gray-800 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                送信
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-[13px] md:text-[14px] font-semibold text-gray-900 mb-2">
        {label}
        {required && <span className="text-gray-900">*</span>}
      </label>
      {children}
    </div>
  );
}
