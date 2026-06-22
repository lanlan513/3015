export default function Footer() {
  return (
    <footer className="bg-ink/90">
      <div className="ink-divider" />
      <div className="container mx-auto py-8 text-center">
        <div className="font-brush text-cinnabar text-xl">江湖百科</div>
        <div className="flex items-center justify-center gap-2 my-2">
          <span className="w-1.5 h-1.5 rounded-full bg-cinnabar" />
          <span className="w-1.5 h-1.5 rounded-full bg-gold" />
          <span className="w-1.5 h-1.5 rounded-full bg-indigo" />
        </div>
        <div className="font-song text-mist/60 text-sm">金庸武侠世界</div>
        <div className="font-song text-mist/40 text-xs mt-4">
          © 江湖留步，侠义长存
        </div>
      </div>
    </footer>
  );
}
