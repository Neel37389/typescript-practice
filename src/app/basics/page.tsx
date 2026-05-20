import UserCard from "@/components/UserCard";

export default function Basics() {
  const name: string = "Neel Patel";
  const age: number = 25;
  const isStudent: boolean = false;

  return (
    <div className="flex flex-col min-h-screen items-center justify-center p-8">
      <UserCard name={name} age={age} isStudent={isStudent} />
    </div>
  );
}
