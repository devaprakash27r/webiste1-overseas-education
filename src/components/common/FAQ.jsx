import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import './FAQ.css';

const faqData = [
  {
    id: 1,
    question: 'What is the process for applying for a UK Student Visa (Tier 4)?',
    answer: 'The process involves securing an unconditional offer from a UK university, receiving your Confirmation of Acceptance for Studies (CAS) number, preparing your financial documents (bank statements), paying the Immigration Health Surcharge (IHS), and submitting your visa application online followed by a biometrics appointment.'
  },
  {
    id: 2,
    question: 'Can I work while studying in the UK?',
    answer: 'Yes, international students on a full-time degree level course are generally permitted to work up to 20 hours per week during term time and full-time during official university holidays.'
  },
  {
    id: 3,
    question: 'How much bank balance is required for a UK student visa in 2026?',
    answer: 'You must show funds for your first year of tuition fees plus living costs. For London, living costs are calculated at £1,334 per month (for up to 9 months). For outside London, it is £1,023 per month. The funds must be maintained in your account for 28 consecutive days before applying.'
  },
  {
    id: 4,
    question: 'Is IELTS mandatory for all UK universities?',
    answer: 'Not always. Many UK universities waive the IELTS requirement if you have a strong score in English in your 12th standard (usually 70% or above from standard boards) or if your Medium of Instruction (MOI) was English.'
  },
  {
    id: 5,
    question: 'What is the PSW visa and how long is it valid?',
    answer: 'The Post Study Work Visa allows international students to stay in the UK to work, or look for work, for 18 months after successfully completing an undergraduate or master\'s degree.'
  },
  {
    id: 6,
    question: 'How long does the entire process take to go to the UK for studies?',
    answer: 'Typically, the entire process from university application to booking your flight tickets takes about 1 to 2 months. Our team ensures a streamlined and fast-tracked experience for all our students.'
  },
  {
    id: 7,
    question: 'What are the typical tuition fees for international students in the UK?',
    answer: 'Tuition fees vary by university and course. On average, undergraduate degrees cost between £15,000 and £25,000 per year, while postgraduate degrees range from £16,000 to £30,000. MBA and medical programs typically cost more.'
  },
  {
    id: 8,
    question: 'Are scholarships available for Indian students studying in the UK?',
    answer: 'Yes, there are numerous scholarships available, including government-funded options like Chevening and Commonwealth Scholarships, as well as university-specific merit scholarships and early-bird discounts.'
  },
  {
    id: 9,
    question: 'Do I need to pay a healthcare surcharge (IHS) for my visa?',
    answer: 'Yes, the Immigration Health Surcharge (IHS) is mandatory for the student visa. It gives you access to the UK\'s National Health Service (NHS). Currently, it costs £776 per year of your visa duration.'
  },
  {
    id: 10,
    question: 'What is a CAS letter and why is it important?',
    answer: 'CAS stands for Confirmation of Acceptance for Studies. It is an electronic document issued by your university that proves you have an unconditional offer. You cannot apply for a UK student visa without a valid CAS number.'
  },
  {
    id: 11,
    question: 'Can I bring my dependents with me to the UK?',
    answer: 'Recent rule changes restrict most students from bringing dependents. Only students enrolled in postgraduate research programs (like a PhD) or government-sponsored students on a course longer than 6 months can bring dependents.'
  },
  {
    id: 12,
    question: 'What are the accommodation options available for international students?',
    answer: 'Students can choose between university-managed halls of residence (on-campus), private student accommodations (PBSA), or private renting (flat shares). We recommend booking university accommodation for your first year.'
  },
  {
    id: 13,
    question: 'How does Tamil Overseas help with the university application process?',
    answer: 'We provide end-to-end assistance: from career counseling, university shortlisting, and SOP/LOR preparation, to securing your CAS, financial guidance, visa application filing, and pre-departure briefings.'
  },
  {
    id: 14,
    question: 'Is an interview required for the UK student visa?',
    answer: 'You may be asked to attend a credibility interview. The UKVI conducts these to ensure you are a genuine student. They will ask about your course choice, university, finances, and future career plans.'
  },
  {
    id: 15,
    question: 'What happens if my student visa application is rejected?',
    answer: 'If rejected, you will receive a refusal letter explaining the reasons. Depending on the reason, you can either request an Administrative Review if there was a casework error, or re-apply with corrected documentation. Our experts at Tamil Overseas will guide you through the best course of action.'
  }
];

const FAQ = () => {
  const [openId, setOpenId] = useState(null);

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="faq-section" id="faqs">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-subtitle">Got Questions?</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-description">
            Find answers to the most common questions about studying in the UK, visas, and how Tamil Overseas can help you.
          </p>
        </div>

        <div className="faq-container">
          {faqData.map((faq) => (
            <div 
              key={faq.id} 
              className={`faq-item ${openId === faq.id ? 'active' : ''}`}
            >
              <button 
                className="faq-question" 
                onClick={() => toggleAccordion(faq.id)}
                aria-expanded={openId === faq.id}
              >
                <span>{faq.question}</span>
                <ChevronDown className={`faq-icon ${openId === faq.id ? 'rotated' : ''}`} size={20} />
              </button>
              <div 
                className="faq-answer-wrapper"
                style={{
                  maxHeight: openId === faq.id ? '300px' : '0',
                  opacity: openId === faq.id ? 1 : 0
                }}
              >
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
