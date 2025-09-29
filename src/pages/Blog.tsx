import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Calendar, 
  User, 
  ArrowRight, 
  TrendingUp,
  Smartphone,
  Video,
  Download,
  Settings,
  Star,
  BookOpen
} from "lucide-react";

const Blog = () => {
  const featuredPost = {
    title: "CapCut Pro APK v15.2.0: Complete Review and New Features",
    excerpt: "Discover all the new features in the latest CapCut Pro APK update, including enhanced AI tools, improved performance, and exclusive premium effects.",
    date: "September 28, 2025",
    author: "CapCut Team",
    readTime: "8 min read",
    category: "App Review",
    image: "🎬"
  };

  const blogPosts = [
    {
      title: "How to Install CapCut Pro APK: Step-by-Step Guide",
      excerpt: "Complete installation guide with screenshots and troubleshooting tips for Android devices.",
      date: "September 25, 2025",
      author: "Tech Guide",
      readTime: "5 min read",
      category: "Tutorial",
      icon: Download
    },
    {
      title: "CapCut Pro vs Official CapCut: Feature Comparison",
      excerpt: "Detailed comparison between the official app and the modified version highlighting key differences.",
      date: "September 22, 2025",
      author: "App Expert",
      readTime: "6 min read",
      category: "Comparison",
      icon: TrendingUp
    },
    {
      title: "Top 10 Video Editing Tips for CapCut Pro Users",
      excerpt: "Professional video editing techniques and tips to create stunning content with CapCut Pro.",
      date: "September 20, 2025",
      author: "Video Creator",
      readTime: "10 min read",
      category: "Tips & Tricks",
      icon: Video
    },
    {
      title: "CapCut Pro APK System Requirements and Compatibility",
      excerpt: "Everything you need to know about device compatibility and optimal performance settings.",
      date: "September 18, 2025",
      author: "Tech Analyst",
      readTime: "4 min read",
      category: "Technical",
      icon: Smartphone
    },
    {
      title: "Best CapCut Pro Effects for Social Media Content",
      excerpt: "Discover the most popular effects and filters perfect for Instagram, TikTok, and YouTube videos.",
      date: "September 15, 2025",
      author: "Social Media Expert",
      readTime: "7 min read",
      category: "Creative",
      icon: Star
    },
    {
      title: "CapCut Pro APK Safety and Security Guide",
      excerpt: "Important information about downloading and using modified APK files safely on your device.",
      date: "September 12, 2025",
      author: "Security Expert",
      readTime: "6 min read",
      category: "Security",
      icon: Settings
    }
  ];

  const categories = [
    { name: "All Posts", count: 12 },
    { name: "Tutorials", count: 5 },
    { name: "Reviews", count: 3 },
    { name: "Tips & Tricks", count: 4 },
    { name: "Technical", count: 2 },
    { name: "Security", count: 1 }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
            <BookOpen className="w-4 h-4 mr-2" />
            CapCut Pro Blog
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Latest News & Guides
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Stay updated with the latest CapCut Pro features, tutorials, and video editing tips 
            from our expert team.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="shadow-card mb-8">
                <CardHeader>
                  <h3 className="font-semibold text-foreground">Categories</h3>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {categories.map((category, index) => (
                      <div key={index} className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-muted/50 cursor-pointer transition-colors">
                        <span className="text-foreground">{category.name}</span>
                        <Badge variant="secondary" className="text-xs">
                          {category.count}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <h3 className="font-semibold text-foreground">Quick Download</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">
                    Get the latest CapCut Pro APK with all premium features unlocked.
                  </p>
                  <Button size="sm" className="w-full">
                    <Download className="w-4 h-4 mr-2" />
                    Download Now
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Featured Post */}
              <Card className="shadow-card mb-12 border-primary/20">
                <CardContent className="p-8">
                  <Badge variant="secondary" className="mb-4">Featured Post</Badge>
                  <div className="text-4xl mb-4">{featuredPost.image}</div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {featuredPost.title}
                  </h2>
                  <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <Badge variant="outline">{featuredPost.category}</Badge>
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <Button>
                    Read Full Article
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>

              {/* Blog Posts Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {blogPosts.map((post, index) => {
                  const IconComponent = post.icon;
                  return (
                    <Card key={index} className="shadow-card hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <Badge variant="outline" className="mb-3 text-xs">
                          {post.category}
                        </Badge>
                        <h3 className="font-semibold text-foreground mb-3 text-lg leading-tight">
                          {post.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-3 h-3" />
                            <span>{post.date}</span>
                          </div>
                          <span>{post.readTime}</span>
                        </div>
                        <Button variant="outline" size="sm" className="w-full">
                          Read More
                          <ArrowRight className="w-3 h-3 ml-2" />
                        </Button>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Load More */}
              <div className="text-center mt-12">
                <Button variant="outline" size="lg">
                  Load More Articles
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;