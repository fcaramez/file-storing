import { UserProfile } from '@clerk/nextjs';

const UserProfilePage = () => {
  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center bg-black">
      <UserProfile></UserProfile>
    </main>
  );
};

export default UserProfilePage;
