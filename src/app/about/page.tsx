import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'About | Aniket\'s Blog',
  description: 'Learn more about Aniket - a passionate technologist and writer.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-white dark:bg-gray-800 py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                About Me
              </h1>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Get to know me better - my background, interests, and what drives me to write and share.
              </p>
            </div>
          </div>
        </section>

        {/* About Content */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 lg:p-12">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <h2>Hello, I'm Aniket! 👋</h2>
                
                <p>
                  I'm a passionate technologist and writer who loves exploring the intersection of 
                  technology, creativity, and human experience. Through this blog, I share my journey 
                  of learning, discovery, and growth.
                </p>

                <h3>What I Do</h3>
                <p>
                  I work in the technology industry, focusing on software development and digital innovation. 
                  My work involves building solutions that make a difference in people's lives, and I'm 
                  constantly learning new technologies and methodologies.
                </p>

                <h3>What I Write About</h3>
                <ul>
                  <li><strong>Technology & Programming:</strong> Insights from my work, tutorials, and thoughts on emerging tech trends</li>
                  <li><strong>Personal Growth:</strong> Lessons learned from experiences, challenges, and successes</li>
                  <li><strong>Book Reviews:</strong> Sharing knowledge from books that have influenced my thinking</li>
                  <li><strong>Travel & Experiences:</strong> Stories from adventures and cultural explorations</li>
                  <li><strong>Random Musings:</strong> Thoughts on life, creativity, and the world around us</li>
                </ul>

                <h3>My Philosophy</h3>
                <p>
                  I believe in the power of sharing knowledge and experiences. Every interaction, 
                  every challenge, and every success has something to teach us. By writing about 
                  these experiences, I hope to connect with others who share similar interests 
                  and perhaps inspire someone to explore new ideas or perspectives.
                </p>

                <h3>Beyond the Blog</h3>
                <p>
                  When I'm not writing or coding, you can find me reading books, exploring new places, 
                  experimenting with photography, or enjoying a good cup of coffee while contemplating 
                  the mysteries of the universe.
                </p>

                <h3>Let's Connect</h3>
                <p>
                  I love connecting with readers and fellow enthusiasts. Feel free to reach out 
                  through the contact page or social media. I'm always open to discussions, 
                  collaborations, or just a friendly chat about shared interests.
                </p>

                <blockquote>
                  <p>
                    "The only way to do great work is to love what you do. If you haven't found it yet, 
                    keep looking. Don't settle." - Steve Jobs
                  </p>
                </blockquote>

                <p>
                  Thank you for visiting my blog and being part of this journey. I'm excited to 
                  share more stories, insights, and experiences with you!
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
