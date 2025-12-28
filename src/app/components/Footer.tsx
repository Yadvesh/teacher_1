import { Phone, MapPin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-6">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg mb-4">Contact Us</h3>
            <div className="space-y-3 text-sm text-gray-300">
              <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
                <span>+91 98765 43210</span>
              </a>
              <a href="mailto:info@tuitionclasses.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
                <span>info@tuitionclasses.com</span>
              </a>
            </div>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-lg mb-4">Location</h3>
            <div className="flex items-start gap-2 text-sm text-gray-300">
              <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
              <p>
                [Area], [City]<br />
                India - [PIN Code]
              </p>
            </div>
          </div>

          {/* Timings */}
          <div>
            <h3 className="text-lg mb-4">Class Timings</h3>
            <div className="text-sm text-gray-300 space-y-1">
              <p>Morning: 6:00 AM - 8:00 AM</p>
              <p>Evening: 5:00 PM - 8:00 PM</p>
              <p className="text-xs mt-2">Monday to Saturday</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 space-y-3">
          <div className="text-center">
            <p className="text-sm text-gray-400">
              &copy; 2024 [Teacher Name] Tuition Classes. All rights reserved.
            </p>
          </div>
          
          <div className="text-center">
            <p className="text-xs text-gray-500">
              Disclaimer: This website is for educational services information. We are committed to providing quality education for Classes 6-10. Results may vary based on individual student effort and dedication.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
