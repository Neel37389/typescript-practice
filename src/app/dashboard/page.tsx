interface User {
  id: number;
  name: string;
  email: string;
  role: "admin" | "user" | "guest";
}

interface Post {
  id: number;
  title: string;
  userId: number;
  published?: boolean;
}

export default async function DashboardPage() {
  const userResponse = await fetch("http://localhost:3000/api/users");
  const userData: User[] = await userResponse.json();

  const postResponse = await fetch("http://localhost:3000/api/posts");
  const postData: Post[] = await postResponse.json();

  const roleColor = {
    admin: "bg-purple-500",
    user: "bg-blue-500",
    guest: "bg-gray-500",
  };

  return (
    <div className="flex flex-col min-h-screen items-center justify-center p-8 gap-4">
      {userData.map((user) => {
        const postCount = postData.filter(
          (post) => post.userId === user.id,
        ).length;

        return (
          <div key={user.id}>
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Posts: {postCount}</p>
            <span
              className={`${roleColor[user.role]} text-white px-2 py-1 rounded-full text-xs`}
            >
              {user.role}
            </span>
          </div>
        );
      })}
    </div>
  );
}
