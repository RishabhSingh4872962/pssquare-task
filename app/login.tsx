import { usePathname } from "expo-router";
import React from "react";
import AuthScreen from "./_auth";

export default function Login() {
  const pathname = usePathname();

  const isLogin = pathname === "/login";

  return <AuthScreen isLogin={isLogin} />;
}
