// lib/api.ts

// Simulating a blog data array for demonstration purposes
const blogs = [
    {
      id: "1",
      slug: "mauris-at-orci",
      img: "/blog/4.png",
      author: "Surf Auxion",
      date: "Aug 09 2020",
      title: "Mauris at orci non vulputate diam tincidunt nec.",
      para:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eumalesuada vitae ultrices in in neque, porta dignissim Adipiscing purus, cursus vulputate id id dictum at.",
    },
    {
      id: "2",
      slug: "aenean-vitae-aliquam",
      img: "/blog/5.png",
      author: "Surf Auxion",
      date: "Aug 09 2020",
      title: "Aenean vitae in aliquam ultrices lectus. Etiam.",
      para:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eumalesuada vitae ultrices in in neque, porta dignissim Adipiscing purus, cursus vulputate id id dictum at.",
    },
    {
      id: "3",
      slug: "sit-nam-congue-feugiat",
      img: "/blog/6.png",
      author: "Surf Auxion",
      date: "Aug 09 2020",
      title: "Sit nam congue feugiat nisl, mauris amet nisi.",
      para:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eumalesuada vitae ultrices in in neque, porta dignissim Adipiscing purus, cursus vulputate id id dictum at.",
    },
  ];
  
  // Function to fetch blog data based on the slug
  export async function fetchBlogData(slug: string) {
    // Simulate a delay to fetch data (e.g., from a database or API)
    return new Promise((resolve, reject) => {
      const blog = blogs.find((blog) => blog.slug === slug);
      if (blog) {
        resolve(blog);
      } else {
        reject("Blog not found");
      }
    });
  }
  