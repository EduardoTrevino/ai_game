// src/ui/LoginOverlay.tsx

import React, { useState, FormEvent } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { EventBus } from "../game/EventBus";

export function LoginOverlay() {
  const [username, setUsername] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    EventBus.emit("login-submitted", username);
  };

  return (
    <div
      className="
        fixed 
        inset-0 
        z-50 
        flex 
        items-center 
        justify-center
      "
      style={{
        // 1) Repeating money-bag emoji in the background:
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='0' y='30' font-size='30'%3E%F0%9F%92%B0%3C/text%3E%3C/svg%3E")`,
        backgroundRepeat: "repeat",
      }}
    >
      {/* 2) Semi-transparent overlay to soften the emojis */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-sm" />

      {/* 3) Foreground form container */}
      <form
        onSubmit={handleSubmit}
        className="
          relative
          z-10 
          w-full 
          max-w-sm 
          rounded-xl 
          bg-white 
          dark:bg-gray-900 
          shadow-xl 
          p-6 
          flex 
          flex-col 
          items-center 
          space-y-4
        "
      >
        {/* Big Cartoonish Game Title */}
        <h1
          className="
            text-5xl 
            font-extrabold 
            text-center
            leading-tight
            bg-gradient-to-r
            from-pink-400
            to-orange-400
            text-transparent
            bg-clip-text
            drop-shadow-md
          "
        >
          Zero to Zillion!
        </h1>

        {/* Subtitle or label for the input */}
        <label
          className="
            text-sm 
            font-medium 
            text-gray-700 
            dark:text-gray-300
          "
        >
          Enter Your Username
        </label>

        <Input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Type username..."
          className="w-full"
        />

        {/* Play Button */}
        <Button
          type="submit"
          className="
            w-full
            bg-gradient-to-r
            from-violet-600
            to-indigo-600
            text-white
            hover:from-violet-700
            hover:to-indigo-700
            font-bold
            text-lg
          "
        >
          Play
        </Button>
      </form>
    </div>
  );
}
