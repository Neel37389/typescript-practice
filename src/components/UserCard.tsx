type UserCardProps = {
  name: string;
  age: number;
  isStudent: boolean;
};

export default function UserCard({ name, age, isStudent }: UserCardProps) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>{isStudent ? "Yes" : "No"}</p>
    </div>
  );
}
