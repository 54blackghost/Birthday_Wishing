import { useState } from "react";
import { useWishes } from "@/context/WishesContext";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ConfettiEffect from "@/components/shared/ConfettiEffect";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { pricingTiers } from "@/services/mockPricing";
import { Check, Play, Pause, Music, Palette, Sparkles, Film, GripVertical } from "lucide-react";
import { useEffect } from "react";

const themes = [
  { id: "classic", name: "Classic", color: "from-primary to-secondary" },
  { id: "sunset", name: "Sunset", color: "from-accent to-secondary" },
  { id: "ocean", name: "Ocean", color: "from-primary to-accent" },
  { id: "midnight", name: "Midnight", color: "from-foreground/80 to-primary" },
];

const musicTracks = ["Birthday Jazz 🎷", "Celebration Pop 🎵", "Gentle Piano 🎹", "Upbeat Dance 💃"];

const VideoPreviewPage = () => {
  const { wishes } = useWishes();
  const [selectedTheme, setSelectedTheme] = useState("classic");
  const [selectedMusic, setSelectedMusic] = useState(musicTracks[0]);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [purchaseSuccess, setPurchaseSuccess] = useState(false);

  useEffect(() => {
    if (!playing) return;
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) { setPlaying(false); return 0; }
        return prev + (100 / 300); // ~30 seconds
      });
    }, 100);
    return () => clearInterval(interval);
  }, [playing]);

  const handlePurchase = (tierName: string) => {
    setPurchaseSuccess(true);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 4000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <ConfettiEffect active={showConfetti} />
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 animate-fade-in">
            <h1 className="text-3xl font-bold mb-2">Video Preview 🎬</h1>
            <p className="text-muted-foreground">Create your birthday montage video</p>
          </div>

          <div className="grid gap-8 lg:grid-cols-5">
            {/* Timeline Editor */}
            <div className="lg:col-span-3 space-y-6">
              {/* Video Player Mock */}
              <Card className="glass rounded-2xl border-0">
                <CardContent className="p-6">
                  <div className={`rounded-xl bg-gradient-to-br ${themes.find(t => t.id === selectedTheme)?.color} h-56 sm:h-72 flex items-center justify-center relative overflow-hidden mb-4`}>
                    <div className="text-center text-primary-foreground">
                      <Film className="h-16 w-16 mx-auto mb-3 opacity-80" />
                      <p className="text-lg font-semibold">Birthday Montage Preview</p>
                      <p className="text-sm opacity-70">{wishes.length} wishes • 30 sec preview</p>
                    </div>
                    {playing && (
                      <div className="absolute inset-0 flex items-center justify-center bg-foreground/10">
                        <div className="animate-pulse text-primary-foreground text-sm">▶ Playing...</div>
                      </div>
                    )}
                  </div>

                  {/* Progress bar */}
                  <div className="mb-4">
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full gradient-primary rounded-full transition-all duration-100" style={{ width: `${progress}%` }} />
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>0:{String(Math.floor(progress * 0.3)).padStart(2, "0")}</span>
                      <span>0:30</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-3">
                    <Button variant="outline" size="icon" className="rounded-full" onClick={() => { setPlaying(!playing); if (!playing) setProgress(0); }}>
                      {playing ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                    </Button>
                    <Button variant="outline" className="rounded-full" onClick={() => { /* mock AI generate */ }}>
                      <Sparkles className="mr-2 h-4 w-4" /> AI Generate
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Timeline blocks */}
              <Card className="glass rounded-2xl border-0">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Timeline</h3>
                  <div className="space-y-2">
                    {wishes.slice(0, 5).map((wish, i) => (
                      <div key={wish.id} className="flex items-center gap-3 rounded-xl bg-muted/50 p-3 cursor-grab hover:bg-muted transition-colors">
                        <GripVertical className="h-4 w-4 text-muted-foreground" />
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg gradient-primary text-[10px] font-bold text-primary-foreground">
                          {wish.senderName.split(" ").map(n => n[0]).join("")}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-medium truncate">{wish.senderName}</div>
                          <div className="text-xs text-muted-foreground capitalize">{wish.type}</div>
                        </div>
                        <div className="text-xs text-muted-foreground">{3 + i}s</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Settings Panel */}
            <div className="lg:col-span-2 space-y-6">
              {/* Music Selector */}
              <Card className="glass rounded-2xl border-0">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3 flex items-center gap-2"><Music className="h-4 w-4" /> Music</h3>
                  <div className="space-y-2">
                    {musicTracks.map((track) => (
                      <button key={track} onClick={() => setSelectedMusic(track)} className={`w-full text-left rounded-xl p-3 text-sm transition-colors ${selectedMusic === track ? "bg-primary/10 text-primary font-medium" : "bg-muted/50 hover:bg-muted"}`}>
                        {track}
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Theme Selector */}
              <Card className="glass rounded-2xl border-0">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3 flex items-center gap-2"><Palette className="h-4 w-4" /> Theme</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {themes.map((theme) => (
                      <button key={theme.id} onClick={() => setSelectedTheme(theme.id)} className={`rounded-xl p-3 text-center transition-all ${selectedTheme === theme.id ? "ring-2 ring-primary scale-105" : "hover:scale-105"}`}>
                        <div className={`h-12 rounded-lg bg-gradient-to-br ${theme.color} mb-2`} />
                        <span className="text-xs font-medium">{theme.name}</span>
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Pricing */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-center mb-8">Unlock Your Full Video</h2>
            {purchaseSuccess ? (
              <div className="text-center animate-scale-in">
                <Card className="glass rounded-2xl border-0 max-w-md mx-auto">
                  <CardContent className="p-10 text-center">
                    <div className="text-6xl mb-4">🎉</div>
                    <h3 className="text-2xl font-bold mb-2">Purchase Successful!</h3>
                    <p className="text-muted-foreground">Your HD video is being generated. We'll notify you when it's ready!</p>
                  </CardContent>
                </Card>
              </div>
            ) : (
              <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
                {pricingTiers.map((tier) => (
                  <Card key={tier.id} className={`glass rounded-2xl border-0 relative hover:scale-105 transition-transform ${tier.popular ? "ring-2 ring-primary" : ""}`}>
                    {tier.popular && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full gradient-primary px-4 py-1 text-xs font-bold text-primary-foreground">
                        Most Popular
                      </span>
                    )}
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold mb-1">{tier.name}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{tier.description}</p>
                      <div className="text-3xl font-bold text-gradient mb-4">{tier.price}</div>
                      <ul className="space-y-2 mb-6">
                        {tier.features.map((f, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm">
                            <Check className="h-4 w-4 text-primary flex-shrink-0" /> {f}
                          </li>
                        ))}
                      </ul>
                      <Button onClick={() => handlePurchase(tier.name)} className={`w-full rounded-full ${tier.popular ? "gradient-primary" : ""}`} variant={tier.popular ? "default" : "outline"}>
                        {tier.price === "$0" ? "Get Started" : "Purchase"}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default VideoPreviewPage;
