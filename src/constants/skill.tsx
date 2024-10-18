import { Skill } from '@/components/network-graph'
import { Database, Server, Code, Layers, Cog, Globe, Cpu, Cloud, Zap, Lock, Brain, GitBranch, Network, Eye, MessageSquare, Shuffle, Image, Box, BarChart, Mic } from 'lucide-react'

export const fullStackSkillsArray: Skill[] = [
  { 
    name: "MongoDB", 
    icon: <Database size={24} />, 
    description: "NoSQL database for building scalable and flexible applications" 
  },
  { 
    name: "Express.js", 
    icon: <Server size={24} />, 
    description: "Fast, unopinionated, minimalist web framework for Node.js" 
  },
  { 
    name: "React", 
    icon: <Code size={24} />, 
    description: "JavaScript library for building user interfaces" 
  },
  { 
    name: "Node.js", 
    icon: <Layers size={24} />, 
    description: "JavaScript runtime built on Chrome's V8 JavaScript engine" 
  },
  { 
    name: "TypeScript", 
    icon: <Cog size={24} />, 
    description: "Typed superset of JavaScript that compiles to plain JavaScript" 
  },
  { 
    name: "Next.js", 
    icon: <Globe size={24} />, 
    description: "React framework for production-grade applications" 
  },
  { 
    name: "GraphQL", 
    icon: <Cpu size={24} />, 
    description: "Query language for APIs and runtime for executing those queries" 
  },
  { 
    name: "Docker", 
    icon: <Cloud size={24} />, 
    description: "Platform for developing, shipping, and running applications in containers" 
  },
  { 
    name: "AWS", 
    icon: <Cloud size={24} />, 
    description: "Comprehensive cloud computing platform with various services" 
  },
  { 
    name: "Redux", 
    icon: <Zap size={24} />, 
    description: "Predictable state container for JavaScript apps" 
  },
  { 
    name: "Jest", 
    icon: <Lock size={24} />, 
    description: "Delightful JavaScript Testing Framework with a focus on simplicity" 
  },
]

export const deepLearningSkillsArray: Skill[] = [
  { 
    name: "TensorFlow", 
    icon: <Brain size={24} />, 
    description: "Open-source library for machine learning and artificial intelligence" 
  },
  { 
    name: "PyTorch", 
    icon: <Zap size={24} />, 
    description: "Open source machine learning library based on the Torch library" 
  },
  { 
    name: "Keras", 
    icon: <Layers size={24} />, 
    description: "High-level neural networks API, written in Python and capable of running on top of TensorFlow" 
  },
  { 
    name: "Scikit-learn", 
    icon: <GitBranch size={24} />, 
    description: "Machine learning library for Python, featuring various classification, regression and clustering algorithms" 
  },
  {
    name: "Neural Networks",
    icon: <Network size={24} />,
    description: "Computing systems inspired by the biological neural networks that constitute animal brains"
  },
  { 
    name: "Computer Vision", 
    icon: <Eye size={24} />, 
    description: "Field of AI that trains computers to interpret and understand the visual world" 
  },
  {
    name: "Natural Language Processing",
    icon: <MessageSquare size={24} />,
    description: "Branch of AI that helps computers understand, interpret and manipulate human language"
  },
  {
    name: "Reinforcement Learning",
    icon: <GitBranch size={24} />,
    description: "Area of machine learning concerned with how software agents ought to take actions in an environment"
  },
  { 
    name: "GANs", 
    icon: <Shuffle size={24} />, 
    description: "Generative Adversarial Networks - class of machine learning frameworks for generating new data" 
  },
  { 
    name: "CNN", 
    icon: <Image size={24} />, 
    description: "Convolutional Neural Networks - class of deep neural networks, most commonly applied to analyzing visual imagery" 
  },
  { 
    name: "RNN", 
    icon: <Cpu size={24} />, 
    description: "Recurrent Neural Networks - class of artificial neural networks where connections between nodes form a directed graph along a temporal sequence" 
  },
  { 
    name: "LSTM", 
    icon: <Box size={24} />, 
    description: "Long Short-Term Memory networks - artificial recurrent neural network architecture used in the field of deep learning" 
  },
  {
    name: "Transfer Learning",
    icon: <Shuffle size={24} />,
    description: "Machine learning method where a model developed for a task is reused as the starting point for a model on a second task"
  },
  {
    name: "Data Preprocessing",
    icon: <Database size={24} />,
    description: "Technique that involves transforming raw data into an understandable format for machine learning models"
  },
  {
    name: "Model Optimization",
    icon: <Zap size={24} />,
    description: "Process of making a machine learning model as effective and efficient as possible"
  },
  {
    name: "Hyperparameter Tuning",
    icon: <Cpu size={24} />,
    description: "Choosing a set of optimal hyperparameters for a learning algorithm"
  },
  {
    name: "Feature Engineering",
    icon: <BarChart size={24} />,
    description: "Process of using domain knowledge to extract features from raw data via data mining techniques"
  },
  {
    name: "Time Series Analysis",
    icon: <BarChart size={24} />,
    description: "Statistical technique that deals with time series data, or trend analysis"
  },
  { 
    name: "Speech Recognition", 
    icon: <Mic size={24} />, 
    description: "Interdisciplinary subfield of computer science and computational linguistics that develops methodologies and technologies that enable the recognition and translation of spoken language into text" 
  },
  { 
    name: "Anomaly Detection", 
    icon: <Eye size={24} />, 
    description: "Identification of rare items, events or observations which raise suspicions by differing significantly from the majority of the data" 
  },
]