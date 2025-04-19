import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const SoilTesting = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you'd send the form data to your backend or Supabase
    console.log("Soil test request submitted:", formData);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-white to-green-50 py-12 px-4 md:px-16">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-green-700 mb-4"
        >
          Get Your Soil Tested Professionally
        </motion.h1>
        <p className="text-gray-600 text-lg mb-10">
          Receive detailed insights and expert guidance for better crop selection.
        </p>
        <img
          src="https://images.unsplash.com/photo-1557234195-bd9f290f0e4d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Soil testing"
          className="rounded-2xl shadow-xl mx-auto w-full max-w-xl mb-10"
        />
        <Card className="bg-white/90 backdrop-blur-lg shadow-lg p-6 rounded-2xl">
          <CardContent>
            {submitted ? (
              <div className="flex flex-col items-center gap-4">
                <CheckCircle2 className="text-green-500 w-12 h-12" />
                <h2 className="text-xl font-semibold text-green-700">
                  Request Submitted!
                </h2>
                <p className="text-gray-600 text-center">
                  Our team will contact you shortly to arrange your soil test.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <Input
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                  <Input
                    name="location"
                    placeholder="Village/Location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    className="md:col-span-2"
                  />
                </div>
                <Textarea
                  name="message"
                  placeholder="Additional details (optional)"
                  value={formData.message}
                  onChange={handleChange}
                  className="resize-none"
                />
                <div className="text-center">
                  <Button type="submit" className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-xl">
                    Request Soil Test
                  </Button>
                </div>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SoilTesting;
