export function ChatPreview() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="bg-purple-900/30 p-6 rounded-lg max-w-2xl mx-auto backdrop-blur">
        <div className="mb-4">
          <p className="bg-purple-800/50 p-3 rounded-lg inline-block">
            Hey there! I've been thinking about you all day... 😊
          </p>
        </div>
        <div className="flex justify-end">
          <p className="bg-pink-600/30 p-3 rounded-lg inline-block">I can't stop thinking about you either...</p>
        </div>
      </div>
    </section>
  )
}

