import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, ClockIcon } from "lucide-react";

const featuredPosts = [
  {
    title: "Building Scalable Microservices with Node.js",
    excerpt:
      "Learn how to design and implement scalable microservices architecture using Node.js and Docker.",
    date: "2023-05-15",
    readTime: "8 min read",
    tags: ["Node.js", "Microservices", "Docker"],
    image:
      "https://cdn.dribbble.com/userupload/2708865/file/original-8a4bc34b5408943bc4a9f03e023e786c.png?resize=320x240&vertical=center",
  },
  {
    title: "React Performance Optimization Techniques",
    excerpt:
      "Discover advanced techniques to optimize your React applications for better performance and user experience.",
    date: "2023-05-10",
    readTime: "10 min read",
    tags: ["React", "Performance", "Optimization"],
    image:
      "https://cdn.dribbble.com/userupload/2708865/file/original-8a4bc34b5408943bc4a9f03e023e786c.png?resize=320x240&vertical=center",
  },
];

const recentPosts = [
  {
    title: "Introduction to GraphQL",
    excerpt:
      "Get started with GraphQL and learn how it can improve your API development process.",
    date: "2023-05-05",
    readTime: "6 min read",
    tags: ["GraphQL", "API", "Web Development"],
  },
  {
    title: "Mastering TypeScript: Advanced Types and Patterns",
    excerpt:
      "Dive deep into TypeScript's advanced features and learn how to leverage them in your projects.",
    date: "2023-04-28",
    readTime: "12 min read",
    tags: ["TypeScript", "JavaScript", "Programming"],
  },
  {
    title: "CI/CD Best Practices for Modern Development Teams",
    excerpt:
      "Explore the best practices for implementing efficient CI/CD pipelines in your development workflow.",
    date: "2023-04-20",
    readTime: "9 min read",
    tags: ["CI/CD", "DevOps", "Automation"],
  },
];

export default function BlogPage() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription logic here
    console.log("Subscribed:", email);
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Featured Posts
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredPosts.map((post, index) => (
              <Card key={index} className="overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <CardTitle>{post.title}</CardTitle>
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span className="flex items-center">
                      <CalendarIcon className="mr-1 h-4 w-4" />
                      {post.date}
                    </span>
                    <span className="flex items-center">
                      <ClockIcon className="mr-1 h-4 w-4" />
                      {post.readTime}
                    </span>
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Recent Posts
          </h2>
          <div className="space-y-6">
            {recentPosts.map((post, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{post.title}</CardTitle>
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span className="flex items-center">
                      <CalendarIcon className="mr-1 h-4 w-4" />
                      {post.date}
                    </span>
                    <span className="flex items-center">
                      <ClockIcon className="mr-1 h-4 w-4" />
                      {post.readTime}
                    </span>
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <Card>
            <CardHeader>
              <CardTitle>Subscribe to Blog</CardTitle>
              <CardDescription>
                Get the latest articles and insights delivered straight to your
                inbox.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubscribe} className="flex space-x-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button type="submit">Subscribe</Button>
              </form>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}
