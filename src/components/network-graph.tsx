"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export type Skill = {
  name: string
  icon: React.ReactNode
  description: string
}

type SkillCategory = {
  name: string
  skills: Skill[]
}

export default function SkillsContent({ skillCategories }: { skillCategories: SkillCategory[] }) {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  return (
    <div className="w-full max-w-[600px]">
      <Tabs defaultValue={skillCategories[0].name} className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          {skillCategories.map((category) => (
            <TabsTrigger key={category.name} value={category.name}>
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>
        {skillCategories.map((category) => (
          <TabsContent key={category.name} value={category.name}>
            <ScrollArea className="h-[550px] w-full rounded-md border p-4">
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="relative bg-accent rounded-lg overflow-hidden transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-md"
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-2xl text-primary">{skill.icon}</div>
                        <ChevronRight className="text-muted-foreground" size={16} />
                      </div>
                      <h3 className="text-sm font-semibold text-foreground mb-1">{skill.name}</h3>
                      <p className="text-xs text-muted-foreground line-clamp-2">{skill.description}</p>
                    </div>
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{
                        opacity: hoveredSkill === skill.name ? 1 : 0,
                        height: hoveredSkill === skill.name ? 'auto' : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-primary bg-opacity-90 flex items-center justify-center p-4"
                    >
                      <p className="text-primary-foreground text-xs text-center">{skill.description}</p>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </ScrollArea>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}