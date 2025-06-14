
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Wie lange dauert die Einrichtung von MediMaily?",
      answer: "Die Einrichtung von MediMaily dauert in der Regel nur wenige Stunden. Unser Team unterstützt Sie bei der Integration mit Ihrem bestehenden System und hilft Ihnen, Ihre ersten E-Mail-Kampagnen zu erstellen."
    },
    {
      question: "Ist MediMaily DSGVO-konform?",
      answer: "Ja, MediMaily ist vollständig DSGVO-konform. Wir verwenden sichere Server in Deutschland und verarbeiten alle Daten gemäß den geltenden Datenschutzbestimmungen. Wir stellen auch alle notwendigen Dokumentationen zur Verfügung."
    },
    {
      question: "Kann ich meine bestehenden Patientendaten importieren?",
      answer: "Absolut. MediMaily bietet einfache Import-Tools, mit denen Sie Ihre bestehenden Patientendaten sicher in das System übertragen können. Wir unterstützen verschiedene Dateiformate und können uns auch mit vielen gängigen Praxismanagementsystemen verbinden."
    },
    {
      question: "Welche Ergebnisse kann ich erwarten?",
      answer: "Unsere Kunden berichten durchschnittlich von einer Steigerung der Patientenanfragen um 35% innerhalb der ersten drei Monate. Die genauen Ergebnisse hängen von verschiedenen Faktoren ab, wie Ihrer aktuellen Patientenbasis, Standort und Spezialisierung."
    },
    {
      question: "Bieten Sie Vorlagen für bestimmte dentale Behandlungen?",
      answer: "Ja, wir bieten spezialisierte Vorlagen für eine Vielzahl von Behandlungen wie Prophylaxe, Implantologie, Kieferorthopädie und mehr. Alle Vorlagen können an Ihre spezifischen Anforderungen angepasst werden."
    }
  ];

  return (
    <section className="section-padding bg-slate-900/50">
      <div className="container-custom">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="section-title">Häufig gestellte Fragen</h2>
          <p className="section-subtitle">
            Antworten auf die wichtigsten Fragen zu MediMaily und unserem Service.
          </p>
        </div>

        <div className="max-w-3xl mx-auto animate-on-scroll">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-slate-700">
                <AccordionTrigger className="text-lg text-slate-100 hover:text-blue-400 py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-300 pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-10 animate-on-scroll">
          <p className="mb-5 text-slate-300">Haben Sie weitere Fragen?</p>
          <button className="btn-outline">
            Kontaktieren Sie uns
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
