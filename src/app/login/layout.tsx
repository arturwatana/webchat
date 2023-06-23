import Link from "next/link";

type LoginLayoutProps = {
  children: React.ReactNode;
};

export default function LoginLayout({ children }: LoginLayoutProps) {
  return (
    <div>
      <h1>ola</h1>
      <Link href="/login/register">Register</Link>
      {children}
    </div>
  );
}
