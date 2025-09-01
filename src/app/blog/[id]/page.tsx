import { notFound } from 'next/navigation';
import { getAllPostIds, getPostData } from '@/lib/posts';
import { format } from 'date-fns';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface PostPageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  const paths = getAllPostIds();
  return paths;
}

export async function generateMetadata({ params }: PostPageProps) {
  try {
    const post = await getPostData(params.id);
    return {
      title: `${post.title} | Aniket's Blog`,
      description: post.excerpt,
      keywords: post.tags,
      openGraph: {
        title: post.title,
        description: post.excerpt,
        type: 'article',
        publishedTime: post.date,
        authors: [post.author],
      },
    };
  } catch (error) {
    return {
      title: 'Post Not Found | Aniket's Blog',
    };
  }
}

export default async function PostPage({ params }: PostPageProps) {
  let post;
  
  try {
    post = await getPostData(params.id);
  } catch (error) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Article Header */}
        <section className="bg-white dark:bg-gray-800 py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-6">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {format(new Date(post.date), 'MMMM dd, yyyy')}
                </span>
                <span className="text-gray-300 dark:text-gray-600">•</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  By {post.author}
                </span>
              </div>
              
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl mb-6">
                {post.title}
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                {post.excerpt}
              </p>
              
              <div className="flex flex-wrap justify-center gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 lg:p-12">
              <div 
                className="prose prose-lg dark:prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: post.contentHtml || '' }}
              />
              
              {/* Article Footer */}
              <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Published on {format(new Date(post.date), 'MMMM dd, yyyy')}
                  </div>
                  <div className="flex space-x-4">
                    <button className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-medium">
                      Share
                    </button>
                    <button className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-medium">
                      Tweet
                    </button>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
