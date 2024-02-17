"use client";

import { SignInButton, UserButton, useUser } from "@clerk/nextjs";

export default function AppHeader() {
    const { isSignedIn } = useUser();

    if (isSignedIn) {
        return (
            <div>
                <UserButton />
            </div>
        );
    }

    return (
        <div>
            <SignInButton mode="modal"></SignInButton>
        </div>
    )
}