export default function FloatingChatButton() {
  return (
    <button
      className="fixed bottom-6 right-6 z-[60] w-14 h-14 bg-primary text-on-primary rounded-full shadow-[0_0_20px_rgba(208,188,255,0.6)] flex items-center justify-center hover:scale-110 active:scale-95 transition-transform"
      aria-label="Chat"
    >
      <span className="material-symbols-outlined">chat_bubble</span>
    </button>
  );
}
