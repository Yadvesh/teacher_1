import { useState } from "react";
import { Send } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

export function AdmissionForm() {
  const [formData, setFormData] = useState({
    parentName: "",
    phone: "",
    studentClass: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you! We will contact you soon.");
    setFormData({ parentName: "", phone: "", studentClass: "", message: "" });
  };

  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl text-foreground mb-2">Admission Enquiry</h2>
            <p className="text-muted-foreground">Fill the form below and we'll get back to you</p>
          </div>

          <Card className="p-6 md:p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="parentName">Parent Name *</Label>
                <Input
                  id="parentName"
                  type="text"
                  placeholder="Enter your name"
                  value={formData.parentName}
                  onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                  required
                  className="bg-input-background"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="bg-input-background"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="studentClass">Student Class *</Label>
                <select
                  id="studentClass"
                  value={formData.studentClass}
                  onChange={(e) => setFormData({ ...formData, studentClass: e.target.value })}
                  required
                  className="w-full px-3 py-2 bg-input-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select Class</option>
                  <option value="6">Class 6</option>
                  <option value="7">Class 7</option>
                  <option value="8">Class 8</option>
                  <option value="9">Class 9</option>
                  <option value="10">Class 10</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message (Optional)</Label>
                <Textarea
                  id="message"
                  placeholder="Any specific questions or requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="bg-input-background"
                />
              </div>

              <div className="pt-2">
                <p className="text-xs text-muted-foreground mb-4">
                  By submitting, you agree to be contacted regarding classes.
                </p>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                  <Send className="w-4 h-4 mr-2" />
                  Submit Enquiry
                </Button>
              </div>
            </form>
          </Card>

          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              Or call us directly at{" "}
              <a href="tel:+919876543210" className="text-primary hover:underline font-medium">
                +91 98765 43210
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
