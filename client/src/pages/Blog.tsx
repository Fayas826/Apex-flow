import { motion } from 'framer-motion';
import { ArrowRight, Search } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const articles = [
    {
      id: 1,
      title: 'The Future of Enterprise SaaS in 2024',
      excerpt: 'Exploring emerging trends and what they mean for your business. Learn about AI integration, security concerns, and scalability challenges.',
      date: 'Jun 15, 2024',
      category: 'Insights',
      author: 'Sarah Chen',
      readTime: '8 min read',
      image: '📊',
    },
    {
      id: 2,
      title: 'Scaling to 1M Users: A Real Case Study',
      excerpt: 'How we helped a startup scale from 0 to 1 million users in 6 months. Discover the architecture, challenges, and solutions.',
      date: 'Jun 10, 2024',
      category: 'Case Study',
      author: 'Marcus Johnson',
      readTime: '12 min read',
      image: '📈',
    },
    {
      id: 3,
      title: 'API Best Practices for Modern Applications',
      excerpt: 'Essential patterns for building robust, scalable, and secure APIs. Includes rate limiting, authentication, and error handling.',
      date: 'Jun 5, 2024',
      category: 'Tutorial',
      author: 'Emma Rodriguez',
      readTime: '10 min read',
      image: '🔧',
    },
    {
      id: 4,
      title: 'Security Compliance: GDPR, HIPAA & Beyond',
      excerpt: 'A comprehensive guide to meeting regulatory requirements. Learn what compliance means for your SaaS product.',
      date: 'May 28, 2024',
      category: 'Security',
      author: 'Alex Chen',
      readTime: '15 min read',
      image: '🔐',
    },
    {
      id: 5,
      title: 'Database Optimization Techniques',
      excerpt: 'Improve query performance and reduce latency. Practical tips for indexing, caching, and query optimization.',
      date: 'May 20, 2024',
      category: 'Tutorial',
      author: 'Sarah Chen',
      readTime: '11 min read',
      image: '⚡',
    },
    {
      id: 6,
      title: 'Building a High-Performance Team',
      excerpt: 'Insights on hiring, culture, and productivity. Learn how top SaaS companies build winning teams.',
      date: 'May 15, 2024',
      category: 'Insights',
      author: 'Marcus Johnson',
      readTime: '9 min read',
      image: '👥',
    },
  ];

  const categories = ['all', 'Insights', 'Case Study', 'Tutorial', 'Security'];

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-20 md:pb-32 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1
              className="text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight"
              style={{ fontFamily: 'Sora, sans-serif' }}
            >
              ApexFlow Blog
            </h1>
            <p className="text-xl text-foreground/80 mb-8">
              Insights, tutorials, and best practices for building scalable enterprise software.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-12">
        <div className="container max-w-4xl">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-foreground/50" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-border rounded-lg focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-semibold transition-all capitalize ${
                    selectedCategory === category
                      ? 'bg-accent text-primary'
                      : 'bg-secondary text-foreground hover:bg-secondary/80'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 md:py-32">
        <div className="container">
          {filteredArticles.length > 0 ? (
            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {filteredArticles.map(article => (
                <motion.article
                  key={article.id}
                  variants={itemVariants}
                  className="bg-white rounded-xl border border-border overflow-hidden hover:shadow-lg hover:border-accent/50 transition-all duration-300 group cursor-pointer flex flex-col"
                >
                  <div className="h-40 bg-gradient-to-br from-accent/10 to-primary/10 flex items-center justify-center text-6xl">
                    {article.image}
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full">
                        {article.category}
                      </span>
                      <span className="text-xs text-foreground/60">{article.readTime}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-primary mb-2 group-hover:text-accent transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-foreground/70 text-sm mb-4 line-clamp-2 flex-grow">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div className="text-xs text-foreground/60">
                        <p className="font-semibold">{article.author}</p>
                        <p>{article.date}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-accent group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          ) : (
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p className="text-xl text-foreground/70">No articles found. Try a different search.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ fontFamily: 'Sora, sans-serif' }}
            >
              Subscribe to Our Newsletter
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Get the latest insights and best practices delivered to your inbox.
            </p>
            <div className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 rounded-lg text-primary focus:outline-none"
              />
              <button className="px-6 py-3 bg-accent text-primary rounded-lg font-semibold hover:shadow-lg hover:shadow-accent/40 transition-all hover:scale-105 active:scale-95">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
