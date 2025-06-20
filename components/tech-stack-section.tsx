"use client"

import { useState } from "react"
import { Code, Database, Server, Globe, Terminal, Layers, ChevronDown } from 'lucide-react'

export default function TechStackSection() {
  const [openCategoryIndex, setOpenCategoryIndex] = useState<number | null>(0) // Open the first category by default

  const toggleCategory = (index: number) => {
    setOpenCategoryIndex(openCategoryIndex === index ? null : index)
  }

  const techStack = [
    {
      category: "Programming Languages",
      icon: <Code className="w-8 h-8" />,
      technologies: [
        { name: "PHP", level: "Expert", color: "bg-purple-500" },
        { name: "JavaScript", level: "Expert", color: "bg-yellow-500" },
        { name: "TypeScript", level: "Advanced", color: "bg-blue-500" },
        { name: "Python", level: "Advanced", color: "bg-green-500" },
        { name: "SQL", level: "Expert", color: "bg-orange-500" },
      ],
    },
    {
      category: "Frontend Frameworks",
      icon: <Globe className="w-8 h-8" />,
      technologies: [
        { name: "React", level: "Expert", color: "bg-cyan-500" },
        { name: "Next.js", level: "Advanced", color: "bg-gray-800" },
        { name: "Vue.js", level: "Intermediate", color: "bg-emerald-500" },
        { name: "Tailwind CSS", level: "Expert", color: "bg-teal-500" },
        { name: "SCSS/Sass", level: "Advanced", color: "bg-pink-500" },
      ],
    },
    {
      category: "Backend & Databases",
      icon: <Database className="w-8 h-8" />,
      technologies: [
        { name: "Node.js", level: "Advanced", color: "bg-green-600" },
        { name: "MySQL", level: "Expert", color: "bg-blue-600" },
        { name: "PostgreSQL", level: "Advanced", color: "bg-indigo-500" },
        { name: "MongoDB", level: "Intermediate", color: "bg-green-700" },
        { name: "Redis", level: "Intermediate", color: "bg-red-500" },
      ],
    },
    {
      category: "DevOps & Tools",
      icon: <Server className="w-8 h-8" />,
      technologies: [
        { name: "Linux", level: "Expert", color: "bg-gray-700" },
        { name: "Docker", level: "Advanced", color: "bg-blue-400" },
        { name: "Git", level: "Expert", color: "bg-orange-600" },
        { name: "Nginx", level: "Advanced", color: "bg-green-800" },
        { name: "Apache", level: "Advanced", color: "bg-red-600" },
      ],
    },
    {
      category: "Development Tools",
      icon: <Terminal className="w-8 h-8" />,
      technologies: [
        { name: "VS Code", level: "Expert", color: "bg-blue-700" },
        { name: "PhpStorm", level: "Advanced", color: "bg-purple-600" },
        { name: "Postman", level: "Advanced", color: "bg-orange-400" },
        { name: "Figma", level: "Intermediate", color: "bg-purple-400" },
        { name: "Webpack", level: "Intermediate", color: "bg-blue-300" },
      ],
    },
    {
      category: "Cloud & Deployment",
      icon: <Layers className="w-8 h-8" />,
      technologies: [
        { name: "Vercel", level: "Advanced", color: "bg-black" },
        { name: "AWS", level: "Intermediate", color: "bg-yellow-600" },
        { name: "DigitalOcean", level: "Advanced", color: "bg-blue-500" },
        { name: "Cloudflare", level: "Advanced", color: "bg-orange-500" },
        { name: "GitHub Actions", level: "Intermediate", color: "bg-gray-600" },
      ],
    },
  ]

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Expert":
        return "text-green-600 bg-green-50"
      case "Advanced":
        return "text-blue-600 bg-blue-50"
      case "Intermediate":
        return "text-orange-600 bg-orange-50"
      default:
        return "text-gray-600 bg-gray-50"
    }
  }

  return (
    <section id="tech-stack" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Tools, Code Languages,
            <br />
            Frameworks - I Use
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Přehled technologií, nástrojů a frameworků, které používám při vývoji moderních webových aplikací a systémů
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {techStack.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-gray-50 rounded-3xl p-6">
              <button
                className="flex items-center justify-between w-full py-4 px-2 cursor-pointer"
                onClick={() => toggleCategory(categoryIndex)}
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center text-white mr-4">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold">{category.category}</h3>
                </div>
                <ChevronDown
                  className={`w-6 h-6 transition-transform duration-300 ${
                    openCategoryIndex === categoryIndex ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openCategoryIndex === categoryIndex ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="space-y-3 pt-4 pb-2">
                  {category.technologies.map((tech, techIndex) => (
                    <div key={techIndex} className="flex items-center justify-between p-3 bg-white rounded-xl shadow-sm">
                      <div className="flex items-center">
                        <div className={`w-3 h-3 rounded-full ${tech.color} mr-3`}></div>
                        <span className="font-medium text-base">{tech.name}</span>
                      </div>
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${getLevelColor(tech.level)}`}>
                        {tech.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technology Stats */}
        <div className="mt-20 grid md:grid-cols-4 gap-8 text-center">
          <div className="bg-black text-white rounded-2xl p-8">
            <div className="text-4xl font-bold mb-2">25+</div>
            <div className="text-gray-300">Technologies</div>
          </div>
          <div className="bg-gray-100 rounded-2xl p-8">
            <div className="text-4xl font-bold mb-2 text-black">5+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div className="bg-gray-100 rounded-2xl p-8">
            <div className="text-4xl font-bold mb-2 text-black">50+</div>
            <div className="text-gray-600">Projects Built</div>
          </div>
          <div className="bg-black text-white rounded-2xl p-8">
            <div className="text-4xl font-bold mb-2">6</div>
            <div className="text-gray-300">Main Categories</div>
          </div>
        </div>
      </div>
    </section>
  )
}
