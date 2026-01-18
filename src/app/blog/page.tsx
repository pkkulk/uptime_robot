import React from 'react';
import Link from 'next/link';
import { ArrowRight, Clock, User, Calendar } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function BlogPage() {
  const posts = [
    {
      id: 1,
      category: "Product Updates",
      title: "Introducing SSL Monitoring 2.0: Never Miss an Expiry",
      excerpt: "We've completely rebuilt our SSL tracking engine to provide more detailed reports and earlier alerts.",
      date: "Jan 12, 2026",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 2,
      category: "Engineering",
      title: "How We Scaled to 2 Million Monitors Worldwide",
      excerpt: "A deep dive into our distributed architecture and how we ensure 1-minute check accuracy across 5 continents.",
      date: "Jan 08, 2026",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 3,
      category: "Best Practices",
      title: "5 Common Monitoring Pitfalls and How to Avoid Them",
      excerpt: "Learn why your alerts might be failing and how to configure maintenance windows effectively.",
      date: "Jan 05, 2026",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1551288049-bbbda546697a?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-[#0b121f] pt-32 pb-20 text-white px-6">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <Badge className="bg-emerald-500/10 text-emerald-400 border-none px-4 py-1">UptimeRobot Blog</Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Monitoring Insights & Updates</h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Stay informed about the latest in website performance, security, and infrastructure reliability. [cite: 17]
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Card key={post.id} className="group border-slate-100 overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="aspect-video overflow-hidden bg-slate-100">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardHeader className="space-y-2">
                <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-emerald-600">
                  {post.category}
                </div>
                <h2 className="text-xl font-bold leading-tight group-hover:text-emerald-600 transition-colors">
                  {post.title}
                </h2>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-500 text-sm leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-4 text-xs text-slate-400 border-t pt-4">
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                </div>
                <Link 
                  href={`/blog/${post.id}`} 
                  className="inline-flex items-center text-sm font-bold text-slate-900 group-hover:gap-2 transition-all"
                >
                  Read full story <ArrowRight className="ml-1 w-4 h-4 text-emerald-500" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 bg-slate-50 rounded-3xl p-12 text-center space-y-6 border border-slate-100">
          <h2 className="text-3xl font-bold">Start monitoring like a pro.</h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Join 2 million users who trust UptimeRobot to keep their websites and servers online. [cite: 4]
          </p>
          <Link href="/dashboard">
            <Button size="lg" className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-10 h-14 text-lg">
              Start Monitoring Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}