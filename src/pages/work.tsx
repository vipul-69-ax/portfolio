"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Star, GitFork, Eye, Clock } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { useToast } from "@/hooks/use-toast"

type Repository = {
  id: number
  name: string
  description: string
  html_url: string
  homepage: string
  stargazers_count: number
  language: string
  forks_count: number
  watchers_count: number
  topics: string[]
  pushed_at: string
  owner: {
    login: string
  }
}

const RepositorySkeleton = () => (
  <Card className="flex flex-col h-full">
    <CardHeader>
      <Skeleton className="h-6 w-3/4 mb-2" />
      <Skeleton className="h-4 w-full" />
    </CardHeader>
    <CardContent className="flex-grow">
      <Skeleton className="h-5 w-1/4 mb-2" />
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-3/4" />
    </CardContent>
    <CardFooter className="flex justify-between">
      <Skeleton className="h-4 w-1/4" />
      <div className="space-x-2">
        <Skeleton className="h-8 w-20 inline-block" />
        <Skeleton className="h-8 w-20 inline-block" />
      </div>
    </CardFooter>
  </Card>
)

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
}

const titleVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      when: "beforeChildren",
      staggerChildren: 0.1
    }
  }
}

const letterVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
}

export default function GitHubPortfolio({ username = "yourusername" }: { username?: string }) {
  const [repositories, setRepositories] = useState<Repository[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const { toast } = useToast()

  useEffect(() => {
    async function fetchData() {
      try {
        const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&direction=desc`)
        
        if (!reposResponse.ok) {
          throw new Error('Failed to fetch data')
        }
        
        const reposData = await reposResponse.json()
        setRepositories(reposData)
      } catch (e) {
        setError('Failed to fetch data. Please try again later.')
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [username])

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffTime = Math.abs(now.getTime() - date.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

    if (diffDays === 1) return 'yesterday'
    if (diffDays <= 7) return `${diffDays} days ago`
    if (diffDays <= 30) return `${Math.floor(diffDays / 7)} weeks ago`
    if (diffDays <= 365) return `${Math.floor(diffDays / 30)} months ago`
    return `${Math.floor(diffDays / 365)} years ago`
  }

  const handleStar = async (repo: Repository) => {
    try {
      const response = await fetch(`https://api.github.com/user/starred/${repo.owner.login}/${repo.name}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer YOUR_GITHUB_TOKEN`,
          'Accept': 'application/vnd.github.v3+json'
        }
      })

      if (response.status === 204) {
        toast({
          title: "Repository Starred",
          description: `You've successfully starred ${repo.name}`,
        })
      } else {
        throw new Error('Failed to star repository')
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to star repository. Please try again.",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1 
        className="text-6xl p-4 bg-transparent font-thin mb-12 text-center relative overflow-hidden"
        variants={titleVariants}
        initial="hidden"
        animate="visible"
      >
        {"Projects".split('').map((letter, index) => (
          <motion.span
            key={index}
            variants={letterVariants}
            className="inline-block"
          >
            {letter}
          </motion.span>
        ))}
        <motion.span
          className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 blur-2xl -z-10"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        />
      </motion.h1>
      <AnimatePresence>
        {isLoading ? (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {[...Array(6)].map((_, index) => (
              <motion.div key={index} variants={itemVariants}>
                <RepositorySkeleton />
              </motion.div>
            ))}
          </motion.div>
        ) : error ? (
          <motion.div 
            className="text-center text-red-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {error}
          </motion.div>
        ) : (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {repositories.map((repo) => (
              <motion.div key={repo.id} variants={itemVariants}>
                <Card className="flex flex-col h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>{repo.name}</span>
                      <Badge variant="outline">{repo.language}</Badge>
                    </CardTitle>
                    <CardDescription>{repo.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="flex items-center space-x-4 mb-4">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <div className="flex items-center">
                              <Star className="w-4 h-4 mr-1" />
                              <span>{repo.stargazers_count}</span>
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Stars</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <div className="flex items-center">
                              <GitFork className="w-4 h-4 mr-1" />
                              <span>{repo.forks_count}</span>
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Forks</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <div className="flex items-center">
                              <Eye className="w-4 h-4 mr-1" />
                              <span>{repo.watchers_count}</span>
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Watchers</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {repo.topics.map((topic, index) => (
                        <Badge key={index} variant="secondary">{topic}</Badge>
                      ))}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>Updated {formatDate(repo.pushed_at)}</span>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm" onClick={() => handleStar(repo)}>
                      <Star className="w-4 h-4 mr-2" />
                      Star
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    {repo.homepage && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={repo.homepage} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}