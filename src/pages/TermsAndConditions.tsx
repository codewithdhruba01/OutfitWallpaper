import React from "react"

const TermsAndConditions: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800 dark:text-gray-200">
      <h1 className="text-5xl font-bold mb-6 text-center font-excon">Terms & Conditions</h1>
      <p className="mb-6 text-gray-600 dark:text-gray-400 text-center font-synonym font-semibold">
        Last updated: August 30, 2025
      </p>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl mb-2 font-synonym font-bold">1. Acceptance of Terms</h2>
          <p className="text-gray-600 dark:text-gray-400 font-satoshi">
            By accessing or using our wallpaper generator, you agree to be bound by these Terms &
            Conditions. If you do not agree, please do not use this service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl  font-synonym font-bold mb-2">2. Use of Service</h2>
          <p className="text-gray-600 dark:text-gray-400 font-synonym">
            This tool is provided for personal and non-commercial use only. You may create,
            download, and use wallpapers, but redistribution or resale without permission is not
            allowed.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-2 font-synonym">3. Intellectual Property</h2>
          <p className="text-gray-600 dark:text-gray-400 font-satoshi">
            All content, design, and code related to this service remain the intellectual property
            of the site owner. Generated wallpapers are free for personal use.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-2 font-synonym">4. Disclaimer of Warranty</h2>
          <p className="text-gray-600 dark:text-gray-400 font-satoshi">
            The wallpaper generator is provided &quot;as is&quot; without warranties of any kind.
            We do not guarantee uninterrupted or error-free service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-2 font-synonym">5. Limitation of Liability</h2>
          <p className="text-gray-600 dark:text-gray-400 font-satoshi">
            We are not responsible for any damages, data loss, or issues arising from the use of
            this service. Use it at your own risk.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-2 font-synonym">6. Changes to Terms</h2>
          <p className="text-gray-600 dark:text-gray-400 font-satoshi">
            We may update these Terms & Conditions from time to time. Changes will be effective once
            posted on this page.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold font-synonym mb-2">7. Contact Us</h2>
          <p className="text-gray-600 dark:text-gray-400 font-satoshi">
            If you have any questions about these Terms & Conditions, please contact us at{" "}
            <a href="mailto:your@email.com" className="text-brand-500 hover:underline">
              info@wallpaperzone.com
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  )
}

export default TermsAndConditions
