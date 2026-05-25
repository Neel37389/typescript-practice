export async function GET() {
  const posts = [
    { id: 1, title: "Getting Started with React", userId: 1, published: true },
    { id: 2, title: "Next.js Tips", userId: 1, published: false },
    { id: 3, title: "TypeScript Basics", userId: 2, published: true },
    { id: 4, title: "Tailwind CSS Guide", userId: 2, published: true },
    { id: 5, title: "Supabase Auth", userId: 3, published: false },
  ];
  return Response.json(posts);
}
