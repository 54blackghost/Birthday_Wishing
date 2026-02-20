import { useState } from "react";
import { useWishes } from "@/context/WishesContext";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ConfettiEffect from "@/components/shared/ConfettiEffect";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessageSquare, Image, Video, Mic, Send, Upload, CheckCircle } from "lucide-react";

const WishSubmitPage = () => {
  const { addWish } = useWishes();
  const [senderName, setSenderName] = useState("");
  const [textMessage, setTextMessage] = useState("");
  const [imageFile, setImageFile] = useState<string | null>(null);
  const [videoFile, setVideoFile] = useState<string | null>(null);
  const [mediaMessage, setMediaMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [activeTab, setActiveTab] = useState("text");

  const handleSubmit = () => {
    if (!senderName) return;

    if (activeTab === "text" && textMessage) {
      addWish({ senderName, type: "text", content: textMessage });
    } else if (activeTab === "image") {
      addWish({ senderName, type: "image", content: imageFile || "/placeholder.svg", message: mediaMessage });
    } else if (activeTab === "video") {
      addWish({ senderName, type: "video", content: videoFile || "/placeholder.svg", message: mediaMessage });
    } else if (activeTab === "voice") {
      addWish({ senderName, type: "voice", content: "voice-mock", message: mediaMessage || "Voice note recorded" });
    }

    setSubmitted(true);
    setShowConfetti(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <ConfettiEffect active={showConfetti} />
        <main className="flex-1 flex items-center justify-center p-4">
          <Card className="glass rounded-2xl border-0 w-full max-w-md animate-scale-in text-center">
            <CardContent className="p-10">
              <CheckCircle className="h-16 w-16 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-2">Thank You! 🎉</h2>
              <p className="text-muted-foreground mb-6">Your birthday wish has been sent successfully!</p>
              <Button onClick={() => { setSubmitted(false); setShowConfetti(false); setSenderName(""); setTextMessage(""); setMediaMessage(""); setImageFile(null); setVideoFile(null); }} className="rounded-full gradient-primary">
                Send Another Wish
              </Button>
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
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4 max-w-2xl">
          {/* Celebrant header */}
          <div className="text-center mb-8 animate-fade-in">
            <div className="inline-flex h-20 w-20 items-center justify-center rounded-full gradient-primary text-3xl font-bold text-primary-foreground mb-4">
              AJ
            </div>
            <h1 className="text-3xl font-bold mb-1">Alex's Birthday! 🎂</h1>
            <p className="text-muted-foreground">June 15, 2026 — Send your wishes!</p>
          </div>

          <Card className="glass rounded-2xl border-0 animate-slide-up">
            <CardContent className="p-6 sm:p-8">
              <div className="space-y-4 mb-6">
                <div className="space-y-2">
                  <Label htmlFor="sender-name">Your Name</Label>
                  <Input id="sender-name" placeholder="Your name" value={senderName} onChange={(e) => setSenderName(e.target.value)} className="rounded-xl" required />
                </div>
              </div>

              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="w-full rounded-xl grid grid-cols-4">
                  <TabsTrigger value="text" className="rounded-lg text-xs sm:text-sm"><MessageSquare className="h-4 w-4 mr-1" /><span className="hidden sm:inline">Text</span></TabsTrigger>
                  <TabsTrigger value="image" className="rounded-lg text-xs sm:text-sm"><Image className="h-4 w-4 mr-1" /><span className="hidden sm:inline">Photo</span></TabsTrigger>
                  <TabsTrigger value="video" className="rounded-lg text-xs sm:text-sm"><Video className="h-4 w-4 mr-1" /><span className="hidden sm:inline">Video</span></TabsTrigger>
                  <TabsTrigger value="voice" className="rounded-lg text-xs sm:text-sm"><Mic className="h-4 w-4 mr-1" /><span className="hidden sm:inline">Voice</span></TabsTrigger>
                </TabsList>

                <div className="mt-6 space-y-4">
                  <TabsContent value="text">
                    <Textarea placeholder="Write your birthday wish here... 🎉" value={textMessage} onChange={(e) => setTextMessage(e.target.value)} className="rounded-xl min-h-[120px]" />
                  </TabsContent>

                  <TabsContent value="image" className="space-y-4">
                    <div className="rounded-xl border-2 border-dashed border-border p-8 text-center cursor-pointer hover:border-primary/50 transition-colors" onClick={() => setImageFile("/placeholder.svg")}>
                      <Upload className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                      <p className="text-sm text-muted-foreground">{imageFile ? "Image selected ✓" : "Click to upload an image"}</p>
                    </div>
                    <Textarea placeholder="Add a message with your photo..." value={mediaMessage} onChange={(e) => setMediaMessage(e.target.value)} className="rounded-xl" rows={2} />
                  </TabsContent>

                  <TabsContent value="video" className="space-y-4">
                    <div className="rounded-xl border-2 border-dashed border-border p-8 text-center cursor-pointer hover:border-primary/50 transition-colors" onClick={() => setVideoFile("/placeholder.svg")}>
                      <Upload className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                      <p className="text-sm text-muted-foreground">{videoFile ? "Video selected ✓" : "Click to upload a video"}</p>
                    </div>
                    <Textarea placeholder="Add a message with your video..." value={mediaMessage} onChange={(e) => setMediaMessage(e.target.value)} className="rounded-xl" rows={2} />
                  </TabsContent>

                  <TabsContent value="voice" className="space-y-4">
                    <div className="rounded-xl bg-muted/50 p-8 text-center">
                      <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-3 cursor-pointer hover:bg-primary/20 transition-colors">
                        <Mic className="h-8 w-8 text-primary" />
                      </div>
                      <p className="text-sm text-muted-foreground">Tap to record a voice note</p>
                      <p className="text-xs text-muted-foreground mt-1">(Mock UI — recording simulated)</p>
                    </div>
                    <Textarea placeholder="Add a note about your voice message..." value={mediaMessage} onChange={(e) => setMediaMessage(e.target.value)} className="rounded-xl" rows={2} />
                  </TabsContent>
                </div>
              </Tabs>

              <Button onClick={handleSubmit} className="w-full mt-6 gradient-primary rounded-full text-lg h-12" disabled={!senderName}>
                <Send className="mr-2 h-5 w-5" /> Send Wish
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WishSubmitPage;
