"use client";

import React, { useState } from "react";
import { Navigation } from "@/components/navigation";
import { JobApplicationForm } from "@/components/job-application-form";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function CareersPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showApplication, setShowApplication] = useState(false);

  const handleSubmit = () => {
    // Here you can add the logic to send the application data
    // and handle email submission to akizeisrael123@gmail.com
    alert("Are you sure that the information provided is correct?");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6">
            Job Opportunities
          </h1>
          <Button
            size="lg"
            className="text-lg px-8"
            onClick={() => setShowApplication(true)}
          >
            Apply Now
          </Button>
        </div>
      </section>

      {/* Job Application Form */}
      {showApplication && (
        <JobApplicationForm onClose={() => setShowApplication(false)} onSubmit={handleSubmit} />
      )}

      {/* Job Listings */}
      {/* Code to list jobs goes here... */}
    </div>
  );
}

// JobApplicationForm Component (to be customized in components/job-application-form.tsx)
export function JobApplicationForm({ onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    sex: "",
    phoneNumber: "",
    documentUpload: null,
  });

  const handleInputChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  return (
    <div className="modal">
      {/* Form fields */}
      <Input
        type="text"
        placeholder="Full Name"
        value={formData.fullName}
        onChange={(e) => handleInputChange("fullName", e.target.value)}
      />
      <Input
        type="number"
        placeholder="Age"
        value={formData.age}
        onChange={(e) => handleInputChange("age", e.target.value)}
      />
      <Input
        type="text"
        placeholder="Sex"
        value={formData.sex}
        onChange={(e) => handleInputChange("sex", e.target.value)}
      />
      <Input
        type="text"
        placeholder="Phone Number (with country code)"
        value={formData.phoneNumber}
        onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
      />
      <Input
        type="file"
        onChange={(e) => handleInputChange("documentUpload", e.target.files[0])}
      />
      <Button onClick={onSubmit}>Submit</Button>
      <Button onClick={onClose}>Cancel</Button>
    </div>
  );
}