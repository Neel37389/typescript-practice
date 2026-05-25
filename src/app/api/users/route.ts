export async function GET() {
  const users = [
    { id: 1, name: "Neel", email: "neel@gmail.com", role: "admin" },
    { id: 2, name: "John", email: "john@gmail.com", role: "user" },
    { id: 3, name: "Sarah", email: "sarah@gmail.com", role: "guest" },
  ];

  return Response.json(users);
}
