type LayoutChatPageProps = {
  children: React.ReactNode;
};

export default function LayoutChatPage({ children }: LayoutChatPageProps) {
  return <div className="bg-chatBg min-h-screen p-8">{children}</div>;
}
