import { useAuth } from "@/context/AuthContext";
import { useWishes } from "@/context/WishesContext";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CountdownTimer from "@/components/shared/CountdownTimer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link, Navigate } from "react-router-dom";
import { Copy, Eye, Video, MessageSquare, Image, Mic, Film, Check } from "lucide-react";
import { useState } from "react";

const DashboardPage = () => {
  const { user, isAuthenticated } = useAuth();
  const { wishes, stats } = useWishes();
  const [copied, setCopied] = useState(false);

  if (!isAuthenticated || !user) return <Navigate to="/login" />;

  const shareUrl = `${window.location.origin}/wish/${user.shareLink}`;

  const copyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const statCards = [
    { label: "Total Wishes", value: stats.total, icon: MessageSquare, color: "text-primary" },
    { label: "Text", value: stats.text, icon: MessageSquare, color: "text-primary" },
    { label: "Images", value: stats.image, icon: Image, color: "text-secondary" },
    { label: "Videos", value: stats.video, icon: Video, color: "text-accent" },
    { label: "Voice Notes", value: stats.voice, icon: Mic, color: "text-primary" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4 space-y-8">
          {/* Welcome & Countdown */}
          <div className="text-center animate-fade-in">
            <h1 className="text-3xl font-bold mb-2">Welcome, {user.name}! 🎂</h1>
            <p className="text-muted-foreground mb-6">Your birthday countdown</p>
            <div className="flex justify-center">
              <CountdownTimer targetDate={user.birthday} />
            </div>
          </div>

          {/* Share link */}
          <Card className="glass rounded-2xl border-0 animate-slide-up">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-3">Your Share Link</h3>
              <div className="flex items-center gap-2">
                <code className="flex-1 rounded-xl bg-muted p-3 text-sm truncate">{shareUrl}</code>
                <Button onClick={copyLink} className="rounded-full gradient-primary">
                  {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
            {statCards.map((s) => (
              <Card key={s.label} className="glass rounded-2xl border-0 hover:scale-105 transition-transform">
                <CardContent className="p-4 text-center">
                  <s.icon className={`h-6 w-6 mx-auto mb-2 ${s.color}`} />
                  <div className="text-2xl font-bold">{s.value}</div>
                  <div className="text-xs text-muted-foreground">{s.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild variant="outline" className="rounded-full">
              <Link to="/album"><Eye className="mr-2 h-4 w-4" /> View Album</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full">
              <Link to="/video"><Film className="mr-2 h-4 w-4" /> Video Preview</Link>
            </Button>
            <Button asChild className="rounded-full gradient-primary">
              <Link to="/video"><Video className="mr-2 h-4 w-4" /> Unlock HD Video</Link>
            </Button>
          </div>

          {/* Recent Wishes */}
          <div>
            <h2 className="text-xl font-bold mb-4">Recent Wishes</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {wishes.slice(0, 6).map((wish) => (
                <Card key={wish.id} className="glass rounded-2xl border-0 hover:scale-[1.02] transition-transform">
                  <CardContent className="p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full gradient-primary text-xs font-bold text-primary-foreground">
                        {wish.senderName.split(" ").map(n => n[0]).join("")}
                      </div>
                      <div>
                        <div className="font-semibold text-sm">{wish.senderName}</div>
                        <div className="text-xs text-muted-foreground capitalize">{wish.type}</div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-3">{wish.message || wish.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DashboardPage;
