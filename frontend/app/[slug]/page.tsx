export async function generateStaticParams() {
  const posts = await fetch("https://nextjs-starter-buttercms.vercel.app/_next/data/dpUC1B3VFo11UwevoPv4a/blog/third-sample-post-with-featured.json?slug=third-sample-post-with-featured").then((res) => res.json())
  
  return posts.pageProps.categories.map((post) => {
    console.log(post);
    return {
      slug: post.slug,
    };
  })
}

export default function Page({ params }: { params: { slug: string } }) {
  const { slug } = params
  return <h1>My Page {slug}</h1>
}