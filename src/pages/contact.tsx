"use client";

import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col md:flex-row items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-3xl flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
        <motion.div
          className="w-48 h-48 md:w-64 md:h-64 relative"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          <motion.div
            className="absolute inset-0 bg-yellow-300 rounded-full"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          ></motion.div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-32 md:w-40 md:h-40 bg-blue-600 rounded-t-full"></div>
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-24 h-12 md:w-32 md:h-16 bg-blue-800 rounded-t-full"></div>
          <motion.div
            className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-16 h-4 md:w-20 md:h-5 bg-black rounded-full"
            animate={{
              scaleY: [1, 0.5, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          ></motion.div>
          <div className="absolute bottom-1/3 left-1/2 -translate-x-1/2 w-20 h-6 md:w-24 md:h-8 bg-white rounded-full"></div>
          <motion.div
            className="absolute top-1/2 left-1/4 w-1 h-8 md:h-10 bg-red-500"
            animate={{
              rotateZ: [0, 45, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          ></motion.div>
        </motion.div>
        <div className="text-center md:text-left space-y-4 md:space-y-6">
          <motion.h1
            className="text-3xl md:text-4xl font-bold text-gray-900"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            I'd love to hear from you.
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-600 max-w-md"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Got a project you would like me to work on? Or how about just a
            friendly chat?
          </motion.p>
          <motion.div
            className="flex flex-wrap justify-center md:justify-start gap-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Link to="mailto:sharmavipul01002@gmail.com">
              <Button variant="outline" className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                E-mail
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
