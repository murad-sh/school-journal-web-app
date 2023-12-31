import MainNav from "./MainNav";
import { UserNav } from "./UserNav";
import Sidebar from "./Sidebar";
import { studentNav, teacherNav } from "../../config/navigation";
import { Footer } from "./Footer";
import { ModeToggle } from "../theme/mode-toggle";
import { Toaster } from "sonner";
import { useTheme } from "../theme/theme-provider";
import { SWRConfig } from "swr";
import User from "@/models/user";
import axiosInstance from "@/lib/axios-instance";

const Layout = ({
  user,
  children,
}: {
  user: User;
  children: React.ReactNode;
}) => {
  const { theme } = useTheme();

  return (
    <div className="flex min-h-screen flex-col space-y-6">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <MainNav />
          <div className="flex items-center justify-center gap-2">
            <ModeToggle isRounded />
            <UserNav fullName={user.fullName} role={user.role} />
          </div>
        </div>
      </header>
      <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr]">
        <aside className="hidden w-[200px] flex-col md:flex">
          <Sidebar items={user.role === "student" ? studentNav : teacherNav} />
        </aside>
        <SWRConfig
          value={{
            fetcher: (url: string) =>
              axiosInstance.get(url).then((res) => res.data),
          }}
        >
          <main className="flex w-full flex-1 flex-col overflow-hidden">
            {children}
          </main>
        </SWRConfig>
      </div>
      <Toaster richColors theme={theme} offset={30} />
      <Footer />
    </div>
  );
};

export default Layout;
