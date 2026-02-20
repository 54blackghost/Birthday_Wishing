import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Copy, Share2, Check } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import ConfettiEffect from "@/components/shared/ConfettiEffect";

const SignupPage = () => {
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [birthday, setBirthday] = useState<Date>();
  const [success, setSuccess] = useState(false);
  const [shareLink, setShareLink] = useState("");
  const [copied, setCopied] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !password || !birthday) return;
    const user = signup(name, email, password, format(birthday, "yyyy-MM-dd"));
    const link = `${window.location.origin}/wish/${user.shareLink}`;
    setShareLink(link);
    setSuccess(true);
    setShowConfetti(true);
  };

  const copyLink = () => {
    navigator.clipboard.writeText(shareLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (success) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <ConfettiEffect active={showConfetti} />
        <main className="flex-1 flex items-center justify-center p-4">
          <Card className="glass rounded-2xl border-0 w-full max-w-md animate-scale-in">
            <CardContent className="p-8 text-center">
              <div className="mb-6 text-6xl">🎉</div>
              <h2 className="text-2xl font-bold mb-2">You're All Set!</h2>
              <p className="text-muted-foreground mb-6">Share this link with friends so they can send you birthday wishes</p>
              <div className="flex items-center gap-2 rounded-xl bg-muted p-3 mb-4">
                <code className="flex-1 text-sm truncate text-left">{shareLink}</code>
                <Button size="sm" variant="ghost" onClick={copyLink}>
                  {copied ? <Check className="h-4 w-4 text-primary" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
              <div className="flex gap-3">
                <Button className="flex-1 gradient-primary rounded-full" onClick={copyLink}>
                  <Copy className="mr-2 h-4 w-4" /> Copy Link
                </Button>
                <Button variant="outline" className="flex-1 rounded-full" onClick={() => navigate("/dashboard")}>
                  <Share2 className="mr-2 h-4 w-4" /> Go to Dashboard
                </Button>
              </div>
            </CardContent>
          </Card>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center p-4 gradient-hero">
        <Card className="glass rounded-2xl border-0 w-full max-w-md animate-fade-in">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Create Your Account</CardTitle>
            <CardDescription>Start collecting birthday wishes today</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="Alex Johnson" value={name} onChange={(e) => setName(e.target.value)} className="rounded-xl" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="alex@example.com" value={email} onChange={(e) => setEmail(e.target.value)} className="rounded-xl" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} className="rounded-xl" required />
              </div>
              <div className="space-y-2">
                <Label>Birthday</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className={cn("w-full justify-start text-left font-normal rounded-xl", !birthday && "text-muted-foreground")}>
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {birthday ? format(birthday, "PPP") : "Pick your birthday"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar mode="single" selected={birthday} onSelect={setBirthday} className="p-3 pointer-events-auto" />
                  </PopoverContent>
                </Popover>
              </div>
              <Button type="submit" className="w-full gradient-primary rounded-full text-lg h-12">Sign Up</Button>
              <p className="text-center text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link to="/login" className="text-primary font-medium hover:underline">Log in</Link>
              </p>
            </form>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default SignupPage;
