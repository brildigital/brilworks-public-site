import React from "react";

const page = () => {
  return (
    <>
      <head>
        <meta name="robots" content="noindex, nofollow" />
      </head>
      <section className="kinderland healthvault mt-[2rem] md:mx-[15px] w-full flex align-middle justify-center">
        <div className="container max-w-[1080px] main-section-padding !py-0 md:px-10 px-6 mx-auto w-full">
          <div>
            <div className="bg-white overflow-hidden text-gray-900 leading-relaxed">
              <header className="p-[clamp(18px,4vw,18px)] border-b border-gray-300">
                <div
                  class="inline-flex items-center gap-2 rounded-full bg-blue-600/5 text-blue-600 border border-blue-600 px-2.5 py-1.5 text-sm"
                  aria-hidden="true"
                >
                  I-Remi • Terms of Service
                </div>
                <h1 className="mt-2 mb-1 text-[clamp(22px,5vw,34px)] font-semibold">
                  Terms of Service
                </h1>

                <div className="text-sm text-gray-600">
                  Effective Date:&nbsp;
                  <time dateTime="2025-08-21">August 21, 2025</time>
                </div>

                <p className="mt-3 text-gray-600">
                  Please read these Terms carefully. By using I-Remi, you agree
                  to be bound by them.
                </p>
              </header>

              <main className="p-[clamp(18px,4vw,24px)] space-y-4">
                <section id="purpose">
                  <h2 className="mb-2 text-[clamp(18px,3.8vw,22px)] font-semibold">
                    1. Purpose of the App
                  </h2>
                  <p>
                    I-Remi helps clinicians and patients manage surgery-related
                    care. Clinicians may create questionnaires, exercises, and
                    educational content; patients can view and complete assigned
                    tasks and track progress.
                  </p>
                </section>

                <section
                  id="eligibility"
                  className="pt-4 border-t border-dashed border-gray-300"
                >
                  <h2 className="mb-2 text-[clamp(18px,3.8vw,22px)] font-semibold">
                    2. Eligibility
                  </h2>
                  <ul className="mt-2 pl-4 sm:pl-[18px] list-disc space-y-1">
                    <li>
                      You are at least 18 years old, or you use the App under
                      the supervision of a parent/guardian or medical
                      professional.
                    </li>
                    <li>
                      You provide accurate and truthful information when
                      creating or updating your account.
                    </li>
                  </ul>
                </section>

                <section
                  id="information"
                  className="pt-4 border-t border-dashed border-gray-300"
                >
                  <h2 className="mb-2 text-[clamp(18px,3.8vw,22px)] font-semibold">
                    3. Information We Collect
                  </h2>
                  <p>We collect and store:</p>
                  <ul className="mt-2 pl-4 sm:pl-[18px] list-disc space-y-1">
                    <li>
                      First name, email, and patient ID (assigned by your
                      doctor).
                    </li>
                    <li>
                      Surgery-related information (e.g., pain area, diagnosis,
                      treatment, recovery details).
                    </li>
                    <li>
                      Content uploaded by clinicians (questionnaires, exercises,
                      images/videos).
                    </li>
                  </ul>
                  <p className="mt-2">
                    We do <strong>not</strong> collect or use location data.
                  </p>
                </section>

                <section
                  id="medical-disclaimer"
                  className="pt-4 border-t border-dashed border-gray-300"
                >
                  <h2 className="mb-2 text-[clamp(18px,3.8vw,22px)] font-semibold">
                    4. Medical Disclaimer
                  </h2>
                  <ul className="mt-2 pl-4 sm:pl-[18px] list-disc space-y-1">
                    <li>
                      I-Remi does <strong>not</strong> provide medical advice.
                    </li>
                    <li>
                      Content is created and managed by qualified clinicians.
                    </li>
                    <li>
                      Patients must consult their healthcare provider for
                      medical advice and decisions.
                    </li>
                  </ul>
                </section>

                <section
                  id="responsibilities"
                  className="pt-4 border-t border-dashed border-gray-300"
                >
                  <h2 className="mb-2 text-[clamp(18px,3.8vw,22px)] font-semibold">
                    5. User Responsibilities
                  </h2>
                  <ul className="mt-2 pl-4 sm:pl-[18px] list-disc space-y-1">
                    <li>
                      <strong>Clinicians:</strong> You are responsible for the
                      accuracy, relevance, and legality of content you upload.
                    </li>
                    <li>
                      <strong>Patients:</strong> You are responsible for
                      following guidance from your healthcare provider and using
                      the App appropriately.
                    </li>
                    <li>
                      You agree not to upload illegal, harmful, misleading, or
                      inappropriate content, nor attempt to disrupt or misuse
                      the App.
                    </li>
                  </ul>
                </section>

                <section
                  id="security"
                  className="pt-4 border-t border-dashed border-gray-300"
                >
                  <h2 className="mb-2 text-[clamp(18px,3.8vw,22px)] font-semibold">
                    6. Data Security
                  </h2>
                  <p>
                    We implement reasonable safeguards (e.g., encryption in
                    transit, access controls). However, no method of electronic
                    transmission or storage is completely secure, and you
                    acknowledge this risk.
                  </p>
                </section>

                <section
                  id="ip"
                  className="pt-4 border-t border-dashed border-gray-300"
                >
                  <h2 className="mb-2 text-[clamp(18px,3.8vw,22px)] font-semibold">
                    7. Intellectual Property
                  </h2>
                  <p>
                    Except for user-uploaded content, all materials in the App
                    are owned by or licensed to I-Remi and protected by
                    applicable intellectual property laws.
                  </p>
                </section>

                <section
                  id="termination"
                  className="pt-4 border-t border-dashed border-gray-300"
                >
                  <h2 className="mb-2 text-[clamp(18px,3.8vw,22px)] font-semibold">
                    8. Suspension &amp; Termination
                  </h2>
                  <p>
                    We may suspend or terminate access if you violate these
                    Terms, misuse the App, or engage in activities that may harm
                    users or our services.
                  </p>
                </section>

                <section
                  id="liability"
                  className="pt-4 border-t border-dashed border-gray-300"
                >
                  <h2 className="mb-2 text-[clamp(18px,3.8vw,22px)] font-semibold">
                    9. Limitation of Liability
                  </h2>
                  <p>
                    The App is provided “as is” and “as available.” To the
                    fullest extent permitted by law, I-Remi disclaims all
                    warranties and is not liable for indirect, incidental,
                    special, consequential, or punitive damages arising from
                    your use of the App.
                  </p>
                </section>

                <section
                  id="changes"
                  className="pt-4 border-t border-dashed border-gray-300"
                >
                  <h2 className="mb-2 text-[clamp(18px,3.8vw,22px)] font-semibold">
                    10. Changes to These Terms
                  </h2>
                  <p>
                    We may update these Terms from time to time. The updated
                    version will be posted in the App with the revised effective
                    date. Continued use after changes constitutes acceptance.
                  </p>
                </section>

                <section
                  id="law"
                  className="pt-4 border-t border-dashed border-gray-300"
                >
                  <h2 className="mb-2 text-[clamp(18px,3.8vw,22px)] font-semibold">
                    11. Governing Law
                  </h2>
                  <p>
                    These Terms are governed by the laws applicable in your
                    jurisdiction, without regard to conflict of law provisions.
                    Local mandatory consumer protection laws may also apply.
                  </p>
                </section>

                <section
                  id="contact"
                  className="pt-4 border-t border-dashed border-gray-300"
                >
                  <h2 className="mb-2 text-[clamp(18px,3.8vw,22px)] font-semibold">
                    12. Contact Us
                  </h2>
                  <p>Questions about these Terms? Contact us at:</p>
                  <p className="mt-2">
                    Email:&nbsp;
                    <a
                      href="mailto:support@i-remi.com"
                      className="text-blue-600 hover:underline"
                    >
                      support@i-remi.com
                    </a>
                  </p>
                </section>
              </main>

              <footer className="border-t border-gray-300 px-[clamp(18px,4vw,28px)] py-4 text-gray-600 text-sm bg-gradient-to-t from-black/5 to-transparent">
                © <span>{new Date().getFullYear()}</span> I-Remi. All rights
                reserved.
              </footer>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
