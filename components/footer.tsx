import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-white text-black py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Scrabble</h3>
            <p className="max-w-md">
              Scrabble is a productivity startup focused on tool discovery, helping teams and individuals find the
              perfect software for every task.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:underline">
                    Home
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <Link href="#" className="hover:text-gray-600">
                  <Facebook size={24} />
                </Link>
                <Link href="#" className="hover:text-gray-600">
                  <Twitter size={24} />
                </Link>
                <Link href="#" className="hover:text-gray-600">
                  <Instagram size={24} />
                </Link>
                <Link href="#" className="hover:text-gray-600">
                  <Linkedin size={24} />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-8 text-sm text-center">
          © {new Date().getFullYear()} Scrabble. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

