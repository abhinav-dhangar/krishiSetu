"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../lib/supabaseClient";

export default function AuthCallbackPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkSession = async () => {
      try {
        const { data, error } = await supabase.auth.getSession();

        if (data?.session) {
          // 👇 Redirect to your dashboard if session is valid
          router.replace("/dashboard");
        } else {
          // 👇 Log error and redirect to login
          console.error("Email not confirmed yet or session invalid.", error);
          router.replace("/login");
        }
      } catch (err) {
        console.error("Something went wrong during auth callback:", err);
        router.replace("/login");
      } finally {
        setLoading(false);
      }
    };

    checkSession();
  }, [router]);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <p className="text-lg font-medium text-gray-700">
        {loading ? "Verifying and logging you in..." : "Redirecting..."}
      </p>
    </div>
  );
}
