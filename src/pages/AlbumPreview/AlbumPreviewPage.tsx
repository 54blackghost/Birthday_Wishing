import { useState } from "react";
import { useWishes } from "@/context/WishesContext";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Grid3X3, Play, Music, MessageSquare, Image, Video, Mic, ChevronLeft, ChevronRight, Pause } from "lucide-react";
import { useEffect } from "react";

const AlbumPreviewPage = () => {
  const { wishes } = useWishes();
  const [filter, setFilter] = useState<"all" | "text" | "image" | "video" | "voice">("all");
  const [slideshowActive, setSlideshowActive] = useState(false);
  const [slideshowIdx, setSlideshowIdx] = useState(0);
  const [musicOn, setMusicOn] = useState(false);

  const filtered = filter === "all" ? wishes : wishes.filter((w) => w.type === filter);

  useEffect(() => {
    if (!slideshowActive) return;
    const interval = setInterval(() => {
      setSlideshowIdx((prev) => (prev + 1) % filtered.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slideshowActive, filtered.length]);

  const typeIcon = (type: string) => {
    switch (type) {
      case "text": return <MessageSquare className="h-4 w-4" />;
      case "image": return <Image className="h-4 w-4" />;
      case "video": return <Video className="h-4 w-4" />;
      case "voice": return <Mic className="h-4 w-4" />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 animate-fade-in">
            <h1 className="text-3xl font-bold mb-2">Birthday Album 📸</h1>
            <p className="text-muted-foreground">All the wishes in one beautiful place</p>
          </div>

          {/* Controls */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            <Tabs value={filter} onValueChange={(v) => setFilter(v as typeof filter)}>
              <TabsList className="rounded-xl">
                <TabsTrigger value="all" className="rounded-lg">All</TabsTrigger>
                <TabsTrigger value="text" className="rounded-lg">Text</TabsTrigger>
                <TabsTrigger value="image" className="rounded-lg">Photos</TabsTrigger>
                <TabsTrigger value="video" className="rounded-lg">Videos</TabsTrigger>
                <TabsTrigger value="voice" className="rounded-lg">Voice</TabsTrigger>
              </TabsList>
            </Tabs>
            <Button variant="outline" className="rounded-full" onClick={() => setSlideshowActive(!slideshowActive)}>
              {slideshowActive ? <Pause className="mr-2 h-4 w-4" /> : <Play className="mr-2 h-4 w-4" />}
              {slideshowActive ? "Stop" : "Slideshow"}
            </Button>
            <Button variant="outline" className={`rounded-full ${musicOn ? "ring-2 ring-primary" : ""}`} onClick={() => setMusicOn(!musicOn)}>
              <Music className="mr-2 h-4 w-4" />
              {musicOn ? "Music On" : "Music Off"}
            </Button>
          </div>

          {/* Slideshow mode */}
          {slideshowActive && filtered.length > 0 ? (
            <div className="mx-auto max-w-xl animate-fade-in">
              <Card className="glass rounded-2xl border-0">
                <CardContent className="p-8 text-center">
                  <div className="flex items-center gap-3 justify-center mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full gradient-primary text-sm font-bold text-primary-foreground">
                      {filtered[slideshowIdx]?.senderName.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div className="text-left">
                      <div className="font-semibold">{filtered[slideshowIdx]?.senderName}</div>
                      <div className="text-xs text-muted-foreground capitalize flex items-center gap-1">
                        {typeIcon(filtered[slideshowIdx]?.type)} {filtered[slideshowIdx]?.type}
                      </div>
                    </div>
                  </div>
                  {filtered[slideshowIdx]?.type === "image" && (
                    <div className="rounded-xl bg-muted h-48 mb-4 flex items-center justify-center">
                      <Image className="h-12 w-12 text-muted-foreground/30" />
                    </div>
                  )}
                  <p className="text-lg">{filtered[slideshowIdx]?.message || filtered[slideshowIdx]?.content}</p>
                  <div className="flex items-center justify-center gap-4 mt-6">
                    <Button variant="ghost" size="icon" onClick={() => setSlideshowIdx((p) => (p - 1 + filtered.length) % filtered.length)}>
                      <ChevronLeft className="h-5 w-5" />
                    </Button>
                    <span className="text-sm text-muted-foreground">{slideshowIdx + 1} / {filtered.length}</span>
                    <Button variant="ghost" size="icon" onClick={() => setSlideshowIdx((p) => (p + 1) % filtered.length)}>
                      <ChevronRight className="h-5 w-5" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ) : (
            /* Grid mode */
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filtered.map((wish, i) => (
                <Card key={wish.id} className="glass rounded-2xl border-0 hover:scale-[1.03] transition-transform animate-slide-up" style={{ animationDelay: `${i * 0.05}s` }}>
                  <CardContent className="p-5">
                    {(wish.type === "image" || wish.type === "video") && (
                      <div className="rounded-xl bg-muted h-32 mb-3 flex items-center justify-center">
                        {wish.type === "image" ? <Image className="h-8 w-8 text-muted-foreground/30" /> : <Video className="h-8 w-8 text-muted-foreground/30" />}
                      </div>
                    )}
                    {wish.type === "voice" && (
                      <div className="rounded-xl bg-primary/5 p-4 mb-3 flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <Mic className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1 h-2 bg-muted rounded-full">
                          <div className="h-full w-2/3 bg-primary/40 rounded-full" />
                        </div>
                      </div>
                    )}
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex h-7 w-7 items-center justify-center rounded-full gradient-primary text-[10px] font-bold text-primary-foreground">
                        {wish.senderName.split(" ").map(n => n[0]).join("")}
                      </div>
                      <span className="font-semibold text-sm">{wish.senderName}</span>
                      <span className="ml-auto">{typeIcon(wish.type)}</span>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-3">{wish.message || wish.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AlbumPreviewPage;
