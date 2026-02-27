import LoginPage from "@/components/login";
const authLogin = () => {
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
      <LoginPage />
    </div>
  );
};

export default authLogin;
