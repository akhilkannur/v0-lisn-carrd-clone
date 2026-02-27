import { Header } from "@/components/header"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | LISN Agency",
  description: "Privacy policy for LISN Agency. We respect your data and privacy.",
}

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-black text-white font-sans py-24 px-4">
        <div className="max-w-4xl mx-auto border-4 border-white p-8 md:p-12">
          <h1 className="font-heading text-5xl md:text-7xl mb-12 uppercase tracking-tighter">
            PRIVACY <br /> <span className="text-[#FFE500]">POLICY</span>
          </h1>
          
          <div className="prose prose-invert prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold uppercase tracking-widest text-[#FFE500]">1. Introduction</h2>
              <p>
                Welcome to LISN Agency ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. 
                If you have any questions or concerns about our policy, or our practices with regards to your personal information, please contact us at akhil@lisnagency.online.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold uppercase tracking-widest text-[#FFE500]">2. Information We Collect</h2>
              <p>
                We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, 
                when you participate in activities on the Website, or otherwise when you contact us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold uppercase tracking-widest text-[#FFE500]">3. How We Use Your Information</h2>
              <p>
                We use personal information collected via our Website for a variety of business purposes described below. 
                We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, 
                with your consent, and/or for compliance with our legal obligations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold uppercase tracking-widest text-[#FFE500]">4. Contact Us</h2>
              <p>
                If you have questions or comments about this policy, you may email us at akhil@lisnagency.online or by post to:
              </p>
              <p className="font-mono text-zinc-400">
                LISN Agency <br />
                Kerala, India
              </p>
            </section>
          </div>
        </div>
      </main>
    </>
  )
}
