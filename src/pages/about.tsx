"use client";

import { motion } from "framer-motion";
import { Code2, Brain } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import NetworkGraph from "@/components/network-graph";
// import NetworkGraph from './NetworkGraph'  // Assuming you have this component from the previous example
import { deepLearningSkillsArray, fullStackSkillsArray } from "@/constants/skill";

const fullStackSkills = [
  "React",
  "Node.js",
  "TypeScript",
  "GraphQL",
  "MongoDB",
  "Docker",
];
const deepLearningSkills = [
  "TensorFlow",
  "PyTorch",
  "Keras",
  "Computer Vision",
  "NLP",
];

const workExperience = [
  {
    company: "CarXStream",
    role: "Full Stack Developer",
    period: "2023-2024",
    description:
      "Built robust mobile and web applications using React and ReactNative. Scaling robust backend.",
  },
  {
    company: "Vastu Vihar Biotech",
    role: "Full Stack Developer",
    period: "2024 - Present",
    description:
      "Developing and maintaining complex web and mobile applications using the MERN stack, implementing RESTful APIs, and optimizing database performance.",
  },
];
const skillCategories = [
  { name: "Full Stack", skills: fullStackSkillsArray },
  { name: "Deep Learning", skills: deepLearningSkillsArray }
]
export default function PortfolioAbout() {
  return (
    <div className="min-h-screen text-gray-800 p-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <header className="text-center mb-16">
          <motion.h1
            className="text-5xl font-bold mb-4"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Vipul Sharma
          </motion.h1>
          <TypeAnimation
            sequence={[
              "Full Stack Developer",
              2000,
              "AI Enthusiast",
              2000,
              "Problem Solver",
              2000,
            ]}
            wrapper="h2"
            repeat={Infinity}
            className="text-3xl text-gray-600"
          />
        </header>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-semibold mb-6 border-b border-gray-200 pb-2">
            About Me
          </h3>
          <p className="text-gray-600 leading-relaxed text-lg">
            I'm a passionate software developer with over 2 years of experience
            in creating robust and scalable applications. My expertise spans
            both full-stack development and deep learning, allowing me to build
            cutting-edge AI-powered web solutions. I thrive on tackling complex
            problems and continuously expanding my skill set in this
            ever-evolving tech landscape.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-semibold mb-6 border-b border-gray-200 pb-2">
            Expertise
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <Dialog>
              <DialogTrigger asChild>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="flex items-center text-2xl">
                        <Code2 className="mr-2" /> Full Stack Development
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4 text-gray-600">
                        Expertise in building scalable web applications
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {fullStackSkills.map((skill) => (
                          <Badge key={skill} variant="secondary">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </DialogTrigger>
              <DialogContent className="bg-white border-none">
                <NetworkGraph
                  skillCategories={skillCategories}
                />
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="flex items-center text-2xl">
                        <Brain className="mr-2" /> Deep Learning
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4 text-gray-600">
                        Proficient in developing advanced AI models
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {deepLearningSkills.map((skill) => (
                          <Badge key={skill} variant="secondary">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </DialogTrigger>
              <DialogContent className="bg-white flex">
                <NetworkGraph 
                    skillCategories={skillCategories}
                />
              </DialogContent>
            </Dialog>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-semibold mb-6 border-b border-gray-200 pb-2">
            Work Experience
          </h3>
          <div className="space-y-8">
            {workExperience.map((job, index) => (
              <motion.div
                key={job.company}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 * index, duration: 0.5 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <h4 className="text-2xl font-semibold text-gray-800">
                      {job.role}
                    </h4>
                    <p className="text-gray-600 mb-2">
                      {job.company} | {job.period}
                    </p>
                    <p className="text-gray-700">{job.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
}
