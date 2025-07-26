// app/page.tsx
import { Button } from "@/components/ui/button";
import * as actions from "@/app/actions"; // ✅ Correct import

export default function Home() {
  return (
    <div>
      <h1>Home</h1>

      <form action={actions.loginWithGithub}>
        <Button type="submit">SignIn</Button>
      </form>

      <form action={actions.logoutUser}>
        <Button type="submit">SignOut</Button>
      </form>
    </div>
  );
}
