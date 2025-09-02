"use client"

import { motion } from "framer-motion"
import Header from "@/components/layout/header"
import MainContent from "@/components/layout/main-content"
import PurchaseSection from "@/components/layout/purchase-section"

const Index = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background flex flex-col relative overflow-hidden"
    >
      <Header />
      <MainContent />
      <PurchaseSection />
      
      {/* Subtle background pattern */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1 }}
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--brand-text)) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
          opacity: 0.02
        }}
      />
    </motion.div>
  );
};

export default Index;
