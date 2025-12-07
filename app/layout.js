export const metadata = {
  title: 'HTML Encoder API | Advanced HTML Encryption Tool',
  description: 'Protect your HTML code with advanced encryption API. Free public API for encoding HTML.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
        {children}
      </body>
    </html>
  )
}
