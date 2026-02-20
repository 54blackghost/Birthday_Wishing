export type Wish = {
  id: string;
  senderName: string;
  type: "text" | "image" | "video" | "voice";
  content: string; // text message, or placeholder url
  message?: string;
  createdAt: string;
};

export const mockWishes: Wish[] = [
  { id: "w1", senderName: "Sarah M.", type: "text", content: "Happy Birthday! 🎉 Wishing you the most amazing day filled with love and laughter!", createdAt: "2026-06-10T10:00:00Z" },
  { id: "w2", senderName: "James K.", type: "text", content: "Another year older, another year wiser! Have a fantastic birthday! 🎂", createdAt: "2026-06-11T14:30:00Z" },
  { id: "w3", senderName: "Emily R.", type: "image", content: "/placeholder.svg", message: "Made this for you! Love you!", createdAt: "2026-06-12T09:15:00Z" },
  { id: "w4", senderName: "Michael B.", type: "video", content: "/placeholder.svg", message: "Watch this birthday message!", createdAt: "2026-06-12T16:45:00Z" },
  { id: "w5", senderName: "Lisa T.", type: "voice", content: "voice-note-mock", message: "Recorded a special message for you ❤️", createdAt: "2026-06-13T08:00:00Z" },
  { id: "w6", senderName: "David C.", type: "text", content: "To many more years of friendship! Happy birthday, my dear friend! 🥳🎈", createdAt: "2026-06-13T11:20:00Z" },
  { id: "w7", senderName: "Anna W.", type: "image", content: "/placeholder.svg", message: "Throwback to our best memories together!", createdAt: "2026-06-14T13:00:00Z" },
  { id: "w8", senderName: "Chris P.", type: "text", content: "May your birthday be as wonderful as you are! Cheers! 🍰✨", createdAt: "2026-06-14T17:30:00Z" },
];
