"use client";

import { Button, Switch } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "phosphor-react";
import { useEffect, useState } from "react";

export function AuthTheme() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="fixed top-5 right-10 z-10">
      <Button
        onPress={() => setTheme(theme === "light" ? "dark" : "light")}
        radius="sm"
        variant="flat"
        color="primary"
        className="min-w-max py-1 px-2 bg-transparent hover:bg-transparent"
      >
        {theme === "light" ? <Moon size={24} /> : <Sun size={24} />}
      </Button>
    </div>
  );
}

export function DashboardTheme() {
  const { setTheme, theme } = useTheme();
  const [isActiveTheme, setIsActiveTheme] = useState(false);
  useEffect(() => {
    if (theme === "light") {
      setIsActiveTheme(false);
    } else {
      setIsActiveTheme(true);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Switch
      onValueChange={toggleTheme}
      isSelected={isActiveTheme}
      size="sm"
      color="primary"
      thumbIcon={({ isSelected, className }) =>
        isSelected ? (
          <Sun className={className} />
        ) : (
          <Moon className={className} />
        )
      }
    />
  );
}
