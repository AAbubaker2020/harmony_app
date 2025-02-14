"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import Image from "next/image";
import { translations, TranslationKey, translationKeys } from "./translations";

export default function About() {
  const { language } = useLanguage();
  const lang = language === "en" ? "en" : "ar";

  return (
    <div className="min-h-screen py-24 bg-harmony-soft-white">
      <div className="container mx-auto px-4">
        <motion.h1
          className="text-4xl font-bold text-center mb-12 gradient-text text-shadow"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {translations[lang]["Our Mission"]}
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column */}
          <motion.div
            className="premium-card p-8 rounded-lg bg-harmony-warm-gray"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Our Mission Section */}
            <h2 className="text-2xl font-bold mb-4 gradient-text text-shadow">
              {translations[lang]["Our Mission"]}
            </h2>
            <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
              <Image src="/mission.png" alt="Our Mission" layout="fill" objectFit="cover" />
            </div>
            <p className="mb-6 text-harmony-slate-gray">
              {translations[lang]["Our Mission"]}
            </p>

            {/* Our Vision Section */}
            <h2 className="text-2xl font-bold mb-4 gradient-text text-shadow">
              {translations[lang]["Our Vision"]}
            </h2>
            <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
              <Image src="/vision.png" alt="Our Vision" layout="fill" objectFit="cover" />
            </div>
            <p className="text-harmony-slate-gray">
              {translations[lang]["Our Vision"]}
            </p>
          </motion.div>

          {/* Right Column */}
          <motion.div
            className="premium-card p-8 rounded-lg bg-harmony-warm-gray"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Our Values Section */}
            <h2 className="text-2xl font-bold mb-4 gradient-text text-shadow">
              {translations[lang]["Our Values"]}
            </h2>
            <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
              <Image src="/value.png" alt="Our Values" layout="fill" objectFit="cover" />
            </div>

            {/* List of Values */}
            <ul className="space-y-4">
              {translationKeys
                .slice(6) // Extract only the values part from the translationKeys array
                .map((value, index) => (
                  <motion.li
                    key={value}
                    className="flex items-center space-x-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  >
                    <span className="text-harmony-deep-bronze">•</span>
                    <span className="text-harmony-slate-gray">{translations[lang][value as TranslationKey]}</span>
                  </motion.li>
                ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
