import { Header } from "@/components/header"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service | LISN Agency",
  description: "Terms and conditions for using LISN Agency's services and website.",
}

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-black text-white font-sans py-24 px-4">
        <div className="max-w-4xl mx-auto border-4 border-white p-8 md:p-12 bg-zinc-900 shadow-[12px_12px_0px_0px_#FFE500]">
          <h1 className="font-heading text-5xl md:text-7xl mb-12 uppercase tracking-tighter">
            TERMS <br /> <span className="text-[#FFE500]">SERVICE</span>
          </h1>
          
          <div className="prose prose-invert prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold uppercase tracking-widest text-[#FFE500]">1. Acceptance of Terms</h2>
              <p>
                By accessing this website, you are agreeing to be bound by these website Terms and Conditions of Use, 
                all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold uppercase tracking-widest text-[#FFE500]">2. Service Description</h2>
              <p>
                LISN Agency provides video production and marketing services. We specialize in UGC (User Generated Content) and event coverage 
                specifically designed for Indian DTC (Direct-to-Consumer) brands.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold uppercase tracking-widest text-[#FFE500]">3. Limitation of Liability</h2>
              <p>
                In no event shall LISN Agency or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, 
                or due to business interruption) arising out of the use or inability to use the materials on LISN Agency's website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold uppercase tracking-widest text-[#FFE500]">4. Governing Law</h2>
              <p>
                Any claim relating to LISN Agency's website shall be governed by the laws of India without regard to its conflict of law provisions.
              </p>
            </section>
          </div>
        </div>
      </main>
    </>
  )
}
