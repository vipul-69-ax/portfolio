import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Code, Brain, Zap } from "lucide-react";

export default function PortfolioHome() {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate()
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  const networkVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };


  return (
    <motion.div
      className="min-h-screen  p-4 sm:p-8 bg-white text-black flex flex-col"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.header
        className="flex justify-between items-center mb-8"
        variants={itemVariants}
      >
        <Badge
          variant="outline"
          className="text-xl sm:text-2xl border-none text-black font-semibold"
        >
          Vipul Sharma
        </Badge>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/about" className="text-gray-600 hover:text-blue-600">
                About
              </Link>
            </li>
            <li>
              <Link to="/work" className="text-gray-600 hover:text-blue-600">
                Work
              </Link>
            </li>
            <li>
              <Link to="/blog" className="text-gray-600 hover:text-blue-600">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-600 hover:text-blue-600">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </motion.header>

      <motion.main
        className="flex-grow flex flex-col justify-center max-w-4xl mx-auto"
        variants={itemVariants}
      >
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4"
          variants={itemVariants}
        >
          I'm a full stack developer
          <br />
          with passion for
          <br />
          <span className="text-gray-400">deep learning</span>
        </motion.h1>
        <motion.div variants={itemVariants}>
          <p className="text-base sm:text-lg text-gray-600">
            I'm Vipul, a Full Stack Developer and Deep Learning enthusiast. I
            create robust web applications and explore the frontiers of AI to
            build innovative solutions.
          </p>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8"
        >
          <Card className="bg-blue-50 border-none">
            <CardContent className="flex flex-col items-center justify-center p-4">
              <Code className="w-8 h-8 text-blue-600 mb-2" />
              <h3 className="font-semibold text-center text-black">
                Full Stack Development
              </h3>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-none">
            <CardContent className="flex flex-col items-center justify-center p-4">
              <Brain className="w-8 h-8 text-blue-600 mb-2" />
              <h3 className="font-semibold text-center text-black">
                Deep Learning
              </h3>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-none">
            <CardContent className="flex flex-col items-center justify-center p-4">
              <Zap className="w-8 h-8 text-blue-600 mb-2" />
              <h3 className="font-semibold text-center text-black">
                Innovative Solutions
              </h3>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div variants={itemVariants}>
          <Button
            size="lg"
            onClick={()=>navigate("/contact")}
            className="w-fit rounded-full px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white hover:bg-blue-700 text-sm sm:text-base"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Let's Connect <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </motion.main>

      <motion.div
        className="fixed bottom-4 right-4 w-40 h-40 sm:w-64 sm:h-64"
        variants={networkVariants}
        animate={isHovered ? "visible" : "hidden"}
      >
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-full h-full border-2 border-blue-300 rounded-full"
            style={{
              scale: 0.2 + i * 0.15,
            }}
            animate={{
              rotate: 360,
              transition: {
                duration: 10 + i * 5,
                repeat: Infinity,
                ease: "linear",
              },
            }}
          />
        ))}
      </motion.div>

      
    </motion.div>
  );
}
