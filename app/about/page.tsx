"use client"

import { useLanguage } from "@/contexts/LanguageContext"
import { motion } from "framer-motion"
import Image from "next/image"
import translations from "@/translations/about"

export default function About() {
  const { language } = useLanguage()

  return (
    <div className="min-h-screen py-24 bg-harmony-soft-white">
      <div className="container mx-auto px-4">
        <motion.h1
          className="text-4xl font-bold text-center mb-12 gradient-text text-shadow"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {language === "en" ? "About Harmony Industrial Solutions" : "عن حلول هارموني الصناعية"}
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            className="premium-card p-8 rounded-lg bg-harmony-warm-gray"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-4 gradient-text text-shadow">
              {language === "en" ? "Our Mission" : "مهمتنا"}
            </h2>
            <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
              <Image src="/mission.png" alt="Our Mission" layout="fill" objectFit="cover" />
            </div>
            <p className="mb-6 text-harmony-slate-gray">
              {language === "en"
                ? "To provide innovative and sustainable industrial solutions that drive progress and improve lives around the world."
                : "تقديم حلول صناعية مبتكرة ومستدامة تدفع التقدم وتحسن الحياة في جميع أنحاء العالم."}
            </p>
            <h2 className="text-2xl font-bold mb-4 gradient-text text-shadow">
              {language === "en" ? "Our Vision" : "رؤيتنا"}
            </h2>
            <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
              <Image src="/vision.png" alt="Our Vision" layout="fill" objectFit="cover" />
            </div>
            <p className="text-harmony-slate-gray">
              {language === "en"
                ? "To be the global leader in transformative industrial technologies, shaping a better future for generations to come."
                : "أن نكون الرائد العالمي في التقنيات الصناعية التحويلية، ونشكل مستقبلاً أفضل للأجيال القادمة."}
            </p>
          </motion.div>
          <motion.div
            className="premium-card p-8 rounded-lg bg-harmony-warm-gray"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold mb-4 gradient-text text-shadow">
              {language === "en" ? "Our Values" : "قيمنا"}
            </h2>
            <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
              <Image src="/value.png" alt="Our Values" layout="fill" objectFit="cover" />
            </div>
            <ul className="space-y-4">
              {["Innovation", "Sustainability", "Integrity", "Excellence", "Collaboration"].map((value, index) => (
                <motion.li
                  key={value}
                  className="flex items-center space-x-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                >
                  <span className="text-harmony-deep-bronze">•</span>
                  <span className="text-harmony-slate-gray">
                    {language === "en" ? value : translations[value.toLowerCase()]}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text text-shadow">
            {language === "en" ? "Our Journey" : "رحلتنا"}
          </h2>
          <div className="relative h-64 mb-8 rounded-lg overflow-hidden">
            <Image src="/Journey.png" alt="Our Journey" layout="fill" objectFit="cover" />
          </div>
          <div className="space-y-12">
            {[
              { year: "2000", event: "Harmony Industrial Solutions was founded" },
              { year: "2010", event: "Expanded operations to 20 countries" },
              { year: "2020", event: "Launched sustainable industrial solutions initiative" },
            ].map((milestone, index) => (
              <motion.div
                key={milestone.year}
                className="flex items-center"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="w-1/4 text-right pr-4">
                  <h3 className="text-xl font-bold gradient-text text-shadow">{milestone.year}</h3>
                </div>
                <div className="w-3/4 border-l-2 border-harmony-deep-bronze pl-4 pb-8">
                  <p className="text-harmony-slate-gray">
                    {language === "en" ? milestone.event : translations[milestone.event.toLowerCase()]}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

