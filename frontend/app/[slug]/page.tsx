const url = "https://nextjs-starter-buttercms.vercel.app/_next/data/dpUC1B3VFo11UwevoPv4a/blog/third-sample-post-with-featured.json?slug=third-sample-post-with-featured"


//export default function Page({ params }: { params: { slug: string } }) {
//    return <div>My Post: {params.slug}</div>
//  }


// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
    const posts = await fetch(url).then((res) => res.json())
   
    return posts.map((post) => ({
      slug: post.slug,
    }))
  }
   
  // Multiple versions of this page will be statically generated
  // using the `params` returned by `generateStaticParams`
  export default function Page({ params }) {
    const { slug } = params
    // ...
  }

  // jsonobj.post.slug 
  // 

  const jsonobj = ({
    "pageProps": {
      "post": {
        "created": "2021-11-24T15:41:25.327471Z",
        "published": "2021-11-24T15:40:00Z",
        "url": "https://django-starter-buttercms.herokuapp.com/blog/third-sample-post-with-featured",
        "slug": "third-sample-post-with-featured",
        "featuredImage": "https://cdn.buttercms.com/VXI3trZuRx2dnaHOVqKb",
        "featuredImageAlt": "",
        "author": {
          "first_name": "Starter",
          "last_name": "Project",
          "email": "starterprojects@buttercms.com",
          "slug": "starter-project",
          "bio": "",
          "title": "",
          "linkedin_url": "",
          "facebook_url": "",
          "instagram_url": "",
          "pinterest_url": "",
          "twitter_handle": "",
          "profile_image": "https://cdn.buttercms.com/IkE12e3GTpe1xd1WJP2I"
        },
        "tags": [
          {
            "name": "Example Tag",
            "slug": "example-tag"
          },
          {
            "name": "Testing",
            "slug": "testing"
          }
        ],
        "categories": [
          {
            "name": "Testing",
            "slug": "testing"
          }
        ],
        "title": "Third Sample Post With Featured",
        "body": "<p>orem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit risus ac sapien pretium, in aliquet justo cursus. Proin lectus nunc, lacinia a ornare scelerisque, auctor ac magna. Praesent posuere magna sed dui laoreet viverra. In hac habitasse platea dictumst. Pellentesque nec fermentum dolor. Fusce hendrerit dolor sed commodo aliquet. Nullam fringilla ullamcorper mi ac efficitur. Nam congue, erat in elementum fermentum, eros libero sodales enim, tincidunt facilisis purus metus vitae urna.</p>\n<p>Vestibulum vel consectetur libero. Fusce pharetra nisi ac efficitur efficitur. Suspendisse justo erat, mollis vitae lectus quis, tempor congue justo. Cras in egestas enim. Vivamus fringilla libero nisl, vitae vehicula orci posuere eu. Donec lacus arcu, sollicitudin in maximus quis, dignissim id velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed malesuada, orci sodales viverra scelerisque, enim orci congue urna, in mollis tellus nulla aliquam tellus. Mauris sodales pellentesque mollis. Donec facilisis eu lacus id ornare. Aliquam euismod felis tellus, a elementum odio tincidunt luctus. Phasellus lacus sem, blandit at eros et, fringilla porta lacus. Maecenas blandit, tellus scelerisque ultricies pharetra, est nibh ullamcorper lectus, sit amet bibendum velit nisi vitae ex. Nullam nec laoreet augue. Aliquam erat volutpat. Aenean accumsan ipsum at laoreet auctor.</p>\n<p>Ut ut dolor dapibus, placerat lorem in, ultrices nulla. Etiam commodo porttitor volutpat. Suspendisse a lectus vel nisl porta sollicitudin. Morbi id imperdiet tellus, eget mollis tortor. Ut malesuada ex non consequat auctor. Ut consectetur diam eu nibh accumsan, et imperdiet nunc blandit. Duis pulvinar enim vel sodales dictum. Praesent eget pretium metus. Cras pharetra accumsan venenatis. Praesent vel iaculis ex, sed accumsan ligula. Aliquam ac commodo tortor. Donec consequat urna nec velit euismod placerat. Integer placerat auctor cursus.</p>\n<p>Duis odio purus, rhoncus sed tortor in, scelerisque aliquet arcu. Nam sit amet dui et lacus tristique volutpat id vel ipsum. Proin pulvinar tempor erat ut posuere. Nam venenatis sollicitudin tortor, id faucibus sem molestie tristique. Proin vel enim a turpis porta cursus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc lobortis pretium erat. Duis tincidunt ante accumsan, rhoncus lacus vitae, euismod ex. Nulla et eros nec massa dapibus congue id id ipsum. Duis elementum bibendum quam, vel convallis felis finibus id. Nunc non tortor id libero cursus sollicitudin ut et lorem. Vestibulum egestas vel lorem vel rutrum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur rutrum euismod tellus, quis consequat lacus fringilla nec. Vivamus ligula magna, consequat ac ex at, dignissim molestie mi.</p>\n<p>Donec et lorem nec mauris sollicitudin fringilla. Nam suscipit justo nec aliquet venenatis. Quisque ultrices quam magna, vitae imperdiet sem venenatis in. Etiam in est lacinia, auctor magna et, vulputate odio. Integer eu massa eu mauris sagittis auctor. Ut faucibus, nisi ut blandit tincidunt, lacus turpis placerat justo, condimentum lobortis sem neque id ipsum. Morbi id justo eu elit sollicitudin aliquet auctor id magna. Sed lorem mauris, laoreet at metus sed, semper feugiat felis. Aenean aliquam leo vitae velit mollis condimentum. In orci sem, scelerisque non pretium ac, vestibulum in sem. Ut quam est, vulputate ut viverra ornare, interdum ut lorem.</p>",
        "summary": "orem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit risus ac sapien pretium, in aliquet justo cursus. Proin lectus nunc, lacinia a ornare scelerisque, auctor ac magna. Praesent posuere magna sed dui laoreet viverra. In hac habitasse platea dictumst. Pellentesque nec fermentum dolor. Fusce hendrerit dolor sed commodo aliquet. ...",
        "updated": "2021-12-15T07:49:28.292665Z",
        "seoTitle": "Third Sample Post With Featured",
        "metaDescription": "orem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit risus ac sapien pretium, in aliquet justo cursus. Proin lectus nu",
        "status": "published"
      },
      "categories": [
        {
          "name": "Example Category",
          "slug": "example-category"
        },
        {
          "name": "Testing",
          "slug": "testing"
        }
      ]
    },
    "mainMenu": [
      {
        "meta": {
          "id": 174682
        },
        "label": "Home",
        "url": "#home"
      },
      {
        "meta": {
          "id": 174683
        },
        "label": "About",
        "url": "#about"
      },
      {
        "meta": {
          "id": 174684
        },
        "label": "Features",
        "url": "#features"
      },
      {
        "meta": {
          "id": 174685
        },
        "label": "Try It",
        "url": "#tryit"
      },
      {
        "meta": {
          "id": 174686
        },
        "label": "Testimonials",
        "url": "#testimonials"
      },
      {
        "meta": {
          "id": 174687
        },
        "label": "Blog",
        "url": "#blog"
      }
    ],
    "__N_SSG": true
  })