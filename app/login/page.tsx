import { Suspense } from "react";
import LoginForm from "@/components/LoginForm";

export default function LoginPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-[60vh] flex items-center justify-center">
          <p className="text-sm text-gray-400">Loading...</p>
        </div>
      }
    >
      <LoginForm />
    </Suspense>
  );
}
